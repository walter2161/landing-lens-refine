export type Language = 'pt' | 'es' | 'en';

export const detectLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('pt')) return 'pt';
  if (browserLang.startsWith('es')) return 'es';
  return 'en';
};

export const translations = {
  pt: {
    // Trust Badges
    trustBadge1: "Pagamento Seguro",
    trustBadge2: "Uso Ilimitado",
    trustBadge3: "+500 Clientes",
    trustBadge4: "Licença Vitalícia",
    
    // Hero (mantenho os existentes)
    heroTitle: "Multiplique seu faturamento cobrando mais por cada projeto WordPress",
    heroSubtitle: "O único plugin de WordPress que transforma sites comuns em máquinas de vendas 24/7. Seus clientes vão implorar para ter isso.",
    heroCTA: "Sim, Quero Faturar Mais Agora",
    heroGuarantee: "⚡ Acesso imediato por e-mail • 🔒 Licença Vitalícia • ⭐ Atualizações Gratuitas",
    
    statsConversion: "Aumento em Conversões",
    statsTime: "Tempo de Instalação",
    statsCustomers: "Clientes Satisfeitos",
    
    benefitsTitle: "Por Que Empresas Inteligentes Escolhem LedChat?",
    benefit1Title: "Cobre R$400 a R$1.200 a mais por projeto",
    benefit1Desc: "Enquanto você dorme, o LedChat está vendendo. Atende visitantes instantaneamente, responde dúvidas e guia até a compra.",
    benefit2Title: "IA 100% gratuita - sem mensalidades NUNCA",
    benefit2Desc: "Sem código. Sem complicação. Instala como qualquer plugin WordPress e funciona com qualquer tema.",
    benefit3Title: "Instalação em 5 minutos (sem código)",
    benefit3Desc: "Não é um chatbot comum. Usa técnicas de copywriting para persuadir e converter visitantes em compradores.",
    benefit4Title: "Integração com WhatsApp",
    benefit4Desc: "Conversas do site direto para seu WhatsApp. Personalize avatar, nome e tom de voz do assistente.",
    
    howTitle: "Como Funciona? Simples Assim:",
    step1Title: "Instale em 5 Minutos",
    step1Desc: "Upload do plugin no WordPress. Ativa. Pronto. Funciona com qualquer tema.",
    step2Title: "Configure Sua IA",
    step2Desc: "Personalize nome, função e tom de voz. Integre com WhatsApp se quiser.",
    step3Title: "Veja as Vendas Subirem",
    step3Desc: "Assistente trabalha 24/7 respondendo, persuadindo e convertendo visitantes.",
    
    proofTitle: "Quem Está Usando LedChat Já Viu Resultados",
    
    pricingTitle: "Investimento Único. Retorno Infinito.",
    pricingBefore: "antes",
    pricingNow: "APENAS",
    pricingOnce: "Pagamento único. Sem mensalidades.",
    pricingCTA: "Sim! Quero o LedChat Agora",
    pricingFeature1: "Plugin WordPress Completo",
    pricingFeature2: "IA Mistral Integrada",
    pricingFeature3: "Integração WhatsApp",
    pricingFeature4: "Personalização Total",
    pricingFeature5: "Atualizações Gratuitas",
    pricingFeature6: "Uso Ilimitado",
    
    faqTitle: "Perguntas Que Você Provavelmente Tem",
    faq1Q: "Funciona com qualquer tema WordPress?",
    faq1A: "Sim! O LedChat é compatível com 100% dos temas WordPress. Instala como plugin padrão e se adapta automaticamente ao seu design.",
    faq2Q: "Preciso de conhecimento técnico?",
    faq2A: "Zero. Se você sabe instalar um plugin WordPress, você consegue usar o LedChat. Interface intuitiva, documentação em português e vídeos tutoriais.",
    faq3Q: "A IA realmente convence visitantes?",
    faq3A: "Sim. A IA da Mistral foi treinada com técnicas de copywriting de Neil Patel e Gary Halbert. Ela não apenas responde - ela persuade e vende.",
    faq4Q: "Como funciona a integração com WhatsApp?",
    faq4A: "Simples: visitante conversa no site, você recebe notificação no WhatsApp. Pode continuar a conversa por lá se quiser. Tudo integrado.",
    faq5Q: "Quanto tempo leva para configurar?",
    faq5A: "5 minutos para instalar. Mais 10 minutos para personalizar o assistente do seu jeito. Total: 15 minutos entre você e mais conversões.",
    faq6Q: "Quando recebo o produto?",
    faq6A: "Em até 24 horas você recebe um e-mail com: plugin .zip para WordPress, documentação completa e vídeo tutorial passo a passo. Tudo pronto para usar.",
    faq7Q: "Vou receber atualizações?",
    faq7A: "Sim! Sua licença é vitalícia e inclui todas as atualizações futuras sem custo adicional. Uma vez comprado, você tem acesso para sempre.",
    
    finalTitle: "Suas Opções São Claras:",
    finalOption1: "Continuar perdendo vendas com site estático sem atendimento",
    finalOption2: "Investir R$ 97 hoje e ter um assistente IA vendendo 24/7",
    finalCTA: "Escolho Aumentar Minhas Vendas Agora",
    finalNote: "Oferta por tempo limitado. O preço volta para R$ 297 em breve.",
    
    footerProduct: "Produto",
    footerSupport: "Suporte",
    footerLegal: "Legal",
    footerContact: "Contato",
    footerRights: "Todos os direitos reservados.",
    
    floatingOffer: "Oferta Especial: R$ 97",
    floatingCTA: "Garantir Meu LedChat",
    floatingLimited: "🔥 Oferta Limitada - Apenas R$99 (era R$450)",
    
    chatContext: `
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

Seja conversacional, empático e persuasivo. Respostas CURTAS E DIRETAS.
`,
    chatGreeting: '👋 Olá! Sou o assistente do LedChat. Vi que você está interessado em turbinar seu site com IA. Posso te mostrar como aumentar suas vendas em até 300%?'
  },
  es: {
    // Trust Badges
    trustBadge1: "Pago Seguro",
    trustBadge2: "Uso Ilimitado",
    trustBadge3: "+500 Clientes",
    trustBadge4: "Licencia de Por Vida",
    
    heroTitle: "Multiplica tus ingresos cobrando más por cada proyecto WordPress",
    heroSubtitle: "El único plugin de WordPress que transforma sitios comunes en máquinas de ventas 24/7. Tus clientes van a suplicar por tenerlo.",
    heroCTA: "Sí, Quiero Facturar Más Ahora",
    heroGuarantee: "⚡ Acceso inmediato por email • 🔒 Licencia de Por Vida • ⭐ Actualizaciones Gratuitas",
    
    statsConversion: "Aumento en Conversiones",
    statsTime: "Tiempo de Instalación",
    statsCustomers: "Clientes Satisfechos",
    
    benefitsTitle: "¿Por Qué Empresas Inteligentes Eligen LedChat?",
    benefit1Title: "Cobra $400 a $1.200 más por proyecto",
    benefit1Desc: "Mientras duermes, LedChat está vendiendo. Atiende visitantes al instante, responde dudas y guía hasta la compra.",
    benefit2Title: "IA 100% gratuita - sin mensualidades NUNCA",
    benefit2Desc: "Sin código. Sin complicaciones. Se instala como cualquier plugin de WordPress y funciona con cualquier tema.",
    benefit3Title: "Instalación en 5 minutos (sin código)",
    benefit3Desc: "No es un chatbot común. Usa técnicas de copywriting para persuadir y convertir visitantes en compradores.",
    benefit4Title: "Integración con WhatsApp",
    benefit4Desc: "Conversaciones del sitio directo a tu WhatsApp. Personaliza avatar, nombre y tono de voz del asistente.",
    
    howTitle: "¿Cómo Funciona? Así de Simple:",
    step1Title: "Instala en 5 Minutos",
    step1Desc: "Sube el plugin a WordPress. Activa. Listo. Funciona con cualquier tema.",
    step2Title: "Configura Tu IA",
    step2Desc: "Personaliza nombre, función y tono de voz. Integra con WhatsApp si quieres.",
    step3Title: "Ve las Ventas Subir",
    step3Desc: "El asistente trabaja 24/7 respondiendo, persuadiendo y convirtiendo visitantes.",
    
    proofTitle: "Quienes Usan LedChat Ya Vieron Resultados",
    
    pricingTitle: "Inversión Única. Retorno Infinito.",
    pricingBefore: "antes",
    pricingNow: "SOLO",
    pricingOnce: "Pago único. Sin mensualidades.",
    pricingCTA: "¡Sí! Quiero LedChat Ahora",
    pricingFeature1: "Plugin WordPress Completo",
    pricingFeature2: "IA Mistral Integrada",
    pricingFeature3: "Integración WhatsApp",
    pricingFeature4: "Personalización Total",
    pricingFeature5: "Actualizaciones Gratuitas",
    pricingFeature6: "Uso Ilimitado",
    
    faqTitle: "Preguntas Que Probablemente Tienes",
    faq1Q: "¿Funciona con cualquier tema de WordPress?",
    faq1A: "¡Sí! LedChat es compatible con el 100% de los temas de WordPress. Se instala como plugin estándar y se adapta automáticamente a tu diseño.",
    faq2Q: "¿Necesito conocimiento técnico?",
    faq2A: "Cero. Si sabes instalar un plugin de WordPress, puedes usar LedChat. Interfaz intuitiva, documentación y videos tutoriales.",
    faq3Q: "¿La IA realmente convence visitantes?",
    faq3A: "Sí. La IA de Mistral fue entrenada con técnicas de copywriting de Neil Patel y Gary Halbert. No solo responde - persuade y vende.",
    faq4Q: "¿Cómo funciona la integración con WhatsApp?",
    faq4A: "Simple: el visitante conversa en el sitio, recibes notificación en WhatsApp. Puedes continuar la conversación allí si quieres. Todo integrado.",
    faq5Q: "¿Cuánto tiempo lleva configurar?",
    faq5A: "5 minutos para instalar. 10 minutos más para personalizar el asistente a tu gusto. Total: 15 minutos entre tú y más conversiones.",
    faq6Q: "¿Cuándo recibo el producto?",
    faq6A: "En hasta 24 horas recibes un email con: plugin .zip para WordPress, documentación completa y video tutorial paso a paso. Todo listo para usar.",
    faq7Q: "¿Recibiré actualizaciones?",
    faq7A: "¡Sí! Tu licencia es de por vida e incluye todas las actualizaciones futuras sin costo adicional. Una vez comprado, tienes acceso para siempre.",
    
    finalTitle: "Tus Opciones Son Claras:",
    finalOption1: "Seguir perdiendo ventas con sitio estático sin atención",
    finalOption2: "Invertir $97 hoy y tener un asistente IA vendiendo 24/7",
    finalCTA: "Elijo Aumentar Mis Ventas Ahora",
    finalNote: "Oferta por tiempo limitado. El precio vuelve a $297 pronto.",
    
    footerProduct: "Producto",
    footerSupport: "Soporte",
    footerLegal: "Legal",
    footerContact: "Contacto",
    footerRights: "Todos los derechos reservados.",
    
    floatingOffer: "Oferta Especial: $97",
    floatingCTA: "Asegurar Mi LedChat",
    floatingLimited: "🔥 Oferta Limitada - Solo $99 (era $450)",
    
    chatContext: `
Eres un asistente virtual especializado en ventas, combinando las técnicas persuasivas de Neil Patel y Gary Halbert. Tu objetivo es convencer a los visitantes de comprar LedChat, un plugin de WordPress de asistente virtual con IA.

IMPORTANTE: Tus respuestas deben ser CORTAS y DIRECTAS (máximo 2-3 frases). Sé objetivo y persuasivo sin rodeos.

INFORMACIÓN DEL PRODUCTO:
- Nombre: LedChat
- Precio: $97 (oferta especial, antes $297)
- Qué es: Plugin de WordPress que añade un asistente virtual inteligente al sitio
- Beneficios principales:
  * Atención automatizada 24/7
  * Aumenta conversiones hasta 300%
  * Fácil instalación (menos de 5 minutos)
  * Integración con WhatsApp
  * Usa IA de Mistral
  * Personalización total del avatar y respuestas
  * Funciona con cualquier tema de WordPress

Sé conversacional, empático y persuasivo. Respuestas CORTAS Y DIRECTAS.
`,
    chatGreeting: '👋 ¡Hola! Soy el asistente de LedChat. Vi que estás interesado en potenciar tu sitio con IA. ¿Puedo mostrarte cómo aumentar tus ventas hasta un 300%?'
  },
  en: {
    // Trust Badges
    trustBadge1: "Secure Payment",
    trustBadge2: "Unlimited Usage",
    trustBadge3: "+500 Customers",
    trustBadge4: "Lifetime License",
    
    heroTitle: "Multiply your revenue by charging more for each WordPress project",
    heroSubtitle: "The only WordPress plugin that transforms ordinary sites into 24/7 sales machines. Your clients will beg to have it.",
    heroCTA: "Yes, I Want to Earn More Now",
    heroGuarantee: "⚡ Instant email access • 🔒 Lifetime License • ⭐ Free Updates",
    
    statsConversion: "Conversion Increase",
    statsTime: "Installation Time",
    statsCustomers: "Happy Customers",
    
    benefitsTitle: "Why Smart Businesses Choose LedChat?",
    benefit1Title: "Charge $400 to $1,200 more per project",
    benefit1Desc: "While you sleep, LedChat is selling. Instantly serves visitors, answers questions and guides to purchase.",
    benefit2Title: "100% free AI - no monthly fees EVER",
    benefit2Desc: "No code. No hassle. Installs like any WordPress plugin and works with any theme.",
    benefit3Title: "5-minute installation (no code)",
    benefit3Desc: "Not a regular chatbot. Uses copywriting techniques to persuade and convert visitors into buyers.",
    benefit4Title: "WhatsApp Integration",
    benefit4Desc: "Website conversations straight to your WhatsApp. Customize avatar, name and assistant's tone of voice.",
    
    howTitle: "How Does It Work? Simple as That:",
    step1Title: "Install in 5 Minutes",
    step1Desc: "Upload plugin to WordPress. Activate. Done. Works with any theme.",
    step2Title: "Configure Your AI",
    step2Desc: "Customize name, role and tone of voice. Integrate with WhatsApp if you want.",
    step3Title: "Watch Sales Rise",
    step3Desc: "Assistant works 24/7 answering, persuading and converting visitors.",
    
    proofTitle: "Those Using LedChat Already Saw Results",
    
    pricingTitle: "One-Time Investment. Infinite Return.",
    pricingBefore: "was",
    pricingNow: "ONLY",
    pricingOnce: "One-time payment. No monthly fees.",
    pricingCTA: "Yes! I Want LedChat Now",
    pricingFeature1: "Complete WordPress Plugin",
    pricingFeature2: "Integrated Mistral AI",
    pricingFeature3: "WhatsApp Integration",
    pricingFeature4: "Full Customization",
    pricingFeature5: "Free Updates",
    pricingFeature6: "Unlimited Usage",
    
    faqTitle: "Questions You Probably Have",
    faq1Q: "Does it work with any WordPress theme?",
    faq1A: "Yes! LedChat is compatible with 100% of WordPress themes. Installs as standard plugin and automatically adapts to your design.",
    faq2Q: "Do I need technical knowledge?",
    faq2A: "Zero. If you know how to install a WordPress plugin, you can use LedChat. Intuitive interface, documentation and video tutorials.",
    faq3Q: "Does the AI really convince visitors?",
    faq3A: "Yes. Mistral AI was trained with copywriting techniques from Neil Patel and Gary Halbert. It doesn't just answer - it persuades and sells.",
    faq4Q: "How does WhatsApp integration work?",
    faq4A: "Simple: visitor chats on site, you get WhatsApp notification. You can continue the conversation there if you want. All integrated.",
    faq5Q: "How long does it take to set up?",
    faq5A: "5 minutes to install. 10 more minutes to customize the assistant your way. Total: 15 minutes between you and more conversions.",
    faq6Q: "When do I receive the product?",
    faq6A: "Within 24 hours you receive an email with: .zip plugin for WordPress, complete documentation and step-by-step video tutorial. All ready to use.",
    faq7Q: "Will I receive updates?",
    faq7A: "Yes! Your license is lifetime and includes all future updates at no additional cost. Once purchased, you have access forever.",
    
    finalTitle: "Your Options Are Clear:",
    finalOption1: "Keep losing sales with static site without service",
    finalOption2: "Invest $97 today and have an AI assistant selling 24/7",
    finalCTA: "I Choose to Increase My Sales Now",
    finalNote: "Limited time offer. Price returns to $297 soon.",
    
    footerProduct: "Product",
    footerSupport: "Support",
    footerLegal: "Legal",
    footerContact: "Contact",
    footerRights: "All rights reserved.",
    
    floatingOffer: "Special Offer: $97",
    floatingCTA: "Get My LedChat",
    floatingLimited: "🔥 Limited Offer - Only $99 (was $450)",
    
    chatContext: `
You are a virtual assistant specialized in sales, combining the persuasive techniques of Neil Patel and Gary Halbert. Your goal is to convince visitors to buy LedChat, a WordPress AI virtual assistant plugin.

IMPORTANT: Your responses must be SHORT and DIRECT (maximum 2-3 sentences). Be objective and persuasive without rambling.

PRODUCT INFORMATION:
- Name: LedChat
- Price: $97 (special offer, was $297)
- What it is: WordPress plugin that adds an intelligent virtual assistant to the website
- Main benefits:
  * 24/7 automated service
  * Increases conversions by up to 300%
  * Easy installation (less than 5 minutes)
  * WhatsApp integration
  * Uses Mistral AI
  * Full customization of avatar and responses
  * Works with any WordPress theme

Be conversational, empathetic and persuasive. SHORT AND DIRECT responses.
`,
    chatGreeting: '👋 Hello! I\'m the LedChat assistant. I saw you\'re interested in supercharging your website with AI. Can I show you how to increase your sales by up to 300%?'
  }
};
