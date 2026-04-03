import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  BookOpen, 
  CheckCircle2, 
  Users, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  ShieldCheck,
  BarChart3,
  Smartphone
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-accent shadow-sm bg-forest-dark flex items-center justify-center">
            <BookOpen className="text-gold-accent" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg md:text-xl tracking-tight text-slate-900 leading-none">
              Coaching Zone
            </span>
            <span className="text-[10px] font-bold text-forest-dark tracking-[0.15em] uppercase mt-1">
              Coaching Academy • KPM
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-base font-medium text-slate-600 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-brand-600 text-white px-5 py-3 rounded-xl text-center font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-50/50">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={14} className="fill-brand-700" />
              Trusted by Parents in KPM
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              Personalized Learning for <span className="text-brand-600">Every Student</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Tamil, English, Hindi, Phonics, Handwriting, Abacus & Spoken English. We build strong foundations for a brighter future.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-200 active:scale-95 flex items-center gap-2"
              >
                Contact Now <ChevronRight size={20} />
              </a>
              <a 
                href="#courses" 
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all active:scale-95"
              >
                View Courses
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/student${i}/100/100`} 
                      alt="Student" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-bold text-slate-900">500+ Happy Students</div>
                <div className="text-slate-500">Improving every day</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop" 
                alt="Learning Environment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-brand-50"
            >
              <div className="w-10 h-10 bg-teal-accent/20 rounded-full flex items-center justify-center text-teal-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Success Rate</div>
                <div className="text-lg font-bold text-slate-900">98% Improved</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-brand-50"
            >
              <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                <Users size={24} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Attention</div>
                <div className="text-lg font-bold text-slate-900">1:1 Focus</div>
              </div>
            </motion.div>

            {/* Background shapes */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-200/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=500&auto=format&fit=crop" 
                  alt="Academy" 
                  className="rounded-2xl shadow-md w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-brand-600 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold mb-1">5+</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="text-3xl font-bold text-brand-600 mb-1">10+</div>
                  <div className="text-sm text-slate-500">Expert Teachers</div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500&auto=format&fit=crop" 
                  alt="Teaching" 
                  className="rounded-2xl shadow-md w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">About Our Academy</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Nurturing Young Minds with Care and Dedication
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              At Coaching Zone KPM, we believe that every child is unique and learns differently. Our academy was founded with a simple mission: to provide high-quality, personalized education that goes beyond textbooks.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Individual Attention', desc: 'Small batch sizes to ensure every student gets the focus they need.' },
                { title: 'Friendly Environment', desc: 'A warm, welcoming space where children feel safe to explore and learn.' },
                { title: 'Student Improvement', desc: 'Continuous tracking and personalized methods to ensure visible progress.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  const courses = [
    { name: 'Tamil Phonics', icon: 'அ', color: 'bg-orange-50 text-orange-600' },
    { name: 'English Phonics', icon: 'A', color: 'bg-blue-50 text-blue-600' },
    { name: 'Tamil Handwriting', icon: '✍️', color: 'bg-green-50 text-green-600' },
    { name: 'English Handwriting', icon: '🖋️', color: 'bg-purple-50 text-purple-600' },
    { name: 'Hindi Phonics', icon: 'अ', color: 'bg-red-50 text-red-600' },
    { name: 'Grammar & Spoken English', icon: '🗣️', color: 'bg-brand-50 text-brand-600' },
    { name: 'Abacus', icon: '🧮', color: 'bg-teal-50 text-teal-600' },
    { name: 'Teacher Training', icon: '🎓', color: 'bg-slate-100 text-slate-600' },
  ];

  return (
    <section id="courses" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Specialized Courses for Holistic Growth
          </h2>
          <p className="text-slate-500">
            Choose from our wide range of courses designed to improve language, cognitive, and creative skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 transition-transform group-hover:scale-110", course.color)}>
                {course.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{course.name}</h3>
              <p className="text-slate-500 text-sm mb-6">
                Comprehensive curriculum focused on practical skills and deep understanding.
              </p>
              <a href="#contact" className="text-brand-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { 
      title: 'Individual Attention', 
      desc: 'We limit our batch sizes to ensure every child receives the personal guidance they deserve.',
      icon: <Users className="text-brand-600" size={28} />
    },
    { 
      title: 'Experienced Teaching', 
      desc: 'Our educators are passionate professionals with years of experience in child development.',
      icon: <Star className="text-brand-600" size={28} />
    },
    { 
      title: 'Progress Tracking', 
      desc: 'Regular assessments and detailed reports to keep you updated on your child\'s improvement.',
      icon: <BarChart3 className="text-brand-600" size={28} />
    },
    { 
      title: 'Parent Communication', 
      desc: 'Direct access to teachers and regular updates through our smart management system.',
      icon: <MessageCircle className="text-brand-600" size={28} />
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            The Best Learning Experience for Your Child
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 bg-brand-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                {React.cloneElement(feature.icon as React.ReactElement, { 
                  className: "transition-colors duration-300 group-hover:text-white" 
                })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SystemSection = () => {
  return (
    <section className="section-padding bg-brand-900 text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-accent/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-300 font-bold tracking-widest uppercase text-sm mb-4 block">Modern Academy</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Smart System for Student Management
            </h2>
            
            <div className="space-y-8">
              {[
                { 
                  title: 'Attendance Tracking', 
                  desc: 'Automated attendance logs and instant notifications to parents when students arrive.',
                  icon: <Clock size={24} />
                },
                { 
                  title: 'Fee Management', 
                  desc: 'Easy digital tracking of fees, receipts, and automated reminders for convenience.',
                  icon: <ShieldCheck size={24} />
                },
                { 
                  title: 'Parent Updates', 
                  desc: 'Real-time updates on student performance, homework, and academy announcements.',
                  icon: <Smartphone size={24} />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-300 border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-brand-100/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-4 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="Management System Mockup" 
                className="rounded-2xl w-full shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay stats card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-medium">Monthly Progress</div>
                  <div className="text-slate-900 font-bold text-xl">+24% Growth</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Start Your Child's Journey Today
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed">
              Have questions about our courses or enrollment process? Feel free to reach out to us. We're here to help!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Call Us</div>
                  <div className="text-lg font-bold text-slate-900">8248800704</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Working Hours</div>
                  <div className="text-lg font-bold text-slate-900">9 AM – 8 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Location</div>
                  <div className="text-lg font-bold text-slate-900">Kanchipuram, Tamil Nadu</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/918248800704" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-green-100 transition-all active:scale-95"
              >
                <MessageCircle size={24} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Student Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter name"
                      className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Enter phone number"
                      className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Interested Course</label>
                  <select className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all appearance-none">
                    <option>Select a course</option>
                    <option>Tamil Phonics</option>
                    <option>English Phonics</option>
                    <option>Handwriting</option>
                    <option>Abacus</option>
                    <option>Spoken English</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message (Optional)</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us more about your requirements"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-brand-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-100 active:scale-[0.98]">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-accent/30 bg-white/5 flex items-center justify-center">
                <BookOpen className="text-gold-accent" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tight">
                  Coaching Zone
                </span>
                <span className="text-[10px] font-bold text-gold-accent tracking-[0.15em] uppercase">
                  Coaching Academy • KPM
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering students with personalized learning and modern tools. We focus on building strong foundations in languages and cognitive skills.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-brand-400 transition-colors">Our Courses</a></li>
              <li><a href="#features" className="hover:text-brand-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Courses</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#courses" className="hover:text-brand-400 transition-colors">Tamil & English Phonics</a></li>
              <li><a href="#courses" className="hover:text-brand-400 transition-colors">Handwriting Improvement</a></li>
              <li><a href="#courses" className="hover:text-brand-400 transition-colors">Abacus Training</a></li>
              <li><a href="#courses" className="hover:text-brand-400 transition-colors">Spoken English & Grammar</a></li>
              <li><a href="#courses" className="hover:text-brand-400 transition-colors">Teacher Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex gap-3">
                <Phone size={18} className="text-brand-500 flex-shrink-0" />
                <span>8248800704</span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-brand-500 flex-shrink-0" />
                <span>9 AM – 8 PM (Mon - Sat)</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="text-brand-500 flex-shrink-0" />
                <span>Kanchipuram, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Coaching Zone KPM. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Features />
        <SystemSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
