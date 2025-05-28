import React, { useState, useEffect } from 'react';
import InstagramGrid from '../../components/instagram/InstagramGrid';
import styles from '../style/InstagramFeed.module.css'; 

const InstagramFeed = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // This will be replaced with actual Instagram API integration
    const mockPosts = [
        {
            id: '1',
            type: 'post',
            mediaUrl: 'https://placehold.co/600x600/png',
            caption: 'Sample Instagram Post',
            permalink: 'https://instagram.com',
            timestamp: '2024-03-20T12:00:00Z'
        },
        {
            id: '2',
            type: 'reel',
            mediaUrl: 'https://placehold.co/600x800/png',
            caption: 'Sample Instagram Reel',
            permalink: 'https://instagram.com',
            timestamp: '2024-03-19T12:00:00Z'
        },
        {
            id: '3',
            type: 'post',
            mediaUrl: 'https://placehold.co/600x600/png',
            caption: 'Sample Instagram Post',
            permalink: 'https://instagram.com',
            timestamp: '2024-03-20T12:00:00Z'
        },
        {
            id: '4',
            type: 'reel',
            mediaUrl: 'https://placehold.co/600x800/png',
            caption: 'Sample Instagram Reel',
            permalink: 'https://instagram.com',
            timestamp: '2024-03-19T12:00:00Z'
        },
        {
            id: '5',
            type: 'post',
            mediaUrl: 'https://placehold.co/600x600/png',
            caption: 'Sample Instagram Post',
            permalink: 'https://instagram.com',
            timestamp: '2024-03-20T12:00:00Z'
        },
        {
            id: '6',
            type: 'reel',
            mediaUrl: 'https://placehold.co/600x800/png',
            caption: 'Sample Instagram Reel',
            permalink: 'https://instagram.com',
            timestamp: '2024-03-19T12:00:00Z'
        },
        // Add more mock posts as needed
    ];

    useEffect(() => {
        // Simulate API fetch
        const fetchPosts = async () => {
            try {
                // This will be replaced with actual Instagram API call
                setTimeout(() => {
                    setPosts(mockPosts);
                    setLoading(false);
                }, 1000);
            } catch (err) {
                console.error('Error fetching Instagram posts:', err);
                setError('Failed to fetch Instagram posts');
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    return (
        <div id="instagram-feed" className="section-padding bg-gradient-to-r   from-[#396afc] to-[#2948ff] ">
            <h1 className={styles.title}>My Instagram Feed</h1>
            <p className={styles.description}>
                Check out my latest posts and reels from Instagram
            </p>
            <h1 className='text-4xl text-center font-black text-red-600'>coming soon!</h1>
            <div className='hidden'>
            <InstagramGrid  posts={posts} />
            </div>
            
        </div>
    );
};

export default InstagramFeed; 