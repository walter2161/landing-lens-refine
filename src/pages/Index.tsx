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
                  <div className="text-sm text-muted-foreground">Conversões</div>
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
                  <div className="text-sm text-muted-foreground">Atendimento</div>
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
              <span className="font-medium">Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5" />
              <span className="font-medium">Uso Ilimitado</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="w-5 h-5" />
              <span className="font-medium">+500 Clientes</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-5 h-5" />
              <span className="font-medium">Licença Vitalícia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Agitate Section - DARK */}
      <section id="problema" className="bg-slate-900 text-white py-20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Você está deixando <span className="text-red-400">dinheiro na mesa</span> 
            em CADA projeto WordPress que entrega
          </h2>
          <p className="text-xl text-center text-slate-300 mb-12">
            Enquanto você entrega "apenas" sites bonitos, seus concorrentes estão cobrando 
            R$500, R$800, até R$1.200 a mais pelo MESMO trabalho... só porque adicionaram 
            um assistente virtual inteligente.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="text-4xl mb-3">😰</div>
              <h3 className="font-bold mb-2 text-white">Sem Diferencial</h3>
              <p className="text-sm text-slate-400">
                Você entrega o mesmo que todo mundo: sites WordPress bonitos que não vendem sozinhos
              </p>
            </Card>
            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="text-4xl mb-3">💸</div>
              <h3 className="font-bold mb-2 text-white">Fatura Menos</h3>
              <p className="text-sm text-slate-400">
                Cobra o "preço de mercado" enquanto poderia cobrar 2x, 3x mais
              </p>
            </Card>
            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="text-4xl mb-3">😔</div>
              <h3 className="font-bold mb-2 text-white">Clientes Mornos</h3>
              <p className="text-sm text-slate-400">
                Eles pagam mas não ficam empolgados. Querem algo que "realmente venda"
              </p>
            </Card>
          </div>

          <div className="bg-primary/20 border-2 border-primary/30 rounded-xl p-8 text-center">
            <p className="text-2xl font-bold mb-4">
              MAS E SE você pudesse dizer para seu cliente:
            </p>
            <blockquote className="text-xl italic mb-4 text-slate-300">
              "Além do site WordPress, vou instalar um <strong className="text-white">assistente virtual com IA</strong> que 
              responde dúvidas 24/7, mostra produtos, aumenta vendas automaticamente... 
              por apenas <strong className="text-white">R$XXX a mais</strong>"
            </blockquote>
            <p className="text-lg font-semibold text-primary">
              Eles vão pagar SEM PENSAR. (E você instalou isso em 5 minutos)
            </p>
          </div>
        </div>
      </section>

      {/* Solution - Product Showcase - LIGHT */}
      <section id="solucao" className="bg-background py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">A SOLUÇÃO</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Apresentamos o <span className="text-primary">LedChat</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O plugin WordPress que adiciona um assistente virtual inteligente em qualquer site. 
              Ele lê TODO o conteúdo (páginas, posts, produtos WooCommerce) e atende visitantes como um vendedor profissional.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="flex items-start gap-4 mb-6">
                <Globe className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Por que WordPress?</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    WordPress é a plataforma de <strong>43% de TODOS os sites da internet</strong>. Mais de 455 milhões de sites ativos no mundo todo. 
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>A plataforma mais usada mundialmente para e-commerce e sites corporativos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Fácil de usar, poderosa e com infinitas possibilidades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Com o LedChat, você transforma qualquer site WordPress em uma máquina de vendas lucrativa</span>
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
                alt="Especialista em IA"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="font-bold text-lg mb-2">IA que Entende Seu Negócio</h3>
              <p className="text-muted-foreground text-sm">
                Absorve automaticamente todo conteúdo do WordPress e responde com precisão
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://image.pollinations.ai/prompt/Friendly%20customer%20support%20woman,%2028%20years,%20warm%20smile,%20professional%20attire,%20modern%20office,%20natural%20lighting,%20portrait%20photo?width=400&height=400&nologo=true&seed=789"
                alt="Atendimento Natural"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="font-bold text-lg mb-2">Conversação Natural</h3>
              <p className="text-muted-foreground text-sm">
                Interage como um humano, tira dúvidas e guia o cliente até a compra
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://image.pollinations.ai/prompt/Successful%20business%20owner,%20male,%2040%20years,%20confident%20expression,%20suit,%20professional%20studio%20photo,%20clean%20background?width=400&height=400&nologo=true&seed=101"
                alt="Especialista em Vendas"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="font-bold text-lg mb-2">Conversão Automática</h3>
              <p className="text-muted-foreground text-sm">
                Reduz abandono, aumenta ticket médio e fecha vendas enquanto você dorme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - DARK */}
      <section id="recursos" className="bg-slate-900 text-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tudo que você precisa para <span className="text-primary">cobrar mais</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Cada funcionalidade foi pensada para você ganhar mais e entregar valor absurdo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Instalação Instantânea"
              description="5 minutos do upload até funcionar no WordPress. Plugin > Ativar > Configurar > Shortcode. Pronto."
              highlight="Economize horas"
              dark
            />
            <FeatureCard
              icon={<DollarSign className="w-10 h-10" />}
              title="IA 100% Gratuita"
              description="Zero custo com tokens, zero mensalidade. A IA é GRÁTIS para sempre. Lucro puro pra você."
              highlight="Zero custos"
              dark
            />
            <FeatureCard
              icon={<MessageSquare className="w-10 h-10" />}
              title="WhatsApp Integrado"
              description="Botão direto pro WhatsApp. Cliente escolhe: chat automático ou fala com você. Mais contatos qualificados."
              highlight="Mais leads"
              dark
            />
            <FeatureCard
              icon={<Sparkles className="w-10 h-10" />}
              title="Aprende Sozinho"
              description="Lê páginas, posts WordPress, produtos WooCommerce, categorias. Quanto mais conteúdo, mais inteligente fica."
              highlight="Zero trabalho"
              dark
            />
            <FeatureCard
              icon={<TrendingUp className="w-10 h-10" />}
              title="Aumenta Conversões"
              description="Resposta imediata = menos abandono. Clientes relatam +150% em vendas online."
              highlight="Mais vendas"
              dark
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Trabalha 24/7"
              description="Fim de semana, feriado, madrugada. Seu assistente NUNCA tira férias."
              highlight="Sempre ativo"
              dark
            />
          </div>

          <div className="bg-primary/20 border-2 border-primary/30 rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold mb-4">
              E tudo isso por um pagamento único de R$99
            </p>
            <p className="text-lg text-slate-300 mb-6">
              Enquanto outros cobram R$47/mês para sempre...
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">
                Quero Garantir Meu LedChat Agora
              </a>
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
              <div className="text-primary-foreground/80">Profissionais usando</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">+347%</div>
              <div className="text-primary-foreground/80">Média de conversão</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Atendimento automático</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">R$0</div>
              <div className="text-primary-foreground/80">Custo de IA mensal</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - LIGHT */}
      <section id="como-funciona" className="bg-background py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">SIMPLES ASSIM</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Como você vai de "dev comum" para "especialista em IA" em <span className="text-primary">menos de 1 hora</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ProcessStep
              number="1"
              title="Compre Agora (30 segundos)"
              description="Clique no botão, pague R$99 via PagBank. Seguro, rápido, sem complicação."
            />
            <ProcessStep
              number="2"
              title="Receba por E-mail (até 24h)"
              description="Plugin .zip para WordPress + documentação completa + vídeo tutorial na sua caixa de entrada."
            />
            <ProcessStep
              number="3"
              title="Instale no WordPress (2 minutos)"
              description="Plugins > Adicionar novo > Upload > Ativar. Igual qualquer outro plugin WordPress."
            />
            <ProcessStep
              number="4"
              title="Configure Básico (3 minutos)"
              description="Nome do assistente, mensagem de boas-vindas, número do WhatsApp. Só isso."
            />
            <ProcessStep
              number="5"
              title="Cole o Shortcode (10 segundos)"
              description="Copie [ledchat] e cole onde quiser no WordPress. Rodapé, popup, página específica. Funciona."
            />
            <ProcessStep
              number="6"
              title="LUCRE (pra sempre)"
              description="Cobre R$300-1.200 a mais por projeto. Instale em dezenas de sites WordPress. Sem limite."
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6">
              <a href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">
                Começar Agora - Apenas R$99
              </a>
            </Button>
            <p className="mt-4 text-muted-foreground">
              Tempo total de setup: menos de 10 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Comparison - LIGHT */}
      <section id="precos" className="bg-muted/30 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Compare e veja o <span className="text-primary">absurdo</span> dessa oferta
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 relative opacity-60">
              <Badge className="mb-4" variant="outline">Outros Plugins</Badge>
              <div className="text-3xl font-bold mb-2">R$47<span className="text-lg font-normal">/mês</span></div>
              <p className="text-sm text-muted-foreground mb-6">Para sempre...</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span>Chatbot básico</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span>Respostas limitadas</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span>Suporte lento</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive">✗</span>
                  <span>Sem integração WooCommerce</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive">✗</span>
                  <span>Paga todo mês</span>
                </li>
              </ul>
              <div className="text-center pt-4 border-t">
                <div className="text-lg font-bold text-muted-foreground">
                  R$564/ano
                </div>
                <div className="text-sm text-muted-foreground">Todo santo ano</div>
              </div>
            </Card>

            <Card className="p-8 relative border-4 border-primary shadow-2xl transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-6 py-2 text-sm">
                  MELHOR ESCOLHA
                </Badge>
              </div>
              <Badge className="mb-4 bg-primary text-primary-foreground">LedChat</Badge>
              <div className="mb-2">
                <span className="text-2xl line-through text-muted-foreground">R$450</span>
              </div>
              <div className="text-5xl font-bold mb-2 text-primary">R$99<span className="text-lg font-normal">/única vez</span></div>
              <p className="text-sm text-muted-foreground mb-6">Licença vitalícia</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">IA avançada GRÁTIS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">Integração WooCommerce</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">WhatsApp integrado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">Sites WordPress ilimitados</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">Atualizações vitalícias</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">Suporte prioritário</span>
                </li>
              </ul>
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                <a href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">
                  Garantir Por R$99 Agora
                </a>
              </Button>
              <div className="text-center pt-4 border-t mt-6">
                <div className="text-lg font-bold text-primary">
                  Economize R$465
                </div>
                <div className="text-sm text-muted-foreground">No primeiro ano</div>
              </div>
            </Card>

            <Card className="p-6 relative opacity-60">
              <Badge className="mb-4" variant="outline">Desenvolver do Zero</Badge>
              <div className="text-3xl font-bold mb-2">R$5.000+</div>
              <p className="text-sm text-muted-foreground mb-6">Investimento inicial</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span>Contratar desenvolvedor</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span>2-3 meses de trabalho</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span>Custo com API OpenAI</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive">✗</span>
                  <span>Bugs e manutenção</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive">✗</span>
                  <span>Tempo perdido</span>
                </li>
              </ul>
              <div className="text-center pt-4 border-t">
                <div className="text-lg font-bold text-muted-foreground">
                  Meses de trabalho
                </div>
                <div className="text-sm text-muted-foreground">+ custos contínuos</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials - DARK */}
      <section id="depoimentos" className="bg-slate-900 text-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Quem já está <span className="text-primary">faturando mais</span>
            </h2>
            <p className="text-xl text-slate-300">
              Profissionais reais, resultados reais, dinheiro real
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <p className="mb-4 text-slate-300">
                "Comecei a cobrar R$400 a mais em cada site WordPress que desenvolvo só por instalar o LedChat. 
                Os clientes <strong>adoram</strong> e eu ganho mais sem trabalhar mais. É dinheiro fácil!"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://image.pollinations.ai/prompt/Brazilian%20male%20web%20developer,%2030%20years%20old,%20friendly%20smile,%20casual%20t-shirt,%20modern%20workspace,%20natural%20lighting,%20professional%20headshot?width=100&height=100&nologo=true&seed=200"
                  alt="Carlos Oliveira"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">Carlos Oliveira</div>
                  <div className="text-sm text-slate-400">Desenvolvedor Web - SP</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <p className="mb-4 text-slate-300">
                "Meus clientes de marketing digital <strong>dobraram as vendas</strong> depois que instalei o LedChat nos sites WordPress. 
                Agora eles me pagam mensalidade só para manter o plugin atualizado. Genial!"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://image.pollinations.ai/prompt/Professional%20Brazilian%20woman,%2032%20years%20old,%20warm%20smile,%20business%20casual%20blouse,%20bright%20studio%20photo,%20clean%20background,%20headshot%20portrait?width=100&height=100&nologo=true&seed=201"
                  alt="Maria Silva"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">Maria Silva</div>
                  <div className="text-sm text-slate-400">Consultora de Marketing - RJ</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <p className="mb-4 text-slate-300">
                "Vendi o LedChat como um <strong>pacote premium por R$1.200</strong> para um cliente WordPress. 
                Ele pagou na hora porque viu o assistente respondendo dúvidas sozinho. Melhor investimento!"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://image.pollinations.ai/prompt/Brazilian%20male%20entrepreneur,%2038%20years,%20confident%20expression,%20polo%20shirt,%20modern%20office,%20natural%20light,%20professional%20portrait?width=100&height=100&nologo=true&seed=202"
                  alt="Rafael Souza"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">Rafael Souza</div>
                  <div className="text-sm text-slate-400">Empreendedor Digital - MG</div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Perguntas que você pode ter
            </h2>
            <p className="text-xl text-muted-foreground">
              (E as respostas honestas)
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="Preciso saber programar para usar o LedChat?"
              answer="NÃO. Se você sabe instalar um plugin no WordPress (literalmente clicar 3 botões), você consegue usar o LedChat. É mais fácil que configurar um tema WordPress."
            />
            <FAQItem
              question="Funciona com WooCommerce?"
              answer="SIM. E essa é uma das melhores partes. O LedChat lê TODOS os produtos, categorias, variações do WooCommerce e responde sobre eles automaticamente. É como ter um vendedor que conhece TODO o catálogo."
            />
            <FAQItem
              question="A IA é realmente gratuita?"
              answer="SIM. 100% gratuita. Sem tokens, sem API keys, sem mensalidades. Você paga R$99 uma vez e a IA funciona para sempre sem custo adicional. Zero pegadinhas."
            />
            <FAQItem
              question="Posso usar em quantos sites WordPress?"
              answer="QUANTOS VOCÊ QUISER. Licença ilimitada. Instale em 1 site, 10, 50, 100 sites WordPress... não importa. Mesmo investimento de R$99."
            />
            <FAQItem
              question="Como recebo após a compra?"
              answer="Em até 24 horas você recebe um e-mail com: plugin .zip para WordPress, documentação completa e vídeo tutorial passo a passo. Tudo pronto para usar."
            />
            <FAQItem
              question="Vou receber atualizações?"
              answer="Sim! Sua licença é vitalícia e inclui todas as atualizações futuras sem custo adicional. Uma vez comprado, você tem acesso para sempre."
            />
          </div>
        </div>
      </section>

      {/* Final CTA - DARK */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Última chance de garantir por R$99
          </h2>
          <p className="text-xl mb-8 text-slate-300">
            Você tem duas opções agora:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
            <Card className="p-6 bg-slate-800 border-slate-700">
              <div className="text-4xl mb-3">❌</div>
              <h3 className="font-bold text-xl mb-3 text-white">Opção 1: Não fazer nada</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Continuar entregando sites WordPress "comuns"</li>
                <li>• Cobrar o mesmo de sempre</li>
                <li>• Ver concorrentes passando você</li>
                <li>• Perder R$900+ por mês</li>
                <li>• Se arrepender depois quando o preço subir</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-slate-800 border-slate-700 border-primary">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-xl mb-3 text-white">Opção 2: Agir agora</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Investir R$99 uma única vez</li>
                <li>• Cobrar R$400-1.200 a mais por projeto WordPress</li>
                <li>• Se diferenciar da concorrência</li>
                <li>• Ganhar R$10.800+ no primeiro ano</li>
                <li>• Ter orgulho do que entrega</li>
              </ul>
            </Card>
          </div>

          <div className="space-y-6">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-xl px-16 py-8 shadow-2xl"
            >
              <a href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">
                SIM! Quero Faturar Mais Agora
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </Button>
            
            <div className="flex items-center justify-center gap-8 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Atualizações Gratuitas</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Acesso Imediato</span>
              </div>
            </div>
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
                O assistente virtual para WordPress que multiplica seu faturamento
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Produto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#recursos" className="hover:text-primary transition-colors">Funcionalidades</a></li>
                <li><a href="#precos" className="hover:text-primary transition-colors">Preços</a></li>
                <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a></li>
                <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#como-funciona" className="hover:text-primary transition-colors">Documentação</a></li>
                <li><a href="#como-funciona" className="hover:text-primary transition-colors">Tutorial em Vídeo</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="mailto:contato@ledchat.com.br" className="hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Licença Vitalícia</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Perguntas Frequentes</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 LedChat - Todos os direitos reservados. Desenvolvido por Led Marketing.</p>
            <p className="mt-2">Plugin WordPress para Assistentes Virtuais com IA</p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar */}
      {showFloatingFooter && (
        <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground py-4 shadow-2xl z-50 border-t-4 border-primary-foreground/20 animate-in slide-in-from-bottom-4">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <div className="font-bold text-lg">Oferta Especial - R$99</div>
                <div className="text-sm opacity-90">Licença vitalícia • Uso ilimitado</div>
              </div>
              <div className="md:hidden">
                <div className="font-bold">R$99 • Oferta Limitada</div>
              </div>
            </div>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
              <a href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">
                Garantir Agora
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