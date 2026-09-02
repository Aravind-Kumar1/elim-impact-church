import React from 'react';
import styles from '../styles/ChurchTimings.module.css';

const ChurchTimings = () => {
  const timings = [
    {
      day: 'Sunday Worship',
      badge: 'Main Service',
      className: styles.sunday,
      items: [
        '1st Service: 6:00 AM',
        'Sunday School: 10:00 AM',
        '2nd Service: 11:00 AM',
        '3rd Service: 6:00 PM'
      ]
    },
    {
      day: "Tuesday Women's Meet",
      badge: 'Weekly',
      className: styles.tuesday,
      items: ["Women's Fellowship: 7:00 PM", 'Prayer & Encouragement']
    },
    {
      day: 'Wednesday Youth Meet',
      badge: 'Weekly',
      className: styles.wednesday,
      items: ['Youth Gathering: 7:00 PM', 'Worship & Word Study']
    },
    {
      day: 'Friday Fasting Prayer',
      badge: 'Weekly',
      className: styles.friday,
      items: ['Fasting Prayer: 6:00 AM', 'Intercession for Needs']
    },
    {
      day: '1st Sunday of Month',
      badge: 'Monthly',
      className: styles.firstOfMonth,
      items: ['Holy Communion Service', 'Blessing & Thanksgiving']
    },
    {
      day: 'Last Tuesday of Month',
      badge: 'Monthly',
      className: styles.lastTuesday,
      items: ['All Night Prayer', 'Special Anointing & Deliverance']
    }
  ];

  return (
    <section className={styles.churchTimings}>
      <h2 className={styles.sectionHeading}>Church Timings & Services</h2>

      <div className={styles.timingsGrid}>
        {timings.map((timing, index) => (
          <div key={index} className={`${styles.timingItem} ${timing.className}`}>
            <div className={styles.timingHeader}>
              <span className={styles.badge}>{timing.badge}</span>
              <h3 className={styles.dayTitle}>{timing.day}</h3>
            </div>
            <ul className={styles.timingList}>
              {timing.items.map((item, idx) => (
                <li key={idx} className={styles.timingListItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChurchTimings;
