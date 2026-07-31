"use client";
import { useMemo, useState } from "react";

import CalculatorForm from "./CalculatorForm";
import CalculatorResult from "./CalculatorResult";

import { prices } from "@/data/prices";
import styles from "@/styles/Calculator.module.css";
import { Grade } from "@/types/price";

export default function Calculator() {
  const [grade, setGrade] = useState<Grade>("M350");
  const [volume, setVolume] = useState(1);
  const [delivery, setDelivery] = useState(false);

  // Delivery narxi
  const deliveryPrice = delivery ? 250000 : 0;

  // Beton narxi
  const concretePrice = useMemo(() => {
    return prices[grade] * volume;
  }, [grade, volume]);

  // Yakuniy narx
  const totalPrice = concretePrice + deliveryPrice;

  return (
    <div className={styles.calculator}>
      <CalculatorForm
        grade={grade}
        volume={volume}
        delivery={delivery}
        setGrade={setGrade}
        setVolume={setVolume}
        setDelivery={setDelivery}
      />

      <CalculatorResult
        grade={grade}
        volume={volume}
        concretePrice={concretePrice}
        deliveryPrice={deliveryPrice}
        totalPrice={totalPrice}
      />
    </div>
  );
}