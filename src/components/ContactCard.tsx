"use client";
import { useState } from "react";
import styles from "@/styles/Component.module.css";
import Image from "next/image";

export default function ContactCard() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    opinion: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Input bo'shligini tekshirish
    // trim() — string boshidagi va oxiridagi bo‘sh joylarni (space) olib tashlaydi.
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.opinion.trim()
    ) {
      setStatus("Iltimos barcha maydonlarni to'ldiring! ❌");
      return;
    }

    setStatus("Yuborilmoqda...");

    try {
      const res = await fetch("/app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Xabaringiz muvaffaqiyatli yuborildi! ✅");
        setFormData({ name: "", phone: "", email: "", opinion: "" }); // Formani tozalash
      } else {
        setStatus("Xatolik yuz berdi. Qayta urinib ko'ring. ❌");
      }
    } catch (err) {
      setStatus("Tarmoqda xatolik. ❌");
    }
  };

  return (
    <div className={styles.contactCardContainer} id="banner">
      <div className={styles.contactCardBar}>
        <h2>
          Submit a request, and we’ll call you back to work out the details.
        </h2>
        <h3>
          Submit a request, and we’ll call you back to work out the details.
        </h3>
        <p>
          Provide your phone number, and our manager will contact you within 10
          minutes. We will help you choose the right concrete, calculate the
          volume, and arrange delivery.
        </p>
      </div>
      <Image
        src="/images/centralicon2.png"
        alt="Central Icon"
        className={styles.centralIcon}
        width={300}
        height={300}
      />
      <form onSubmit={handleSubmit}>
        <div className={styles.contactCard}>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
          <input
            type="email"
            placeholder="gmail@gmail.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <div className={styles.formGroup}>
            <textarea
              id="opinion"
              rows={5}
              value={formData.opinion}
              onChange={(e) =>
                setFormData({ ...formData, opinion: e.target.value })
              }
              placeholder="Enter your message..."
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit Request
          </button>
          {status && <p className={styles.statusText}>{status}</p>}
        </div>
      </form>
    </div>
  );
}
