import React, { useState, useEffect } from 'react';
import {
  Car,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Star,
  Clock,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Droplets,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import logo from '../brand/jl.jpg';
import work1 from '../brand/1.jpg';
import work2 from '../brand/2.jpg';
import work3 from '../brand/3.jpg';
import work4 from '../brand/4.jpg';
import work5 from '../brand/5.jpg';
import work6 from '../brand/6.jpg';
import work7 from '../brand/7.jpg';
import work8 from '../brand/8.jpg';
import work9 from '../brand/9.png';
import work10 from '../brand/10.png';

// --- Types ---
interface Pricing {
  small: string;
  medium: string;
  large: string;
  xl: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  pricing: Pricing;
  inclusions: string[];
  popular?: boolean;
}

interface Extra {
  name: string;
  price: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'interior',
    title: 'Deluxe Interior Detail',
    description: 'A complete rejuvenation of your vehicle\'s cabin, focusing on hygiene and aesthetics.',
    pricing: { small: '$119.99', medium: '$139.99', large: '$159.99', xl: 'POA' },
    inclusions: [
      'Thorough interior vacuum (seats, carpets, boot)',
      'Interior surfaces detailed and conditioned',
      'Glass and interior mirrors cleaned',
      'Carpet or rubber floor mats shampooed',
      'Light air freshener applied'
    ]
  },
  {
    id: 'exterior',
    title: 'Deluxe Exterior Detail',
    description: 'Professional hand wash and paint protection to restore your car\'s showroom shine.',
    pricing: { small: '$119.99', medium: '$139.99', large: '$159.99', xl: 'POA' },
    inclusions: [
      'Pre wash & Bug removal',
      'Hand wash with premium soap',
      'Wheels and inner guards cleaned',
      'Exterior trim and tyres dressed',
      'Paint sealant (3 month durability)'
    ]
  },
  {
    id: 'full',
    title: 'Full Detail',
    description: 'Our most comprehensive package covering every inch of your vehicle inside and out.',
    popular: true,
    pricing: { small: '$209.99', medium: '$229.99', large: '$249.99', xl: 'POA' },
    inclusions: [
      'Everything in Deluxe Interior Detail',
      'Everything in Deluxe Exterior Detail',
      'Complete vehicle transformation'
    ]
  }
];

const EXTRAS: Extra[] = [
  { name: 'Engine bay detail', price: '$50' },
  { name: 'Headlight restoration', price: '$120' },
  { name: 'Seat Upholstery Shampoo (5 Seater)', price: '$80' },
  { name: 'Seat Upholstery Shampoo (7 Seater)', price: '$120' },
  { name: 'Deep Carpet shampoo', price: 'From $50' },
  { name: 'Leather seats clean and protect', price: 'From $50' },
  { name: '1 stage paint correction (Small)', price: '$250' },
  { name: '1 stage paint correction (Medium)', price: '$320' },
  { name: '1 stage paint correction (Large)', price: '$400' },
];

const REVIEWS = [
  {
    name: 'Greg Lawrence',
    text: 'Highly recommend Jared does an amazing quality job and detail work doesn’t get missed. We use him for all our vehicles Get in touch with him and you will be happy'
  },
  {
    name: 'Rebekah Bell',
    text: 'Great service and standard of work. Clear communication. Really great'
  },
  {
    name: 'Alex Saxon',
    text: 'Good communication, fair pricing very punctual will definitely use again in the future. Massive difference in the head lights saving potential replacement.'
  },
  {
    name: 'Komene Kururangi',
    text: 'Had some amazing service with JL! Definitely recommend. Even went over and above to make sure that my cars were on. Will definitely be back there once the truck is dirty again. Super professional and easy to contact.'
  }
];

const GALLERY_ITEMS = [
  { url: work1, alt: 'mobile car detailing service cleaning interior seats' },
  { url: work2, alt: 'car exterior detailing foam wash christchurch' },
  { url: work3, alt: 'professional car valet service interior dashboard' },
  { url: work4, alt: 'paint protection and ceramic coating finish' },
  { url: work5, alt: 'car interior cleaning deep carpet shampoo' },
  { url: work6, alt: 'car exterior deep clean and polish protection' },
  { url: work7, alt: 'Christchurch mobile auto detailing exterior wash' },
  { url: work8, alt: 'Canterbury car detailing engine bay cleaning' },
  { url: work9, alt: 'mobile car grooming pre wash and bug removal' },
  { url: work10, alt: 'professional mobile car valet wheels cleaning' }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center -ml-2">
          <img src={logo} alt="JL Detailing" className="h-20 md:h-24 w-auto object-contain rounded-xl" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-accent transition-colors duration-300">Services</a>
          <a href="#how-it-works" className="hover:text-accent transition-colors duration-300">How it Works</a>
          <a href="#reviews" className="hover:text-accent transition-colors duration-300">Reviews</a>
          <a href="#contact" className="hover:text-accent transition-colors duration-300">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:02102571133" className="hidden sm:flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors duration-300">
            <Phone className="w-4 h-4" />
            021 025 71133
          </a>
          <a href="#contact" className="bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

const ServiceCard = ({ service, index }: { service: Service; index: number; key?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className={`card relative flex flex-col h-full bg-white p-8 rounded-[2rem] border border-zinc-100 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 ${service.popular ? 'border-accent/40 ring-1 ring-accent/20 bg-gradient-to-b from-accent/[0.02] to-transparent' : ''}`}
    >
      {service.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-md">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h2>
        <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
      </div>

      <div className="space-y-3 mb-8">
        <div className="flex justify-between items-center py-2.5 border-b border-zinc-50">
          <span className="text-sm text-zinc-600">Small Vehicle</span>
          <span className="font-bold text-zinc-900">{service.pricing.small}</span>
        </div>
        <div className="flex justify-between items-center py-2.5 border-b border-zinc-50">
          <span className="text-sm text-zinc-600">Medium Vehicle</span>
          <span className="font-bold text-zinc-900">{service.pricing.medium}</span>
        </div>
        <div className="flex justify-between items-center py-2.5 border-b border-zinc-50">
          <span className="text-sm text-zinc-600">Large Vehicle</span>
          <span className="font-bold text-zinc-900">{service.pricing.large}</span>
        </div>
        <div className="flex justify-between items-center py-2.5">
          <span className="text-sm text-zinc-600">Extra Large</span>
          <span className="font-bold text-zinc-900">{service.pricing.xl}</span>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3.5 px-5 bg-zinc-50 rounded-xl text-sm font-semibold transition-colors duration-300 hover:bg-zinc-100 mb-6"
      >
        What's included?
        {isOpen ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden space-y-3.5 mb-6"
          >
            {service.inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6">
        <p className="text-[11px] text-zinc-400 mb-5 italic text-center">
          Fleet vehicles or multi-vehicle discount available
        </p>
        <a href="#contact" className="block w-full text-center py-4 rounded-xl bg-zinc-900 text-white font-bold hover:bg-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
          Select Package
        </a>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Full Detail (Most Popular)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          phone_number: formData.phone,
          service_required: formData.service,
          message: formData.message,
          to_name: 'JL Detailing',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', service: 'Full Detail (Most Popular)', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "JL Detailing",
          "image": "https://jldetailing.co.nz/logo.png",
          "telephone": "021 025 71133",
          "email": "jlautodetailingnz@gmail.com",
          "url": "https://jldetailing.co.nz",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Christchurch",
            "addressRegion": "Canterbury",
            "addressCountry": "NZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-43.5320",
            "longitude": "172.6362"
          },
          "priceRange": "$$",
          "description": "Professional mobile car detailing, car valet service, interior cleaning, and paint protection in Christchurch and Canterbury.",
          "areaServed": [
            {
              "@type": "City",
              "name": "Christchurch"
            },
            {
              "@type": "State",
              "name": "Canterbury"
            }
          ],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Saturday", "Sunday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/jldetailingnz",
            "https://www.instagram.com/jldetailingnz"
          ]
        })}
      </script>

      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-[160px] pb-[120px] bg-white overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left Column: 40% */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-[40%] flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 mb-6 bg-zinc-50 border border-zinc-200 rounded-full px-4 py-2 shadow-sm">
                <span className="text-yellow-500">⭐</span>
                <span>5.0 rating from Canterbury customers</span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold leading-[1.05] mb-6 tracking-tight text-zinc-900">
                Mobile Car Detailing <br />
                <span className="text-accent mt-2 block tracking-tight">Christchurch.</span>
              </h1>

              <p className="text-lg lg:text-xl text-zinc-500 mb-10 leading-relaxed font-medium">
                Professional mobile car detailing and valet service delivered to your driveway anywhere in Canterbury.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="#services" className="bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  Book a Detail <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a href="tel:02102571133" className="bg-white text-zinc-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 border-2 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-md hover:-translate-y-1">
                  <Phone className="w-4 h-4 mr-1" /> Call 021 025 71133
                </a>
              </div>
            </motion.div>

            {/* Right Column: 60% */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-[60%] relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] aspect-[4/3] lg:aspect-auto lg:h-[540px] w-full max-w-2xl mx-auto lg:max-w-[800px] bg-zinc-100 ring-1 ring-zinc-200/50 flex">
                <img
                  src={work9}
                  alt="Professional mobile car detailing service on driveway"
                  className="w-full h-full object-cover object-center block"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </header>

      {/* How It Works */}
      <section id="how-it-works" className="bg-zinc-900 text-white py-24 lg:py-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-5 tracking-tight">The Seamless Process</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">Professional results without the hassle. Here is how we get your car looking its best.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-7 h-7" />,
                title: "Choose a Service",
                desc: "Select your detailing package and any extras you need when booking."
              },
              {
                icon: <MapPin className="w-7 h-7" />,
                title: "We Come to You",
                desc: "Mobile detailing throughout Canterbury. (Surcharge applies >10km from central Christchurch)"
              },
              {
                icon: <ShieldCheck className="w-7 h-7" />,
                title: "Pay After the Job",
                desc: "Your satisfaction is guaranteed. Pay only once the work is complete and you are happy."
              }
            ].map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                key={idx}
                className="relative group bg-white/5 p-10 rounded-[2rem] border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="mb-8 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white/80 group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Service Areas */}
      <section className="py-24 lg:py-32 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-5 tracking-tight">Mobile Service Areas</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We provide professional mobile car detailing in Christchurch, servicing the entire Canterbury region directly at your home or workplace.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm font-semibold text-zinc-300">
            {['Christchurch Central', 'Rolleston & Lincoln', 'Rangiora & Kaiapoi', 'Lyttelton & Surrounds'].map((area, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={idx}
                className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm shadow-xl shadow-black/10"
              >
                {area}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-zinc-50/50 border-t border-zinc-100/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-5 tracking-tight">Car Detailing Services</h2>
              <p className="text-zinc-500 max-w-xl text-lg">Transparent pricing for every vehicle size. Choose the level of care your car deserves.</p>
            </div>
            <div className="flex items-center gap-4 text-sm font-semibold text-zinc-600 bg-white shadow-sm border border-zinc-100 px-4 py-3 rounded-xl">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> Available Sat & Sun</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="py-24 lg:py-32 bg-white border-t border-zinc-100/50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">Service Add-ons</h2>
              <p className="text-zinc-500 mb-8 leading-relaxed text-lg">
                Customise your detail with our specialised extras. From headlight restoration to deep carpet shampooing, we handle the tough jobs.
              </p>

              <div className="space-y-4">
                <div className="p-5 bg-accent/5 border border-accent/10 rounded-2xl flex items-start gap-4 shadow-sm">
                  <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    <span className="font-bold text-zinc-900">Note:</span> Pet hair removal and heavily soiled vehicles may incur an additional cost. Any extra charges will always be discussed and confirmed before starting.
                  </p>
                </div>
                <div className="p-5 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-start gap-4 shadow-sm">
                  <Droplets className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    Surcharge applies for jobs more than 10km outside central Christchurch.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-zinc-100 overflow-hidden"
            >
              <div className="p-8 bg-zinc-900 text-white">
                <h3 className="font-bold text-lg">Available Extras</h3>
              </div>
              <div className="divide-y divide-zinc-50">
                {EXTRAS.map((extra, idx) => (
                  <div key={idx} className="p-5 flex justify-between items-center hover:bg-zinc-50/80 transition-colors group">
                    <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">{extra.name}</span>
                    <span className="text-sm font-bold text-accent">{extra.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 lg:py-32 bg-zinc-50/50 border-t border-zinc-100/50 overflow-hidden">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">What Our Clients Say</h2>
            <div className="flex justify-center gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />)}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-10 bg-white rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 relative group flex flex-col"
              >
                <div className="absolute top-10 right-10 text-zinc-100 group-hover:text-accent/10 transition-colors duration-500">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.89543 1.89543 3 3 3H6C8.20914 3 10 4.79086 10 7V15C10 18.3137 7.31371 21 4 21H1Z" /></svg>
                </div>
                <p className="text-zinc-600 italic mb-8 leading-relaxed relative z-10 text-lg flex-grow">"{review.text}"</p>
                <div className="font-bold text-zinc-900 mt-auto flex items-center gap-3 tracking-snug">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  {review.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 bg-white border-t border-zinc-100/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-5 tracking-tight">Our Work</h2>
              <p className="text-zinc-500 text-lg max-w-xl">Exceptional results across Canterbury. See the transformation for yourself.</p>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold bg-zinc-50 hover:bg-zinc-100 px-6 py-3 rounded-xl transition-colors border border-zinc-200">
              <Instagram className="w-4 h-4" /> Follow on Instagram
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {GALLERY_ITEMS.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                key={idx}
                className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-sm bg-zinc-100 ring-1 ring-zinc-200/50"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-xl">
                    <Sparkles className="text-accent w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-zinc-50/50 border-t border-zinc-100/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold mb-12 text-center tracking-tight"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  q: "What areas do you cover?",
                  a: "We provide mobile car detailing throughout the Canterbury region. A small surcharge applies for jobs more than 10km outside central Christchurch."
                },
                {
                  q: "Do I need to provide anything?",
                  a: "We are fully mobile, but we do require access to a power point and a water tap at your location to perform our detailing services."
                },
                {
                  q: "How long does a full detail take?",
                  a: "A Full Detail typically takes between 3 to 5 hours depending on the size and condition of the vehicle."
                },
                {
                  q: "When can I book?",
                  a: "We are available for bookings on Saturdays and Sundays. We recommend booking at least a week in advance to secure your preferred slot."
                }
              ].map((faq, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="p-8 bg-white rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="font-bold text-lg mb-3 tracking-snug">{faq.q}</h3>
                  <p className="text-zinc-600 text-[15px] leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-white relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] ring-1 ring-white/10"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-20 text-white">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight tracking-tight">Ready for a <br /><span className="text-accent">Showroom Finish?</span></h2>
                <p className="text-zinc-400 mb-10 text-lg leading-relaxed">Book your mobile detail today. We operate Saturdays and Sundays across the Canterbury region.</p>

                <div className="space-y-8">
                  <a href="tel:02102571133" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:scale-105 transition-all duration-300 ring-1 ring-white/10 group-hover:ring-accent/50">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1.5">Call or Text</div>
                      <div className="text-xl font-bold tracking-tight">021 025 71133</div>
                    </div>
                  </a>

                  <a href="mailto:jlautodetailingnz@gmail.com" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:scale-105 transition-all duration-300 ring-1 ring-white/10 group-hover:ring-accent/50">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1.5">Email Us</div>
                      <div className="text-base sm:text-lg lg:text-xl font-bold break-all sm:break-normal tracking-tight">jlautodetailingnz@gmail.com</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 pt-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 ring-1 ring-white/10 hover:ring-transparent">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-110 transition-all duration-300 ring-1 ring-white/10 hover:ring-transparent">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-10 lg:p-20 border-t lg:border-t-0 lg:border-l border-white/5 backdrop-blur-md">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Full Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 placeholder:text-zinc-600" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Phone Number</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 placeholder:text-zinc-600" placeholder="021..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Service Required</label>
                    <div className="relative">
                      <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 appearance-none">
                        <option className="bg-zinc-900">Full Detail (Most Popular)</option>
                        <option className="bg-zinc-900">Deluxe Interior Detail</option>
                        <option className="bg-zinc-900">Deluxe Exterior Detail</option>
                        <option className="bg-zinc-900">Other / Custom</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Message / Location</label>
                    <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 placeholder:text-zinc-600 resize-none" placeholder="Tell us about your vehicle and location..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-accent text-white py-4 rounded-xl font-bold hover:bg-accent-dark transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--color-accent),0.3)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </button>

                  {submitStatus === 'success' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-400 text-sm">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      Message sent successfully! We will be in touch shortly.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm font-medium">
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center font-bold">!</div>
                      Failed to send message. Please check your connection or try calling us instead.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-50 py-12 border-t border-zinc-100">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <a href="#" className="flex items-center">
              <img src={logo} alt="JL Detailing" className="h-16 md:h-20 w-auto object-contain rounded-xl" />
            </a>

            <p className="text-zinc-500 text-sm text-center">
              Professional mobile car detailing across Canterbury. <br className="sm:hidden" />
              © {new Date().getFullYear()} JL Detailing. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="text-zinc-400 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
