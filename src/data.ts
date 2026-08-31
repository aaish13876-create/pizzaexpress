import type { LucideIcon } from 'lucide-react';
import { Clock, Flame, Sprout } from 'lucide-react';

export type Pizza = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
};

export const pizzas: Pizza[] = [
  {
    id: 'burrata-fig',
    name: 'The Burrata & Fig',
    description:
      'Creamy burrata, caramelised figs, wild honey, toasted hazelnuts & a whisper of rosemary on our 48-hour sourdough base.',
    price: '22',
    image:
      'https://images.pexels.com/photos/20862567/pexels-photo-20862567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Signature',
  },
  {
    id: 'truffle-mushroom',
    name: 'Truffle & Wild Mushroom',
    description:
      'Forest mushrooms, black truffle cream, fontina, thyme & aged parmesan, finished with truffle oil.',
    price: '24',
    image:
      'https://images.pexels.com/photos/36375362/pexels-photo-36375362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Signature',
  },
  {
    id: 'margherita',
    name: 'The True Margherita',
    description:
      'Campania San Marzano tomatoes, fior di latte mozzarella, Genovese basil & a drizzle of Sicilian olive oil.',
    price: '17',
    image:
      'https://images.pexels.com/photos/18437684/pexels-photo-18437684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'diavola',
    name: 'The Diavola',
    description:
      'Spicy nduja, Calabrian chillies, soppressata, smoked mozzarella & a hot-honey glaze.',
    price: '20',
    image:
      'https://images.pexels.com/photos/33194921/pexels-photo-33194921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: '48-Hour Sourdough',
    body: 'Our dough ferments slowly for two full days using a wild sourdough starter. No commercial yeast, no shortcuts — just time, flour and patience, yielding a light, digestible base with a blistered, airy crust.',
    icon: Clock,
  },
  {
    number: '02',
    title: 'Campania Tomatoes',
    body: 'We import San Marzano tomatoes grown in the volcanic soil of Mount Vesuvius. Naturally sweet and low in acidity, they are crushed by hand — never cooked — so the sauce stays bright and alive.',
    icon: Sprout,
  },
  {
    number: '03',
    title: 'Wood-Fired Oven',
    body: 'Our hand-built brick oven burns seasoned oak at 900°F. Each pizza cooks in around 90 seconds, kissed by live flame for the characteristic char, smokiness and leoparded crust.',
    icon: Flame,
  },
];

export const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/33240983/pexels-photo-33240983.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Wood-fired pizza baking in a traditional oven',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/34413618/pexels-photo-34413618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: "Chef's hands shaping pizza dough",
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/13366357/pexels-photo-13366357.png?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Stone oven with bright flames',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/10332298/pexels-photo-10332298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Fresh San Marzano tomatoes',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2860154/pexels-photo-2860154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Stylish pizza restaurant interior',
    span: 'lg:col-span-2',
  },
];

export const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday — Thursday', time: '5:00 — 10:00 PM' },
  { day: 'Friday — Saturday', time: '12:00 — 11:00 PM' },
  { day: 'Sunday', time: '12:00 — 9:00 PM' },
];
