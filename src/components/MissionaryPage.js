import React from 'react';
import styles from '../styles/MissionaryPage.module.css';

const missionaries = [
  {
    name: "Jim Elliot",
    location: "Ecuador, South America",
    description: "A missionary who gave his life to bring the Gospel to the Waorani people of Ecuador. His courage and faith continue to inspire generations.",
    embedCode: `<iframe src="https://www.youtube.com/embed/FpKbsbyEPPQ?si=0WVg4rka3HvTcyx-" title="Jim Elliot Story" allowfullscreen></iframe>`,
  },
  {
    name: "Samuel Morris",
    location: "Liberia, West Africa & Indiana, USA",
    description: "The inspiring story of a tribal prince who escaped captivity, found Christ, and shared the Gospel powerfully in America.",
    embedCode: `<iframe src="https://www.youtube.com/embed/lnTE_pKV3gg?si=m1kym2yKNZNRS00I" title="Samuel Morris Story" allowfullscreen></iframe>`,
  },
  {
    name: "John Bunyan",
    location: "England, United Kingdom",
    description: "The author of 'The Pilgrim's Progress,' a Christian allegory that has guided millions in their spiritual walk and devotion to Christ.",
    embedCode: `<iframe src="https://www.youtube.com/embed/nK6ZCJLq8Wc?si=_TioGzlYzrbPkybX" title="John Bunyan Story" allowfullscreen></iframe>`,
  },
  {
    name: "Martin Luther",
    location: "Wittenberg, Germany",
    description: "Known as the Father of the Reformation, Martin Luther championed faith by grace alone through scripture.",
    embedCode: `<iframe src="https://www.youtube.com/embed/hcpoRT4WZSs?si=lU9Y-pULEVP4Pge4" title="Martin Luther Story" allowfullscreen></iframe>`,
  },
  {
    name: "Perpetua",
    location: "Carthage, Roman North Africa",
    description: "A noblewoman who faced martyrdom for her Christian faith, remaining steadfast in love and devotion despite persecution.",
    embedCode: `<iframe src="https://www.youtube.com/embed/cFMbuTbNDvc?si=xgHrxhUwtYvwkvDY" title="Perpetua Story" allowfullscreen></iframe>`,
  },
];

export default function MissionaryPage() {
  return (
    <section className={styles.missionarySection}>
      <h2 className={styles.heading}>Missionary Heroes of Faith</h2>
      <p className={styles.tagline}>
        Discover the impactful stories of faithful men and women spreading love and the Gospel across nations.
      </p>
      <div className={styles.missionaryGrid}>
        {missionaries.map((missionary, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.embedContainer}
              dangerouslySetInnerHTML={{ __html: missionary.embedCode }}
            />
            <div className={styles.cardBody}>
              <h3 className={styles.name}>{missionary.name}</h3>
              <span className={styles.location}>{missionary.location}</span>
              <p className={styles.description}>{missionary.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
