import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/product";
import styles from "@/styles/Component.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <Link href={`/products/${product.id}`} style={{ color: "inherit", textDecoration: "none", }}>
        <div className={styles.card}>
          <Image src={product.image} alt={product.title} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />

          <div className={styles.cardFonts}>
            <h3 className={styles.cardTitle}>{product.title}</h3>

            <p className={styles.cardGrade}>({product.grade})</p>
          </div>

          <p className={styles.cardDescription}>{product.description}</p>

          <div className={styles.cardFooter}>
            <p className={styles.cardPrice}>{product.price} so'm</p>
            
            <button className={styles.cardArrow}>→</button>
          </div>
        </div>
      </Link>
    </>
  );
}
