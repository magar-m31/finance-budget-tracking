"use client";

import { useState } from 'react';
import { LayoutGrid, Target, BarChart3, User, PlusCircle } from 'lucide-react';
import DashboardPage from './dashboard-page';
import BudgetsPage from './budgets-page';
import AnalyticsPage from './analytics-page';
import ProfilePage from './profile-page';
import { AddExpenseDialog } from './add-expense-dialog';
import { Button } from './ui/button';

type Page = 'dashboard' | 'budgets' | 'analytics' | 'profile';

export default function AppLayout({ onLogout }: { onLogout: () => void }) {
  const [activePage, setActivePage] = useState<Page>('dashboard');
  const [isAddExpenseOpen, setAddExpenseOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'budgets':
        return <BudgetsPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'profile':
        return <ProfilePage onLogout={onLogout} />;
      default:
        return <DashboardPage />;
    }
  };

  const NavItem = ({ page, label, icon: Icon }: { page: Page; label: string; icon: React.ElementType }) => (
    <button
      onClick={() => setActivePage(page)}
      className={`flex flex-col items-center gap-1 transition-colors w-16 ${
        activePage === page ? 'text-primary' : 'text-muted-foreground hover:text-primary'
      }`}
    >
      <Icon className="h-6 w-6" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );

  return (
    <>
      <div className="flex-grow overflow-y-auto pb-20 bg-background">
        {renderPage()}
      </div>

      <AddExpenseDialog open={isAddExpenseOpen} onOpenChange={setAddExpenseOpen} />
      
      <footer className="absolute bottom-0 left-0 right-0 h-20 bg-card border-t border-border flex justify-around items-center z-10">
        <NavItem page="dashboard" label="Dashboard" icon={LayoutGrid} />
        <NavItem page="budgets" label="Budgets" icon={Target} />
        
        <div className="w-16 h-16 flex justify-center">
            <Button size="icon" className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 -mt-8 shadow-lg ring-4 ring-background" onClick={() => setAddExpenseOpen(true)}>
            <PlusCircle className="h-8 w-8 text-primary-foreground" />
            <span className="sr-only">Add Expense</span>
            </Button>
        </div>
        
        <NavItem page="analytics" label="Analytics" icon={BarChart3} />
        <NavItem page="profile" label="Profile" icon={User} />
      </footer>
    </>
  );
}
