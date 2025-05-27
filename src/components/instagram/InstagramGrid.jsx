import React from 'react';
import InstagramPost from './InstagramPost';
import styles from './InstagramGrid.module.css';

const InstagramGrid = ({ posts }) => {
    return (
        <div className={styles.grid}>
            {posts.map((post) => (
                <InstagramPost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default InstagramGrid; 