import styles from '../styles/VerseSection.module.css';

export default function VerseSection({ imageSrc }) {
  return (
    <section className={styles.verseSection}>
      {/* Left Half: Text */}
      <div className={styles.textContainer}>
        <span className={styles.badge}>Next Generation Ministry</span>
        <h1 className={styles.heading}>Empowering the Next Generation in Christ</h1>
        <p className={styles.tagline}>
          Building a foundation of faith, love, and spiritual joy in every child and young adult’s heart.
        </p>
        <blockquote className={styles.verse}>
          “Train up a child in the way he should go, and when he is old he will not depart from it.” — Proverbs 22:6
        </blockquote>
        <blockquote className={styles.verse}>
          “For I know the plans I have for you, declares the Lord, plans to give you a future and a hope.” — Jeremiah 29:11
        </blockquote>
      </div>

      {/* Right Half: Image */}
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={imageSrc || '/ki-u.jpg'}
          alt="Children and youth engaged in church activities"
        />
      </div>
    </section>
  );
}
