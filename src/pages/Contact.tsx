import { useState } from 'react';
import { MapPin, Phone, Mail, Calendar as CalendarIcon, Send, CheckCircle2, Clock, X, ChevronLeft, ChevronRight, Video, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { SEO } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { StaggerContainer, StaggerItem } from '../components/StaggerContainer';

export function Contact() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [appointmentType, setAppointmentType] = useState<string>('');
  const [isMessageSubmitted, setIsMessageSubmitted] = useState(false);

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty slots for days before the first of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days in the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isDateAvailable = (date: Date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && day !== 0 && day !== 6; // Not Sunday (0) or Saturday (6)
  };

  const handleDateClick = (date: Date) => {
    if (isDateAvailable(date)) {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time: string) => {
    if (selectedDate) {
      setSelectedTime(time);
      setShowModal(true);
    }
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    const today = new Date();
    const prevMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
    if (prevMonthDate >= new Date(today.getFullYear(), today.getMonth())) {
      setCurrentMonth(prevMonthDate);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowModal(false);
      setSelectedDate(null);
      setSelectedTime(null);
      setAppointmentType('');
    }, 3000);
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMessageSubmitted(true);
    setTimeout(() => setIsMessageSubmitted(false), 5000);
  };

  const days = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  const appointmentTypes = [
    {
      id: 'tax-consultation',
      icon: CalendarIcon,
      title: 'Tax Consultation',
      description: 'Discuss tax strategies and planning',
      duration: '45 min',
      color: 'bg-blue-500'
    },
    {
      id: 'business-advisory',
      icon: Users,
      title: 'Business Advisory',
      description: 'Strategic business consultation',
      duration: '60 min',
      color: 'bg-purple-500'
    },
    {
      id: 'financial-review',
      icon: CalendarIcon,
      title: 'Financial Review',
      description: 'Comprehensive financial analysis',
      duration: '60 min',
      color: 'bg-green-500'
    },
    {
      id: 'virtual-meeting',
      icon: Video,
      title: 'Virtual Meeting',
      description: 'Quick online consultation',
      duration: '30 min',
      color: 'bg-[#F6921E]'
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Sarasota County', 'Florida'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(203) 921-5537', 'Mon-Fri 9am-6pm EST'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@fixpointaccounting.com', 'We reply within 24 hours'],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us - Sarasota County, Florida"
        description="Contact FixPoint Accounting & Advisory in Venice, Sarasota County, Florida. Schedule a consultation with our expert team serving Sarasota, Venice, Bradenton, North Port, and surrounding areas for accounting, tax, and advisory services."
        keywords="contact accountant Sarasota, CPA Venice Florida, tax advisor Bradenton, financial advisor North Port, accountant Sarasota County"
        ogImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop"
      />
      
      {/* Hero Section */}
      <section className="bg-[#092942] text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, #F6921E, transparent)',
            opacity: 0.1
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="max-w-3xl">
            <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
              Get in Touch
            </span>
            <h1 className="font-garamond text-4xl md:text-5xl font-bold mt-4 mb-6">
              Schedule Your Free Consultation Today
            </h1>
            <p className="font-jost text-lg text-white/80 leading-relaxed">
              Serving businesses and individuals across Southwest Florida—from Venice to Sarasota, Bradenton to North Port. 
              Book your appointment in seconds with our interactive calendar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b border-[#092942]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* How Would You Like to Connect? */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-garamond text-3xl font-bold text-[#092942] mb-3">
              How Would You Like to Connect?
            </h2>
            <p className="font-jost text-[#949599]">
              Choose the best way to reach us based on your needs
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Emergency Contact - Fast */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute -top-3 -right-3 z-10">
                <span className="bg-red-500 text-white text-xs font-inter font-bold px-3 py-1 rounded-full">
                  Fastest
                </span>
              </div>
              <Card className="border-2 border-[#092942]/10 hover:border-[#F6921E] transition-all h-full overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="font-inter text-xs text-[#949599] uppercase">Response Time</div>
                      <div className="font-garamond text-2xl font-bold text-[#092942]">Immediate</div>
                    </div>
                  </div>
                  
                  <h3 className="font-garamond text-2xl font-bold text-[#092942] mb-3">
                    Need Help Now?
                  </h3>
                  <p className="font-jost text-sm text-[#949599] mb-6">
                    Speak directly with our team for urgent matters or quick questions
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="font-inter text-xs text-[#949599] mb-1">Main Office</div>
                      <a href="tel:+13055550100" className="font-jost font-semibold text-[#092942] text-lg hover:text-[#F6921E] transition-colors">
                        +1 (305) 555-0100
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-[#F6921E]" />
                      <span className="font-jost text-[#949599]">Mon-Fri: 9am-6pm EST</span>
                    </div>
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
                  >
                    <a href="tel:+13055550100">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Schedule Meeting - Recommended */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute -top-3 -right-3 z-10">
                <span className="bg-[#F6921E] text-white text-xs font-inter font-bold px-3 py-1 rounded-full">
                  Recommended
                </span>
              </div>
              <Card className="border-2 border-[#F6921E] shadow-xl h-full overflow-hidden relative">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F6921E]/5 to-transparent pointer-events-none" />
                
                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F6921E] to-[#d67d19] rounded-xl flex items-center justify-center shadow-lg">
                      <CalendarIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="font-inter text-xs text-[#949599] uppercase">Response Time</div>
                      <div className="font-garamond text-2xl font-bold text-[#092942]">Same Day</div>
                    </div>
                  </div>
                  
                  <h3 className="font-garamond text-2xl font-bold text-[#092942] mb-3">
                    Book a Consultation
                  </h3>
                  <p className="font-jost text-sm text-[#949599] mb-6">
                    Schedule a dedicated time with our experts to discuss your needs in detail
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F6921E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#F6921E]" />
                      </div>
                      <span className="font-jost text-sm text-[#092942]">Free 30-minute consultation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F6921E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#F6921E]" />
                      </div>
                      <span className="font-jost text-sm text-[#092942]">In-person or virtual options</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F6921E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#F6921E]" />
                      </div>
                      <span className="font-jost text-sm text-[#092942]">Calendar invite sent instantly</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => {
                      document.querySelector('#appointment-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-[#F6921E] hover:bg-[#d67d19] text-white shadow-lg"
                  >
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    View Calendar
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Send Message - Detailed */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute -top-3 -right-3 z-10">
                <span className="bg-blue-500 text-white text-xs font-inter font-bold px-3 py-1 rounded-full">
                  Most Detailed
                </span>
              </div>
              <Card className="border-2 border-[#092942]/10 hover:border-blue-500 transition-all h-full overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="font-inter text-xs text-[#949599] uppercase">Response Time</div>
                      <div className="font-garamond text-2xl font-bold text-[#092942]">&lt; 24hrs</div>
                    </div>
                  </div>
                  
                  <h3 className="font-garamond text-2xl font-bold text-[#092942] mb-3">
                    Email Your Questions
                  </h3>
                  <p className="font-jost text-sm text-[#949599] mb-6">
                    Send us a detailed message and get a comprehensive response from our team
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="font-inter text-xs text-[#949599] mb-1">Email Address</div>
                      <a href="mailto:info@fixpoint.com" className="font-jost font-semibold text-[#092942] hover:text-[#F6921E] transition-colors break-all">
                        info@fixpoint.com
                      </a>
                    </div>
                    <div>
                      <div className="font-inter text-xs text-[#949599] mb-1">Best For</div>
                      <div className="font-jost text-sm text-[#092942]">
                        Complex questions, document sharing, non-urgent matters
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={() => {
                      document.querySelector('#message-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Florida Locations Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Card className="border-[#092942]/10 bg-gradient-to-r from-[#092942] to-[#092942]/90 text-white overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-8 h-8 text-[#F6921E]" />
                      <div>
                        <h3 className="font-garamond text-2xl font-bold">Serving All of Florida</h3>
                        <p className="font-jost text-sm text-white/70">Multiple locations to serve you better</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { city: 'Venice', zip: 'FL 34285' },
                      { city: 'Sarasota', zip: 'FL 34236' },
                      { city: 'Bradenton', zip: 'FL 34205' },
                      { city: 'North Port', zip: 'FL 34287' }
                    ].map((location) => (
                      <motion.div
                        key={location.city}
                        whileHover={{ scale: 1.05 }}
                        className="backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:border-[#F6921E] transition-all cursor-pointer"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      >
                        <div className="font-inter font-semibold text-sm">{location.city}</div>
                        <div className="font-jost text-xs text-white/70">{location.zip}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Appointment Booking Section - INNOVATIVE DESIGN */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="appointment-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
              Book Your Appointment
            </span>
            <h2 className="font-garamond text-3xl md:text-4xl font-bold text-[#092942] mt-4 mb-4">
              Choose Your Appointment Type
            </h2>
            <p className="font-jost text-lg text-[#949599] max-w-2xl mx-auto">
              Select the service that best fits your needs, then pick a convenient date and time
            </p>
          </AnimatedSection>

          {/* Appointment Types */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {appointmentTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <StaggerItem key={type.id}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className={`border-2 cursor-pointer transition-all h-full ${
                        appointmentType === type.id 
                          ? 'border-[#F6921E] shadow-xl bg-[#F6921E]/5' 
                          : 'border-transparent hover:border-[#F6921E]/30 hover:shadow-lg'
                      }`}
                      onClick={() => setAppointmentType(type.id)}
                    >
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mb-4`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-garamond text-xl font-bold text-[#092942] mb-2">
                          {type.title}
                        </h3>
                        <p className="font-jost text-sm text-[#949599] mb-3">
                          {type.description}
                        </p>
                        <div className="flex items-center text-xs text-[#F6921E]">
                          <Clock className="w-3 h-3 mr-1" />
                          {type.duration}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Calendar and Time Selection */}
          {appointmentType && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Calendar */}
                <Card className="border-[#092942]/10">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={prevMonth}
                        className="hover:bg-[#F6921E]/10 hover:text-[#F6921E]"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <h3 className="font-garamond text-2xl font-bold text-[#092942]">
                        {monthName}
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={nextMonth}
                        className="hover:bg-[#F6921E]/10 hover:text-[#F6921E]"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="space-y-2">
                      {/* Week days header */}
                      <div className="grid grid-cols-7 gap-2 mb-4">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                          <div key={day} className="text-center font-inter text-xs font-semibold text-[#949599] py-2">
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Days grid */}
                      <div className="grid grid-cols-7 gap-2">
                        {days.map((day, index) => (
                          <div key={index}>
                            {day ? (
                              <motion.button
                                whileHover={isDateAvailable(day) ? { scale: 1.1 } : {}}
                                whileTap={isDateAvailable(day) ? { scale: 0.95 } : {}}
                                onClick={() => handleDateClick(day)}
                                disabled={!isDateAvailable(day)}
                                className={`
                                  w-full aspect-square rounded-lg font-jost text-sm font-medium transition-all
                                  ${isDateAvailable(day) 
                                    ? 'hover:bg-[#F6921E] hover:text-white cursor-pointer' 
                                    : 'text-gray-300 cursor-not-allowed'
                                  }
                                  ${selectedDate?.toDateString() === day.toDateString()
                                    ? 'bg-[#F6921E] text-white shadow-lg scale-110'
                                    : 'bg-gray-50 text-[#092942]'
                                  }
                                `}
                              >
                                {day.getDate()}
                              </motion.button>
                            ) : (
                              <div className="w-full aspect-square"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-6 pt-6 border-t"
                        style={{ borderTopColor: 'rgba(9, 41, 66, 0.1)' }}
                      >
                        <p className="font-inter text-sm text-[#949599] mb-2">Selected Date:</p>
                        <p className="font-garamond text-xl font-bold text-[#092942]">
                          {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>

                {/* Time Slots */}
                <Card className="border-[#092942]/10">
                  <CardContent className="p-8">
                    <h3 className="font-garamond text-2xl font-bold text-[#092942] mb-6">
                      Available Time Slots
                    </h3>
                    {selectedDate ? (
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                          <motion.button
                            key={time}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleTimeSelect(time)}
                            className={`
                              py-3 px-4 rounded-lg font-jost text-sm font-medium transition-all
                              border-2
                              ${selectedTime === time
                                ? 'bg-[#F6921E] text-white border-[#F6921E]'
                                : 'bg-white text-[#092942] border-[#092942]/10 hover:border-[#F6921E] hover:bg-[#F6921E]/5'
                              }
                            `}
                          >
                            {time}
                          </motion.button>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <CalendarIcon className="w-16 h-16 text-[#949599]/30 mx-auto mb-4" />
                        <p className="font-jost text-[#949599]">
                          Please select a date first
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50" id="message-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
              Alternative Contact
            </span>
            <h2 className="font-garamond text-3xl md:text-4xl font-bold text-[#092942] mt-4 mb-4">
              Send Us a Message
            </h2>
            <p className="font-jost text-lg text-[#949599]">
              Prefer to send us a message? Fill out the form below
            </p>
          </AnimatedSection>

          <Card className="border-[#092942]/10">
            <CardContent className="p-8">
              {isMessageSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-garamond text-2xl font-bold text-[#092942] mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-jost text-[#949599]">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleMessageSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {appointmentTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      placeholder="Tell us about your needs..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#F6921E] hover:bg-[#d67d19] text-white font-inter"
                    size="lg"
                  >
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Appointment Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {isSubmitted ? (
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </motion.div>
                  <h3 className="font-garamond text-3xl font-bold text-[#092942] mb-4">
                    Appointment Confirmed!
                  </h3>
                  <p className="font-jost text-lg text-[#949599] mb-2">
                    {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="font-jost text-lg text-[#949599] mb-6">
                    at {selectedTime}
                  </p>
                  <p className="font-jost text-sm text-[#949599]">
                    A confirmation email has been sent to your inbox.
                  </p>
                </div>
              ) : (
                <>
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-6 border-b border-[#092942]/10">
                    <div>
                      <h3 className="font-garamond text-2xl font-bold text-[#092942]">
                        Complete Your Booking
                      </h3>
                      <p className="font-jost text-sm text-[#949599] mt-1">
                        {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowModal(false)}
                      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-[#949599]" />
                    </button>
                  </div>

                  {/* Modal Form */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="modalFirstName">First Name *</Label>
                        <Input id="modalFirstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="modalLastName">Last Name *</Label>
                        <Input id="modalLastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="modalEmail">Email *</Label>
                      <Input id="modalEmail" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="modalPhone">Phone Number *</Label>
                      <Input id="modalPhone" type="tel" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="modalCompany">Company (Optional)</Label>
                      <Input id="modalCompany" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="modalService">What would you like to discuss? *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="modalNotes">Additional Notes (Optional)</Label>
                      <Textarea 
                        id="modalNotes" 
                        rows={4}
                        placeholder="Any specific topics or questions you'd like to address?"
                      />
                    </div>

                    <div className="bg-[#F6921E]/5 border border-[#F6921E]/20 rounded-lg p-4">
                      <p className="font-jost text-sm text-[#092942]">
                        <strong>Note:</strong> You'll receive a confirmation email with a calendar invite and video meeting link (for virtual appointments).
                      </p>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-[#F6921E] hover:bg-[#d67d19] text-white"
                      >
                        Confirm Appointment
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-[#092942]/5">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-[#F6921E] mx-auto mb-4" />
            <p className="font-inter text-[#092942] font-semibold">Visit Our Sarasota County Office</p>
            <p className="font-jost text-sm text-[#949599]">123 Business Boulevard, Venice, FL 34285</p>
          </div>
        </div>
      </section>
    </div>
  );
}