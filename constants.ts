
import { Procedure, Testimonial, FAQItem, Transformation } from './types';

export const PROCEDURES: Procedure[] = [
  {
    id: 1,
    title: "Lentes de Contato Dental",
    description: "A perfeição em cada detalhe. Corrija cor, formato e alinhamento em poucas sessões com laminados cerâmicos ultrafinos.",
    icon: "sparkles"
  },
  {
    id: 2,
    title: "Harmonização Orofacial",
    description: "Realce sua beleza natural com procedimentos minimamente invasivos e resultados elegantes que valorizam seus traços.",
    icon: "user"
  },
  {
    id: 3,
    title: "Implantes de Alta Precisão",
    description: "Tecnologia suíça para devolver a funcionalidade e o prazer de sorrir e comer com total segurança e conforto.",
    icon: "anchor"
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 1,
    category: "Lentes de Contato Dental",
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800&h=1000",
    afterImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    id: 2,
    category: "Harmonização Orofacial",
    beforeImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800&h=1000",
    afterImg: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    id: 3,
    category: "Reabilitação Oral",
    beforeImg: "https://images.unsplash.com/photo-1583333453416-6515c0e73734?auto=format&fit=crop&q=80&w=800&h=1000",
    afterImg: "https://images.unsplash.com/photo-1516523653462-24074b94d81e?auto=format&fit=crop&q=80&w=800&h=1000"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana S.",
    role: "Empresária",
    text: "O atendimento é impecável. Minhas lentes ficaram tão naturais que ninguém diz que fiz um procedimento. Minha autoestima é outra!",
    stars: 5
  },
  {
    id: 2,
    name: "Ricardo A.",
    role: "Arquiteto",
    text: "Perdi o medo de dentista na primeira consulta. O uso da tecnologia para explicar cada passo me deixou muito seguro.",
    stars: 5
  },
  {
    id: 3,
    name: "Helena V.",
    role: "Advogada",
    text: "A experiência na Lumière é diferenciada. Desde o café até o resultado final, tudo respira profissionalismo e luxo.",
    stars: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "O tratamento com lentes de contato dói?",
    answer: "De forma alguma. Utilizamos técnicas minimamente invasivas e, se necessário, sedação consciente para que sua experiência seja totalmente indolor e confortável."
  },
  {
    id: 2,
    question: "Quanto tempo leva para concluir o tratamento?",
    answer: "Graças ao nosso fluxo 100% digital, muitos casos de estética são finalizados em apenas 2 ou 3 visitas ao consultório, sem necessidade de provisórios incômodos."
  },
  {
    id: 3,
    question: "Vocês aceitam convênios?",
    answer: "Focamos em um atendimento premium e personalizado. Trabalhamos com o sistema de reembolso para convênios e oferecemos condições exclusivas para tratamentos particulares."
  }
];

export const CONTACT_INFO = {
  phone: "(11) 99999-9999",
  whatsapp: "244974723062",
  email: "contato@lumiereodonto.com.br",
  address: "Av. Business Luxury, 1000 - Sala 1205. Edifício Platinum.",
  instagram: "@lumiereodonto"
};
