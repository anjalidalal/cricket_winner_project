import React from "react";
import styles from "./card.module.css";

const CricketStatsCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.poster}></div>
      <div className={styles.details}>
        <h1 className={styles.title}></h1>
        <button className={styles.tag_name}></button>
        <p className={styles.info}></p>
        <span className={styles.posting_time}></span>
      </div>
    </div>
  );
};

export default CricketStatsCard;
