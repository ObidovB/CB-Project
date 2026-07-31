import Button from "./Button";

import { CalculatorResultProps } from "@/types/price";

import styles from "@/styles/Calculator.module.css";

export default function CalculatorResult({
  grade,
  volume,
  concretePrice,
  deliveryPrice,
  totalPrice,
}: CalculatorResultProps) {
  // const formatPrice = (price: number) => {
  //   return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  // };

  // const formatPrice = (price: number) => {
  //   return price.toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "UZS"
  //   });
  // };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US").format(price);
  };

  return (
    <div className={styles.result}>
      <h3 className={styles.resultTitle}>Estimated Price</h3>

      <div className={styles.resultRow}>
        <span>Concrete Grade</span>

        <strong>{grade}</strong>
      </div>

      <div className={styles.resultRow}>
        <span>Volume</span>

        <strong>{volume} m³</strong>
      </div>

      <div className={styles.resultRow}>
        <span>Concrete Cost</span>

        <strong>{formatPrice(concretePrice)} so'm</strong>
      </div>

      <div className={styles.resultRow}>
        <span>Delivery</span>

        <strong>{formatPrice(deliveryPrice)} so'm</strong>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.total}>
        <span>Total Price</span>

        <h2>{formatPrice(totalPrice)} so'm</h2>
      </div>

      <Button size="lg" variant="primary">
        Request Quote
      </Button>
    </div>
  );
}
