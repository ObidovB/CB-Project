import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import styles from "@/styles/Component.module.css";

export default function ProductsSection() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTT} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "20px" }}>
        <h2 style={{ color: "#fff" }}>Our Products</h2>

        <a href="/products" style={{ color: "#00D9FF", textDecoration: "none" }}>
          View All Products {">"}
        </a>
      </div>

      <div
        className={styles.productsGrid}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
