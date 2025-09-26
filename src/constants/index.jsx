import { FaLaptopCode, FaBullseye, FaMicrophoneAlt, FaFileAlt } from 'react-icons/fa';

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const features = [
  {
    icon: FaBullseye,
    title: "AI Band Score",
    text: "Get an instant, accurate IELTS band score prediction for your writing and speaking tasks with our advanced AI.",
  },
  {
    icon: FaFileAlt,
    title: "Unlimited Mock Tests",
    text: "Practice with a vast library of full-length mock tests that simulate the real IELTS exam environment.",
  },
  {
    icon: FaMicrophoneAlt,
    title: "Speaking Practice",
    text: "Improve your fluency and confidence with interactive speaking sessions and real-time feedback.",
  },
  {
    icon: FaLaptopCode,
    title: "Personalized Feedback",
    text: "Receive detailed, expert feedback on your performance to identify your weaknesses and improve faster.",
  },
];

export const testimonials = [
  {
    quote: "The AI scoring was a game-changer! I knew exactly where to focus my efforts and finally achieved my target score.",
    name: "Priya Sharma",
    title: "Achieved Band 8.5",
    img: "student-1.jpg"
  },
  {
    quote: "The mock tests are incredibly realistic. On the actual test day, I felt completely prepared and confident.",
    name: "Chen Wei",
    title: "Achieved Band 8.0",
    img: "student-2.jpg"
  },
  {
    quote: "I struggled with speaking, but the practice sessions and personalized feedback helped me improve my score by a whole band!",
    name: "Johnathan Smith",
    title: "Achieved Band 7.5",
    img: "student-3.jpg"
  },
];