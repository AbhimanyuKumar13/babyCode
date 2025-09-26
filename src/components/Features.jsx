import { features } from '../constants';
import styles from './Features.module.css';

// FeatureCard is defined inside Features.jsx as it's only used here.
const FeatureCard = ({ icon: Icon, title, text }) => (
  <div className={styles.card}>
    <div className={styles.iconContainer}>
      <Icon size={24} />
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardText}>{text}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`max-container ${styles.featuresSection}`}>
      <h2 className={styles.title}>Why Choose Us?</h2>
      <p className={styles.subtitle}>
        We provide the best tools and resources to ensure your success on the IELTS exam.
      </p>
      <div className={styles.grid}>
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;