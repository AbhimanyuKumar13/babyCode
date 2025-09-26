import { testimonials } from '../constants/index.jsx';
import student1 from '../assets/profile_img_1.png';
import student2 from '../assets/profile_img_2.png';
import student3 from '../assets/profile_img_1.png';
import styles from './Testimonials.module.css';

const imageMap = {
  'student-1.jpg': student1,
  'student-2.jpg': student2,
  'student-3.jpg': student3,
};

const TestimonialCard = ({ quote, name, title, img }) => (
  <div className={styles.card}>
    <p className={styles.quote}>"{quote}"</p>
    <div className={styles.authorInfo}>
      <img src={imageMap[img]} alt={name} className={styles.authorImage} />
      <div>
        <h4 className={styles.authorName}>{name}</h4>
        <p className={styles.authorTitle}>{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className={styles.testimonialsSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>What Our Students Say</h2>
        <p className={styles.subtitle}>
          Hear from students who have successfully achieved their goals with our help.
        </p>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;