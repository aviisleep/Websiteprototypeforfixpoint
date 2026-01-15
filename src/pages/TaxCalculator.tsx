import { useState } from 'react';
import { Calculator, DollarSign, TrendingDown, Users, Building2, Info, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { SEO } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { StaggerContainer, StaggerItem } from '../components/StaggerContainer';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

type FilingStatus = 'single' | 'married' | 'head';
type TaxpayerType = 'employee' | 'self-employed' | 'business';

interface TaxResult {
  grossIncome: number;
  federalTax: number;
  socialSecurity: number;
  medicare: number;
  totalTax: number;
  netIncome: number;
  effectiveRate: number;
  stateTax: number;
}

export function TaxCalculator() {
  const [income, setIncome] = useState<string>('75000');
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [taxpayerType, setTaxpayerType] = useState<TaxpayerType>('employee');
  const [deductions, setDeductions] = useState<string>('14600');
  const [businessExpenses, setBusinessExpenses] = useState<string>('0');
  const [result, setResult] = useState<TaxResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  // 2024 Federal Tax Brackets
  const taxBrackets = {
    single: [
      { min: 0, max: 11600, rate: 0.10 },
      { min: 11600, max: 47150, rate: 0.12 },
      { min: 47150, max: 100525, rate: 0.22 },
      { min: 100525, max: 191950, rate: 0.24 },
      { min: 191950, max: 243725, rate: 0.32 },
      { min: 243725, max: 609350, rate: 0.35 },
      { min: 609350, max: Infinity, rate: 0.37 },
    ],
    married: [
      { min: 0, max: 23200, rate: 0.10 },
      { min: 23200, max: 94300, rate: 0.12 },
      { min: 94300, max: 201050, rate: 0.22 },
      { min: 201050, max: 383900, rate: 0.24 },
      { min: 383900, max: 487450, rate: 0.32 },
      { min: 487450, max: 731200, rate: 0.35 },
      { min: 731200, max: Infinity, rate: 0.37 },
    ],
    head: [
      { min: 0, max: 16550, rate: 0.10 },
      { min: 16550, max: 63100, rate: 0.12 },
      { min: 63100, max: 100500, rate: 0.22 },
      { min: 100500, max: 191950, rate: 0.24 },
      { min: 191950, max: 243700, rate: 0.32 },
      { min: 243700, max: 609350, rate: 0.35 },
      { min: 609350, max: Infinity, rate: 0.37 },
    ],
  };

  const calculateFederalTax = (taxableIncome: number, status: FilingStatus): number => {
    const brackets = taxBrackets[status];
    let tax = 0;

    for (let i = 0; i < brackets.length; i++) {
      const bracket = brackets[i];
      const prevMax = i > 0 ? brackets[i - 1].max : 0;

      if (taxableIncome > bracket.min) {
        const taxableInBracket = Math.min(taxableIncome, bracket.max) - bracket.min;
        tax += taxableInBracket * bracket.rate;
      }
    }

    return tax;
  };

  const calculateTaxes = () => {
    const grossIncome = parseFloat(income) || 0;
    const deductionAmount = parseFloat(deductions) || 0;
    const businessExpenseAmount = parseFloat(businessExpenses) || 0;

    let adjustedIncome = grossIncome;
    
    // For self-employed, subtract business expenses
    if (taxpayerType === 'self-employed' || taxpayerType === 'business') {
      adjustedIncome = grossIncome - businessExpenseAmount;
    }

    const taxableIncome = Math.max(0, adjustedIncome - deductionAmount);
    const federalTax = calculateFederalTax(taxableIncome, filingStatus);

    // Social Security (6.2% up to $168,600 for 2024)
    const socialSecurityWageBase = 168600;
    const socialSecurityRate = taxpayerType === 'self-employed' ? 0.124 : 0.062;
    const socialSecurity = Math.min(adjustedIncome, socialSecurityWageBase) * socialSecurityRate;

    // Medicare (1.45% for employees, 2.9% for self-employed)
    const medicareRate = taxpayerType === 'self-employed' ? 0.029 : 0.0145;
    let medicare = adjustedIncome * medicareRate;

    // Additional Medicare tax (0.9% on income over threshold)
    const medicareThreshold = filingStatus === 'married' ? 250000 : 200000;
    if (adjustedIncome > medicareThreshold) {
      medicare += (adjustedIncome - medicareThreshold) * 0.009;
    }

    // Florida has NO state income tax!
    const stateTax = 0;

    const totalTax = federalTax + socialSecurity + medicare + stateTax;
    const netIncome = grossIncome - totalTax;
    const effectiveRate = (totalTax / grossIncome) * 100;

    const calculatedResult: TaxResult = {
      grossIncome,
      federalTax,
      socialSecurity,
      medicare,
      totalTax,
      netIncome,
      effectiveRate,
      stateTax,
    };

    setResult(calculatedResult);
    setShowResult(true);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const chartData = result
    ? [
        { name: 'Federal Tax', value: result.federalTax, color: '#092942' },
        { name: 'Social Security', value: result.socialSecurity, color: '#F6921E' },
        { name: 'Medicare', value: result.medicare, color: '#949599' },
        { name: 'Take Home', value: result.netIncome, color: '#10b981' },
      ]
    : [];

  return (
    <div className="min-h-screen relative">
      <SEO
        title="Free Florida Tax Calculator 2024 - Estimate Your Federal Taxes"
        description="Calculate your federal income taxes with our free Florida tax calculator. Get instant estimates for W-2 employees, self-employed, and small businesses in Sarasota, Venice, Bradenton & Southwest Florida."
        keywords="Florida tax calculator, income tax calculator Florida, tax estimator Sarasota, federal tax calculator Venice FL, self-employed tax calculator Florida, small business tax estimate Bradenton"
        ogImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#092942] via-[#092942] to-[#0a3a56] text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#F6921E] rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#F6921E] rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-[#F6921E]/20 backdrop-blur-sm border border-[#F6921E]/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#F6921E]" />
                <span className="font-inter text-sm text-[#F6921E] font-semibold">
                  Free Tax Calculator • 2024 Tax Estimator • No Registration Required
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="font-garamond text-4xl md:text-6xl font-bold mb-6">
                Free Florida Income Tax Calculator 2024
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="font-jost text-xl text-white/90 leading-relaxed mb-4">
                <strong className="text-white">Calculate your federal income taxes instantly</strong> with our free online tax calculator. 
                Perfect for W-2 employees, self-employed individuals, and small business owners in Florida.
              </p>
              <p className="font-jost text-lg text-white/80 leading-relaxed mb-8">
                Florida residents enjoy <span className="text-[#F6921E] font-bold">$0 state income tax</span> — 
                use our tax estimator to see how much you save compared to other states. 
                Serving <strong className="text-white">Sarasota, Venice, Bradenton, North Port & Southwest Florida</strong>.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {[
                  { icon: CheckCircle2, text: 'W-2 Employees' },
                  { icon: CheckCircle2, text: 'Self-Employed' },
                  { icon: CheckCircle2, text: 'Small Business' },
                  { icon: CheckCircle2, text: '2024 Tax Brackets' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                  >
                    <item.icon className="w-4 h-4 text-[#F6921E]" />
                    <span className="font-inter text-white/90">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <AnimatedSection>
              <Card className="border-[#092942]/10 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-[#092942] to-[#0a3a56] text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#F6921E] rounded-lg flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="font-garamond text-2xl">
                      Enter Your Information
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  {/* Taxpayer Type */}
                  <div className="space-y-3">
                    <Label className="font-inter font-semibold text-[#092942]">
                      I am a:
                    </Label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'employee', icon: Users, label: 'Employee' },
                        { value: 'self-employed', icon: DollarSign, label: 'Self-Employed' },
                        { value: 'business', icon: Building2, label: 'Business Owner' },
                      ].map((type) => {
                        const Icon = type.icon;
                        return (
                          <motion.button
                            key={type.value}
                            onClick={() => setTaxpayerType(type.value as TaxpayerType)}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              taxpayerType === type.value
                                ? 'border-[#F6921E] bg-[#F6921E]/5'
                                : 'border-[#092942]/10 hover:border-[#F6921E]/30'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Icon className={`w-6 h-6 mx-auto mb-2 ${
                              taxpayerType === type.value ? 'text-[#F6921E]' : 'text-[#949599]'
                            }`} />
                            <span className={`font-jost text-sm ${
                              taxpayerType === type.value ? 'text-[#F6921E] font-semibold' : 'text-[#092942]'
                            }`}>
                              {type.label}
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Annual Income */}
                  <div className="space-y-2">
                    <Label htmlFor="income" className="font-inter font-semibold text-[#092942]">
                      Annual Gross Income
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#949599] font-jost">
                        $
                      </span>
                      <Input
                        id="income"
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        className="pl-8 text-lg font-jost"
                        placeholder="75000"
                      />
                    </div>
                  </div>

                  {/* Business Expenses (for self-employed) */}
                  {(taxpayerType === 'self-employed' || taxpayerType === 'business') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="expenses" className="font-inter font-semibold text-[#092942]">
                        Annual Business Expenses
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#949599] font-jost">
                          $
                        </span>
                        <Input
                          id="expenses"
                          type="number"
                          value={businessExpenses}
                          onChange={(e) => setBusinessExpenses(e.target.value)}
                          className="pl-8 text-lg font-jost"
                          placeholder="0"
                        />
                      </div>
                      <p className="text-xs text-[#949599] font-jost flex items-start gap-1">
                        <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        Include deductible business expenses like equipment, supplies, and mileage
                      </p>
                    </motion.div>
                  )}

                  {/* Filing Status */}
                  <div className="space-y-2">
                    <Label htmlFor="filing" className="font-inter font-semibold text-[#092942]">
                      Filing Status
                    </Label>
                    <Select value={filingStatus} onValueChange={(value) => setFilingStatus(value as FilingStatus)}>
                      <SelectTrigger className="text-lg font-jost">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married Filing Jointly</SelectItem>
                        <SelectItem value="head">Head of Household</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Deductions */}
                  <div className="space-y-2">
                    <Label htmlFor="deductions" className="font-inter font-semibold text-[#092942]">
                      Standard Deduction
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#949599] font-jost">
                        $
                      </span>
                      <Input
                        id="deductions"
                        type="number"
                        value={deductions}
                        onChange={(e) => setDeductions(e.target.value)}
                        className="pl-8 text-lg font-jost"
                        placeholder="14600"
                      />
                    </div>
                    <p className="text-xs text-[#949599] font-jost">
                      2024 standard deduction: Single $14,600 | Married $29,200 | Head of Household $21,900
                    </p>
                  </div>

                  {/* Calculate Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={calculateTaxes}
                      className="w-full bg-[#F6921E] hover:bg-[#d67d19] text-white font-inter text-lg py-6"
                      size="lg"
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Calculate My Taxes
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Results */}
            <div>
              <AnimatePresence mode="wait">
                {showResult && result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-[#092942]/10 shadow-xl mb-6">
                      <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                        <CardTitle className="font-garamond text-2xl flex items-center gap-3">
                          <TrendingDown className="w-6 h-6" />
                          Your Tax Estimate
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-8">
                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="bg-gradient-to-br from-[#092942] to-[#0a3a56] text-white p-6 rounded-lg">
                            <div className="font-inter text-xs uppercase tracking-wider mb-2 text-white/70">
                              Take Home Pay
                            </div>
                            <div className="font-garamond text-3xl font-bold">
                              {formatCurrency(result.netIncome)}
                            </div>
                            <div className="font-jost text-sm text-white/80 mt-1">
                              {((result.netIncome / result.grossIncome) * 100).toFixed(1)}% of gross
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-[#F6921E] to-[#d67d19] text-white p-6 rounded-lg">
                            <div className="font-inter text-xs uppercase tracking-wider mb-2 text-white/70">
                              Total Tax
                            </div>
                            <div className="font-garamond text-3xl font-bold">
                              {formatCurrency(result.totalTax)}
                            </div>
                            <div className="font-jost text-sm text-white/80 mt-1">
                              {result.effectiveRate.toFixed(1)}% effective rate
                            </div>
                          </div>
                        </div>

                        {/* Tax Breakdown */}
                        <div className="space-y-4 mb-8">
                          <h4 className="font-inter font-semibold text-[#092942] text-sm uppercase tracking-wider">
                            Tax Breakdown
                          </h4>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between py-3 border-b border-[#092942]/10">
                              <span className="font-jost text-[#092942]">Federal Income Tax</span>
                              <span className="font-inter font-semibold text-[#092942]">
                                {formatCurrency(result.federalTax)}
                              </span>
                            </div>
                            
                            <div className="flex items-center justify-between py-3 border-b border-[#092942]/10">
                              <span className="font-jost text-[#092942]">Social Security</span>
                              <span className="font-inter font-semibold text-[#092942]">
                                {formatCurrency(result.socialSecurity)}
                              </span>
                            </div>
                            
                            <div className="flex items-center justify-between py-3 border-b border-[#092942]/10">
                              <span className="font-jost text-[#092942]">Medicare</span>
                              <span className="font-inter font-semibold text-[#092942]">
                                {formatCurrency(result.medicare)}
                              </span>
                            </div>
                            
                            <div className="flex items-center justify-between py-3 border-b-2 border-[#F6921E]">
                              <div>
                                <span className="font-jost text-[#092942] font-semibold">Florida State Tax</span>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-inter font-semibold">
                                    NO STATE TAX!
                                  </span>
                                </div>
                              </div>
                              <span className="font-inter font-bold text-green-600 text-lg">
                                $0
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Chart */}
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={90}
                                paddingAngle={2}
                                dataKey="value"
                                label={(entry) => `${((entry.value / result.grossIncome) * 100).toFixed(1)}%`}
                              >
                                {chartData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip
                                formatter={(value: number) => formatCurrency(value)}
                                contentStyle={{
                                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                  border: '1px solid #092942',
                                  borderRadius: '8px',
                                  fontFamily: 'Jost',
                                }}
                              />
                              <Legend
                                wrapperStyle={{
                                  fontFamily: 'Jost',
                                  fontSize: '14px',
                                }}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    {/* CTA Card */}
                    <Card className="border-[#F6921E] border-2 shadow-xl bg-gradient-to-br from-[#F6921E]/5 to-transparent">
                      <CardContent className="p-8 text-center">
                        <h3 className="font-garamond text-2xl font-bold text-[#092942] mb-3">
                          Want to Pay Less in Taxes?
                        </h3>
                        <p className="font-jost text-[#949599] mb-6">
                          Our tax experts can find deductions and strategies you might be missing. 
                          Get a free consultation to see how much you could save.
                        </p>
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
                              Schedule Free Consultation
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Card className="border-[#092942]/10 shadow-xl">
                      <CardContent className="p-12 text-center">
                        <div className="w-24 h-24 bg-[#F6921E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Calculator className="w-12 h-12 text-[#F6921E]" />
                        </div>
                        <h3 className="font-garamond text-2xl font-bold text-[#092942] mb-3">
                          Ready to Calculate?
                        </h3>
                        <p className="font-jost text-[#949599]">
                          Enter your information on the left and click "Calculate My Taxes" 
                          to see your instant tax estimate.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Tax Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
              Why Florida?
            </span>
            <h2 className="font-garamond text-3xl md:text-4xl font-bold text-[#092942] mt-4 mb-4">
              The Florida Tax Advantage
            </h2>
            <p className="font-jost text-lg text-[#949599] max-w-2xl mx-auto">
              Discover why businesses and individuals are choosing Southwest Florida for tax benefits
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'No State Income Tax',
                description: 'Florida is one of only 9 states with no personal income tax. Save thousands compared to high-tax states.',
                savings: 'Save 3-13%',
              },
              {
                icon: Building2,
                title: 'Business-Friendly',
                description: 'Low corporate taxes, no franchise tax, and minimal regulations make Florida ideal for entrepreneurs.',
                savings: 'Top 5 State',
              },
              {
                icon: TrendingDown,
                title: 'Lower Cost of Living',
                description: 'Combined with no state income tax, Florida offers more purchasing power for your hard-earned money.',
                savings: '10-30% Less',
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={index}>
                  <Card className="border-[#092942]/10 hover:border-[#F6921E]/30 transition-all h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#F6921E] to-[#d67d19] rounded-lg flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full font-inter text-xs font-bold mb-4">
                        {benefit.savings}
                      </div>
                      <h3 className="font-garamond text-xl font-bold text-[#092942] mb-3">
                        {benefit.title}
                      </h3>
                      <p className="font-jost text-[#949599] leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ / Disclaimer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-garamond text-3xl font-bold text-[#092942] mb-4">
              Important Information
            </h2>
          </AnimatedSection>

          <Card className="border-[#092942]/10">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="font-inter font-semibold text-[#092942] mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#F6921E]" />
                  Disclaimer
                </h3>
                <p className="font-jost text-[#949599] text-sm leading-relaxed">
                  This calculator provides estimates based on 2024 federal tax brackets and is for informational purposes only. 
                  Actual tax liability may vary based on additional factors including credits, alternative minimum tax, and other 
                  deductions. This does not constitute professional tax advice. For personalized guidance, schedule a consultation 
                  with our experienced tax professionals.
                </p>
              </div>

              <div className="border-t border-[#092942]/10 pt-6">
                <h3 className="font-inter font-semibold text-[#092942] mb-3">
                  How We Can Help Beyond This Calculator
                </h3>
                <ul className="space-y-2 font-jost text-sm text-[#949599]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F6921E] mt-0.5 flex-shrink-0" />
                    Identify additional deductions and credits specific to your situation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F6921E] mt-0.5 flex-shrink-0" />
                    Strategic tax planning to minimize future tax liability
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F6921E] mt-0.5 flex-shrink-0" />
                    IRS audit protection and representation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F6921E] mt-0.5 flex-shrink-0" />
                    Year-round support, not just during tax season
                  </li>
                </ul>
              </div>

              <div className="border-t border-[#092942]/10 pt-6">
                <div className="bg-gradient-to-r from-[#092942] to-[#0a3a56] text-white p-6 rounded-lg text-center">
                  <p className="font-jost text-lg mb-4">
                    Ready to optimize your tax strategy?
                  </p>
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
                        Get Expert Tax Advice
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}