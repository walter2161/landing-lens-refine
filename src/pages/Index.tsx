import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Clock, 
  MessageSquare, 
  TrendingUp, 
  Infinity,
  CheckCircle2,
  ChevronDown,
  DollarSign,
  Users,
  Shield,
  Sparkles,
  Target,
  Smartphone,
  Star,
  ArrowRight,
  Rocket,
  Lock,
  Award,
  Globe
} from "lucide-react";
import { useState, useEffect } from "react";
import { ChatBot } from "@/components/ChatBot";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const PURCHASE_LINK = "https://pag.ae/81es9xYnQ/button";

const Index = () => {
  const [showFloatingFooter, setShowFloatingFooter] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const faqSection = document.getElementById('faq');
      if (!faqSection) return;

      const faqTop = faqSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Mostra o rodapé quando a seção FAQ está visível (últimas 2 seções)
      setShowFloatingFooter(faqTop < windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica na montagem

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="LedChat" className="w-10 h-10" />
            <span className="font-bold text-xl">LedChat</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">
                {t.floatingCTA} - {t.floatingOffer.split(': ')[1]}
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 text-sm">
              {t.floatingLimited}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t.heroSubtitle}
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{t.benefit1Title}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{t.benefit2Title}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{t.benefit3Title}</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-14">
                <a href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">
                  {t.heroCTA}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {t.heroGuarantee}
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://image.pollinations.ai/prompt/Happy%20professional%20woman%20smiling,%20working%20on%20modern%20laptop,%20bright%20office,%20natural%20daylight,%20business%20casual%20attire,%20successful%20entrepreneur,%20photorealistic,%20high%20quality%20portrait?width=800&height=800&nologo=true&seed=123"
              alt="Profissional usando LedChat"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">+347%</div>
                  <div className="text-sm text-muted-foreground">{t.statsConversionLabel}</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground">{t.statsAttendanceLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y bg-muted/30 py-8">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5" />
              <span className="font-medium">{t.trustBadge1}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5" />
              <span className="font-medium">{t.trustBadge2}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="w-5 h-5" />
              <span className="font-medium">{t.trustBadge3}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-5 h-5" />
              <span className="font-medium">{t.trustBadge4}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Agitate Section - DARK */}
      <section id="problema" className="bg-slate-900 text-white py-20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            {t.heroTitle}
          </h2>
          <p className="text-xl text-center text-slate-300 mb-12">
            {t.heroSubtitle}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="text-4xl mb-3">😰</div>
              <h3 className="font-bold mb-2 text-white">{t.benefit1Title.split(' ')[0]} {t.benefit1Title.split(' ')[1]}</h3>
              <p className="text-sm text-slate-400">{t.benefit1Desc}</p>
            </Card>
            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="text-4xl mb-3">💸</div>
              <h3 className="font-bold mb-2 text-white">{t.benefit2Title.split('-')[0]}</h3>
              <p className="text-sm text-slate-400">{t.benefit2Desc}</p>
            </Card>
            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="text-4xl mb-3">😔</div>
              <h3 className="font-bold mb-2 text-white">{t.benefit3Title.split('(')[0]}</h3>
              <p className="text-sm text-slate-400">{t.benefit3Desc}</p>
            </Card>
          </div>

          <div className="bg-primary/20 border-2 border-primary/30 rounded-xl p-8 text-center">
            <p className="text-2xl font-bold mb-4">{t.howTitle}</p>
            <blockquote className="text-xl italic mb-4 text-slate-300">{t.heroSubtitle}</blockquote>
            <p className="text-lg font-semibold text-primary">{t.heroCTA}</p>
          </div>
        </div>
      </section>

      {/* Solution - Product Showcase - LIGHT */}
      <section id="solucao" className="bg-background py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">{t.proofTitle}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.benefitsTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.heroSubtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="flex items-start gap-4 mb-6">
                <Globe className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">{t.whyWordPressTitle}</h3>
                  <p className="text-lg text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t.whyWordPressDesc }} />
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t.whyWordPress1}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t.whyWordPress2}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t.whyWordPress3}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <img 
                src="https://image.pollinations.ai/prompt/Professional%20tech%20team%20member,%20male,%2035%20years,%20friendly%20smile,%20business%20casual,%20clean%20studio%20background,%20headshot%20portrait,%20photorealistic?width=400&height=400&nologo=true&seed=456"
                alt={t.card1Title}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="font-bold text-lg mb-2">{t.card1Title}</h3>
              <p className="text-muted-foreground text-sm">
                {t.card1Desc}
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://image.pollinations.ai/prompt/Friendly%20customer%20support%20woman,%2028%20years,%20warm%20smile,%20professional%20attire,%20modern%20office,%20natural%20lighting,%20portrait%20photo?width=400&height=400&nologo=true&seed=789"
                alt={t.card2Title}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="font-bold text-lg mb-2">{t.card2Title}</h3>
              <p className="text-muted-foreground text-sm">
                {t.card2Desc}
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://image.pollinations.ai/prompt/Successful%20business%20owner,%20male,%2040%20years,%20confident%20expression,%20suit,%20professional%20studio%20photo,%20clean%20background?width=400&height=400&nologo=true&seed=101"
                alt={t.card3Title}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="font-bold text-lg mb-2">{t.card3Title}</h3>
              <p className="text-muted-foreground text-sm">
                {t.card3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - DARK */}
      <section id="recursos" className="bg-slate-900 text-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.pricingTitle}</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">{t.heroSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title={t.feature1Title}
              description={t.feature1Desc}
              highlight={t.feature1Highlight}
              dark
            />
            <FeatureCard
              icon={<DollarSign className="w-10 h-10" />}
              title={t.feature2Title}
              description={t.feature2Desc}
              highlight={t.feature2Highlight}
              dark
            />
            <FeatureCard
              icon={<MessageSquare className="w-10 h-10" />}
              title={t.feature3Title}
              description={t.feature3Desc}
              highlight={t.feature3Highlight}
              dark
            />
            <FeatureCard
              icon={<Sparkles className="w-10 h-10" />}
              title={t.feature4Title}
              description={t.feature4Desc}
              highlight={t.feature4Highlight}
              dark
            />
            <FeatureCard
              icon={<TrendingUp className="w-10 h-10" />}
              title={t.feature5Title}
              description={t.feature5Desc}
              highlight={t.feature5Highlight}
              dark
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title={t.feature6Title}
              description={t.feature6Desc}
              highlight={t.feature6Highlight}
              dark
            />
          </div>

          <div className="bg-primary/20 border-2 border-primary/30 rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold mb-4">{t.floatingOffer}</p>
            <p className="text-lg text-slate-300 mb-6">{t.pricingOnce}</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">{t.pricingCTA}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof - Stats - PRIMARY */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">{t.statsUsersLabel}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">+347%</div>
              <div className="text-primary-foreground/80">{t.statsConversionAvg}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">{t.statsAttendanceAuto}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">R$0</div>
              <div className="text-primary-foreground/80">{t.statsAICost}</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - LIGHT */}
      <section id="como-funciona" className="bg-background py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">{t.howTitle.split(':')[0]}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.heroTitle}</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ProcessStep number="1" title={t.step1Title} description={t.step1Desc} />
            <ProcessStep number="2" title={t.step2Title} description={t.step2Desc} />
            <ProcessStep number="3" title={t.step3Title} description={t.step3Desc} />
            <ProcessStep number="4" title={t.step1Title} description={t.step1Desc} />
            <ProcessStep number="5" title={t.step2Title} description={t.step2Desc} />
            <ProcessStep number="6" title={t.step3Title} description={t.step3Desc} />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6">
              <a href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">{t.heroCTA}</a>
            </Button>
            <p className="mt-4 text-muted-foreground">{t.pricingOnce}</p>
          </div>
        </div>
      </section>

      {/* Pricing Comparison - LIGHT */}
      <section id="precos" className="bg-muted/30 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.pricingTitle}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 relative opacity-60">
              <Badge className="mb-4" variant="outline">{t.comparisonOthers}</Badge>
              <div className="text-3xl font-bold mb-2">{t.comparisonOthersPrice}<span className="text-lg font-normal">{t.comparisonOthersMonth}</span></div>
              <p className="text-sm text-muted-foreground mb-6">{t.comparisonOthersSubtitle}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span>{t.comparisonOthers1}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span>{t.comparisonOthers2}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span>{t.comparisonOthers3}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive">✗</span>
                  <span>{t.comparisonOthers4}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive">✗</span>
                  <span>{t.comparisonOthers5}</span>
                </li>
              </ul>
              <div className="text-center pt-4 border-t">
                <div className="text-lg font-bold text-muted-foreground">
                  {t.comparisonOthersTotal}
                </div>
                <div className="text-sm text-muted-foreground">{t.comparisonOthersTotalSub}</div>
              </div>
            </Card>

            <Card className="p-8 relative border-4 border-primary shadow-2xl transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-6 py-2 text-sm">
                  {t.comparisonBest}
                </Badge>
              </div>
              <Badge className="mb-4 bg-primary text-primary-foreground">{t.comparisonLedChat}</Badge>
              <div className="mb-2">
                <span className="text-2xl line-through text-muted-foreground">{t.comparisonLedChatWas}</span>
              </div>
              <div className="text-5xl font-bold mb-2 text-primary">{t.comparisonLedChatNow}<span className="text-lg font-normal">{t.comparisonLedChatOnce}</span></div>
              <p className="text-sm text-muted-foreground mb-6">{t.comparisonLedChatLicense}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{t.comparisonLedChat1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{t.comparisonLedChat2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{t.comparisonLedChat3}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{t.comparisonLedChat4}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{t.comparisonLedChat5}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{t.comparisonLedChat6}</span>
                </li>
              </ul>
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                <a href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">
                  {t.comparisonLedChatCTA}
                </a>
              </Button>
              <div className="text-center pt-4 border-t mt-6">
                <div className="text-lg font-bold text-primary">
                  {t.comparisonLedChatSave}
                </div>
                <div className="text-sm text-muted-foreground">{t.comparisonLedChatSaveSub}</div>
              </div>
            </Card>

            <Card className="p-6 relative opacity-60">
              <Badge className="mb-4" variant="outline">{t.comparisonCustom}</Badge>
              <div className="text-3xl font-bold mb-2">{t.comparisonCustomPrice}</div>
              <p className="text-sm text-muted-foreground mb-6">{t.comparisonCustomSubtitle}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span>{t.comparisonCustom1}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span>{t.comparisonCustom2}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span>{t.comparisonCustom3}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive">✗</span>
                  <span>{t.comparisonCustom4}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive">✗</span>
                  <span>{t.comparisonCustom5}</span>
                </li>
              </ul>
              <div className="text-center pt-4 border-t">
                <div className="text-lg font-bold text-muted-foreground">
                  {t.comparisonCustomTotal}
                </div>
                <div className="text-sm text-muted-foreground">{t.comparisonCustomTotalSub}</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials - DARK */}
      <section id="depoimentos" className="bg-slate-900 text-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.proofTitle}</h2>
            <p className="text-xl text-slate-300">{t.heroSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <p className="mb-4 text-slate-300" dangerouslySetInnerHTML={{ __html: t.testimonial1 }} />
              <div className="flex items-center gap-3">
                <img 
                  src="https://image.pollinations.ai/prompt/Brazilian%20male%20web%20developer,%2030%20years%20old,%20friendly%20smile,%20casual%20t-shirt,%20modern%20workspace,%20natural%20lighting,%20professional%20headshot?width=100&height=100&nologo=true&seed=200"
                  alt={t.testimonial1Name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{t.testimonial1Name}</div>
                  <div className="text-sm text-slate-400">{t.testimonial1Role}</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <p className="mb-4 text-slate-300" dangerouslySetInnerHTML={{ __html: t.testimonial2 }} />
              <div className="flex items-center gap-3">
                <img 
                  src="https://image.pollinations.ai/prompt/Professional%20Brazilian%20woman,%2032%20years%20old,%20warm%20smile,%20business%20casual%20blouse,%20bright%20studio%20photo,%20clean%20background,%20headshot%20portrait?width=100&height=100&nologo=true&seed=201"
                  alt={t.testimonial2Name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{t.testimonial2Name}</div>
                  <div className="text-sm text-slate-400">{t.testimonial2Role}</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <p className="mb-4 text-slate-300" dangerouslySetInnerHTML={{ __html: t.testimonial3 }} />
              <div className="flex items-center gap-3">
                <img 
                  src="https://image.pollinations.ai/prompt/Brazilian%20male%20entrepreneur,%2038%20years,%20confident%20expression,%20polo%20shirt,%20modern%20office,%20natural%20light,%20professional%20portrait?width=100&height=100&nologo=true&seed=202"
                  alt={t.testimonial3Name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{t.testimonial3Name}</div>
                  <div className="text-sm text-slate-400">{t.testimonial3Role}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ - LIGHT */}
      <section id="faq" className="bg-background py-20">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.faqTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.heroSubtitle}</p>
          </div>

          <div className="space-y-4">
            <FAQItem question={t.faq1Q} answer={t.faq1A} />
            <FAQItem question={t.faq2Q} answer={t.faq2A} />
            <FAQItem question={t.faq3Q} answer={t.faq3A} />
            <FAQItem question={t.faq4Q} answer={t.faq4A} />
            <FAQItem question={t.faq5Q} answer={t.faq5A} />
            <FAQItem question={t.faq6Q} answer={t.faq6A} />
            <FAQItem question={t.faq7Q} answer={t.faq7A} />
          </div>
        </div>
      </section>

      {/* Final CTA - DARK */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.finalTitle}</h2>
          <p className="text-xl mb-8 text-slate-300">{t.finalNote}</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="text-4xl mb-3">❌</div>
              <h3 className="font-bold text-xl mb-3 text-white">{t.finalOption1}</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• {t.heroSubtitle}</li>
                <li>• {t.pricingOnce}</li>
                <li>• {t.benefit1Title}</li>
                <li>• {t.benefit2Title}</li>
                <li>• {t.benefit3Title}</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-slate-800 border-slate-700 border-primary">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-xl mb-3 text-white">{t.finalOption2}</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• {t.floatingOffer}</li>
                <li>• {t.benefit1Title}</li>
                <li>• {t.benefit2Title}</li>
                <li>• {t.benefit3Title}</li>
                <li>• {t.pricingCTA}</li>
              </ul>
            </Card>
          </div>

          <div className="space-y-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-xl px-16 py-8 shadow-2xl">
              <a href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">
                {t.finalCTA}
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </Button>
            
            <div className="flex items-center justify-center gap-8 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>{t.trustBadge1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>{t.pricingFeature5}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>{t.heroGuarantee.split('•')[0].trim()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Limit Notice */}
      <section className="bg-muted/20 py-8 border-y">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center text-xs text-muted-foreground leading-relaxed">
            {t.apiLimitWarning}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="LedChat" className="w-8 h-8" />
                <span className="font-bold text-xl">LedChat</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.footerDesc}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t.footerProduct}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#recursos" className="hover:text-primary transition-colors">{t.pricingFeature1}</a></li>
                <li><a href="#precos" className="hover:text-primary transition-colors">{t.pricingTitle}</a></li>
                <li><a href="#como-funciona" className="hover:text-primary transition-colors">{t.howTitle}</a></li>
                <li><a href="#depoimentos" className="hover:text-primary transition-colors">{t.proofTitle}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t.footerSupport}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#como-funciona" className="hover:text-primary transition-colors">{t.step1Title}</a></li>
                <li><a href="#como-funciona" className="hover:text-primary transition-colors">{t.step2Title}</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="mailto:contato@ledchat.com.br" className="hover:text-primary transition-colors">{t.footerContact}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t.footerLegal}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">{t.footerLegal}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footerSupport}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.trustBadge4}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
            <div className="text-center pt-4 border-t">
              <div className="text-lg font-bold text-primary">
                {t.pricingCTA}
              </div>
              <div className="text-sm text-muted-foreground">{t.footerRights}</div>
            </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar */}
      {showFloatingFooter && (
        <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground py-4 shadow-2xl z-50 border-t-4 border-primary-foreground/20 animate-in slide-in-from-bottom-4">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <div className="font-bold text-lg">{t.floatingOffer}</div>
                <div className="text-sm opacity-90">{t.heroGuarantee.split('•')[1]} • {t.heroGuarantee.split('•')[2]}</div>
              </div>
              <div className="md:hidden">
                <div className="font-bold">{t.floatingOffer}</div>
              </div>
            </div>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
              <a href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">
                {t.floatingCTA.split(' ').slice(1).join(' ')}
              </a>
            </Button>
          </div>
        </div>
      )}

      {/* ChatBot Flutuante */}
      <ChatBot showFloatingFooter={showFloatingFooter} />
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  highlight,
  dark = false
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  highlight?: string;
  dark?: boolean;
}) => (
  <Card className={`p-6 hover:shadow-lg transition-all relative group ${dark ? 'bg-slate-800 border-slate-700 text-white' : 'border-border/50 hover:border-primary/50'}`}>
    {highlight && (
      <Badge className="absolute -top-3 -right-3 bg-primary text-primary-foreground">
        {highlight}
      </Badge>
    )}
    <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className={dark ? 'text-slate-400' : 'text-muted-foreground'}>{description}</p>
  </Card>
);

const ProcessStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: string; 
  title: string; 
  description: string;
}) => (
  <div className="flex gap-6 items-start">
    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg">
      {number}
    </div>
    <div className="flex-1 pt-3">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card className="border-border/50 overflow-hidden hover:border-primary/50 transition-colors">
      <button
        className="w-full p-6 text-left flex justify-between items-start gap-4 hover:bg-muted/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg pr-4">{question}</span>
        <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform text-primary ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-muted-foreground">
          {answer}
        </div>
      )}
    </Card>
  );
};

export default Index;