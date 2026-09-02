import styles from '../styles/YouthVideoSection.module.css'; // Import the new CSS file
import VideoCard from './VideoCard';

export default function YouthVideoSection() {
  const videos = [
    { 
      title: "Book of Joshua ", 
      embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JqOqJlFF_eU?si=Y0nasFJ1n6o8Ilcr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    { 
        title: "Book of Proverbs", 
        embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/AzmYV8GNAIM?si=LrfiL6e5ydb1yeKJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      },
      { 
        title: "Book of Daniel", 
        embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9cSC9uobtPM?si=k-vVjUnJFpT3wrfV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      },
      { 
        title: "Book of Jeremiah", 
        embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/RSK36cHbrk0?si=RQDsuXfUr8_5mH1R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      },
      { 
        title: "Book of Esther", 
        embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JydNSlufRIs?si=UxnRG51QZ_0ZDynt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      },
      { 
        title: "Book of Revelation ", 
        embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/QpnIrbq2bKo?si=rgt6YvL7FcyZi_0e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      },
      
    // Add other videos here...
  ];

  return (
    <section className={styles.videoSection}>
      <h2 className={styles.heading}>Youth Bible Stories</h2>
      <p className={styles.tagline}>
        Watch and engage with inspiring Bible stories, created for youth to learn and grow in faith.
      </p>
      <div className={styles.videoGrid}>
        {videos.map((video, index) => (
          <VideoCard key={index} title={video.title} embedCode={video.embedCode} />
        ))}
      </div>
    </section>
  );
}
