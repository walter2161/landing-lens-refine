import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

const MISTRAL_API_KEY = "5qUwtpMaCjfwMeM1geTCwS7fivY6RcW2";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SITE_CONTEXT = `
Você é um assistente virtual especializado em vendas, combinando as técnicas persuasivas de Neil Patel e Gary Halbert. Seu objetivo é convencer visitantes a comprar o LedChat, um plugin WordPress de assistente virtual com IA.

IMPORTANTE: Suas respostas devem ser CURTAS e DIRETAS (máximo 2-3 frases). Seja objetivo e persuasivo sem enrolação.

INFORMAÇÕES DO PRODUTO:
- Nome: LedChat
- Preço: R$ 97,00 (oferta especial, antes R$ 297)
- O que é: Plugin WordPress que adiciona um assistente virtual inteligente ao site
- Benefícios principais:
  * Atendimento 24/7 automatizado
  * Aumenta conversões em até 300%
  * Fácil instalação (menos de 5 minutos)
  * Integração com WhatsApp
  * Usa IA da Mistral
  * Personalização total do avatar e respostas
  * Funciona com qualquer tema WordPress

INSTALAÇÃO:
1. Download do arquivo ZIP
2. WordPress → Plugins → Adicionar Novo → Enviar Plugin
3. Ativar o plugin
4. Configurar em LedChat → Configurações

CONFIGURAÇÃO:
- Chave da API Mistral (obtida em mistral.ai)
- Chave de Licença (solicitar em suporte@ledmarketing.com.br)
- Personalização de nome, função, avatar
- Opção de integração com WhatsApp
- Uso do shortcode [ledchat] onde desejar

TÉCNICAS DE PERSUASÃO:
- Use urgência e escassez (oferta limitada)
- Foque em resultados e ROI
- Use prova social e estatísticas
- Destaque a facilidade de uso
- Enfatize o custo-benefício
- Crie senso de perda se não comprar agora

Seja conversacional, empático e persuasivo. Respostas CURTAS E DIRETAS.
`;

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '👋 Olá! Sou o assistente do LedChat. Vi que você está interessado em turbinar seu site com IA. Posso te mostrar como aumentar suas vendas em até 300%?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MISTRAL_API_KEY}`
        },
        body: JSON.stringify({
          model: 'mistral-large-latest',
          messages: [
            { role: 'system', content: SITE_CONTEXT },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: input }
          ],
          temperature: 0.7,
          max_tokens: 200
        })
      });

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Desculpe, tive um problema. Mas posso garantir: o LedChat vai revolucionar seu atendimento! Quer saber mais sobre nossa oferta especial?'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-96 h-[500px] bg-background border-2 border-primary shadow-2xl rounded-2xl flex flex-col z-40 animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Especialista LedChat</h3>
                <p className="text-xs opacity-90">Online agora</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-sm'
                        : 'bg-muted text-foreground rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                size="icon"
                className="shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-4 md:right-8 w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full shadow-2xl hover:scale-110 transition-transform z-40 flex items-center justify-center group p-2"
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-primary-foreground" />
        ) : (
          <>
            <img src="/logo.png" alt="LedChat" className="w-full h-full object-contain" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </>
        )}
      </button>
    </>
  );
};
