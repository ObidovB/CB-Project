import { Grade } from "@/types/price";

import styles from "@/styles/Calculator.module.css";

interface GradeSelectProps {
  value: Grade;

  onChange: (value: Grade) => void;
}

const grades: Grade[] = [
  "M100",
  "M150",
  "M200",
  "M250",
  "M300",
  "M350",
];

export default function GradeSelect({
  value,
  onChange,
}: GradeSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value as Grade)
      }
      className={styles.select}
    >
      {grades.map((grade) => (
        <option
          key={grade}
          value={grade}
        >
          {grade}
        </option>
      ))}
    </select>
  );
}