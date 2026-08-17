import { products } from "@/data/products";
import styles from "../products.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  // Dynamic route'dan ID ni olamiz
  const { id } = await params;

  // ID orqali productni topamiz
  const product = products.find((p) => p.id === Number(id));

  // Agar product topilmasa
  if (!product) {
    return (
      <div className={styles.page}>
        <div className={styles.notFound}>
          <h1>Product Not Found</h1>

          <p>
            Sorry, we couldn't find the product you're looking for.
          </p>

          <Link href="/products">
            <Button>
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Back button */}
      <Link
        href="/products"
        className={styles.backLink}
      >
        ← Back to Products
      </Link>

      <div className={styles.detailContainer}>

        {/* =========================
            LEFT SIDE — IMAGE
        ========================= */}
        <div className={styles.detailImage}>
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* =========================
            RIGHT SIDE — INFORMATION
        ========================= */}
        <div className={styles.detailContent}>

          {/* Title */}
          <div className={styles.detailHeader}>
            <h1 className={styles.detailTitle}>
              {product.title}
            </h1>

            <p className={styles.detailGrade}>
              Grade: {product.grade}
            </p>
          </div>

          {/* Price */}
          <p className={styles.detailPrice}>
            {product.price} so'm
          </p>

          {/* Description */}
          <div className={styles.detailDescription}>
            <h3>Product Description</h3>

            <p>
              {product.description}
            </p>
          </div>

          {/* Usage */}
          <div className={styles.detailUsage}>
            <h3>Usage & Applications</h3>

            <p>
              {product.usage}
            </p>
          </div>

          {/* Composition */}
          <div className={styles.detailComposition}>
            <h3>Composition (Per 1 m³)</h3>

            <ul>
              <li>
                <strong>Cement:</strong>{" "}
                {product.composition.cement}
              </li>

              <li>
                <strong>Sand:</strong>{" "}
                {product.composition.sand}
              </li>

              <li>
                <strong>Crushed Stone:</strong>{" "}
                {product.composition.crushedStone}
              </li>

              <li>
                <strong>Water:</strong>{" "}
                {product.composition.water}
              </li>

              <li>
                <strong>Supplements:</strong>{" "}
                {product.composition.supplements}
              </li>
            </ul>
          </div>

          {/* Technical specifications */}
          {product.specs && product.specs.length > 0 && (
            <div className={styles.detailSpecs}>
              <h3>Technical Specifications</h3>

              <ul>
                {product.specs.map((spec, index) => (
                  <li key={index}>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className={styles.detailActions}>
            <Button>
              Order Now
            </Button>

            <Button variant="outline">
              Contact Supplier
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}