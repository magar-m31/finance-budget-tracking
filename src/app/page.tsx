"use client";

import { useState } from 'react';
import LoginScreen from '@/components/login-screen';
import AppLayout from '@/components/app-layout';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4 font-body antialiased">
      <div className="w-full max-w-sm h-[812px] max-h-[812px] bg-background text-foreground rounded-3xl shadow-2xl overflow-hidden flex flex-col relative">
        {isAuthenticated ? <AppLayout onLogout={handleLogout} /> : <LoginScreen onLogin={handleLogin} />}
      </div>
      <Toaster />
    </main>
  );
}
