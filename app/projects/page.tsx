'use client';
import React, { useEffect, useState } from 'react';
import { reposData } from '../../data/reposData';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai'; // Neutral icons

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
          forks_count: repo.forks_count || 0,  // Default to 0 if undefined
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
          <div key={repo.name} className="p-4 border rounded-lg shadow flex flex-col justify-between">
            {/* Name + Description */}
            <div className="flex flex-col mb-4">
              <h2 className="font-semibold text-xl">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {repoDetails[repo.name]?.description || 'Loading description...'}
              </p>
            </div>
            {/* Language + Stars + Forks */}
            <div className="flex justify-between items-center text-sm text-neutral-600 dark:text-neutral-400">
              <span>{repo.language}</span>
              <div className="flex space-x-4 items-center">
                <div className="flex items-center space-x-1">
                  <AiOutlineStar className="text-neutral-600 dark:text-neutral-400" /> {/* Neutral star icon */}
                  <span>{repoDetails[repo.name]?.stargazers_count || 'Loading stars...'}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <AiOutlineFork className="text-neutral-600 dark:text-neutral-400" /> {/* Neutral fork icon */}
                  <span>{repoDetails[repo.name]?.forks_count > 0 ? repoDetails[repo.name]?.forks_count : 'No forks'}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
