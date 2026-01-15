import { Calculator, TrendingUp, Users, FileText, PieChart, Shield, CheckCircle2, ArrowRight, Clock, Target, Lightbulb, Award } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';
import { ServiceStructuredData } from '../components/StructuredData';
import { AnimatedSection } from '../components/AnimatedSection';
import { StaggerContainer, StaggerItem } from '../components/StaggerContainer';
import { ParallaxSection } from '../components/ParallaxSection';

export function Services() {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Advisory & Planning',
      description: 'Strategic tax planning to minimize liabilities and maximize opportunities. Our experts stay current with tax law changes to ensure optimal compliance and savings.',
      features: [
        'Tax compliance and filing',
        'Tax planning strategies',
        'International tax services',
        'Tax dispute resolution',
      ],
      image: 'https://images.unsplash.com/photo-1762151662378-f40e20901824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBwcmVwYXJhdGlvbiUyMGRvY3VtZW50c3xlbnwxfHx8fDE3Njg0NDIzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: TrendingUp,
      title: 'Financial Planning',
      description: 'Comprehensive financial planning services to help you achieve your long-term business objectives and personal financial goals.',
      features: [
        'Strategic financial planning',
        'Cash flow management',
        'Investment advisory',
        'Retirement planning',
      ],
      image: 'https://images.unsplash.com/photo-1758686254415-9348b5b5df01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50JTIwcGxhbm5pbmclMjBmaW5hbmNlfGVufDF8fHx8MTc2ODQ0MjM4MHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Users,
      title: 'Business Consulting',
      description: 'Expert guidance to optimize operations, improve profitability, and drive sustainable growth in today\'s competitive landscape.',
      features: [
        'Business strategy development',
        'Performance improvement',
        'Process optimization',
        'M&A advisory',
      ],
      image: 'https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3Njg0MTE0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Shield,
      title: 'Audit & Assurance',
      description: 'Independent audit services providing stakeholders with confidence in your financial reporting and internal controls.',
      features: [
        'Financial statement audits',
        'Internal audit services',
        'SOC compliance',
        'Risk assessment',
      ],
      image: 'https://images.unsplash.com/photo-1765868017186-18a3fc4c2942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwZmluYW5jaWFsJTIwcmVjb3Jkc3xlbnwxfHx8fDE3Njg0NDIzODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: FileText,
      title: 'Compliance Services',
      description: 'Stay compliant with complex regulatory requirements across multiple jurisdictions with our comprehensive compliance support.',
      features: [
        'Regulatory compliance',
        'Corporate governance',
        'Compliance monitoring',
        'Policy development',
      ],
      image: 'https://images.unsplash.com/photo-1759429084833-334282cbd58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3RhdGUlMjBwbGFubmluZyUyMGRvY3VtZW50c3xlbnwxfHx8fDE3Njg0MDk2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: PieChart,
      title: 'Management Reporting',
      description: 'Clear, actionable insights through customized financial reporting that drives informed business decisions.',
      features: [
        'Financial reporting',
        'KPI dashboards',
        'Budgeting & forecasting',
        'Performance analytics',
      ],
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzY4MzcxMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Accounting & Tax Services in Sarasota, Venice & Bradenton, FL"
        description="Expert accounting, tax planning, business consulting, and financial advisory services for Sarasota County businesses and individuals. Serving Venice, Sarasota, Bradenton, and North Port, Florida."
        keywords="accountant Sarasota, CPA Venice Florida, tax services Bradenton, business consulting Sarasota County, financial advisor Venice FL, bookkeeping Sarasota, tax planning Southwest Florida, audit services Sarasota, accounting firm Venice"
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
          <div className="max-w-3xl">
            <AnimatedSection delay={0.1}>
              <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
                Our Services
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h1 className="font-garamond text-4xl md:text-5xl font-bold mt-4 mb-6">
                Your Financial Clarity Partner in Sarasota & Southwest Florida
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="font-jost text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                More than accounting and tax services—we're your strategic partner for financial clarity and peace of mind. 
                Serving business owners and individuals across Sarasota County, from Venice to Bradenton and North Port, 
                we deliver consultative guidance that goes beyond the numbers to help you make confident, informed decisions 
                about your financial future.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    className="group relative h-[450px] rounded-lg overflow-hidden cursor-pointer shadow-lg"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Image Layer - visible by default, fades out on hover */}
                    <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#092942]/90 via-[#092942]/40 to-transparent"></div>
                      
                      {/* Title on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="w-14 h-14 bg-[#F6921E] rounded-lg flex items-center justify-center mb-4">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="font-garamond text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Layer - hidden by default, appears on hover */}
                    <div className="absolute inset-0 bg-white p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div>
                        <motion.div 
                          className="w-14 h-14 bg-[#F6921E] rounded-lg flex items-center justify-center mb-6"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                        
                        <h3 className="font-garamond text-2xl font-bold text-[#092942] mb-4">
                          {service.title}
                        </h3>
                        
                        <p className="font-jost text-[#949599] leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>
                      
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#F6921E] mt-0.5 flex-shrink-0" />
                            <span className="font-jost text-sm text-[#092942]">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#092942] text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F6921E] rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F6921E] rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7.5
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
              The FixPoint Commitment
            </span>
            <h2 className="font-garamond text-3xl md:text-4xl font-bold mt-4 mb-4">
              What You Can Expect From Us
            </h2>
            <p className="font-jost text-lg text-white/80 max-w-2xl mx-auto">
              More than promises—these are the tangible commitments we make to every client.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left side - Main commitments */}
            <StaggerContainer className="space-y-6" staggerDelay={0.1}>
              {[
                {
                  icon: Clock,
                  title: '24-Hour Response Time',
                  description: 'Critical questions get answered within 24 hours. Not an automated reply—a real solution from your dedicated team.',
                  metric: '< 24hrs'
                },
                {
                  icon: Target,
                  title: 'Quarterly Strategy Sessions',
                  description: 'Proactive reviews to identify tax savings opportunities, financial optimizations, and strategic planning—not just year-end scrambles.',
                  metric: '4x/year'
                },
                {
                  icon: Lightbulb,
                  title: 'Actionable Insights',
                  description: 'Every report comes with clear recommendations. We don\'t just show you numbers—we tell you what they mean and what to do next.',
                  metric: '100%'
                },
                {
                  icon: Award,
                  title: 'Transparent Pricing',
                  description: 'No hidden fees, no surprise bills. You\'ll know exactly what you\'re paying for before we start working together.',
                  metric: '$0 hidden'
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="group backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                      whileHover={{ x: 10, borderColor: 'rgba(246, 146, 30, 0.5)' }}
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-[#F6921E] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-garamond text-xl font-bold text-white">
                              {item.title}
                            </h4>
                            <span className="font-inter text-2xl font-bold text-[#F6921E] ml-4">
                              {item.metric}
                            </span>
                          </div>
                          <p className="font-jost text-sm text-white/70 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Right side - Client Promise */}
            <AnimatedSection delay={0.3} className="lg:pl-8">
              <div className="bg-gradient-to-br from-[#F6921E]/20 to-transparent border border-[#F6921E]/30 rounded-lg p-8 h-full flex flex-col justify-center">
                <h3 className="font-garamond text-2xl font-bold mb-6 text-white">
                  Our Client Promise
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      label: 'Clear Communication',
                      detail: 'Financial jargon translated into plain English'
                    },
                    {
                      label: 'Year-Round Support',
                      detail: 'We\'re here in July just as much as in April'
                    },
                    {
                      label: 'Dedicated Team',
                      detail: 'You\'ll always know who to call and they\'ll know your business'
                    },
                    {
                      label: 'Continuous Improvement',
                      detail: 'We actively look for ways to save you time and money'
                    },
                    {
                      label: 'Technology Enabled',
                      detail: 'Secure portals, digital signatures, and real-time dashboards'
                    }
                  ].map((promise, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-[#F6921E] rounded-full mt-2"></div>
                      <div>
                        <div className="font-inter font-semibold text-white mb-1">
                          {promise.label}
                        </div>
                        <div className="font-jost text-sm text-white/70">
                          {promise.detail}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 pt-8 border-t border-white/20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="font-jost italic text-white/80 text-center">
                    "We measure our success by your peace of mind and financial clarity."
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#092942] text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(246, 146, 30, 0.05), rgba(246, 146, 30, 0))'
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection delay={0.1}>
            <h2 className="font-garamond text-3xl md:text-4xl font-bold mb-6">
              Let's Discuss Your Financial Needs
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-jost text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Contact us today for a personalized consultation. Our experts are ready to help 
              you achieve your financial goals.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F6921E] hover:bg-[#d67d19] text-white font-inter"
                >
                  <Link to="/contact">
                    Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#F6921E] text-[#F6921E] hover:bg-[#F6921E] hover:text-white font-inter backdrop-blur-sm bg-white/10"
                >
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}