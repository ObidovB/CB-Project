import styles from './aboutus.module.css'

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <h1>About Page</h1>
      <p>This is the about page of our application.</p>
      
      <div className={styles.border} />
    </div>
  );
}