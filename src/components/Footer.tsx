import styles from "@/styles/Footer.module.css";
import css from "@/app/page.module.css";
import { Headset } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import CentralBetonIcon from "../../public/icons/centralbeton";
import Link from "next/link";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerComponent}>
        <div className={styles.footerContent}>
          <CentralBetonIcon />
          <p
            className={styles.footerInfoText}
            style={{
              width: "220px",
              fontSize: "16px",
              color: "rgb(185, 181, 181)",
            }}
          >
            Premium concrete solutions for stronger foundations and better
            tomorrow.
          </p>
          <div className={styles.footerContact}>
            <div className={styles.footerContactIcon}>
              <Headset size={28} color="#00F2FE" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <h4 style={{ color: "white" }}>24/7 Support</h4>
              <p>+998 91 001 11 11</p>
            </div>
          </div>
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.footerInfoBoxes}>
            <h3>COMPANY</h3>
            <ul style={{ listStyle: "none" }}>
              <li>
                <Link
                  href="#"
                  style={{
                    color: "rgb(185, 181, 181)",
                    textDecoration: "none",
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={{
                    color: "rgb(185, 181, 181)",
                    textDecoration: "none",
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={{
                    color: "rgb(185, 181, 181)",
                    textDecoration: "none",
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={{
                    color: "rgb(185, 181, 181)",
                    textDecoration: "none",
                  }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={{
                    color: "rgb(185, 181, 181)",
                    textDecoration: "none",
                  }}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerInfoBoxes}>
            <h3>PRODUCTS</h3>
            <ul style={{ listStyle: "none" }}>
              <li>
                <Link
                  href="#"
                  style={{
                    color: "rgb(185, 181, 181)",
                    textDecoration: "none",
                  }}
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerInfoBoxes}>
            <h3>QUICK LINKS</h3>
            <ul style={{ listStyle: "none" }}>
              <li>
                <Link
                  href="#"
                  style={{
                    color: "rgb(185, 181, 181)",
                    textDecoration: "none",
                  }}
                >
                  Concrete Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={{
                    color: "rgb(185, 181, 181)",
                    textDecoration: "none",
                  }}
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={{
                    color: "rgb(185, 181, 181)",
                    textDecoration: "none",
                  }}
                >
                  Projects Map
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={{
                    color: "rgb(185, 181, 181)",
                    textDecoration: "none",
                  }}
                >
                  Downloads
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={{
                    color: "rgb(185, 181, 181)",
                    textDecoration: "none",
                  }}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={{
                    color: "rgb(185, 181, 181)",
                    textDecoration: "none",
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerInfoBoxes}>
            <h3>FOLLOW US</h3>
            <div
              className={styles.footerSocialIcons}
              style={{ display: "flex", gap: "10px" }}
            >
              <Link
                href="#"
                style={{
                  width: "45px",
                  height: "45px",
                  border: "1px solid gray",
                  borderRadius: "50%",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaFacebookF size={24} color="#00F2FE" />
              </Link>
              <Link
                href="#"
                style={{
                  width: "45px",
                  height: "45px",
                  border: "1px solid gray",
                  borderRadius: "50%",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaInstagram size={24} color="#00F2FE" />
              </Link>
              <Link
                href="#"
                style={{
                  width: "45px",
                  height: "45px",
                  border: "1px solid gray",
                  borderRadius: "50%",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaTelegramPlane size={24} color="#00F2FE" />
              </Link>
              <Link
                href="#"
                style={{
                  width: "45px",
                  height: "45px",
                  border: "1px solid gray",
                  borderRadius: "50%",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaYoutube size={24} color="#00F2FE" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={css.border} />
      <div className={css.footerBottom}>
        <p className={css.copyright}>
          &copy; 2026 Central Beton. All rights reserved.
        </p>

        <div className={css.footerLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>

          <span>|</span>

          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}
