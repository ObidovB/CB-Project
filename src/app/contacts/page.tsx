import ContactCard from '@/components/ContactCard';
import styles from './contacts.module.css';

export default function ContactsPage() {
    const phoneNumber = '+998 91 001 11 11';
    const phoneHref = 'tel:+998910011111';

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <span className={styles.eyebrow}>Contact us</span>
                    <h1>We are ready to help with your construction needs.</h1>
                    <p>
                        Need a quick estimate, delivery details, or advice for your project?
                        Our team is always available and happy to help.
                    </p>

                    <div className={styles.actions}>
                        <a href={phoneHref} className={styles.primaryButton}>
                            Call now
                        </a>
                        <a href={phoneHref} className={styles.secondaryButton}>
                            Request a call
                        </a>
                    </div>

                    <div className={styles.phoneWrap}>
                        <span className={styles.phoneLabel}>Phone</span>
                        <a href={phoneHref} className={styles.phoneLink}>
                            {phoneNumber}
                        </a>
                    </div>
                </div>

                <div className={styles.contactPanel}>
                    <div className={styles.panelHeader}>
                        <span className={styles.badge}>Available</span>
                        <span className={styles.statusDot} aria-hidden="true" />
                    </div>

                    <div className={styles.infoList}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Working hours</span>
                            <strong>24/7</strong>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Location</span>
                            <strong>Tashkent, Uzbekistan, Qoyliq</strong>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Email</span>
                            <strong>info@centralbeton.uz</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.infoGrid}>
                <article className={styles.card}>
                    <span className={styles.cardIcon}>☎</span>
                    <h2>Call us</h2>
                    <a href={phoneHref} className={styles.cardLink}>
                        {phoneNumber}
                    </a>
                    <p>We will answer quickly and help you choose the right solution.</p>
                </article>

                <article className={styles.card}>
                    <span className={styles.cardIcon}>📍</span>
                    <h2>Visit</h2>
                    <p>Central Beton office<br />Tashkent, Uzbekistan</p>
                </article>

                <article className={styles.card}>
                    <span className={styles.cardIcon}>⏱</span>
                    <h2>Fast response</h2>
                    <p>We reply and coordinate timely for urgent deliveries and requests.</p>
                </article>
            </section>
            <div className={styles.border} />
            <ContactCard />
            <div className={styles.border} />
        </main>
    );
}