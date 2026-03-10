import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitCommit, FiTerminal } from 'react-icons/fi';
import { useSound } from '../hooks/useSound';

const GitHubActivity = ({ username = 'Niranjan-Kumar-Singh' }) => {
    const { playSound } = useSound();
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Fetch basic profile
                const profileRes = await fetch(`https://api.github.com/users/${username}`);
                if (!profileRes.ok) throw new Error('Failed to fetch GitHub profile');
                const profileData = await profileRes.json();

                // Fetch latest repos to calculate stars and get recent activity
                const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
                if (!reposRes.ok) throw new Error('Failed to fetch GitHub repositories');
                const reposData = await reposRes.json();

                setProfile(profileData);
                setRepos(reposData);
                setLoading(false);
            } catch (err) {
                console.error("GitHub API Error:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, [username]);

    if (loading) {
        return (
            <div className="w-full mt-12 mb-8 p-6 bg-surfaceLight/20 border border-white/5 relative overflow-hidden h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.1)_50%,transparent_100%)] w-full h-full animate-[spin_4s_linear_infinite]" />
                <span className="font-mono text-textMuted text-sm animate-pulse">Establishing connection to GitHub API...</span>
            </div>
        );
    }

    if (error) return null; // Gracefully hide if API fails (e.g., rate limit)

    // Calculate total stars from fetched recent repos (approximation for the widget)
    const recentStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full mt-16 mb-8 p-6 bg-surfaceLight/10 border border-white/10 relative overflow-hidden group"
            onMouseEnter={() => playSound('hover')}
        >
            {/* Cyberpunk Decorative Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/50 transition-colors group-hover:border-primary"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50 transition-colors group-hover:border-primary"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50 transition-colors group-hover:border-primary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/50 transition-colors group-hover:border-primary"></div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                {/* Left: Profile Info */}
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <img
                            src={profile.avatar_url}
                            alt="GitHub Avatar"
                            className="w-16 h-16 rounded border border-primary/30"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-background border border-primary/30 p-1 text-primary">
                            <FiGithub size={12} />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-mono text-white text-sm md:text-base flex items-center gap-2">
                            {profile.login} <span className="text-secondary/80 text-xs px-2 py-0.5 border border-secondary/30 bg-secondary/10">VERIFIED_DEV</span>
                        </h4>
                        <div className="font-mono text-xs text-textMuted mt-1 space-x-4">
                            <span><strong className="text-white">{profile.public_repos}</strong> REPOS</span>
                            <span><strong className="text-white">{profile.followers}</strong> FOLLOWERS</span>
                        </div>
                    </div>
                </div>

                {/* Right: Recent Commits/Repos */}
                <div className="w-full md:w-auto flex-grow max-w-md border-l-2 border-primary/20 pl-4">
                    <div className="font-mono text-xs text-primary mb-2 flex items-center gap-2">
                        <FiTerminal size={12} /> RECENT_DEPLOYMENTS
                    </div>
                    <div className="space-y-2">
                        {repos.slice(0, 2).map(repo => (
                            <a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => playSound('click')}
                                className="block text-sm font-mono text-textMuted hover:text-white transition-colors border-b border-white/5 pb-1"
                            >
                                <span className="text-accent">~</span> {repo.name}
                                {repo.stargazers_count > 0 && (
                                    <span className="ml-2 text-yellow-500/80 text-xs inline-flex items-center gap-1">
                                        <FiStar size={10} /> {repo.stargazers_count}
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playSound('click')}
                    className="flex-shrink-0 px-4 py-2 border border-primary/30 text-primary font-mono text-xs hover:bg-primary/10 hover:border-primary transition-all flex items-center gap-2 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                >
                    <FiGitCommit />
                    INITIALIZE_UPLINK
                </a>
            </div>

            {/* Subtle animated scanline over the widget background */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(59,130,246,0.05)_50%)] bg-[size:100%_4px] pointer-events-none z-[-1]"></div>
        </motion.div>
    );
};

export default GitHubActivity;
