import { Button } from '@/components/ui/button';

const SmartSpendLogo = () => (
    <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto">
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))' }} />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />
        <path d="M50 27 C62.7 27 73 37.3 73 50 C73 62.7 62.7 73 50 73 C37.3 73 27 62.7 27 50 C27 37.3 37.3 27 50 27 Z" fill="hsl(var(--card))" />
        <path d="M50 35 C58.28 35 65 41.72 65 50 C65 58.28 58.28 65 50 65 C41.72 65 35 58.28 35 50 C35 41.72 41.72 35 50 35 Z" fill="hsl(var(--primary))" />
        <path d="M50 50 C54.14 50 57.5 53.36 57.5 57.5 L42.5 57.5 C42.5 53.36 45.86 50 50 50 Z" fill="hsl(var(--accent))" opacity="0.8"/>
    </svg>
);


export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="flex flex-col h-full bg-card p-8 text-center justify-between animate-in fade-in duration-500">
      <div/>
      <div>
        <SmartSpendLogo />
        <h1 className="text-4xl font-headline font-bold mt-6 text-primary">SmartSpend</h1>
        <p className="text-muted-foreground mt-2">Effortless finance tracking for students & young professionals.</p>
      </div>
      
      <div className="space-y-4">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg" onClick={onLogin}>
          Sign In
        </Button>
        <Button className="w-full" variant="outline" size="lg">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
