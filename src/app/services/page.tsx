import styles from './services.module.css';

export default function ServicePage() {
  return (
    <div className={styles.page}>
      <h1>Service Page</h1>
      <p>This is the service page content.</p>

      <div className={styles.border} />
    </div>
  );
}