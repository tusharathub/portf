"use client";
import styles from "./page.module.css";

export default function index({ index, title, detailes, link, setInside }) {
  return (
    <div
      onMouseEnter={() => {
        setInside({ active: true, index });
      }}
      onMouseLeave={() => {
        setInside({ active: false, index });
      }}
      className={styles.project}
    >
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
          <p> {detailes} </p>
        </a>
      </div>
    </div>
  );
}
