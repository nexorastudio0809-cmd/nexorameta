import { useState, useEffect } from 'react';
import { 
  Target, TrendingUp, Zap, MessageSquare, BarChart3, ShieldCheck, 
  ChevronDown, ChevronUp, Check, Calendar, Clock, Phone, 
  Mail, MessageCircle, ArrowRight, X, Play, Award, CheckCircle2,
  Users, Building, Utensils, HeartPulse, Sparkles, Dumbbell, 
  GraduationCap, Hotel, Briefcase, Menu
} from 'lucide-react';

// --- LOGO COMPONENT ---
export function NexoraLogo({ showText = true, size = "md" }: { showText?: boolean, size?: "sm" | "md" | "lg" }) {
  const gradientId1 = `logo-grad-1-${size}`;
  const gradientId2 = `logo-grad-2-${size}`;
  const gradientId3 = `logo-grad-3-${size}`;
  const glowId = `logo-glow-${size}`;

  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Icon Container */}
      <div className={`relative flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-b from-[#10141d] to-[#07090e] border border-white/10 shadow-lg shadow-black/50 ${
        size === "sm" ? "w-9 h-9 rounded-xl" : size === "lg" ? "w-16 h-16 rounded-3xl" : "w-11 h-11"
      }`}>
        {/* Subtle background animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1E3A8A]/30 via-[#236EC1]/20 to-[#3B82F6]/30 opacity-100 transition-all duration-500 group-hover:scale-110"></div>
        
        {/* Outer radial light sweep */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

        <svg 
          className={`relative z-10 ${size === "sm" ? "w-6 h-6" : size === "lg" ? "w-10 h-10" : "w-7 h-7"}`} 
          viewBox="0 0 100 100" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft, professional gradients */}
            <linearGradient id={gradientId1} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id={gradientId2} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
            <linearGradient id={gradientId3} x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            {/* SVG drop shadow for depth */}
            <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Left vertical pillar */}
          <path 
            d="M22 20 C22 17.79 23.79 16 26 16 H36 C38.21 16 40 17.79 40 20 V80 C40 82.21 38.21 84 36 84 H26 C23.79 84 22 82.21 22 80 Z" 
            fill={`url(#${gradientId1})`} 
          />

          {/* Right vertical pillar */}
          <path 
            d="M60 20 C60 17.79 61.79 16 64 16 H74 C76.21 16 78 17.79 78 20 V80 C78 82.21 76.21 84 74 84 H64 C61.79 84 60 82.21 60 80 Z" 
            fill={`url(#${gradientId2})`} 
          />

          {/* Middle overlapping diagonal ribbon with shadow */}
          <path 
            d="M34 16 C37.5 16 39.5 18 41 21 L65.5 76 C67.5 80.5 64.5 84 60 84 C56.5 84 54.5 82 53 79 L28.5 24 C26.5 19.5 29.5 16 34 16 Z" 
            fill={`url(#${gradientId3})`}
            filter={`url(#${glowId})`}
          />

          {/* Small glowing star/accent representing data conversion and growth */}
          <circle cx="71" cy="27" r="5" fill="#60A5FA" className="animate-pulse" />
          <polygon points="71,19 73,24 78,25 74,28 75,33 71,30 67,33 68,28 64,25 69,24" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-0.5">
            <span className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/95 leading-none tracking-tight ${
              size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-xl"
            }`}>
              NEXORA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          </div>
          <span className={`text-[#3B82F6] font-bold tracking-[0.3em] leading-none uppercase ${
            size === "sm" ? "text-[8px] mt-1" : size === "lg" ? "text-xs mt-1.5" : "text-[9px] mt-1"
          }`}>
            STUDIO
          </span>
        </div>
      )}
    </div>
  );
}

export default function App() {
  // Modal Booking Wizard State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<string>("Lead Engine Pro");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    industry: 'Real Estate',
    mainGoal: 'Leads',
    adBudget: '₹15,000 - ₹30,000',
    selectedDate: '',
    selectedTime: '11:30 AM'
  });

  // Scheduled calls saved to local state
  const [scheduledCalls, setScheduledCalls] = useState<any[]>([]);

  // Load bookings from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('nexora_bookings');
      if (stored) {
        setScheduledCalls(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Live notification feed rotation
  const [activeLeadIndex, setActiveLeadIndex] = useState(0);
  const liveLeads = [
    { name: "Rahul S. (Real Estate Developer)", msg: "Generated 14 flat-buyer leads in Mumbai! (CPL: ₹95)", roas: "6.4x" },
    { name: "Dr. Ananya M. (Skin & Dental Clinic)", msg: "Received 8 high-intent patient enquiries in Delhi!", roas: "4.8x" },
    { name: "Preeti K. (Premium Luxury Salon)", msg: "Booked 11 bridal makeup packages this week!", roas: "5.2x" },
    { name: "Suresh P. (Boutique Hotel & Resort)", msg: "Secured 9 wedding booking leads!", roas: "7.1x" },
    { name: "Vikram R. (Luxury Gym chain)", msg: "Acquired 24 annual membership trials!", roas: "3.9x" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLeadIndex((prev) => (prev + 1) % liveLeads.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Dashboard Chart State
  const [chartInterval, setChartInterval] = useState<'7d' | '30d' | 'all'>('30d');
  const chartData = {
    '7d': {
      leads: [14, 25, 42, 38, 59, 72, 94],
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      total: 344
    },
    '30d': {
      leads: [120, 190, 240, 210, 310, 390, 480, 420, 540, 610, 720, 840],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      total: 1420
    },
    'all': {
      leads: [450, 920, 1850, 2900, 4100, 5800, 7400],
      labels: ['2023 Q1', '2023 Q3', '2024 Q1', '2024 Q3', '2025 Q1', '2025 Q3', '2026 Q2'],
      total: 7400
    }
  };

  // Stepper state for How It Works Section
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      num: "01",
      title: "Business Analysis",
      desc: "We analyze your target market, competitors, current enquiries flow, and define the high-intent buyer profile to construct your bespoke blueprint.",
      details: "Our team conducts a 360° audit of your existing social handles and reviews to locate immediate leakages in your lead funnels."
    },
    {
      num: "02",
      title: "Campaign Strategy",
      desc: "We design a detailed ad structure mapping custom budget thresholds, geographical clusters, and campaign hooks tailored precisely to local demand.",
      details: "We draft complete copywriting angles (Direct Response vs. Value-first) to filter out window-shoppers early on."
    },
    {
      num: "03",
      title: "Creative Setup",
      desc: "We design high-converting visual framework, write thumb-stopping copies, and structure modern lead forms to capture verified phone numbers.",
      details: "We deploy state-of-the-art Meta native Lead Forms with custom verification checks to ensure high-intent entries only."
    },
    {
      num: "04",
      title: "Launch Ads",
      desc: "Our tech team configures Meta Pixel, Conversions API, and negative-audience blocks to launch your campaign cleanly without technical errors.",
      details: "We run a pre-launch checklist to make sure pixel attribution matches with your CRM system for bulletproof tracking."
    },
    {
      num: "05",
      title: "Generate Leads",
      desc: "Leads start flowing directly into your shared CRM or WhatsApp. Your sales team receives instant notifications to close them within minutes.",
      details: "We build direct integrations with Zapier or WhatsApp APIs so no inquiry lies waiting inside Meta Ads Manager."
    },
    {
      num: "06",
      title: "Scale & Optimize",
      desc: "We run weekly creative tests, trim non-performing segments, and systematically double down on winning hooks to scale your business profitably.",
      details: "We review analytics metrics on an hourly basis to dynamically shift budgets to lower-CPL zip codes."
    }
  ];

  // Industry Showcase Section
  const [selectedIndustry, setSelectedIndustry] = useState("Real Estate");
  const industries = [
    { name: "Real Estate", icon: Building, tag: "Luxury Apartments & Plots", strategy: "Instant lead forms coupled with customized brochure downloads. We target high-salary corporate hubs and active property portals search profiles.", cpl: "₹180 - ₹250", result: "32% booked visits increase" },
    { name: "Restaurants", icon: Utensils, tag: "Fine Dining & Cafes", strategy: "Scroll-stopping food preview reels paired with WhatsApp direct bookings for table reservations or party catering.", cpl: "₹40 - ₹70", result: "4.5x booking growth" },
    { name: "Clinics", icon: HeartPulse, tag: "Dental, Skin & Physio", strategy: "Educational expert videos coupled with a localized 10km radius target grid, driving direct appointment bookings with calendar integration.", cpl: "₹110 - ₹160", result: "2.1x monthly consultation hike" },
    { name: "Beauty Salons", icon: Sparkles, tag: "Premium Salons & Spas", strategy: "Before/After result showcases and festive bridal packages. Direct WhatsApp leads for instant bookings.", cpl: "₹50 - ₹80", result: "84% repeat customer bookings" },
    { name: "Gyms", icon: Dumbbell, tag: "Fitness Centers & Yoga Studio", strategy: "Lead-to-Free Trial passes. Target localized fitness enthusiasts with highly energetic trainer showcase reels.", cpl: "₹65 - ₹100", result: "140+ monthly trial check-ins" },
    { name: "Education", icon: GraduationCap, tag: "Pre-schools & Coaching", strategy: "Curriculum tour videos combined with free counseling webinars to drive parent callback enquiries.", cpl: "₹90 - ₹130", result: "45% higher batch intake" },
    { name: "Hotels", icon: Hotel, tag: "Resorts & Banquets", strategy: "Beautiful drone tours, premium guest video reviews, and seasonal discount triggers for direct booking phone calls.", cpl: "₹150 - ₹220", result: "5.8x Return on Ad Spend (ROAS)" },
    { name: "Local Businesses", icon: Briefcase, tag: "Services & Retails", strategy: "High-value local promotion ads with WhatsApp Click-to-Chat funnels. Perfect for custom furniture, interior decorators, and legal consults.", cpl: "₹75 - ₹110", result: "Average 63% cost-per-lead drop" }
  ];

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const faqs = [
    {
      q: "How much ad budget do I need?",
      a: "We recommend starting with at least ₹15,000 to ₹30,000 per month (approx. ₹500–₹1,000 per day) for ad spend to give Meta's algorithm enough room to test and optimize. This budget goes directly to Meta, completely separate from our management fee."
    },
    {
      q: "Is ad spend included in the monthly fee?",
      a: "No, ad spend is not included. It is billed directly to your credit/debit card by Meta. Our monthly fee is strictly for managing, designing, copywriting, split-testing, and optimizing your campaigns to guarantee peak return on your budget."
    },
    {
      q: "How soon will I receive leads?",
      a: "Most of our clients see their first set of qualified leads within 48 to 72 hours of campaign activation. Our onboarding process takes 5 to 7 days to finalize creatives and audience mapping before going live."
    },
    {
      q: "Do you create the ad videos and designs?",
      a: "Yes! We write all the copywriting, provide detailed creative outlines, and design premium graphics for your ads. For custom videos, we provide your team with simple, clear script templates and remote direction so you can shoot them easily on a smartphone for the best native organic feel."
    },
    {
      q: "Can I cancel my plan anytime?",
      a: "Absolutely. We operate strictly on a month-to-month basis with zero long-term lock-in contracts. We believe our performance is our retention strategy. You can pause or cancel your subscription with a 7-day notice before your next billing cycle."
    }
  ];

  // Handle slot Booking Submission
  const handleBookingSubmit = (e: any) => {
    e.preventDefault();
    const newBooking = {
      id: Date.now().toString(),
      ...formData,
      plan: selectedPlan,
      created_at: new Date().toLocaleString()
    };
    
    const updated = [newBooking, ...scheduledCalls];
    setScheduledCalls(updated);
    localStorage.setItem('nexora_bookings', JSON.stringify(updated));
    setBookingStep(4); // Move to success step
  };

  const openBookingWithPlan = (planName: string) => {
    setSelectedPlan(planName);
    setBookingStep(1);
    setIsModalOpen(true);
  };

  const cancelBooking = (id: string) => {
    const updated = scheduledCalls.filter(item => item.id !== id);
    setScheduledCalls(updated);
    localStorage.setItem('nexora_bookings', JSON.stringify(updated));
  };

  // Generate next 7 days for Booking Slot selection (excluding Sundays)
  const getNextAvailableDays = () => {
    const days = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    let count = 0;
    let offset = 1;
    while (count < 7) {
      const date = new Date();
      date.setDate(date.getDate() + offset);
      if (date.getDay() !== 0) { // Skip Sundays
        days.push({
          raw: date.toISOString().split('T')[0],
          dayName: weekdays[date.getDay()],
          dayNum: date.getDate(),
          monthName: months[date.getMonth()]
        });
        count++;
      }
      offset++;
    }
    return days;
  };

  const availableDays = getNextAvailableDays();

  // Initialize first date if empty
  useEffect(() => {
    if (availableDays.length > 0 && !formData.selectedDate) {
      setFormData(prev => ({ ...prev, selectedDate: availableDays[0].raw }));
    }
  }, []);

  return (
    <div id="root-layout" className="relative min-h-screen bg-[#000000] text-white font-sans overflow-x-hidden selection:bg-[#236EC1] selection:text-white">
      
      {/* Background Decorative Grid and Orbs (90% Black / 10% Blue Glow) */}
      <div className="absolute inset-0 bg-grid opacity-35 pointer-events-none z-0"></div>
      
      {/* Floating Low-Opacity Orbs */}
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-gradient-to-br from-[#236EC1]/10 to-[#3B82F6]/5 rounded-full filter blur-[100px] pointer-events-none z-0 animate-pulse-slow"></div>
      <div className="absolute top-[35%] right-5 w-[450px] h-[450px] bg-gradient-to-br from-[#236EC1]/8 to-transparent rounded-full filter blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-10 w-[400px] h-[400px] bg-[#236EC1]/5 rounded-full filter blur-[110px] pointer-events-none z-0"></div>

      {/* --- 10. STICKY GLASS NAVBAR --- */}
      <nav id="navbar" className="sticky top-0 z-50 w-full bg-[#000000]/60 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#hero" className="hover:opacity-90 transition-opacity">
            <NexoraLogo showText={true} size="md" />
          </a>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#why-us" className="hover:text-white transition-colors duration-200">Why Us</a>
            <a href="#how-it-works" className="hover:text-white transition-colors duration-200">How It Works</a>
            <a href="#services" className="hover:text-white transition-colors duration-200">Services</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</a>
            <a href="#industries" className="hover:text-white transition-colors duration-200">Industries</a>
            <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {scheduledCalls.length > 0 && (
              <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#236EC1]/10 text-[#3B82F6] border border-[#236EC1]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                1 Call Scheduled
              </span>
            )}
            <button 
              id="nav-cta-btn"
              onClick={() => { setSelectedPlan("Lead Engine Pro"); setBookingStep(1); setIsModalOpen(true); }}
              className="px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white btn-primary flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span className="hidden sm:inline">Book Strategy Call</span>
              <span className="sm:hidden">Book Call</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-t border-b border-white/5 py-4 px-6 space-y-1 animate-fade-in">
            <a 
              href="#why-us" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-semibold text-white/75 hover:text-[#3B82F6] py-2.5 transition-colors border-b border-white/5"
            >
              Why Us
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-semibold text-white/75 hover:text-[#3B82F6] py-2.5 transition-colors border-b border-white/5"
            >
              How It Works
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-semibold text-white/75 hover:text-[#3B82F6] py-2.5 transition-colors border-b border-white/5"
            >
              Services
            </a>
            <a 
              href="#pricing" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-semibold text-white/75 hover:text-[#3B82F6] py-2.5 transition-colors border-b border-white/5"
            >
              Pricing
            </a>
            <a 
              href="#industries" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-semibold text-white/75 hover:text-[#3B82F6] py-2.5 transition-colors border-b border-white/5"
            >
              Industries
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-semibold text-white/75 hover:text-[#3B82F6] py-2.5 transition-colors"
            >
              FAQ
            </a>
          </div>
        )}
      </nav>

      {/* --- MAIN PAGE WRAPPER --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24">

        {/* --- 1. HERO SECTION --- */}
        <section id="hero" className="pt-8 pb-16 lg:pt-16 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Soft blue glowing micro-badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-xs font-medium bg-[#236EC1]/10 text-[#3B82F6] border border-[#236EC1]/20 mb-6">
              <Award className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Premium Meta Ads Specialists</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Get <span className="brand-gradient">More Customers</span> With Facebook & Instagram Ads
            </h1>
            
            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed mb-8 max-w-xl">
              We help local businesses generate high-quality leads using Meta Ads that bring real enquiries—not just likes and followers. No vanity metrics. No technical fluff. Just sales appointments.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button 
                id="hero-primary-btn"
                onClick={() => { setSelectedPlan("Lead Engine Pro"); setBookingStep(1); setIsModalOpen(true); }}
                className="px-8 py-4 rounded-full btn-primary text-white font-bold text-base text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Free Strategy Call
              </button>
              <a 
                href="#pricing" 
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold text-base text-center hover:bg-white/10 transition-colors duration-200"
              >
                View Plans
              </a>
            </div>

            {/* Quick trust bullet points below buttons */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
              <div>
                <p className="text-2xl font-bold text-white">₹5.2M+</p>
                <p className="text-xs text-white/50">Client Revenue Generated</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">1,420+</p>
                <p className="text-xs text-white/50">Vetted Leads Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#3B82F6]">4.8x</p>
                <p className="text-xs text-white/50">Average Ad ROAS</p>
              </div>
            </div>
          </div>

          {/* Right Hero Content - Premium Live Dashboard Visual */}
          <div className="lg:col-span-6">
            <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent shadow-2xl overflow-hidden">
              {/* Internal glow aura */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#236EC1]/5 to-transparent pointer-events-none"></div>
              
              <div className="relative bg-[#0D0D0D]/95 rounded-[23px] p-4 sm:p-6 border border-white/5">
                {/* Dashboard Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-xs text-white/40 font-mono ml-2 truncate max-w-[150px] sm:max-w-none">nexora_studio_dashboard_v2.ts</span>
                  </div>
                  <div className="flex bg-[#161616] rounded-lg p-0.5 text-[11px] font-semibold text-white/60 self-start sm:self-auto">
                    {(['7d', '30d', 'all'] as const).map((interval) => (
                      <button
                        key={interval}
                        onClick={() => setChartInterval(interval)}
                        className={`px-3 py-1 rounded-md transition-all uppercase ${
                          chartInterval === interval 
                            ? 'bg-[#236EC1] text-white shadow-md' 
                            : 'hover:text-white'
                        }`}
                      >
                        {interval}
                      </button>
                    ))}
                  </div>
                </div>

                {/* KPI Metrics inside Dashboard */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                  <div className="bg-[#141414] rounded-xl p-2 sm:p-3 border border-white/5">
                    <span className="text-[9px] sm:text-[10px] text-white/40 block mb-1">Total Leads</span>
                    <span className="text-sm sm:text-lg font-bold text-white transition-all">
                      {chartData[chartInterval].total}
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-emerald-500 block mt-0.5 font-medium">↑ 18.5% today</span>
                  </div>
                  <div className="bg-[#141414] rounded-xl p-2 sm:p-3 border border-white/5">
                    <span className="text-[9px] sm:text-[10px] text-white/40 block mb-1">Avg Cost/Lead</span>
                    <span className="text-sm sm:text-lg font-bold text-white">₹84</span>
                    <span className="text-[8px] sm:text-[9px] text-sky-400 block mt-0.5 font-medium">Meta Lowest Avg</span>
                  </div>
                  <div className="bg-[#141414] rounded-xl p-2 sm:p-3 border border-white/5">
                    <span className="text-[9px] sm:text-[10px] text-white/40 block mb-1">Ad Quality</span>
                    <span className="text-sm sm:text-lg font-bold text-[#3B82F6]">9.4<span className="text-[10px] text-white/40">/10</span></span>
                    <span className="text-[8px] sm:text-[9px] text-emerald-500 block mt-0.5 font-medium">Excellent Rank</span>
                  </div>
                </div>

                {/* Interactive SVG Chart Graphic */}
                <div className="relative h-44 w-full bg-[#111111]/40 rounded-xl p-2 border border-white/5 mb-6 flex flex-col justify-between">
                  <div className="absolute top-2 right-3 flex items-center gap-2 text-[10px] text-white/40 font-mono">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#236EC1]"></span>
                    <span>Live Lead Conversion Volume</span>
                  </div>
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="w-full border-t border-white/10"></div>
                    <div className="w-full border-t border-white/10"></div>
                    <div className="w-full border-t border-white/10"></div>
                    <div className="w-full border-t border-white/10"></div>
                  </div>

                  {/* Dynamic SVG Plot */}
                  <div className="relative flex-1 mt-6 flex items-end">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chart-area-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#236EC1" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#236EC1" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Interactive Area path */}
                      <path
                        d={`M 0 100 ${chartData[chartInterval].leads.map((val, idx) => {
                          const maxVal = Math.max(...chartData[chartInterval].leads);
                          const x = (idx / (chartData[chartInterval].leads.length - 1)) * 100;
                          const y = 100 - (val / maxVal) * 80;
                          return `L ${x} ${y}`;
                        }).join(' ')} L 100 100 Z`}
                        fill="url(#chart-area-gradient)"
                        className="transition-all duration-700 ease-in-out"
                      />

                      {/* Line path */}
                      <path
                        d={chartData[chartInterval].leads.map((val, idx) => {
                          const maxVal = Math.max(...chartData[chartInterval].leads);
                          const x = (idx / (chartData[chartInterval].leads.length - 1)) * 100;
                          const y = 100 - (val / maxVal) * 80;
                          return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
                        }).join(' ')}
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-700 ease-in-out"
                      />

                      {/* Circles on Nodes */}
                      {chartData[chartInterval].leads.map((val, idx) => {
                        const maxVal = Math.max(...chartData[chartInterval].leads);
                        const x = (idx / (chartData[chartInterval].leads.length - 1)) * 100;
                        const y = 100 - (val / maxVal) * 80;
                        return (
                          <circle
                            key={idx}
                            cx={x}
                            cy={y}
                            r="3"
                            fill="#FFFFFF"
                            stroke="#236EC1"
                            strokeWidth="1.5"
                            className="transition-all duration-700 ease-in-out cursor-pointer hover:r-5 hover:fill-[#3B82F6]"
                          />
                        );
                      })}
                    </svg>
                  </div>

                  {/* Chart X Labels */}
                  <div className="flex justify-between px-1 pt-2 border-t border-white/5 text-[9px] font-mono text-white/40">
                    {chartData[chartInterval].labels.map((lbl, idx) => (
                      <span key={idx}>{lbl}</span>
                    ))}
                  </div>
                </div>

                {/* Live Activity Feed Overlay */}
                <div className="bg-[#141414] rounded-xl p-4 border border-[#236EC1]/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-2 py-0.5 bg-[#236EC1]/10 text-[#3B82F6] text-[8px] font-mono font-bold tracking-wider rounded-bl-lg">
                    LIVE META SYNC
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse mt-1.5 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-white/40 font-mono tracking-wider uppercase font-bold">Latest Client Success</p>
                      <p className="text-sm font-semibold text-white mt-1 transition-all duration-500">
                        {liveLeads[activeLeadIndex].name}
                      </p>
                      <p className="text-xs text-white/70 mt-1">
                        {liveLeads[activeLeadIndex].msg}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-white/40 font-mono">ROAS</p>
                      <p className="text-sm font-bold text-emerald-400 mt-1 font-mono">{liveLeads[activeLeadIndex].roas}</p>
                    </div>
                  </div>
                </div>

                {/* Direct Connect WhatsApp badge */}
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white/50 bg-[#1A1A1A]/30 p-2.5 rounded-lg border border-white/5">
                  <span className="flex items-center gap-1.5 leading-tight">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    Automated lead forwarding active.
                  </span>
                  <span className="text-[10px] font-bold text-emerald-500 tracking-wide uppercase self-start sm:self-auto">0.4s Latency</span>
                </div>

              </div>
            </div>
          </div>

        </section>


        {/* --- 2. TRUST BAR --- */}
        <section id="trust-bar" className="py-10 border-y border-white/5 my-8 bg-black/40 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          <div className="w-full flex items-center">
            {/* Repeating infinite scroll content using elegant custom styled badges */}
            <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-sm font-bold tracking-wider text-white/60 uppercase">
              {Array(3).fill([
                { name: "Facebook Ads", icon: "✓" },
                { name: "Instagram Ads", icon: "✓" },
                { name: "Lead Generation", icon: "✓" },
                { name: "WhatsApp Leads", icon: "✓" },
                { name: "Performance Marketing", icon: "✓" }
              ]).flat().map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#236EC1]/20 border border-[#236EC1]/40 flex items-center justify-center text-[10px] text-[#3B82F6] font-bold">
                    {badge.icon}
                  </span>
                  <span>{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* --- 3. WHY NEXORA STUDIO --- */}
        <section id="why-us" className="py-16 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest bg-[#236EC1]/10 px-3.5 py-1 rounded-full border border-[#236EC1]/20">
              Agency Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4">
              Why Businesses Choose Nexora Studio
            </h2>
            <p className="text-white/60 mt-4 text-sm sm:text-base leading-relaxed">
              We replace standard guesswork with analytical campaigns crafted to drive qualified buyers into your booking pipeline.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="glass-card p-8 rounded-3xl relative group overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#236EC1]/10 border border-[#236EC1]/20 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">🎯 Targeted Advertising</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Pinpoint accuracy targeting local users with active buyer intent, rather than broad, wasted geographic spreads.
              </p>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#236EC1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-8 rounded-3xl relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#236EC1] to-[#3B82F6]"></div>
              <div className="w-12 h-12 rounded-xl bg-[#236EC1]/10 border border-[#236EC1]/20 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">📈 High Quality Leads</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Vetted phone numbers and direct customer interest mapping. We optimize for booking conversions, not vanity page likes.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-8 rounded-3xl relative group overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#236EC1]/10 border border-[#236EC1]/20 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">⚡ Fast Campaign Setup</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                No long-winded setup periods. We deploy custom optimized landing hooks, lead setups and pixel triggers within 7 working days.
              </p>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#236EC1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Card 4 */}
            <div className="glass-card p-8 rounded-3xl relative group overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#236EC1]/10 border border-[#236EC1]/20 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">💬 WhatsApp Lead System</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Deliver prospect interest details straight to your sales team's WhatsApp instantly. Minimize call response times to under 5 minutes.
              </p>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#236EC1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Card 5 */}
            <div className="glass-card p-8 rounded-3xl relative group overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#236EC1]/10 border border-[#236EC1]/20 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">📊 Weekly Optimization</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Ongoing active split tests on ad visuals, creative texts, and zip code metrics to steadily drive your client acquisition cost down.
              </p>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#236EC1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Card 6 */}
            <div className="glass-card p-8 rounded-3xl relative group overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#236EC1]/10 border border-[#236EC1]/20 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">🤝 Dedicated Support</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                1-on-1 account access via direct chat. Receive continuous video breakdowns outlining your leads growth progress.
              </p>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#236EC1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Card 7 */}
            <div className="glass-card p-8 rounded-3xl relative group overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#236EC1]/10 border border-[#236EC1]/20 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-[#3B82F6]/20" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">🎬 Free Video Ad Creatives</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Receive high-converting, professional native video ad creatives completely free with our campaigns to hook attention instantly and drive conversions.
              </p>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#236EC1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

          </div>
        </section>


        {/* --- 4. HOW IT WORKS --- */}
        <section id="how-it-works" className="py-16 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest bg-[#236EC1]/10 px-3.5 py-1 rounded-full border border-[#236EC1]/20">
              The Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4">
              How It Works
            </h2>
            <p className="text-white/60 mt-4 text-sm sm:text-base leading-relaxed">
              An analytical step-by-step framework engineered to scale your lead pipelines smoothly. Click on any step to learn the full strategy.
            </p>
          </div>

          {/* Interactive Connected Timeline Container */}
          <div className="relative">
            {/* SVG Connecting Glow Line */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-white/5 -translate-y-1/2 hidden lg:block z-0">
              <div 
                className="h-full bg-gradient-to-r from-[#236EC1] to-[#3B82F6] transition-all duration-500 ease-in-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>

            {/* Scroll indicators on mobile */}
            <div className="flex lg:hidden justify-between items-center mb-4 text-xs text-white/40 px-1">
              <span>Swipe steps left/right</span>
              <span className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded">
                Step {activeStep + 1} of 6
              </span>
            </div>

            <div className="flex lg:grid lg:grid-cols-6 gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory lg:overflow-visible relative z-10">
              {steps.map((step, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`text-left p-5 lg:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-36 lg:h-48 cursor-pointer relative overflow-hidden group snap-center flex-shrink-0 w-[240px] sm:w-[280px] lg:w-auto ${
                      isSelected 
                        ? 'bg-[#111111] border-[#236EC1] shadow-[0_0_25px_rgba(35,110,193,0.15)] scale-[1.01]' 
                        : 'bg-[#0B0B0B]/90 border-white/5 hover:border-white/20'
                    }`}
                  >
                    {/* Tiny select indicator circle */}
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#3B82F6] animate-ping"></div>
                    )}
                    
                    <div>
                      <span className={`text-xs font-mono font-bold block mb-1.5 ${
                        isSelected ? 'text-[#3B82F6]' : 'text-white/40'
                      }`}>
                        STEP {step.num}
                      </span>
                      <h3 className="text-sm lg:text-base font-bold text-white mb-1.5 tracking-tight group-hover:text-[#3B82F6] transition-colors leading-snug">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-white/50 leading-relaxed line-clamp-2 lg:line-clamp-3">
                      {step.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Step Detailed Showcase Panel */}
            <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-white/10 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#236EC1]/5 rounded-full filter blur-[80px] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-[#3B82F6] bg-[#236EC1]/10 px-2.5 py-1 rounded-md border border-[#236EC1]/20">
                      Phase {steps[activeStep].num} Details
                    </span>
                    <h4 className="text-xl font-bold text-white">{steps[activeStep].title}</h4>
                  </div>
                  <p className="text-white/70 text-sm max-w-3xl leading-relaxed">
                    {steps[activeStep].desc} <span className="text-[#3B82F6] font-medium">{steps[activeStep].details}</span>
                  </p>
                </div>
                <button
                  onClick={() => openBookingWithPlan("Lead Engine Pro")}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white btn-primary flex items-center gap-2 whitespace-nowrap self-stretch md:self-auto text-center justify-center cursor-pointer"
                >
                  Setup This Funnel <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* --- 5. SERVICES --- */}
        <section id="services" className="py-16 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest bg-[#236EC1]/10 px-3.5 py-1 rounded-full border border-[#236EC1]/20">
              Core Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4">
              Meta Ads Solutions Crafted for Scale
            </h2>
            <p className="text-white/60 mt-4 text-sm sm:text-base leading-relaxed">
              We focus on building actual money-making channels rather than complex vanity setups.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {/* Service 1 */}
            <div className="glass-card p-6 rounded-2xl relative group hover:border-[#236EC1]/30">
              <span className="text-xs font-mono text-[#3B82F6] block mb-2 font-bold">SOL_01</span>
              <h3 className="text-lg font-bold mb-2 text-white">Meta Ads Strategy</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Tailored campaign structures matching your unit margins to guarantee a mathematically sound ROI.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#3B82F6] font-bold">
                <Check className="w-3.5 h-3.5" /> Direct Conversion Setup
              </div>
            </div>

            {/* Service 2 */}
            <div className="glass-card p-6 rounded-2xl relative group hover:border-[#236EC1]/30">
              <span className="text-xs font-mono text-[#3B82F6] block mb-2 font-bold">SOL_02</span>
              <h3 className="text-lg font-bold mb-2 text-white">Audience Research</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Deep competitor profiling, zip-code matching, and exclusion filters to weed out non-buyers.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#3B82F6] font-bold">
                <Check className="w-3.5 h-3.5" /> Verified Demographics
              </div>
            </div>

            {/* Service 3 */}
            <div className="glass-card p-6 rounded-2xl relative group hover:border-[#236EC1]/30">
              <span className="text-xs font-mono text-[#3B82F6] block mb-2 font-bold">SOL_03</span>
              <h3 className="text-lg font-bold mb-2 text-white">Creative Guidance</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Step-by-step video outline guides, professional hooks design, and high-impact custom templates.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#3B82F6] font-bold">
                <Check className="w-3.5 h-3.5" /> Thumb-Stopping Visuals
              </div>
            </div>

            {/* Service 4 */}
            <div className="glass-card p-6 rounded-2xl relative group hover:border-[#236EC1]/30">
              <span className="text-xs font-mono text-[#3B82F6] block mb-2 font-bold">SOL_04</span>
              <h3 className="text-lg font-bold mb-2 text-white">Campaign Setup</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Pixel configuration, advanced CAPI integration, catalog sync, and native offline custom conversion mapping.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#3B82F6] font-bold">
                <Check className="w-3.5 h-3.5" /> No Attribution Leaks
              </div>
            </div>

            {/* Service 5 */}
            <div className="glass-card p-6 rounded-2xl relative group hover:border-[#236EC1]/30">
              <span className="text-xs font-mono text-[#3B82F6] block mb-2 font-bold">SOL_05</span>
              <h3 className="text-lg font-bold mb-2 text-white">WhatsApp Funnel</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Direct WhatsApp routing loops with instant auto-replies to start immediate human chat flows with warm leads.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#3B82F6] font-bold">
                <Check className="w-3.5 h-3.5" /> Direct-to-Chat Leads
              </div>
            </div>

            {/* Service 6 */}
            <div className="glass-card p-6 rounded-2xl relative group hover:border-[#236EC1]/30">
              <span className="text-xs font-mono text-[#3B82F6] block mb-2 font-bold">SOL_06</span>
              <h3 className="text-lg font-bold mb-2 text-white">Weekly Optimization</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Aggressive creative scaling, budget reshuffling, target testing, and bidding audits to guarantee optimal delivery.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#3B82F6] font-bold">
                <Check className="w-3.5 h-3.5" /> Daily Performance Guard
              </div>
            </div>

            {/* Service 7 */}
            <div className="glass-card p-6 rounded-2xl relative group hover:border-[#236EC1]/30">
              <span className="text-xs font-mono text-[#3B82F6] block mb-2 font-bold">SOL_07</span>
              <h3 className="text-lg font-bold mb-2 text-white">Performance Reports</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Easy-to-digest weekly reports explaining lead quality, overall conversions, and upcoming scaling milestones.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#3B82F6] font-bold">
                <Check className="w-3.5 h-3.5" /> Video Review Included
              </div>
            </div>

            {/* Quick Consultation Promo Tile */}
            <div className="p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-[#236EC1]/20 to-transparent flex flex-col justify-between hover:border-[#3B82F6]/40 transition-all">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#3B82F6] font-mono font-bold block mb-2">Exclusive Addition</span>
                <h3 className="text-base font-bold text-white mb-2">Need a bespoke custom funnel?</h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  We can design customized CRM setups, automated email sequences, and multi-channel pipelines.
                </p>
              </div>
              <button 
                onClick={() => openBookingWithPlan("Lead Engine Pro")}
                className="mt-4 text-xs font-bold text-white flex items-center gap-1 hover:text-[#3B82F6] transition-colors cursor-pointer"
              >
                Inquire now <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </section>


        {/* --- 6. PRICING SECTION --- */}
        <section id="pricing" className="py-16 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest bg-[#236EC1]/10 px-3.5 py-1 rounded-full border border-[#236EC1]/20">
              Clear Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4">
              Two Packages Built to Win
            </h2>
            <p className="text-white/60 mt-4 text-sm sm:text-base leading-relaxed">
              Transparent plans with zero onboarding fees or hidden surprises. Pick a strategy to start generating leads.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* Starter Card */}
            <div className="glass-card p-8 rounded-[24px] flex flex-col justify-between border border-white/10 hover:border-white/25 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Lead Starter</h3>
                  <span className="text-xs font-mono text-white/40">Growth Foundation</span>
                </div>
                
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">₹6999</span>
                  <span className="text-white/50 text-sm font-light"> / Month</span>
                </div>

                <p className="text-white/60 text-xs sm:text-sm mb-6 pb-6 border-b border-white/5">
                  Perfect for local clinics, cafes, or salon owners seeking a steady stream of initial daily enquiries.
                </p>

                <ul className="space-y-4 mb-8 text-sm text-white/80">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    <span>✓ Campaign Setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    <span>✓ Audience Research</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    <span>✓ One Campaign</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    <span>✓ Ad Copy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    <span>✓ Weekly Optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    <span>✓ WhatsApp Support</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => openBookingWithPlan("Lead Starter")}
                className="w-full py-4 px-6 rounded-full bg-white/10 hover:bg-[#236EC1]/20 border border-white/10 hover:border-[#236EC1]/30 text-white font-semibold text-sm transition-all duration-300 cursor-pointer text-center"
              >
                Get Started
              </button>
            </div>

            {/* Featured Card - Lead Engine Pro */}
            <div className="glass-card p-8 rounded-[24px] flex flex-col justify-between border-2 border-[#236EC1] shadow-[0_0_40px_rgba(35,110,193,0.25)] relative overflow-hidden group">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 px-4 py-1 bg-[#236EC1] text-white text-[10px] font-extrabold tracking-widest uppercase rounded-bl-xl shadow-lg">
                Popular Badge
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    Lead Engine Pro
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  </h3>
                  <span className="text-xs font-mono text-[#3B82F6] font-bold">Maximum ROI</span>
                </div>

                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">₹9999</span>
                  <span className="text-white/50 text-sm font-light"> / Month</span>
                </div>

                <p className="text-white/60 text-xs sm:text-sm mb-6 pb-6 border-b border-white/5">
                  Best for real estate, schools, multi-location clinics, or hotels ready to scale up leads aggressively.
                </p>

                <p className="text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-4">
                  Everything in Starter plus:
                </p>

                <ul className="space-y-4 mb-8 text-sm text-white/80">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="font-semibold text-white">✓ Multiple Campaigns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="font-semibold text-white">✓ Advanced Targeting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="font-semibold text-white">✓ Weekly Optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="font-semibold text-white">✓ Priority Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="font-semibold text-white">✓ Performance Reports</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="font-semibold text-white">✓ Scaling Strategy</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => openBookingWithPlan("Lead Engine Pro")}
                className="w-full py-4 px-6 rounded-full btn-primary text-white font-bold text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer text-center"
              >
                Grow My Business
              </button>
            </div>

          </div>
        </section>


        {/* --- 7. INDUSTRIES GRID --- */}
        <section id="industries" className="py-16 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest bg-[#236EC1]/10 px-3.5 py-1 rounded-full border border-[#236EC1]/20">
              Niche Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4">
              Proven Across Local Industries
            </h2>
            <p className="text-white/60 mt-4 text-sm sm:text-base leading-relaxed">
              We adjust targeting hooks, conversion actions, and copy tactics specifically to fit your industry standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Bento Selector */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
              {industries.map((ind) => {
                const isSelected = selectedIndustry === ind.name;
                const IconComponent = ind.icon;
                return (
                  <button
                    key={ind.name}
                    onClick={() => setSelectedIndustry(ind.name)}
                    className={`p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between h-28 cursor-pointer ${
                      isSelected 
                        ? 'bg-[#236EC1]/10 border-[#236EC1] shadow-[0_0_15px_rgba(35,110,193,0.1)]' 
                        : 'bg-[#0B0B0B] border-white/5 hover:border-white/10 hover:bg-[#111111]'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${isSelected ? 'text-[#3B82F6]' : 'text-white/40'}`} />
                    <div>
                      <h4 className="text-xs text-white/50 block font-mono">{ind.tag}</h4>
                      <span className="text-sm font-bold text-white mt-1 block">{ind.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Strategy Card */}
            <div className="lg:col-span-7">
              {industries.map((ind) => {
                if (ind.name !== selectedIndustry) return null;
                const IconComponent = ind.icon;
                return (
                  <div 
                    key={ind.name}
                    className="h-full bg-[#0B0B0B] border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500"
                  >
                    <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-[0.02] text-white">
                      <IconComponent className="w-80 h-80" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-[#236EC1]/20 flex items-center justify-center text-[#3B82F6]">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-[#3B82F6] font-semibold tracking-wider uppercase font-mono">Industry Strategy</span>
                          <h3 className="text-xl font-bold text-white leading-none mt-1">{ind.name}</h3>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest font-mono">Bespoke Ad Tactics</h4>
                          <p className="text-white/80 text-sm mt-2 leading-relaxed font-light">
                            {ind.strategy}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                          <div>
                            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest font-mono">Average Target CPL</h4>
                            <p className="text-lg font-bold text-white mt-1 font-mono">{ind.cpl}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest font-mono">Proven Result</h4>
                            <p className="text-lg font-bold text-emerald-400 mt-1">{ind.result}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
                      <span className="text-xs text-white/50">Ready to activate this plan for your business?</span>
                      <button
                        onClick={() => openBookingWithPlan("Lead Engine Pro")}
                        className="px-6 py-2.5 rounded-full text-xs font-bold uppercase text-white btn-primary flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        Select {ind.name} Strategy
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* --- 8. FAQ ACCORDION --- */}
        <section id="faq" className="py-16 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest bg-[#236EC1]/10 px-3.5 py-1 rounded-full border border-[#236EC1]/20">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 mt-4 text-sm sm:text-base leading-relaxed">
              Everything you need to know about setting up, launching, and managing Meta Ads with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#0B0B0B] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-[#3B82F6] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#3B82F6] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white/30 flex-shrink-0" />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>


        {/* --- 9. FINAL CTA SECTION --- */}
        <section id="contact" className="py-16">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#236EC1] to-[#3B82F6]/60 p-8 sm:p-12 lg:p-16 overflow-hidden text-center shadow-[0_0_50px_rgba(35,110,193,0.3)]">
            
            {/* Background design elements */}
            <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none"></div>
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/10 rounded-full filter blur-[70px] pointer-events-none"></div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full filter blur-[70px] pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-xs font-black tracking-widest uppercase text-white/90 bg-black/20 px-4 py-1.5 rounded-full inline-block mb-6">
                Let's scale your business
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                Ready to Grow Your Business?
              </h2>
              
              <p className="text-white/80 text-base sm:text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
                Let's turn your ad budget into real customers. Schedule a quick diagnostic slot to audit your local target demographic.
              </p>

              <button
                id="cta-section-booking-btn"
                onClick={() => { setSelectedPlan("Lead Engine Pro"); setBookingStep(1); setIsModalOpen(true); }}
                className="px-10 py-5 rounded-full bg-black hover:bg-[#111111] text-[#3B82F6] hover:text-white font-extrabold text-lg shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer inline-flex items-center gap-3"
              >
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-white/60 text-xs mt-6">
                No credit card required • 15-Min Zoom Call • Strategy Deck Included
              </p>
            </div>
          </div>
        </section>


        {/* --- DYNAMIC BOOKING LIST SECTION (Visible if appointments exist) --- */}
        {scheduledCalls.length > 0 && (
          <section className="py-8 border-t border-white/5">
            <div className="bg-[#0D0D0D] border border-[#236EC1]/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <h3 className="font-bold text-white text-base">Your Scheduled Appointments</h3>
                </div>
                <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Confirmed Slots
                </span>
              </div>
              
              <div className="space-y-4">
                {scheduledCalls.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-black/60 p-4 rounded-xl border border-white/5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{item.businessName || item.name}</span>
                        <span className="text-xs bg-[#236EC1]/10 text-[#3B82F6] px-2 py-0.5 rounded border border-[#236EC1]/20 font-mono">
                          {item.plan}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" /> {item.selectedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#3B82F6]" /> {item.selectedTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5" /> {item.phone}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => cancelBooking(item.id)}
                      className="text-xs font-semibold text-red-400 hover:text-red-300 hover:underline cursor-pointer flex items-center gap-1 px-3 py-1 bg-red-500/10 hover:bg-red-500/20 rounded-md border border-red-500/20"
                    >
                      Cancel Meeting
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>


      {/* --- 10. FOOTER --- */}
      <footer className="border-t border-white/5 bg-[#0B0B0B]/80 pt-16 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 space-y-4">
            <NexoraLogo showText={true} size="md" />
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Helping businesses grow through high-converting, analytical Facebook & Instagram Ads. No vanity traps, just qualified inquiries.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#236EC1]/20 border border-white/10 hover:border-[#236EC1]/30 flex items-center justify-center text-white/60 hover:text-[#3B82F6] transition-all">
                <span className="text-[11px] font-bold">IG</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#236EC1]/20 border border-white/10 hover:border-[#236EC1]/30 flex items-center justify-center text-white/60 hover:text-[#3B82F6] transition-all">
                <span className="text-[11px] font-bold">FB</span>
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#236EC1]/20 border border-white/10 hover:border-[#236EC1]/30 flex items-center justify-center text-white/60 hover:text-[#3B82F6] transition-all">
                <span className="text-[11px] font-bold">WA</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Website</h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/60">
              <a href="#hero" className="hover:text-white transition-colors">Home</a>
              <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
            </div>
          </div>

          {/* Other Links Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Navigation</h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/60">
              <a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a>
              <a href="#industries" className="hover:text-white transition-colors">Industries Served</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Reach Out</h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/60">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                <span>nexorastudio0809@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                <span>+91 82715 17973</span>
              </p>
              <p className="text-[11px] text-white/40 pt-1">
                Office: Beta 1, Greater Noida, 201301, Uttar Pradesh
              </p>
            </div>
          </div>

        </div>

        {/* Smooth copyright section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Nexora Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Meta Disclaimers</span>
          </div>
        </div>
      </footer>


      {/* --- PREMIUM INTERACTIVE STRATEGY CALL BOOKING WIZARD MODAL --- */}
      {isModalOpen && (
        <div id="booking-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-xl max-h-[90vh] flex flex-col bg-[#0b0b0b] glass-card rounded-[24px] border border-[#236EC1]/30 shadow-[0_0_50px_rgba(35,110,193,0.3)] overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#111111]/80 flex-shrink-0">
              <div className="flex items-center gap-3">
                <NexoraLogo showText={false} size="sm" />
                <div>
                  <h3 className="font-extrabold text-white text-base sm:text-lg">Book Free Strategy Call</h3>
                  <span className="text-[10px] text-white/40">Diagnostic Audit Session</span>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Steps Progress Indicator */}
            {bookingStep <= 3 && (
              <div className="flex h-1 bg-white/5 w-full flex-shrink-0">
                <div 
                  className="h-full bg-gradient-to-r from-[#236EC1] to-[#3B82F6] transition-all duration-300"
                  style={{ width: `${(bookingStep / 3) * 100}%` }}
                ></div>
              </div>
            )}

            {/* Modal Body / Forms */}
            <form onSubmit={handleBookingSubmit} className="p-6 overflow-y-auto flex-1">
              
              {/* STEP 1: Business Profile */}
              {bookingStep === 1 && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-wider block mb-1">Step 1 of 3</span>
                    <h4 className="text-base font-bold text-white">Let's learn about your business</h4>
                    <p className="text-xs text-white/50">Provide your basic contact information so we can prepare for the meeting.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/60 font-semibold uppercase tracking-wider mb-1.5">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Piyush Mehta"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#236EC1] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 font-semibold uppercase tracking-wider mb-1.5">Company / Business Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Nexora Dental Clinic"
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#236EC1] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/60 font-semibold uppercase tracking-wider mb-1.5">Phone Number (WhatsApp)</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="e.g. +91 8271517973"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#236EC1] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 font-semibold uppercase tracking-wider mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="e.g. nexorastudio0809@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#236EC1] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/60 font-semibold uppercase tracking-wider mb-1.5">Selected Package</label>
                    <div className="flex gap-3 bg-[#111111] p-1.5 rounded-xl border border-white/5">
                      <button
                        type="button"
                        onClick={() => setSelectedPlan("Lead Starter")}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          selectedPlan === "Lead Starter" 
                            ? 'bg-[#236EC1] text-white shadow-md' 
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        Lead Starter (₹5,000/mo)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedPlan("Lead Engine Pro")}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          selectedPlan === "Lead Engine Pro" 
                            ? 'bg-[#236EC1] text-white shadow-md' 
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        Lead Engine Pro (₹10,000/mo)
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setBookingStep(2)}
                      disabled={!formData.name || !formData.businessName || !formData.phone || !formData.email}
                      className="px-6 py-3 rounded-full btn-primary text-white font-bold text-sm flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Time Selection */}
              {bookingStep === 2 && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-wider block mb-1">Step 2 of 3</span>
                    <h4 className="text-base font-bold text-white">Choose a video slot</h4>
                    <p className="text-xs text-white/50">Select your preferred date and time. (Meetings held via Zoom or Google Meet).</p>
                  </div>

                  {/* Horizontal Date Picker */}
                  <div>
                    <label className="block text-xs text-white/60 font-semibold uppercase tracking-wider mb-2">Available Dates</label>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                      {availableDays.map((day) => {
                        const isChosen = formData.selectedDate === day.raw;
                        return (
                          <button
                            key={day.raw}
                            type="button"
                            onClick={() => setFormData({ ...formData, selectedDate: day.raw })}
                            className={`p-1.5 sm:p-2.5 rounded-lg border text-center flex flex-col justify-between h-20 cursor-pointer transition-all ${
                              isChosen 
                                ? 'bg-[#236EC1]/20 border-[#236EC1] text-white font-bold' 
                                : 'bg-[#141414] border-white/5 text-white/60 hover:border-white/20'
                            }`}
                          >
                            <span className="text-[10px] uppercase font-semibold block">{day.dayName}</span>
                            <span className="text-lg font-bold block">{day.dayNum}</span>
                            <span className="text-[9px] block uppercase text-white/40">{day.monthName}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots Selector */}
                  <div>
                    <label className="block text-xs text-white/60 font-semibold uppercase tracking-wider mb-2">Available Time Slots (IST)</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'].map((time) => {
                        const isChosen = formData.selectedTime === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, selectedTime: time })}
                            className={`py-3 rounded-lg border text-center text-xs font-semibold cursor-pointer transition-all ${
                              isChosen 
                                ? 'bg-[#236EC1] border-transparent text-white font-bold shadow-md' 
                                : 'bg-[#141414] border-white/5 text-white/70 hover:border-white/20'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setBookingStep(1)}
                      className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-white font-semibold text-sm cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setBookingStep(3)}
                      className="px-6 py-3 rounded-full btn-primary text-white font-bold text-sm flex items-center gap-2 cursor-pointer"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Goals and Budget info */}
              {bookingStep === 3 && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-wider block mb-1">Step 3 of 3</span>
                    <h4 className="text-base font-bold text-white">Select marketing target</h4>
                    <p className="text-xs text-white/50">Your responses customize the exact audit deck we construct for you.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/60 font-semibold uppercase tracking-wider mb-1.5">Industry Segment</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({...formData, industry: e.target.value})}
                        className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#236EC1] transition-all"
                      >
                        {industries.map((ind) => (
                          <option key={ind.name} value={ind.name}>{ind.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 font-semibold uppercase tracking-wider mb-1.5">Main Target Goal</label>
                      <select
                        value={formData.mainGoal}
                        onChange={(e) => setFormData({...formData, mainGoal: e.target.value})}
                        className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#236EC1] transition-all"
                      >
                        <option value="Leads">Lead Generation (Vetted Forms)</option>
                        <option value="WhatsApp Chats">Direct WhatsApp Enquiries</option>
                        <option value="Calls">Direct Business Phone Calls</option>
                        <option value="Sales">Physical Store Walk-ins</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/60 font-semibold uppercase tracking-wider mb-2">Estimated Monthly Ads Spend (to Meta)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Under ₹15K', '₹15K - ₹30K', '₹30K - ₹75K', '₹75K+'].map((val) => {
                        const isChosen = formData.adBudget === val;
                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => setFormData({ ...formData, adBudget: val })}
                            className={`py-3 rounded-lg border text-center text-xs font-semibold cursor-pointer transition-all ${
                              isChosen 
                                ? 'bg-[#236EC1] border-transparent text-white font-bold' 
                                : 'bg-[#141414] border-white/5 text-white/70 hover:border-white/20'
                            }`}
                          >
                            {val}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setBookingStep(2)}
                      className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-white font-semibold text-sm cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full btn-primary text-white font-extrabold text-sm flex items-center gap-2 cursor-pointer shadow-lg"
                    >
                      Confirm Booking Slot
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Celebratory Booking Success */}
              {bookingStep === 4 && (
                <div className="text-center py-6 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-black text-white">Your Slot is Confirmed!</h3>
                    <p className="text-sm text-white/70 mt-2 max-w-sm mx-auto">
                      Awesome, {formData.name}! We have scheduled your Meta Ads Strategy Audit for:
                    </p>
                    <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 inline-block">
                      <p className="text-base font-bold text-white flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4 text-[#3B82F6]" /> {formData.selectedDate}
                      </p>
                      <p className="text-sm text-[#3B82F6] font-mono mt-1">
                        at {formData.selectedTime} (IST)
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-white/50 space-y-1">
                    <p>✓ A calendar invite has been queued for: <span className="text-white font-medium">{formData.email}</span></p>
                    <p>✓ Our managing head will WhatsApp you on: <span className="text-white font-medium">{formData.phone}</span></p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-8 py-3 rounded-full btn-primary text-white font-bold text-sm cursor-pointer inline-block"
                    >
                      Back to Website
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
