'use client';
import React, { useEffect, useState } from 'react';
import { reposData } from '../../data/reposData';

interface Repo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
}

const Projects = () => {
  const [repoDetails, setRepoDetails] = useState<{ [key: string]: Repo }>({});

  useEffect(() => {
    const fetchRepoDetails = async () => {
      const responses = await Promise.all(
        reposData.map(repo =>
          fetch(`https://api.github.com/repos/ricky-ultimate/${repo.name}`)
        )
      );
      const data = await Promise.all(responses.map(res => res.json()));
      const repoDetailsMap: { [key: string]: Repo } = {};
      data.forEach((repo) => {
        repoDetailsMap[repo.name] = {
          name: repo.name,
          description: repo.description || 'No description available',
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
        };
      });
      setRepoDetails(repoDetailsMap);
    };

    fetchRepoDetails();
  }, []);

  return (
    <section className="prose">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      <p className="text-lg mb-6">Here are some of my notable projects:</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {reposData.map((repo) => (
          <div key={repo.name} className="p-4 border rounded-lg shadow">
            <h2 className="font-semibold text-xl">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {repoDetails[repo.name]?.description || 'Loading description...'}
            </p>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              <span>{repo.language}</span> •
              <span>⭐ {repoDetails[repo.name]?.stargazers_count || 'Loading stars...'}</span> •
              <span>🍴 {repoDetails[repo.name]?.forks_count || 'Loading forks...'}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
