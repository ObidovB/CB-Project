import styles from './products.module.css';

export default function ProductsPage() {
    return (
        <div className={styles.page}>
            <h1>Products Page</h1>
            <p>This is the products page of our application.</p>
            <div className={styles.border} />
        </div>
    );
}