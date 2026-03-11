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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center -ml-2">
          <img src={logo} alt="JL Detailing" className="h-20 md:h-24 w-auto object-contain rounded-xl" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-accent transition-colors">How it Works</a>
          <a href="#reviews" className="hover:text-accent transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:02102571133" className="hidden sm:flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            021 025 71133
          </a>
          <a href="#contact" className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-all shadow-md">
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

const ServiceCard = ({ service }: { service: Service; key?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`card relative flex flex-col h-full ${service.popular ? 'border-accent/30 ring-1 ring-accent/10' : ''}`}>
      {service.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
        <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
      </div>

      <div className="space-y-3 mb-8">
        <div className="flex justify-between items-center py-2 border-b border-zinc-50">
          <span className="text-sm text-zinc-600">Small Vehicle</span>
          <span className="font-bold">{service.pricing.small}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-zinc-50">
          <span className="text-sm text-zinc-600">Medium Vehicle</span>
          <span className="font-bold">{service.pricing.medium}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-zinc-50">
          <span className="text-sm text-zinc-600">Large Vehicle</span>
          <span className="font-bold">{service.pricing.large}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-zinc-600">Extra Large</span>
          <span className="font-bold">{service.pricing.xl}</span>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 px-4 bg-zinc-50 rounded-xl text-sm font-semibold transition-colors hover:bg-zinc-100 mb-6"
      >
        What's included?
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden space-y-3 mb-6"
          >
            {service.inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-4">
        <p className="text-[10px] text-zinc-400 mb-4 italic">
          Fleet vehicles or multi vehicle discount available
        </p>
        <a href="#contact" className="block w-full text-center py-3 rounded-xl bg-zinc-900 text-white font-semibold hover:bg-accent transition-colors shadow-sm">
          Select Package
        </a>
      </div>
    </div>
  );
};

export default function App() {
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

              <h1 className="text-5xl lg:text-6xl xl:text-[4rem] font-bold leading-[1.1] mb-6 tracking-tight text-zinc-900">
                Mobile Car Detailing <br />
                <span className="text-accent mt-2 block">Christchurch.</span>
              </h1>

              <p className="text-lg text-zinc-500 mb-10 leading-relaxed font-medium">
                Professional mobile car detailing and valet service delivered to your driveway anywhere in Canterbury.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="#services" className="bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors shadow-md">
                  Book a Detail <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:02102571133" className="bg-white text-zinc-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 transition-colors border-2 border-zinc-200 shadow-sm">
                  <Phone className="w-4 h-4" /> Call 021 025 71133
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
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] aspect-[4/3] lg:aspect-[16/10] bg-zinc-100 ring-1 ring-zinc-200/50">
                <img
                  src={work1}
                  alt="Professional mobile car detailing service on driveway"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </header>

      {/* How It Works */}
      <section id="how-it-works" className="bg-zinc-900 text-white py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">The Seamless Process</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Professional results without the hassle. Here is how we get your car looking its best.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Choose a Service",
                desc: "Select your detailing package and any extras you need when booking."
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "We Come to You",
                desc: "Mobile detailing throughout Canterbury. (Surcharge applies >10km from central Christchurch)"
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Pay After the Job",
                desc: "Your satisfaction is guaranteed. Pay only once the work is complete and you are happy."
              }
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="mb-6 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                {idx < 2 && (
                  <div className="hidden lg:block absolute top-8 -right-6 text-white/10">
                    <ArrowRight className="w-12 h-12" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Service Areas */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Mobile Service Areas</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We provide professional mobile car detailing in Christchurch, servicing the entire Canterbury region directly at your home or workplace.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm font-semibold text-zinc-300">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">Christchurch Central</div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">Rolleston & Lincoln</div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">Rangiora & Kaiapoi</div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">Lyttelton & Surrounds</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Car Detailing Services</h2>
              <p className="text-zinc-500 max-w-xl">Transparent pricing for every vehicle size. Choose the level of care your car deserves.</p>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-zinc-500 bg-zinc-50 p-2 rounded-lg">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Available Sat & Sun</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="py-24 bg-zinc-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Service Add-ons</h2>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                Customise your detail with our specialised extras. From headlight restoration to deep carpet shampooing, we handle the tough jobs.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-accent/5 border border-accent/10 rounded-xl flex items-start gap-4">
                  <Sparkles className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <p className="text-sm text-zinc-700">
                    <span className="font-bold">Note:</span> Pet hair removal and heavily soiled vehicles may incur an additional cost. Any extra charges will always be discussed and confirmed before starting.
                  </p>
                </div>
                <div className="p-4 bg-zinc-100 rounded-xl flex items-start gap-4">
                  <Droplets className="w-5 h-5 text-zinc-500 shrink-0 mt-1" />
                  <p className="text-sm text-zinc-700">
                    Surcharge applies for jobs more than 10km outside central Christchurch.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden">
              <div className="p-6 bg-zinc-900 text-white">
                <h3 className="font-bold">Available Extras</h3>
              </div>
              <div className="divide-y divide-zinc-50">
                {EXTRAS.map((extra, idx) => (
                  <div key={idx} className="p-4 flex justify-between items-center hover:bg-zinc-50 transition-colors">
                    <span className="text-sm font-medium text-zinc-700">{extra.name}</span>
                    <span className="text-sm font-bold text-accent">{extra.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 relative"
              >
                <div className="absolute top-8 right-8 text-zinc-200">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.89543 1.89543 3 3 3H6C8.20914 3 10 4.79086 10 7V15C10 18.3137 7.31371 21 4 21H1Z" /></svg>
                </div>
                <p className="text-zinc-600 italic mb-6 leading-relaxed relative z-10">"{review.text}"</p>
                <div className="font-bold text-zinc-900">— {review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-zinc-50">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Work</h2>
              <p className="text-zinc-500">Exceptional results across Canterbury. See the transformation for yourself.</p>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" /> Follow on Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            {GALLERY_ITEMS.map((item, idx) => (
              <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Sparkles className="text-accent w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
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
                <div key={idx} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="section-container">
          <div className="bg-zinc-900 rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 lg:p-20 text-white">
                <h2 className="text-3xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">Ready for a <br /><span className="text-accent">Showroom Finish?</span></h2>
                <p className="text-zinc-400 mb-8 lg:mb-12 text-base lg:text-lg">Book your mobile detail today. We operate Saturdays and Sundays across the Canterbury region.</p>

                <div className="space-y-6 lg:space-y-8">
                  <a href="tel:02102571133" className="flex items-center gap-4 lg:gap-6 group">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] lg:text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Call or Text</div>
                      <div className="text-lg lg:text-xl font-bold">021 025 71133</div>
                    </div>
                  </a>

                  <a href="mailto:jlautodetailingnz@gmail.com" className="flex items-center gap-4 lg:gap-6 group">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] lg:text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Email Us</div>
                      <div className="text-lg lg:text-xl font-bold text-sm sm:text-lg lg:text-xl break-all sm:break-normal">jlautodetailingnz@gmail.com</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 pt-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800/50 p-6 lg:p-20 border-t lg:border-t-0 lg:border-l border-white/5">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Phone Number</label>
                      <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="021..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Service Required</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                      <option className="bg-zinc-900">Full Detail (Most Popular)</option>
                      <option className="bg-zinc-900">Deluxe Interior Detail</option>
                      <option className="bg-zinc-900">Deluxe Exterior Detail</option>
                      <option className="bg-zinc-900">Other / Custom</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Message / Location</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Tell us about your vehicle and location..."></textarea>
                  </div>
                  <button className="w-full bg-accent text-white py-4 rounded-xl font-bold hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20">
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
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
