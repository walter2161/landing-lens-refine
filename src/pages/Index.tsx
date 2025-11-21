import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
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
  BarChart3,
  Code2,
  Smartphone,
  Star,
  ArrowRight,
  Rocket,
  Lock,
  Award
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">LedChat</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Garantir Meu LedChat - R$99
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 text-sm">
              🔥 Oferta Limitada - Apenas R$99 (era R$450)
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Multiplique seu <span className="text-primary">faturamento</span> cobrando mais por cada projeto
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              O único plugin de WordPress que transforma sites comuns em máquinas de vendas 24/7. 
              Seus clientes vão <strong>implorar</strong> para ter isso.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">Cobre R$400 a R$1.200 a mais por projeto</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">IA 100% gratuita - sem mensalidades NUNCA</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">Instalação em 5 minutos (sem código)</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-14">
                Sim, Quero Faturar Mais Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              ⚡ Acesso imediato por e-mail • 🔒 Garantia de 7 dias • ⭐ Suporte prioritário
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Bot className="w-48 h-48 text-primary" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
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
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
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
              <span className="font-medium">Garantia 7 Dias</span>
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

      {/* Problem/Agitate Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Você está deixando <span className="text-destructive">dinheiro na mesa</span> 
            em CADA projeto que entrega
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Enquanto você entrega "apenas" sites bonitos, seus concorrentes estão cobrando 
            R$500, R$800, até R$1.200 a mais pelo MESMO trabalho... só porque adicionaram 
            um assistente virtual inteligente.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-destructive/5 border-destructive/20">
              <div className="text-4xl mb-3">😰</div>
              <h3 className="font-bold mb-2">Sem Diferencial</h3>
              <p className="text-sm text-muted-foreground">
                Você entrega o mesmo que todo mundo: sites bonitos que não vendem sozinhos
              </p>
            </Card>
            <Card className="p-6 bg-destructive/5 border-destructive/20">
              <div className="text-4xl mb-3">💸</div>
              <h3 className="font-bold mb-2">Fatura Menos</h3>
              <p className="text-sm text-muted-foreground">
                Cobra o "preço de mercado" enquanto poderia cobrar 2x, 3x mais
              </p>
            </Card>
            <Card className="p-6 bg-destructive/5 border-destructive/20">
              <div className="text-4xl mb-3">😔</div>
              <h3 className="font-bold mb-2">Clientes Mornos</h3>
              <p className="text-sm text-muted-foreground">
                Eles pagam mas não ficam empolgados. Querem algo que "realmente venda"
              </p>
            </Card>
          </div>

          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 text-center">
            <p className="text-2xl font-bold mb-4">
              MAS E SE você pudesse dizer para seu cliente:
            </p>
            <blockquote className="text-xl italic mb-4 text-muted-foreground">
              "Além do site, vou instalar um <strong className="text-foreground">assistente virtual com IA</strong> que 
              responde dúvidas 24/7, mostra produtos, aumenta vendas automaticamente... 
              por apenas <strong className="text-foreground">R$XXX a mais</strong>"
            </blockquote>
            <p className="text-lg font-semibold text-primary">
              Eles vão pagar SEM PENSAR. (E você instalou isso em 5 minutos)
            </p>
          </div>
        </div>
      </section>

      {/* Solution - Product Showcase */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">A SOLUÇÃO</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Apresentamos o <span className="text-primary">LedChat</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O plugin WordPress que adiciona um assistente virtual inteligente em qualquer site. 
              Ele lê TODO o conteúdo (páginas, posts, produtos) e atende visitantes como um vendedor profissional.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border-2 border-primary/10">
                <div className="text-center p-8">
                  <Smartphone className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium">Interface do Assistente Virtual</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">IA que Entende Seu Negócio</h3>
                  <p className="text-muted-foreground">
                    Absorve automaticamente todo conteúdo do site e responde com precisão
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Conversação Natural</h3>
                  <p className="text-muted-foreground">
                    Interage como um humano, tira dúvidas e guia o cliente até a compra
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Conversão Automática</h3>
                  <p className="text-muted-foreground">
                    Reduz abandono, aumenta ticket médio e fecha vendas enquanto você dorme
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Complete */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tudo que você precisa para <span className="text-primary">cobrar mais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada funcionalidade foi pensada para você ganhar mais e entregar valor absurdo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={<Zap className="w-10 h-10" />}
            title="Instalação Instantânea"
            description="5 minutos do upload até funcionar. Plugin > Ativar > Configurar > Shortcode. Pronto."
            highlight="Economize horas"
          />
          <FeatureCard
            icon={<DollarSign className="w-10 h-10" />}
            title="IA 100% Gratuita"
            description="Zero custo com tokens, zero mensalidade. A IA é GRÁTIS para sempre. Lucro puro pra você."
            highlight="Zero custos"
          />
          <FeatureCard
            icon={<MessageSquare className="w-10 h-10" />}
            title="WhatsApp Integrado"
            description="Botão direto pro WhatsApp. Cliente escolhe: chat ou fala com você. Mais contatos qualificados."
            highlight="Mais leads"
          />
          <FeatureCard
            icon={<Bot className="w-10 h-10" />}
            title="Aprende Sozinho"
            description="Lê páginas, posts, produtos, categorias. Quanto mais conteúdo, mais inteligente fica."
            highlight="Zero trabalho"
          />
          <FeatureCard
            icon={<Sparkles className="w-10 h-10" />}
            title="Personalização Total"
            description="Nome, avatar, cor, mensagens, tom de voz. Cada cliente tem sua identidade única."
            highlight="Sua marca"
          />
          <FeatureCard
            icon={<TrendingUp className="w-10 h-10" />}
            title="Aumenta Conversões"
            description="Resposta imediata = menos abandono. Clientes relatam +150% em vendas online."
            highlight="Mais vendas"
          />
          <FeatureCard
            icon={<Clock className="w-10 h-10" />}
            title="Trabalha 24/7"
            description="Fim de semana, feriado, madrugada. Seu assistente NUNCA tira férias."
            highlight="Sempre ativo"
          />
          <FeatureCard
            icon={<Shield className="w-10 h-10" />}
            title="Seguro e Confiável"
            description="Hospedado no WordPress. Sem vazamento de dados, sem bugs críticos."
            highlight="Tranquilidade"
          />
          <FeatureCard
            icon={<Infinity className="w-10 h-10" />}
            title="Uso Ilimitado"
            description="Instale em 1, 10, 100 sites. Não importa. Licença vitalícia sem limites."
            highlight="Sem barreiras"
          />
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
          <p className="text-2xl font-bold mb-4">
            E tudo isso por um pagamento único de R$99
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Enquanto outros cobram R$47/mês para sempre...
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Quero Garantir Meu LedChat Agora
          </Button>
        </div>
      </section>

      {/* Social Proof - Stats */}
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

      {/* How It Works - Detailed */}
      <section className="container py-20">
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
            description="Plugin .zip + documentação completa + vídeo tutorial na sua caixa de entrada."
          />
          <ProcessStep
            number="3"
            title="Instale no WordPress (2 minutos)"
            description="Plugins > Adicionar novo > Upload > Ativar. Igual qualquer outro plugin."
          />
          <ProcessStep
            number="4"
            title="Configure Básico (3 minutos)"
            description="Nome do assistente, mensagem de boas-vindas, número do WhatsApp. Só isso."
          />
          <ProcessStep
            number="5"
            title="Cole o Shortcode (10 segundos)"
            description="Copie [ledchat] e cole onde quiser. Rodapé, popup, página específica. Funciona."
          />
          <ProcessStep
            number="6"
            title="LUCRE (pra sempre)"
            description="Cobre R$300-1.200 a mais por projeto. Instale em dezenas de sites. Sem limite."
          />
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6">
            Começar Agora - Apenas R$99
          </Button>
          <p className="mt-4 text-muted-foreground">
            Tempo total de setup: menos de 10 minutos
          </p>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="bg-muted/30 py-20">
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
                  <span className="font-medium">Sites ilimitados</span>
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
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                Garantir Por R$99 Agora
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

      {/* ROI Calculator */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Faça as contas: quanto você vai <span className="text-primary">GANHAR</span>?
            </h2>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-background">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl mb-4">Cenário CONSERVADOR:</h3>
                  <div className="space-y-3 text-lg">
                    <div className="flex justify-between">
                      <span>Você cobra a mais:</span>
                      <span className="font-bold">R$300</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Projetos por mês:</span>
                      <span className="font-bold">×3</span>
                    </div>
                    <div className="h-px bg-border my-2"></div>
                    <div className="flex justify-between text-primary font-bold">
                      <span>Lucro extra/mês:</span>
                      <span>R$900</span>
                    </div>
                    <div className="flex justify-between text-primary font-bold text-2xl">
                      <span>No primeiro ano:</span>
                      <span>R$10.800</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-4">Cenário OTIMISTA:</h3>
                  <div className="space-y-3 text-lg">
                    <div className="flex justify-between">
                      <span>Você cobra a mais:</span>
                      <span className="font-bold">R$800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Projetos por mês:</span>
                      <span className="font-bold">×5</span>
                    </div>
                    <div className="h-px bg-border my-2"></div>
                    <div className="flex justify-between text-primary font-bold">
                      <span>Lucro extra/mês:</span>
                      <span>R$4.000</span>
                    </div>
                    <div className="flex justify-between text-primary font-bold text-2xl">
                      <span>No primeiro ano:</span>
                      <span>R$48.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border-2 border-primary/20 rounded-xl p-6 text-center">
                <p className="text-xl font-bold mb-2">
                  Investimento no LedChat: <span className="text-primary">R$99</span>
                </p>
                <p className="text-3xl font-bold text-primary">
                  ROI mínimo: 10.800%
                </p>
                <p className="text-muted-foreground mt-2">
                  (E isso é sendo MUITO conservador)
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6">
              Sim, Quero Esse ROI Agora
            </Button>
            <p className="mt-4 text-muted-foreground">
              Você se paga no PRIMEIRO projeto
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Funciona para <span className="text-primary">qualquer nicho</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Não importa o tipo de cliente. O LedChat se adapta e vende.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">E-commerce</h3>
              <p className="text-sm text-muted-foreground">
                Responde sobre produtos, estoque, frete. Reduz abandono de carrinho em 40%.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Serviços</h3>
              <p className="text-sm text-muted-foreground">
                Agenda consultas, responde dúvidas, qualifica leads antes de falar com você.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Educação</h3>
              <p className="text-sm text-muted-foreground">
                Tira dúvidas sobre cursos, valores, metodologia. Converte mais alunos.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Imóveis</h3>
              <p className="text-sm text-muted-foreground">
                Mostra propriedades, agenda visitas, filtra por preferências automaticamente.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              + Restaurantes, Clínicas, Advogados, Consultores, Agências, SaaS, Turismo...
            </p>
            <p className="text-2xl font-bold">
              Se vende online, o LedChat <span className="text-primary">aumenta as vendas</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quem já está <span className="text-primary">faturando mais</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Profissionais reais, resultados reais, dinheiro real
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
            <p className="mb-4 text-muted-foreground">
              "Comecei a cobrar R$400 a mais em cada site que desenvolvo só por instalar o LedChat. 
              Os clientes <strong>adoram</strong> e eu ganho mais sem trabalhar mais. É dinheiro fácil!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                CO
              </div>
              <div>
                <div className="font-semibold">Carlos Oliveira</div>
                <div className="text-sm text-muted-foreground">Desenvolvedor Web - SP</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
            <p className="mb-4 text-muted-foreground">
              "Meus clientes de marketing digital <strong>dobraram as vendas</strong> depois que instalei o LedChat. 
              Agora eles me pagam mensalidade só para manter o plugin atualizado. Genial!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                MS
              </div>
              <div>
                <div className="font-semibold">Maria Silva</div>
                <div className="text-sm text-muted-foreground">Consultora de Marketing - RJ</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
            <p className="mb-4 text-muted-foreground">
              "Vendi o LedChat como um <strong>pacote premium por R$1.200</strong> para um cliente. 
              Ele pagou na hora porque viu o assistente respondendo dúvidas sozinho. Melhor investimento!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                RS
              </div>
              <div>
                <div className="font-semibold">Rafael Souza</div>
                <div className="text-sm text-muted-foreground">Empreendedor Digital - MG</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-20">
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
              answer="NÃO. Se você sabe instalar um plugin no WordPress (literalmente clicar 3 botões), você consegue usar o LedChat. É mais fácil que configurar um tema."
            />
            <FAQItem
              question="Funciona com WooCommerce?"
              answer="SIM. E essa é uma das melhores partes. O LedChat lê TODOS os produtos, categorias, variações e responde sobre eles automaticamente. É como ter um vendedor que conhece TODO o catálogo."
            />
            <FAQItem
              question="A IA é realmente gratuita?"
              answer="SIM. 100% gratuita. Sem tokens, sem API keys, sem mensalidades. Você paga R$99 uma vez e a IA funciona para sempre sem custo adicional. Zero pegadinhas."
            />
            <FAQItem
              question="Posso usar em quantos sites?"
              answer="QUANTOS VOCÊ QUISER. Licença ilimitada. Instale em 1 site, 10, 50, 100... não importa. Mesmo investimento de R$99."
            />
            <FAQItem
              question="Como recebo após a compra?"
              answer="Em até 24 horas você recebe um e-mail com: plugin .zip, documentação completa e vídeo tutorial passo a passo. Tudo pronto para usar."
            />
            <FAQItem
              question="E se eu não gostar?"
              answer="7 dias de garantia total. Não gostou? Peça reembolso. Sem perguntas, sem burocracia. Mas honestamente? Ninguém pediu ainda."
            />
            <FAQItem
              question="Preciso de conhecimentos de IA?"
              answer="ZERO. O LedChat já vem pronto. Você só configura o básico (nome, cor, mensagem) e ele aprende sozinho com o conteúdo do site."
            />
            <FAQItem
              question="Funciona em sites que já estão no ar?"
              answer="SIM. Instale em sites novos ou existentes. Não quebra nada, não conflita com outros plugins. Funciona com qualquer tema WordPress moderno."
            />
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="container py-20">
        <Card className="p-12 bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">⚠️</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que você precisa decidir <span className="text-destructive">AGORA</span>
            </h2>
            <div className="space-y-4 text-lg text-left mb-8">
              <p>
                <strong>1. O preço de R$99 é temporário.</strong> Quando chegarmos a 1.000 licenças vendidas, 
                o valor sobe para R$297. E não é ameaça, é planejamento.
              </p>
              <p>
                <strong>2. Seus concorrentes já estão usando.</strong> Enquanto você lê isso, alguém na sua cidade 
                está instalando o LedChat e cobrando mais por projetos similares aos seus.
              </p>
              <p>
                <strong>3. Cada dia que passa é dinheiro perdido.</strong> Se você faz 3 sites por mês, 
                está deixando R$900-1.200 na mesa TODO MÊS que não tem o LedChat.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl mb-8">
              <p className="text-2xl font-bold mb-2">
                Quanto você perdeu este mês por não ter isto?
              </p>
              <p className="text-muted-foreground">
                (Multiplique o número de projetos que você entregou por R$400)
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl px-16 py-8">
              Parar de Perder Dinheiro AGORA
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Acesso imediato após pagamento confirmado
            </p>
          </div>
        </Card>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Última chance de garantir por R$99
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Você tem duas opções agora:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
              <div className="text-4xl mb-3">❌</div>
              <h3 className="font-bold text-xl mb-3">Opção 1: Não fazer nada</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Continuar entregando sites "comuns"</li>
                <li>• Cobrar o mesmo de sempre</li>
                <li>• Ver concorrentes passando você</li>
                <li>• Perder R$900+ por mês</li>
                <li>• Se arrepender depois quando o preço subir</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-xl mb-3">Opção 2: Agir agora</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Investir R$99 uma única vez</li>
                <li>• Cobrar R$400-1.200 a mais por projeto</li>
                <li>• Se diferenciar da concorrência</li>
                <li>• Ganhar R$10.800+ no primeiro ano</li>
                <li>• Ter orgulho do que entrega</li>
              </ul>
            </Card>
          </div>

          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-xl px-16 py-8 shadow-2xl"
            >
              SIM! Quero Faturar Mais Agora
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            
            <div className="flex items-center justify-center gap-8 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Garantia de 7 Dias</span>
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
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">LedChat</span>
              </div>
              <p className="text-sm text-muted-foreground">
                O assistente virtual que multiplica seu faturamento
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Produto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Funcionalidades</li>
                <li>Preços</li>
                <li>Casos de Uso</li>
                <li>ROI Calculator</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Documentação</li>
                <li>Tutorial em Vídeo</li>
                <li>FAQ</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Termos de Uso</li>
                <li>Política de Privacidade</li>
                <li>Garantia 7 Dias</li>
                <li>Reembolso</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 LedChat - Todos os direitos reservados. Desenvolvido por Led Marketing.</p>
            <p className="mt-2">CNPJ: XX.XXX.XXX/0001-XX</p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground py-4 shadow-2xl z-50 border-t-4 border-primary-foreground/20">
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
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
            Garantir Agora
          </Button>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  highlight 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  highlight?: string;
}) => (
  <Card className="p-6 hover:shadow-lg transition-all border-border/50 hover:border-primary/50 relative group">
    {highlight && (
      <Badge className="absolute -top-3 -right-3 bg-primary text-primary-foreground">
        {highlight}
      </Badge>
    )}
    <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
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
