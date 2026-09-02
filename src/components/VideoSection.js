import styles from '../styles/VideoSection.module.css';
import VideoCard from './VideoCard'; // Make sure the path is correct

export default function VideoSection() {
  const videos = [
    { 
      title: "The Prodigal Son", 
      embedCode: `<iframe width="700" height="315" src="https://www.youtube.com/embed/kZkrWQqfDw4?si=GFOv8A3omjohTZ4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
    },
    { 
      title: "David and Goliath", 
      embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/32_Izk21ktw?si=pdrwaSNQ4bd4R7yv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    { 
      title: "The Good Samaritan", 
      embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xX6V3ybjiRE?si=dONbh99Y4HENKmEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    { 
      title: "Jonah and the Whale", 
      embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/81Akp9gxKEA?si=lOc47zmJ4nrGLYtn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    { 
      title: "The Creation Story", 
      embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4dzjD5FxJPg?si=85YmfXKeJJ0e7bbS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    { 
      title: "Jesus Feeds the 5000", 
      embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iG5YwGEVpJI?si=1Nsju_Zf544gjw1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
  ];

  return (
    <section className={styles.videoSection}>
      <h2 className={styles.heading}>Watch Stories</h2>
      <p className={styles.tagline}>
        Engage with powerful Bible stories that inspire faith and joy in every heart.
      </p>
      <div className={styles.videoGrid}>
        {videos.map((video, index) => (
          <VideoCard key={index} title={video.title} embedCode={video.embedCode} />
        ))}
      </div>
    </section>
  );
}
