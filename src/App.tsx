import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  CheckCircle2,
  Clock,
  Globe,
  Layers,
  Mail,
  Search,
  Settings,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
  X,
  BarChart3,
  Workflow,
  BrainCircuit,
  Compass,
  Lightbulb,
  Wrench,
  LineChart,
  MessageSquare,
  FileText,
  Rocket,
  ArrowUpRight,
  MailCheck,
  Send,
  PieChart,
  Cpu,
  MonitorSmartphone,
  Gauge,
  Lock,
  Award,
  Briefcase,
  CpuIcon,
  LayoutGrid,
  Cog,
  ListChecks,
  Bot,
  Activity,
} from 'lucide-react';

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Navigation ────────────────────────────────────────────────
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-2xl border-b border-surface-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-20 max-w-7xl mx-auto">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-ink-900 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-ink-900 text-sm tracking-tight leading-none">
                Laraflyn
              </span>
              <span className="text-[10px] text-ink-400 font-medium tracking-wide mt-0.5">
                AI Marketing Operations
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-ink-500 hover:text-ink-900 transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm py-3 px-6">
              Book a Call
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-ink-700" />
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="w-5 h-0.5 bg-ink-700 rounded-full" />
                <span className="w-5 h-0.5 bg-ink-700 rounded-full" />
              </div>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-surface-200 shadow-soft-xl">
          <div className="section-padding py-6 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base text-ink-600 hover:text-ink-900 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary text-sm py-3 px-6 mt-4">
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Left: Text */}
            <div className="max-w-xl">
              <div className="animate-on-scroll">
                <span className="tag">
                  <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
                  Helping Businesses Save Time with AI & Automation
                </span>
              </div>

              <h1 className="display text-balance mt-8 animate-on-scroll stagger-1">
                Save 10+ Hours Every Week by Automating Your Marketing & Operations.
              </h1>

              <p className="body-large mt-8 animate-on-scroll stagger-2">
                I help founders and growing businesses eliminate repetitive work, organize their marketing systems, optimize CRM processes, and implement practical AI solutions—so they can focus on growth instead of daily operations.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mt-10 animate-on-scroll stagger-3">
                <a href="#contact" className="btn-primary text-base">
                  <Calendar className="w-4 h-4" strokeWidth={2} />
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
                <a href="#services" className="btn-secondary text-base">
                  See How I Can Help
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="animate-on-scroll stagger-2">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-surface-50/60 -z-10 blur-3xl pointer-events-none" />
    </section>
  );
}

// ─── Dashboard Mockup ──────────────────────────────────────────
function DashboardMockup() {
  return (
    <div className="relative">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 shadow-soft-xl p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-ink-900 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <div className="h-2.5 w-24 bg-ink-800 rounded-full" />
              <div className="h-2 w-14 bg-surface-300 rounded-full mt-1.5" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-surface-300" />
            <div className="w-2 h-2 rounded-full bg-surface-300" />
            <div className="w-2 h-2 rounded-full bg-surface-300" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 bg-surface-50/80 rounded-2xl border border-surface-100">
            <div className="h-2 w-10 bg-surface-300 rounded-full mb-2" />
            <div className="h-5 w-14 bg-ink-800 rounded-lg" />
            <div className="flex items-center gap-1 mt-1.5">
              <ArrowUpRight className="w-3 h-3 text-emerald-500" strokeWidth={2.5} />
              <div className="h-2 w-6 bg-emerald-200 rounded-full" />
            </div>
          </div>
          <div className="p-3.5 bg-surface-50/80 rounded-2xl border border-surface-100">
            <div className="h-2 w-10 bg-surface-300 rounded-full mb-2" />
            <div className="h-5 w-12 bg-emerald-500 rounded-lg" />
            <div className="flex items-center gap-1 mt-1.5">
              <ArrowUpRight className="w-3 h-3 text-emerald-500" strokeWidth={2.5} />
              <div className="h-2 w-6 bg-emerald-200 rounded-full" />
            </div>
          </div>
          <div className="p-3.5 bg-surface-50/80 rounded-2xl border border-surface-100">
            <div className="h-2 w-10 bg-surface-300 rounded-full mb-2" />
            <div className="h-5 w-16 bg-ink-800 rounded-lg" />
            <div className="flex items-center gap-1 mt-1.5">
              <ArrowUpRight className="w-3 h-3 text-emerald-500" strokeWidth={2.5} />
              <div className="h-2 w-6 bg-emerald-200 rounded-full" />
            </div>
          </div>
        </div>

        {/* Flow Items */}
        <div className="space-y-2">
          <FlowItem icon={<Users className="w-4 h-4" strokeWidth={1.5} />} label="CRM Pipeline" color="bg-blue-50 text-blue-600 border-blue-100" />
          <FlowItem icon={<Workflow className="w-4 h-4" strokeWidth={1.5} />} label="Automation Flow" color="bg-emerald-50 text-emerald-600 border-emerald-100" />
          <FlowItem icon={<MailCheck className="w-4 h-4" strokeWidth={1.5} />} label="Email Campaign" color="bg-amber-50 text-amber-600 border-amber-100" />
          <FlowItem icon={<ListChecks className="w-4 h-4" strokeWidth={1.5} />} label="Tasks Completed" color="bg-violet-50 text-violet-600 border-violet-100" />
          <FlowItem icon={<Bot className="w-4 h-4" strokeWidth={1.5} />} label="AI Assistant" color="bg-ink-900 text-white border-ink-800" />
          <FlowItem icon={<Activity className="w-4 h-4" strokeWidth={1.5} />} label="Analytics" color="bg-rose-50 text-rose-600 border-rose-100" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-surface-50 border border-surface-200 -z-10" />
      <div className="absolute -top-3 -left-3 w-20 h-20 rounded-2xl bg-surface-50 border border-surface-200 -z-10" />
    </div>
  );
}

function FlowItem({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300 ${color}`}>
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color.split(' ')[0]}`}>
        {icon}
      </div>
      <span className="text-sm font-semibold">{label}</span>
      <div className="ml-auto flex items-center gap-1">
        <div className="h-2 w-8 bg-white/20 rounded-full" />
        <CheckCircle2 className="w-4 h-4 opacity-60" strokeWidth={2} />
      </div>
    </div>
  );
}

// ─── Social Proof Bar ──────────────────────────────────────────
function SocialProof() {
  const countries = [
    { name: 'USA', flag: '🇺🇸' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'Philippines', flag: '🇵🇭' },
  ];

  const stats = [
    { icon: <Clock className="w-4 h-4" strokeWidth={2} />, label: '7+ Years Experience' },
    { icon: <Globe className="w-4 h-4" strokeWidth={2} />, label: 'International Clients' },
    { icon: <Gauge className="w-4 h-4" strokeWidth={2} />, label: 'Marketing & Operations Systems' },
    { icon: <Cpu className="w-4 h-4" strokeWidth={2} />, label: 'AI-Powered Workflows' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-surface-50/50 border-y border-surface-100">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-on-scroll">
            <span className="label">Trusted by businesses across</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-14 animate-on-scroll stagger-1">
            {countries.map((country) => (
              <div
                key={country.name}
                className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-2xl border border-surface-200 shadow-soft-sm hover:shadow-soft-md hover:border-surface-300 transition-all duration-300"
              >
                <span className="text-lg">{country.flag}</span>
                <span className="text-sm font-semibold text-ink-700">{country.name}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-on-scroll stagger-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-surface-200 shadow-soft-sm"
              >
                <div className="w-9 h-9 rounded-xl bg-surface-50 border border-surface-100 flex items-center justify-center text-ink-500">
                  {stat.icon}
                </div>
                <span className="text-sm font-semibold text-ink-700">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Problems ──────────────────────────────────────────────────
function Problems() {
  const problems = [
    {
      icon: <Users className="w-5 h-5" strokeWidth={1.5} />,
      title: 'Manual Work',
      description: 'Your team spends hours on repetitive tasks that could be automated, draining time and energy.',
    },
    {
      icon: <Layers className="w-5 h-5" strokeWidth={1.5} />,
      title: 'Disconnected Systems',
      description: 'Tools that do not talk to each other create data silos and fragmented customer experiences.',
    },
    {
      icon: <BarChart3 className="w-5 h-5" strokeWidth={1.5} />,
      title: 'Messy CRM',
      description: 'Your CRM is a graveyard of outdated contacts, duplicate records, and missed opportunities.',
    },
    {
      icon: <Target className="w-5 h-5" strokeWidth={1.5} />,
      title: 'Lost Leads',
      description: 'Leads slip through the cracks because there is no clear follow-up system in place.',
    },
    {
      icon: <TrendingUp className="w-5 h-5" strokeWidth={1.5} />,
      title: 'Inconsistent Marketing',
      description: 'Campaigns run sporadically with no strategy, producing unpredictable and disappointing results.',
    },
    {
      icon: <Zap className="w-5 h-5" strokeWidth={1.5} />,
      title: 'No Automation',
      description: 'Every process relies on human intervention, creating bottlenecks and scaling limitations.',
    },
  ];

  return (
    <section id="problems" className="py-28 lg:py-40">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 animate-on-scroll">
            <span className="label">The Problem</span>
            <h2 className="heading-2 mt-5 text-balance">
              Sound familiar? These are the biggest barriers to growth.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((problem, i) => (
              <div
                key={problem.title}
                className={`card p-7 lg:p-8 animate-on-scroll stagger-${i + 1}`}
              >
                <div className="icon-box mb-6">{problem.icon}</div>
                <h3 className="heading-4 text-ink-900 mb-3">{problem.title}</h3>
                <p className="body-small">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ──────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: <Compass className="w-6 h-6" strokeWidth={1.5} />,
      outcome: 'Find Hidden Bottlenecks',
      name: 'AI Business Efficiency Audit',
      price: '$297',
      description:
        'A comprehensive review of your current systems, workflows, and technology stack to identify quick wins and long-term improvements.',
      features: ['Strategy Session', 'Workflow Review', 'CRM Review', 'AI Opportunities', 'Action Plan'],
      highlighted: false,
    },
    {
      icon: <Workflow className="w-6 h-6" strokeWidth={1.5} />,
      outcome: 'Automate Repetitive Work',
      name: 'Marketing Automation Setup',
      price: '$997',
      description:
        'End-to-end automation of your marketing workflows, CRM integrations, and email sequences so nothing falls through the cracks.',
      features: ['Workflow Mapping', 'CRM Automation', 'Email Automation', 'Documentation'],
      highlighted: false,
    },
    {
      icon: <BrainCircuit className="w-6 h-6" strokeWidth={1.5} />,
      outcome: 'Build a Business That Scales',
      name: 'Marketing Operations Partner',
      price: '$1,500',
      suffix: '/mo',
      description:
        'Ongoing partnership to manage your marketing operations, continuously optimize workflows, and keep your business running smoothly.',
      features: ['Ongoing Marketing Support', 'CRM Management', 'AI Workflow Improvements', 'Monthly Strategy'],
      highlighted: true,
    },
  ];

  return (
    <section id="services" className="py-28 lg:py-40 bg-surface-50/50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 animate-on-scroll">
            <span className="label">Services</span>
            <h2 className="heading-2 mt-5 text-balance">
              Solutions Designed to Help Your Business Run Better
            </h2>
            <p className="body-large mt-6">
              From a one-time audit to ongoing partnership, choose the level of
              support that matches your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.name}
                className={`relative rounded-2xl p-8 lg:p-10 transition-all duration-500 animate-on-scroll stagger-${
                  i + 1
                } ${
                  service.highlighted
                    ? 'bg-ink-900 text-white shadow-soft-xl border border-ink-800 lg:scale-[1.02] lg:-my-2'
                    : 'bg-white border border-surface-200 shadow-card hover:shadow-card-hover hover:border-surface-300'
                }`}
              >
                {service.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-ink-900 text-white text-xs font-semibold rounded-full border border-ink-700 shadow-soft flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" strokeWidth={2} />
                    Most Popular
                  </span>
                )}

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                    service.highlighted
                      ? 'bg-white/10 text-white border border-white/10'
                      : 'bg-surface-50 border border-surface-200 text-ink-600'
                  }`}
                >
                  {service.icon}
                </div>

                <div
                  className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
                    service.highlighted ? 'text-emerald-400' : 'text-emerald-600'
                  }`}
                >
                  {service.outcome}
                </div>

                <h3
                  className={`heading-4 mb-2 ${
                    service.highlighted ? 'text-white' : 'text-ink-900'
                  }`}
                >
                  {service.name}
                </h3>

                <div className="flex items-baseline gap-1 mt-5 mb-5">
                  <span
                    className={`text-4xl font-bold tracking-tight ${
                      service.highlighted ? 'text-white' : 'text-ink-900'
                    }`}
                  >
                    {service.price}
                  </span>
                  {service.suffix && (
                    <span
                      className={`text-base font-medium ${
                        service.highlighted ? 'text-surface-400' : 'text-ink-400'
                      }`}
                    >
                      {service.suffix}
                    </span>
                  )}
                </div>

                <p
                  className={`body-small mb-10 ${
                    service.highlighted ? 'text-surface-300' : 'text-ink-400'
                  }`}
                >
                  {service.description}
                </p>

                <div className="space-y-3.5 mb-10">
                  <span
                    className={`label block mb-4 ${
                      service.highlighted ? 'text-surface-500' : 'text-ink-400'
                    }`}
                  >
                    Includes
                  </span>
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className={`flex items-center gap-3 text-sm ${
                        service.highlighted ? 'text-surface-200' : 'text-ink-600'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-4.5 h-4.5 flex-shrink-0 ${
                          service.highlighted ? 'text-emerald-400' : 'text-emerald-500'
                        }`}
                        strokeWidth={2}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`block w-full text-center py-4 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                    service.highlighted
                      ? 'bg-white text-ink-900 hover:bg-surface-100'
                      : 'bg-ink-900 text-white hover:bg-ink-800'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Work With Me ──────────────────────────────────────────
function WhyWorkWithMe() {
  const reasons = [
    {
      icon: <Cog className="w-5 h-5" strokeWidth={1.5} />,
      title: 'I Build Systems, Not Just Tasks',
      description:
        'Every recommendation is designed to work together as a cohesive system, not a collection of one-off fixes.',
    },
    {
      icon: <BrainCircuit className="w-5 h-5" strokeWidth={1.5} />,
      title: 'Business-First AI Implementation',
      description:
        'AI is a tool, not a strategy. I implement AI where it actually saves time and drives results for your business.',
    },
    {
      icon: <LayoutGrid className="w-5 h-5" strokeWidth={1.5} />,
      title: 'Marketing + Operations Expertise',
      description:
        'Rare combination of marketing strategy and operational execution means nothing gets lost in translation.',
    },
    {
      icon: <Shield className="w-5 h-5" strokeWidth={1.5} />,
      title: 'Long-Term Strategic Partnership',
      description:
        'I do not disappear after setup. I partner with you to continuously improve and adapt as your business grows.',
    },
  ];

  return (
    <section className="py-28 lg:py-40">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 animate-on-scroll">
            <span className="label">Why Work With Me</span>
            <h2 className="heading-2 mt-5 text-balance">
              Why Founders Work With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className={`card p-8 animate-on-scroll stagger-${i + 1}`}
              >
                <div className="icon-box mb-6">{reason.icon}</div>
                <h3 className="heading-4 text-ink-900 mb-3">{reason.title}</h3>
                <p className="body-small">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process ───────────────────────────────────────────────────
function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Deep dive into your tools, workflows, and pain points to understand where things break down.',
      icon: <Search className="w-5 h-5" strokeWidth={1.5} />,
    },
    {
      number: '02',
      title: 'Assessment',
      description: 'Identify the highest-impact opportunities for automation, optimization, and AI integration.',
      icon: <Lightbulb className="w-5 h-5" strokeWidth={1.5} />,
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Build and deploy new systems, automations, and workflows with documentation and training.',
      icon: <Wrench className="w-5 h-5" strokeWidth={1.5} />,
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous refinement based on real performance data as your business grows.',
      icon: <LineChart className="w-5 h-5" strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="process" className="py-28 lg:py-40 bg-surface-50/50">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 animate-on-scroll">
            <span className="label">Process</span>
            <h2 className="heading-2 mt-5 text-balance">
              A proven approach to transforming your operations
            </h2>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-[72px] left-[12.5%] right-[12.5%] h-px bg-surface-300">
                <div className="absolute top-0 left-0 h-full bg-ink-800 animate-draw-line" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, i) => (
                  <div key={step.number} className={`text-center animate-on-scroll stagger-${i + 1}`}>
                    <div className="relative inline-flex mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-white border-2 border-surface-200 flex items-center justify-center text-ink-600 shadow-soft-sm z-10 transition-all duration-300 hover:border-ink-800 hover:shadow-soft-md">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-ink-900 text-white text-[10px] font-bold flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="heading-4 text-ink-900 mb-3">{step.title}</h3>
                    <p className="body-small max-w-[220px] mx-auto">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((step, i) => (
              <div key={step.number} className={`card p-7 animate-on-scroll stagger-${i + 1}`}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface-50 border border-surface-200 flex items-center justify-center text-ink-600">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-ink-300">{step.number}</span>
                    <h3 className="heading-4 text-ink-900">{step.title}</h3>
                  </div>
                </div>
                <p className="body-small">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-28 lg:py-40">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <span className="label mb-6 block">About</span>
              <h2 className="heading-2 text-balance">
                Most businesses don't need more software.
              </h2>
              <h3 className="heading-3 text-ink-400 mt-3">
                They need better systems.
              </h3>

              <div className="mt-8 space-y-5 text-ink-500 leading-[1.75]">
                <p className="body">
                  I am Laraflyn Camay, an AI Marketing Operations Consultant with over
                  seven years of experience helping founders and small businesses transform
                  chaos into clarity.
                </p>
                <p className="body">
                  I specialize in building practical, automated systems using AI tools,
                  CRM platforms, and smart workflows. My approach is not about adding
                  complexity — it is about removing friction so your business can scale
                  without burning out your team.
                </p>
                <p className="body">
                  Having worked with clients across the USA, Canada, Australia, UK,
                  Singapore, and the Philippines, I understand the unique challenges
                  that growing businesses face in different markets.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {['AI Automation', 'CRM Strategy', 'Marketing Ops', 'Workflow Design'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium text-ink-600 bg-surface-50 rounded-xl border border-surface-200"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="animate-on-scroll stagger-2 order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-surface-100 overflow-hidden border border-surface-200">
                  <AbstractWorkspace />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-white border border-surface-200 -z-10 shadow-soft" />
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-white border border-surface-200 -z-10 shadow-soft" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AbstractWorkspace() {
  return (
    <div className="w-full h-full bg-surface-50 flex items-center justify-center p-8">
      <div className="w-full max-w-sm space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-ink-900 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <div className="h-3 w-24 bg-surface-300 rounded-full" />
            <div className="h-2 w-16 bg-surface-200 rounded-full mt-2" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-white rounded-2xl border border-surface-200 shadow-soft-sm">
            <div className="h-2 w-8 bg-surface-200 rounded-full mb-2" />
            <div className="h-5 w-12 bg-ink-800 rounded-lg" />
          </div>
          <div className="p-3 bg-white rounded-2xl border border-surface-200 shadow-soft-sm">
            <div className="h-2 w-8 bg-surface-200 rounded-full mb-2" />
            <div className="h-5 w-10 bg-emerald-500 rounded-lg" />
          </div>
          <div className="p-3 bg-white rounded-2xl border border-surface-200 shadow-soft-sm">
            <div className="h-2 w-8 bg-surface-200 rounded-full mb-2" />
            <div className="h-5 w-14 bg-ink-800 rounded-lg" />
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-surface-200 shadow-soft-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-2.5 w-20 bg-surface-200 rounded-full" />
            <div className="h-2 w-8 bg-surface-200 rounded-full" />
          </div>
          <div className="flex items-end gap-2 h-20">
            <div className="flex-1 bg-surface-200 rounded-t-lg" style={{ height: '40%' }} />
            <div className="flex-1 bg-surface-200 rounded-t-lg" style={{ height: '60%' }} />
            <div className="flex-1 bg-surface-200 rounded-t-lg" style={{ height: '45%' }} />
            <div className="flex-1 bg-surface-200 rounded-t-lg" style={{ height: '80%' }} />
            <div className="flex-1 bg-ink-800 rounded-t-lg" style={{ height: '95%' }} />
            <div className="flex-1 bg-surface-200 rounded-t-lg" style={{ height: '70%' }} />
            <div className="flex-1 bg-surface-200 rounded-t-lg" style={{ height: '85%' }} />
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-surface-200 shadow-soft-sm">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" strokeWidth={2} />
            </div>
            <div className="flex-1"><div className="h-2.5 w-28 bg-surface-200 rounded-full" /></div>
            <div className="h-2 w-10 bg-surface-200 rounded-full" />
          </div>
          <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-surface-200 shadow-soft-sm">
            <div className="w-8 h-8 rounded-lg bg-ink-50 flex items-center justify-center">
              <Zap className="w-4 h-4 text-ink-500" strokeWidth={2} />
            </div>
            <div className="flex-1"><div className="h-2.5 w-24 bg-surface-200 rounded-full" /></div>
            <div className="h-2 w-10 bg-surface-200 rounded-full" />
          </div>
          <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-surface-200 shadow-soft-sm">
            <div className="w-8 h-8 rounded-lg bg-ink-50 flex items-center justify-center">
              <BrainCircuit className="w-4 h-4 text-ink-500" strokeWidth={2} />
            </div>
            <div className="flex-1"><div className="h-2.5 w-32 bg-surface-200 rounded-full" /></div>
            <div className="h-2 w-10 bg-surface-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Social Proof / Testimonials ───────────────────────────────
function Testimonials() {
  const placeholders = [
    {
      icon: <MessageSquare className="w-5 h-5" strokeWidth={1.5} />,
      label: 'Client testimonial coming soon.',
    },
    {
      icon: <MessageSquare className="w-5 h-5" strokeWidth={1.5} />,
      label: 'Client testimonial coming soon.',
    },
    {
      icon: <MessageSquare className="w-5 h-5" strokeWidth={1.5} />,
      label: 'Client testimonial coming soon.',
    },
  ];

  return (
    <section className="py-28 lg:py-40 bg-surface-50/50">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 animate-on-scroll">
            <span className="label">Social Proof</span>
            <h2 className="heading-2 mt-5 text-balance">
              What Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {placeholders.map((item, i) => (
              <div
                key={i}
                className={`card p-8 animate-on-scroll stagger-${i + 1}`}
              >
                <div className="icon-box mb-6">{item.icon}</div>
                <p className="body text-ink-400 italic">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────────
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What types of businesses do you work with?',
      answer: 'I primarily work with founders and small-to-medium businesses that are ready to scale but feel held back by operational chaos. This includes service-based businesses, agencies, coaches, consultants, and product companies with marketing teams of 1–10 people.',
    },
    {
      question: 'How long does a typical automation setup take?',
      answer: 'The AI Business Efficiency Audit takes about 1–2 weeks. The Marketing Automation Setup typically spans 2–4 weeks depending on complexity. For ongoing partnerships, we start seeing meaningful improvements within the first month.',
    },
    {
      question: 'What tools and platforms do you work with?',
      answer: 'I work with a wide range of tools including HubSpot, Salesforce, Pipedrive, Mailchimp, ActiveCampaign, Zapier, Make, Notion, Slack, and various AI platforms like ChatGPT, Claude, and custom AI integrations. I adapt to your existing stack.',
    },
    {
      question: 'Do I need to have existing systems in place?',
      answer: 'Not necessarily. Whether you are starting from scratch or trying to untangle a mess of existing tools, I can help. The Discovery phase is designed to meet you exactly where you are.',
    },
    {
      question: 'What is the difference between the one-time services and the monthly partnership?',
      answer: 'The one-time services (Audit and Automation Setup) deliver a specific outcome and handoff. The monthly partnership is for businesses that want continuous optimization, new automation builds, CRM management, and strategic guidance as they grow.',
    },
  ];

  return (
    <section id="faq" className="py-28 lg:py-40">
      <div className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20 animate-on-scroll">
            <span className="label">FAQ</span>
            <h2 className="heading-2 mt-5 text-balance">Questions? I have answers.</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-500 animate-on-scroll stagger-${
                  (i % 6) + 1
                } ${
                  openIndex === i
                    ? 'bg-white border-surface-300 shadow-soft-lg'
                    : 'bg-surface-50/50 border-surface-200 hover:border-surface-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 lg:p-7 text-left"
                >
                  <span className={`text-base font-semibold pr-6 transition-colors duration-300 ${openIndex === i ? 'text-ink-900' : 'text-ink-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-ink-900 text-white rotate-180' : 'bg-surface-100 text-ink-400'}`}>
                    <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-out ${openIndex === i ? 'max-h-80' : 'max-h-0'}`}>
                  <p className="px-6 lg:px-7 pb-6 lg:pb-7 text-sm text-ink-500 leading-[1.75]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ─────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section id="contact" className="py-28 lg:py-40 bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.02] rounded-full blur-3xl" />

      <div className="section-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <span className="tag-dark inline-flex mb-8">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
            Start Today
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] text-balance">
            Let's Build a Smarter Business Together.
          </h2>
          <p className="text-lg text-surface-400 mt-8 max-w-xl mx-auto leading-relaxed">
            One conversation could save your business dozens of hours every month.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="mailto:laraflync@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-ink-900 font-semibold rounded-2xl transition-all duration-300 hover:bg-surface-100 active:scale-[0.97] w-full sm:w-auto text-base"
            >
              <Calendar className="w-4 h-4" strokeWidth={2} />
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <a
              href="mailto:laraflync@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-surface-300 font-medium rounded-2xl border border-ink-700 transition-all duration-300 hover:bg-ink-800 hover:text-white w-full sm:w-auto text-base"
            >
              <Mail className="w-4 h-4" strokeWidth={2} />
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-14 bg-ink-950 border-t border-ink-900">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-ink-800 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-surface-300" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-surface-300 leading-none">Laraflyn</span>
                <span className="text-[10px] text-surface-500 font-medium tracking-wide mt-0.5">AI Marketing Operations</span>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <a href="#services" className="text-sm text-surface-500 hover:text-surface-300 transition-colors duration-300">Services</a>
              <a href="#process" className="text-sm text-surface-500 hover:text-surface-300 transition-colors duration-300">Process</a>
              <a href="#about" className="text-sm text-surface-500 hover:text-surface-300 transition-colors duration-300">About</a>
              <a href="#faq" className="text-sm text-surface-500 hover:text-surface-300 transition-colors duration-300">FAQ</a>
            </div>

            <p className="text-xs text-surface-600">
              © {new Date().getFullYear()} Laraflyn. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ───────────────────────────────────────────────────────
function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SocialProof />
      <Problems />
      <Services />
      <WhyWorkWithMe />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
