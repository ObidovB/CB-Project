'use client';
import styles from './products.module.css';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import CalculatorSection from '@/sections/home/CalculatorSection';
// import Container from '@/components/Container';

export default function ProductsPage() {
    return (
        // <Container>
            <div className={styles.page}>
                {/* Products Section */}
                <section className={styles.productsSection}>
                    <h2 className={styles.productTitle}>Our Concrete Products</h2>
                    <p className={styles.productSubtitle}>
                        Choose from our wide range of concrete grades for your construction needs
                    </p>
                    <div className={styles.productsGrid}>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                <div className={styles.border} />

                <CalculatorSection />

                <div className={styles.border} />
            </div>
        // </Container>
        );
    }