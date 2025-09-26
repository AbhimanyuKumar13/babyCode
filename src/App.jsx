import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="features" className="px-6 sm:px-16 py-12 sm:py-20">
        <Features />
      </section>
      <section id="testimonials" className="bg-slate-100 px-6 sm:px-16 py-12 sm:py-20">
        <Testimonials />
      </section>
      <footer id="contact" className="px-6 sm:px-16 pt-12 sm:pt-20 pb-8 bg-slate-900 text-slate-200">
        <Footer />
      </footer>
    </main>
  );
};

export default App;