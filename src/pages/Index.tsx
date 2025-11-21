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
  ChevronDown
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
            Começar Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Oferta Especial - R$99
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            O Segredo para{" "}
            <span className="text-primary">Faturar Mais</span>{" "}
            com Cada Cliente
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Assistente virtual inteligente que vende por você 24/7. 
            Aumente o valor do seu serviço em minutos, sem trabalhar mais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              Começar Agora - R$99
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Ver Demonstração
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            ✓ Licença vitalícia • ✓ Uso ilimitado • ✓ Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20 bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que o LedChat é o Diferencial que Você Precisa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Adicione valor instantâneo aos seus projetos e cobre mais por isso
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Zap className="w-10 h-10" />}
            title="Instalação em 5 Minutos"
            description="Não precisa ser programador. Instale, configure e cole um shortcode. Pronto!"
          />
          <FeatureCard
            icon={<Bot className="w-10 h-10" />}
            title="IA 100% Gratuita"
            description="Zero mensalidades, zero taxas por uso. Pague uma vez e lucre para sempre."
          />
          <FeatureCard
            icon={<MessageSquare className="w-10 h-10" />}
            title="Integração com WhatsApp"
            description="Visitantes escolhem entre chat automático ou WhatsApp com um clique."
          />
          <FeatureCard
            icon={<TrendingUp className="w-10 h-10" />}
            title="Aumenta Conversões"
            description="Respostas instantâneas = mais vendas e menos abandono de carrinho."
          />
          <FeatureCard
            icon={<Infinity className="w-10 h-10" />}
            title="Licença Vitalícia"
            description="Use em quantos sites quiser, para sempre, sem pagar nada a mais."
          />
          <FeatureCard
            icon={<Clock className="w-10 h-10" />}
            title="Atendimento 24/7"
            description="Seu assistente virtual trabalha sem parar, mesmo quando você está dormindo."
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona? (É Mais Fácil do que Parece)
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StepCard
            number="1"
            title="Compre e Receba"
            description="Compre por R$99 e receba o plugin por e-mail em até 24 horas."
          />
          <StepCard
            number="2"
            title="Instale no WordPress"
            description="Envie o arquivo e ative. Configure em 5 minutos: nome, mensagem, WhatsApp."
          />
          <StepCard
            number="3"
            title="Cole o Shortcode"
            description="Use [ledchat] no site e pronto! Assistente virtual 24/7 funcionando."
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-primary">
            SEM MENSALIDADES • SEM CUSTOS ESCONDIDOS • SEM DOR DE CABEÇA
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="container py-20 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 relative overflow-hidden border-2 border-primary shadow-lg">
            <div className="absolute top-4 right-4">
              <Badge className="bg-destructive text-destructive-foreground">
                OFERTA ESPECIAL
              </Badge>
            </div>
            
            <div className="text-center mb-8">
              <div className="mb-4">
                <span className="text-2xl text-muted-foreground line-through">R$ 450</span>
              </div>
              <div className="text-6xl font-bold text-primary mb-2">R$ 99</div>
              <p className="text-muted-foreground">Licença vitalícia | Uso ilimitado</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Plugin completo para WordPress",
                "Assistente virtual inteligente 24/7",
                "Integração com WhatsApp",
                "Personalização total",
                "Sem custos com IA (100% gratuita)",
                "Licença para sites ilimitados",
                "Suporte rápido por e-mail",
                "Garantia de 7 dias"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
              Quero o LedChat Agora
            </Button>

            <p className="text-center mt-6 text-sm text-muted-foreground">
              Garantia de 7 dias ou seu dinheiro de volta
            </p>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que Profissionais Estão Dizendo
          </h2>
          <p className="text-xl text-muted-foreground">
            Pessoas que já estão faturando mais com o LedChat
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <TestimonialCard
            quote="Comecei a cobrar R$ 400 a mais em cada site que desenvolvo só por instalar o LedChat. Os clientes adoram e eu ganho mais sem trabalhar mais."
            author="Carlos Oliveira"
            role="Desenvolvedor Web"
          />
          <TestimonialCard
            quote="Meus clientes de marketing digital dobraram as vendas depois que instalei o LedChat. Agora pagam mensalidade só para manter o plugin atualizado."
            author="Maria Silva"
            role="Consultora de Marketing"
          />
          <TestimonialCard
            quote="Vendi o LedChat como um pacote premium por R$ 1.200 para um cliente. Ele pagou na hora porque viu o assistente respondendo sozinho."
            author="Rafael Souza"
            role="Empreendedor Digital"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="Preciso saber programar para usar o LedChat?"
              answer="Não. Se você sabe instalar um plugin no WordPress, já tem tudo o que precisa. O LedChat foi feito para ser simples, rápido e sem complicações."
            />
            <FAQItem
              question="Funciona com WooCommerce?"
              answer="Sim! O LedChat lê todos os produtos e categorias do WooCommerce e responde dúvidas sobre eles automaticamente."
            />
            <FAQItem
              question="Posso personalizar o assistente?"
              answer="Claro! Você define o nome, a imagem, a mensagem inicial, as regras de comportamento e até as cores. O LedChat se adapta 100% à identidade do seu cliente."
            />
            <FAQItem
              question="Posso usar em quantos sites quiser?"
              answer="Sim! A licença é ilimitada. Instale em 1 site ou em 100 — sem pagar nada a mais."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-20">
        <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Aumentar Seu Faturamento?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não deixe dinheiro na mesa. Garanta seu LedChat agora por apenas R$99 
            e comece a lucrar hoje mesmo.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6">
            Começar Agora - R$99
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            ⏰ Oferta por tempo limitado
          </p>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12 text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">LedChat</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            © 2025 LedChat - Todos os direitos reservados. Desenvolvido por Led Marketing.
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="p-6 hover:shadow-lg transition-shadow border-border/50">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </Card>
);

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="text-center">
    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role }: { quote: string; author: string; role: string }) => (
  <Card className="p-6 border-border/50">
    <p className="text-muted-foreground italic mb-4">&ldquo;{quote}&rdquo;</p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
        {author[0]}
      </div>
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  </Card>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card className="border-border/50 overflow-hidden">
      <button
        className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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
