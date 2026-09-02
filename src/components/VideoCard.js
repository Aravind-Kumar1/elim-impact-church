import styles from '../styles/VideoCard.module.css';

export default function VideoCard({ title, embedCode }) {
  return (
    <div className={styles.card}>
      {/* Use the dangerouslySetInnerHTML to render the embed code */}
      <div className={styles.embedContainer} dangerouslySetInnerHTML={{ __html: embedCode }}></div>
      <h3>{title}</h3>
    </div>
  );
}
