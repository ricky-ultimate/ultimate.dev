'use client';
import React, { useEffect, useState } from 'react';

interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const reposToDisplay = [
  'stemdb',
  'courseflow',
];

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const responses = await Promise.all(
        reposToDisplay.map(repo =>
          fetch(`https://api.github.com/repos/ricky-ultimate/${repo}`)
        )
      );
      const data = await Promise.all(responses.map(res => res.json()));
      setRepos(data);
    };

    fetchRepos();
  }, []);

  return (
    <section className="prose">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {repos.map((repo) => (
          <div key={repo.name} className="p-4 border rounded-lg shadow">
            <h2 className="font-semibold text-xl">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {repo.description || 'No description available'}
            </p>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              <span>{repo.language}</span> • <span>⭐ {repo.stargazers_count}</span> • <span>🍴 {repo.forks_count}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
