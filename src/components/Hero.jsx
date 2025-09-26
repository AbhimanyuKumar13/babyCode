import heroImage from '../assets/banner.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`max-container ${styles.heroSection}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Ace Your <span className={styles.titleHighlight}>IELTS</span> Test with Confidence
        </h1>
        <p className={styles.subtitle}>
          Unlock your potential with our AI-powered platform. Get personalized feedback, unlimited mock tests, and expert guidance to achieve your desired band score.
        </p>
        <button className={styles.ctaButton}>
          Start Your Free Trial
        </button>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={heroImage}
          alt="Student preparing for IELTS"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;