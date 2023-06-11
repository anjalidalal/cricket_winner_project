import React from "react";
import styles from "./card.module.css";

const LatestUpdateCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.poster}></div>
      <div className={styles.details}>
        <h1 className={styles.title}></h1>
        <button className={styles.tag_name}></button>
        <span className={styles.posting_time}></span>
      </div>
    </div>
  );
};

export default LatestUpdateCard;
