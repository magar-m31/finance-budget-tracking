"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Bar, BarChart, Cell, CartesianGrid, XAxis, YAxis } from "recharts"
import { analyticsData, categories } from "@/lib/data";
import type { ChartConfig } from "@/components/ui/chart"

const chartConfig = {
  value: {
    label: "Spending",
  },
  ...Object.fromEntries(categories.map((cat, i) => [cat.name, { label: cat.name, color: `hsl(var(--chart-${(i % 5) + 1}))` }]))
} satisfies ChartConfig

export default function AnalyticsPage() {
  return (
    <div className="p-4 space-y-6">
      <header>
        <h1 className="text-2xl font-bold font-headline">Analytics</h1>
      </header>

      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
          <Card>
            <CardHeader>
              <CardTitle>Spending Breakdown</CardTitle>
              <CardDescription>Your spending by category for this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <BarChart accessibilityLayer data={analyticsData.monthly} margin={{ left: -20,}}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <YAxis tickLine={false} axisLine={false} tickMargin={10} tickFormatter={(value) => `$${value}`} />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Bar dataKey="value" radius={4}>
                     {analyticsData.monthly.map((entry) => (
                      <Cell key={entry.name} fill={chartConfig[entry.name as keyof typeof chartConfig]?.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="weekly"><div className="flex items-center justify-center h-48"><p className="text-center text-muted-foreground">Weekly data not available.</p></div></TabsContent>
        <TabsContent value="yearly"><div className="flex items-center justify-center h-48"><p className="text-center text-muted-foreground">Yearly data not available.</p></div></TabsContent>
      </Tabs>
    </div>
  );
}
