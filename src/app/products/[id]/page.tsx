'use client';

import { products } from '@/data/products';
import styles from '../products.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

interface ProductDetailPageProps {
    params: {
        id: string;
    };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
    const product = products.find(p => p.id === parseInt(params.id));

    if (!product) {
        return (
            <div className={styles.page}>
                <div className={styles.notFound}>
                    <h1>Product Not Found</h1>
                    <p>Sorry, we couldn't find the product you're looking for.</p>
                    <Link href="/products">
                        <Button>Back to Products</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <Link href="/products" className={styles.backLink}>
                ← Back to Products
            </Link>

            <div className={styles.detailContainer}>
                {/* Left Side - Image */}
                <div className={styles.detailImage}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>

                {/* Right Side - Details */}
                <div className={styles.detailContent}>
                    <div className={styles.detailHeader}>
                        <h1 className={styles.detailTitle}>{product.title}</h1>
                        <p className={styles.detailGrade}>Grade: {product.grade}</p>
                    </div>

                    <p className={styles.detailPrice}>{product.price} so'm</p>

                    <div className={styles.detailDescription}>
                        <h3>Product Description</h3>
                        <p>{product.description}</p>
                    </div>

                    <div className={styles.detailUsage}>
                        <h3>Usage & Applications</h3>
                        <p>{product.usage}</p>
                    </div>

                    <div className={styles.detailComposition}>
                        <h3>Composition (Per 1 m³)</h3>
                        <ul>
                            <li><strong>Cement:</strong> {product.composition.cement}</li>
                            <li><strong>Sand:</strong> {product.composition.sand}</li>
                            <li><strong>Crushed Stone:</strong> {product.composition.crushedStone}</li>
                            <li><strong>Water:</strong> {product.composition.water}</li>
                            <li><strong>Supplements:</strong> {product.composition.supplements}</li>
                        </ul>
                    </div>

                    {product.specs && product.specs.length > 0 && (
                        <div className={styles.detailSpecs}>
                            <h3>Technical Specifications</h3>
                            <ul>
                                {product.specs.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className={styles.detailActions}>
                        <Button>Order Now</Button>
                        <Button variant="outline">Contact Supplier</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
