import React from 'react';
import styles from './InstagramPost.module.css';

const InstagramPost = ({ post }) => {
    const { type, mediaUrl, caption, permalink, timestamp } = post;
    const formattedDate = new Date(timestamp).toLocaleDateString();

    return (
        <div className={styles.card}>
            <div className={styles.mediaContainer}>
                <img src={mediaUrl} alt={caption} className={styles.media} />
                {type === 'reel' && (
                    <div className={styles.reelBadge}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={styles.reelIcon}
                        >
                            <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm-1-9h2v5h-2z" />
                        </svg>
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <p className={styles.caption}>{caption}</p>
                <div className={styles.footer}>
                    <span className={styles.date}>{formattedDate}</span>
                    <a
                        href={permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        View on Instagram
                    </a>
                </div>
            </div>
        </div>
    );
};

export default InstagramPost; 