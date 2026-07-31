import Image from "next/image";
import { Product } from "../types/product";
import styles from "@/styles/Component.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <Image src={product.image} alt={product.title} width={250} height={250} />

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
  );
}
