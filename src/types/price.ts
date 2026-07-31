export type Grade = "M100" | "M150" | "M200" | "M250" | "M300" | "M350";

export interface CalculatorFormProps {
  grade: Grade;
  volume: number;
  delivery: boolean;

  setGrade: (grade: Grade) => void;
  setVolume: (volume: number) => void;
  setDelivery: (delivery: boolean) => void;
}

export interface CalculatorResultProps {
  grade: Grade;
  volume: number;

  concretePrice: number;
  deliveryPrice: number;
  totalPrice: number;
}