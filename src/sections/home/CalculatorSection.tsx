import Calculator from "@/components/Calculator";
import styles from "@/styles/Calculator.module.css";

export default function CalculatorSection() {
  return (
    <section className={styles.section} id="calculator">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>
            CONCRETE CALCULATOR
          </span>

          <h2 className={styles.title}>
            Calculate Your Concrete Cost
          </h2>

          <p className={styles.description}>
            Select the concrete grade and enter the required
            volume to receive an instant estimated price for
            your construction project.
          </p>
        </div>

        <Calculator />
      </div>
    </section>
  );
}