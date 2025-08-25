import { Pizza, ShoppingBag, Bus, Home, Film, ShoppingCart, type LucideProps } from 'lucide-react';

export const Icons = {
  'pizza': (props: LucideProps) => <Pizza {...props} />,
  'shopping-bag': (props: LucideProps) => <ShoppingBag {...props} />,
  'bus': (props: LucideProps) => <Bus {...props} />,
  'home': (props: LucideProps) => <Home {...props} />,
  'film': (props: LucideProps) => <Film {...props} />,
  'shopping-cart': (props: LucideProps) => <ShoppingCart {...props} />,
};

export type IconName = keyof typeof Icons;
