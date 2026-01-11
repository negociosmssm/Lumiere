
export interface Procedure {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  stars: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface Transformation {
  id: number;
  category: string;
  beforeImg: string;
  afterImg: string;
}
