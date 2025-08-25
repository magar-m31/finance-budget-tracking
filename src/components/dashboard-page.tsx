"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { transactions, categories } from "@/lib/data";
import { Icons, IconName } from './icons';
import type { LucideProps } from "lucide-react";

const categoryMap = new Map(categories.map(c => [c.id, { name: c.name, icon: c.icon as IconName }]));

function getCategoryIcon(iconName: IconName, props: LucideProps) {
  const IconComponent = Icons[iconName];
  return IconComponent ? <IconComponent {...props} /> : null;
}

export default function DashboardPage() {
  const totalSpent = transactions.reduce((sum, txn) => sum + txn.amount, 0);
  const balance = 2500.75; // Mock data

  return (
    <div className="p-4 space-y-6">
      <header className="pt-4">
        <p className="text-muted-foreground">Hello, User!</p>
        <h1 className="text-2xl font-bold font-headline">Welcome to SmartSpend</h1>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="p-4">
            <CardDescription>Total Balance</CardDescription>
            <CardTitle className="text-xl">${balance.toFixed(2)}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="p-4">
            <CardDescription>Spent this month</CardDescription>
            <CardTitle className="text-xl">${totalSpent.toFixed(2)}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableBody>
                {transactions.slice(0, 5).map(txn => {
                  const category = categoryMap.get(txn.categoryId);
                  return (
                    <TableRow key={txn.id}>
                      <TableCell className="w-12 pl-4">
                        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                          {category && getCategoryIcon(category.icon, { className: 'w-5 h-5 text-secondary-foreground' })}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{txn.description}</div>
                        <div className="text-sm text-muted-foreground">{category?.name}</div>
                      </TableCell>
                      <TableCell className="text-right font-medium pr-4">-${txn.amount.toFixed(2)}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
