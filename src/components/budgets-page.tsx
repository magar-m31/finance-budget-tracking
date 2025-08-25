"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { budgets, categories } from "@/lib/data";
import { Icons, IconName } from './icons';
import type { LucideProps } from "lucide-react";

const categoryMap = new Map(categories.map(c => [c.id, { name: c.name, icon: c.icon }]));

function getCategoryIcon(iconName: IconName, props: LucideProps) {
  const IconComponent = Icons[iconName];
  return IconComponent ? <IconComponent {...props} /> : null;
}

export default function BudgetsPage() {
  return (
    <div className="p-4 space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold font-headline">Budgets</h1>
        <Button size="sm" variant="outline">
          <Plus className="mr-2 h-4 w-4" /> New Budget
        </Button>
      </header>
      
      <div className="space-y-4">
        {budgets.map(budget => {
          const category = categoryMap.get(budget.categoryId);
          const progress = (budget.spent / budget.amount) * 100;
          const isOverBudget = progress > 100;

          return (
            <Card key={budget.id}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    {category && getCategoryIcon(category.icon as IconName, { className: 'w-5 h-5 text-secondary-foreground' })}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-baseline">
                      <p className="font-semibold">{category?.name}</p>
                      <p className={`text-sm font-medium ${isOverBudget ? 'text-destructive' : 'text-muted-foreground'}`}>
                        ${budget.spent.toFixed(2)} / ${budget.amount.toFixed(2)}
                      </p>
                    </div>
                    <Progress value={Math.min(progress, 100)} className={`mt-2 h-2 ${isOverBudget ? '[&>div]:bg-destructive' : ''}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
