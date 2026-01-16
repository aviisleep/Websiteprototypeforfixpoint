import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Calculator, FileText, Users, Briefcase, MessageSquare, Home, ChevronDown, Phone, Mail, MapPin, TrendingUp, Shield, DollarSign, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Logo } from './Logo';

export function NavbarInnovative() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const services = [
    {
      icon: FileText,
      title: 'Accounting',
      description: 'Expert bookkeeping & financial management',
      href: '/services#accounting',
      color: '#092942'
    },
    {
      icon: DollarSign,
      title: 'Tax Services',
      description: 'Strategic tax planning & preparation',
      href: '/services#tax',
      color: '#F6921E'
    },
    {
      icon: TrendingUp,
      title: 'Advisory',
      description: 'Business consulting & growth strategies',
      href: '/services#advisory',
      color: '#092942'
    },
    {
      icon: Shield,
      title: 'Tax Calculator',
      description: 'Free Florida tax estimator',
      href: '/tax-calculator',
      color: '#F6921E'
    },
  ];

  const quickLinks = [
    { icon: Home, name: 'Home', href: '/' },
    { icon: Users, name: 'About Us', href: '/about' },
    { icon: Briefcase, name: 'Blog', href: '/blog' },
    { icon: MessageSquare, name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar - Contact Info */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#092942] to-[#0a3a56] text-white py-2 border-b border-[#F6921E]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-xs md:text-sm">
            <div className="flex items-center gap-4 md:gap-6">
              <motion.a 
                href="tel:+19415551234" 
                className="flex items-center gap-1.5 hover:text-[#F6921E] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-3 h-3" />
                <span className="font-inter hidden sm:inline">(941) 555-1234</span>
              </motion.a>
              <motion.a 
                href="mailto:info@fixpointcpa.com" 
                className="flex items-center gap-1.5 hover:text-[#F6921E] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-3 h-3" />
                <span className="font-inter hidden md:inline">info@fixpointcpa.com</span>
              </motion.a>
              <motion.span 
                className="flex items-center gap-1.5 text-white/70"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-3 h-3" />
                <span className="font-inter hidden lg:inline">Sarasota, FL</span>
              </motion.span>
            </div>
            
            {/* Language Toggle - Desktop */}
            <div className="hidden md:block">
              <div 
                onClick={toggleLanguage}
                className="relative flex items-center bg-white/10 backdrop-blur-sm rounded-full p-0.5 cursor-pointer w-24 h-7 border border-white/20"
              >
                <motion.div
                  className="absolute top-0.5 bottom-0.5 left-0.5 right-0.5 w-[calc(50%-0.25rem)] bg-[#F6921E] rounded-full shadow-md"
                  animate={{
                    x: language === 'en' ? 0 : 'calc(100% + 0.25rem)'
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
                
                <div className="relative z-10 flex w-full">
                  <div className="w-1/2 flex items-center justify-center">
                    <span className={`font-inter text-[10px] font-bold transition-colors duration-300 ${
                      language === 'en' ? 'text-white' : 'text-white/50'
                    }`}>
                      EN
                    </span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center">
                    <span className={`font-inter text-[10px] font-bold transition-colors duration-300 ${
                      language === 'es' ? 'text-white' : 'text-white/50'
                    }`}>
                      ES
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 shadow-lg border-b border-[#092942]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with Icon */}
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3"
              >
                <div className="relative">
                  {/* Animated circle background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#F6921E] to-[#d67d19] rounded-full opacity-10 blur-sm"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <Logo variant="icon-only" size="md" className="relative" />
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="font-garamond text-2xl font-bold text-[#092942] leading-tight">
                    FixPoint
                  </span>
                  <span className="font-inter text-[10px] uppercase tracking-wider text-[#F6921E] leading-tight">
                    Accounting & Advisory
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="relative group px-4 py-2"
                  >
                    <div className={`flex items-center gap-2 font-inter text-sm transition-colors ${
                      isActive(item.href)
                        ? 'text-[#F6921E]'
                        : 'text-[#092942] hover:text-[#F6921E]'
                    }`}>
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F6921E] to-[#d67d19]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F6921E] to-[#d67d19] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                );
              })}

              {/* Services Mega Menu */}
              <div 
                className="relative group px-4 py-2"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-2 font-inter text-sm text-[#092942] hover:text-[#F6921E] transition-colors">
                  <Briefcase className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Dropdown */}
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-[#092942]/10 overflow-hidden"
                    >
                      {/* Decorative header */}
                      <div className="bg-gradient-to-r from-[#092942] to-[#0a3a56] p-4">
                        <div className="flex items-center gap-2 text-white">
                          <Briefcase className="w-5 h-5 text-[#F6921E]" />
                          <h3 className="font-garamond text-xl font-bold">Our Services</h3>
                        </div>
                        <p className="font-jost text-xs text-white/70 mt-1">
                          Comprehensive financial solutions for your success
                        </p>
                      </div>

                      {/* Services Grid */}
                      <div className="grid grid-cols-2 gap-2 p-4">
                        {services.map((service, index) => {
                          const ServiceIcon = service.icon;
                          return (
                            <motion.div
                              key={service.title}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                to={service.href}
                                className="block p-4 rounded-xl hover:bg-[#F6921E]/5 transition-all group/item border border-transparent hover:border-[#F6921E]/20"
                              >
                                <div className="flex items-start gap-3">
                                  <div 
                                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform"
                                    style={{ backgroundColor: `${service.color}15` }}
                                  >
                                    <ServiceIcon 
                                      className="w-5 h-5" 
                                      style={{ color: service.color }}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-inter font-semibold text-[#092942] mb-1 group-hover/item:text-[#F6921E] transition-colors">
                                      {service.title}
                                    </h4>
                                    <p className="font-jost text-xs text-[#949599] leading-relaxed">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Footer CTA */}
                      <div className="bg-gradient-to-r from-[#F6921E]/10 to-transparent p-4 border-t border-[#092942]/10">
                        <Link 
                          to="/services"
                          className="flex items-center justify-center gap-2 text-[#F6921E] font-inter text-sm font-semibold hover:gap-3 transition-all"
                        >
                          <span>View All Services</span>
                          <ChevronDown className="w-4 h-4 -rotate-90" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Quick Actions Dropdown */}
              <div 
                className="hidden lg:block relative"
                onMouseEnter={() => setActiveDropdown('cta')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-gradient-to-r from-[#F6921E] to-[#d67d19] hover:from-[#d67d19] hover:to-[#F6921E] text-white font-inter shadow-lg"
                  >
                    Get Started
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${activeDropdown === 'cta' ? 'rotate-180' : ''}`} />
                  </Button>
                </motion.div>

                {/* Quick Actions Dropdown */}
                <AnimatePresence>
                  {activeDropdown === 'cta' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-2xl border border-[#092942]/10 overflow-hidden"
                    >
                      <div className="p-3 space-y-1">
                        <Link
                          to="/contact"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F6921E]/5 transition-all group"
                        >
                          <div className="w-10 h-10 bg-[#F6921E]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F6921E]/20 transition-colors">
                            <Calendar className="w-5 h-5 text-[#F6921E]" />
                          </div>
                          <div className="flex-1">
                            <div className="font-inter font-semibold text-sm text-[#092942]">
                              Schedule Consultation
                            </div>
                            <div className="font-jost text-xs text-[#949599]">
                              Book a free 30-min call
                            </div>
                          </div>
                        </Link>

                        <Link
                          to="/tax-calculator"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F6921E]/5 transition-all group"
                        >
                          <div className="w-10 h-10 bg-[#092942]/10 rounded-lg flex items-center justify-center group-hover:bg-[#092942]/20 transition-colors">
                            <Calculator className="w-5 h-5 text-[#092942]" />
                          </div>
                          <div className="flex-1">
                            <div className="font-inter font-semibold text-sm text-[#092942]">
                              Tax Calculator
                            </div>
                            <div className="font-jost text-xs text-[#949599]">
                              Estimate your taxes now
                            </div>
                          </div>
                        </Link>

                        <a
                          href="tel:+19415551234"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F6921E]/5 transition-all group"
                        >
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                            <Phone className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-inter font-semibold text-sm text-[#092942]">
                              Call Us Now
                            </div>
                            <div className="font-jost text-xs text-[#949599]">
                              (941) 555-1234
                            </div>
                          </div>
                        </a>

                        <a
                          href="mailto:info@fixpointcpa.com"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F6921E]/5 transition-all group"
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                            <Mail className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-inter font-semibold text-sm text-[#092942]">
                              Send Email
                            </div>
                            <div className="font-jost text-xs text-[#949599]">
                              Quick question?
                            </div>
                          </div>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-[#092942] text-white"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ top: '112px' }} // Below both top bars
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#092942]/90 backdrop-blur-md"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Quick Links */}
                <div>
                  <h3 className="font-inter text-xs uppercase tracking-wider text-[#949599] mb-4">
                    Navigation
                  </h3>
                  <div className="space-y-1">
                    {quickLinks.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                              isActive(item.href)
                                ? 'bg-[#F6921E]/10 text-[#F6921E]'
                                : 'text-[#092942] hover:bg-[#092942]/5'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="font-inter font-medium">{item.name}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="font-inter text-xs uppercase tracking-wider text-[#949599] mb-4">
                    Services
                  </h3>
                  <div className="space-y-2">
                    {services.map((service, index) => {
                      const ServiceIcon = service.icon;
                      return (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (quickLinks.length + index) * 0.05 }}
                        >
                          <Link
                            to={service.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block p-3 rounded-lg hover:bg-[#F6921E]/5 transition-all border border-[#092942]/10"
                          >
                            <div className="flex items-center gap-3">
                              <div 
                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: `${service.color}15` }}
                              >
                                <ServiceIcon 
                                  className="w-4 h-4" 
                                  style={{ color: service.color }}
                                />
                              </div>
                              <div>
                                <div className="font-inter font-semibold text-sm text-[#092942]">
                                  {service.title}
                                </div>
                                <div className="font-jost text-xs text-[#949599]">
                                  {service.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Language Toggle */}
                <div className="pt-6 border-t border-[#092942]/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-inter text-xs uppercase tracking-wider text-[#949599]">
                      Language
                    </h3>
                    <div 
                      onClick={toggleLanguage}
                      className="relative flex items-center bg-gray-100 rounded-full p-1 cursor-pointer w-28 h-9"
                    >
                      <motion.div
                        className="absolute top-1 bottom-1 left-1 right-1 w-[calc(50%-0.25rem)] bg-[#F6921E] rounded-full shadow-md"
                        animate={{
                          x: language === 'en' ? 0 : 'calc(100% + 0.25rem)'
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                      
                      <div className="relative z-10 flex w-full">
                        <div className="w-1/2 flex items-center justify-center">
                          <span className={`font-inter text-xs font-semibold transition-colors duration-300 ${
                            language === 'en' ? 'text-white' : 'text-[#949599]'
                          }`}>
                            EN
                          </span>
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                          <span className={`font-inter text-xs font-semibold transition-colors duration-300 ${
                            language === 'es' ? 'text-white' : 'text-[#949599]'
                          }`}>
                            ES
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[#F6921E] to-[#d67d19] hover:from-[#d67d19] hover:to-[#F6921E] text-white font-inter"
                    size="lg"
                  >
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}