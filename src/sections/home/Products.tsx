import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import styles from "@/styles/Component.module.css";

export default function ProductsSection() {
  return (
    <div className={styles.section}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "50px" }}>
        <h2 style={{ color: "#fff" }}>Our Products</h2>

        <a href="/products" style={{ color: "#00D9FF", textDecoration: "none" }}>
          View All Products
        </a>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          // justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
