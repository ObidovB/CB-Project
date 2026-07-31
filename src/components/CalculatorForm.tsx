"use client";

import GradeSelect from "./GradeSelect";
import { CalculatorFormProps } from "@/types/price";
import styles from "@/styles/Calculator.module.css";

export default function CalculatorForm({
  grade,
  volume,
  delivery,
  setGrade,
  setVolume,
  setDelivery,
}: CalculatorFormProps) {
  return (
    <div className={styles.form}>
      {/* Grade */}

      <div className={styles.field}>
        <label className={styles.label}>
          Concrete Grade
        </label>

        <GradeSelect
          value={grade}
          onChange={setGrade}
        />
      </div>

      {/* Volume */}

      <div className={styles.field}>
        <label className={styles.label}>
          Volume (m³)
        </label>

        <input
          type="number"
          min={1}
          value={volume}
          onChange={(e) =>
            setVolume(Number(e.target.value))
          }
          className={styles.input}
          placeholder="Enter volume"
        />
      </div>

      {/* Delivery */}

      <div className={styles.switchCard}>
        <div>
          <h4>Delivery</h4>

          <p>
            Add transportation service
          </p>
        </div>

        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={delivery}
            onChange={(e) =>
              setDelivery(e.target.checked)
            }
          />

          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
}