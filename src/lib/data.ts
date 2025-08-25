export const categories = [
  { id: 'cat1', name: 'Food & Drinks', icon: 'pizza' },
  { id: 'cat2', name: 'Shopping', icon: 'shopping-bag' },
  { id: 'cat3', name: 'Transportation', icon: 'bus' },
  { id: 'cat4', name: 'Housing', icon: 'home' },
  { id: 'cat5', name: 'Entertainment', icon: 'film' },
  { id: 'cat6', name: 'Groceries', icon: 'shopping-cart' },
];

export const paymentMethods = [
  { id: 'pm1', name: 'Credit Card' },
  { id: 'pm2', name: 'Debit Card' },
  { id: 'pm3', name: 'Cash' },
  { id: 'pm4', name: 'Bank Transfer' },
];

export const transactions = [
  { id: 'txn1', date: new Date(2024, 6, 20), categoryId: 'cat1', description: 'Lunch with friends', amount: 25.50, paymentMethodId: 'pm1' },
  { id: 'txn2', date: new Date(2024, 6, 20), categoryId: 'cat2', description: 'New headphones', amount: 150.00, paymentMethodId: 'pm1' },
  { id: 'txn3', date: new Date(2024, 6, 19), categoryId: 'cat3', description: 'Train ticket', amount: 12.00, paymentMethodId: 'pm2' },
  { id: 'txn4', date: new Date(2024, 6, 18), categoryId: 'cat6', description: 'Weekly groceries', amount: 78.30, paymentMethodId: 'pm2' },
  { id: 'txn5', date: new Date(2024, 6, 17), categoryId: 'cat5', description: 'Movie tickets', amount: 30.00, paymentMethodId: 'pm3' },
];

export const budgets = [
  { id: 'bud1', categoryId: 'cat1', amount: 300, spent: 150.75 },
  { id: 'bud2', categoryId: 'cat2', amount: 500, spent: 450.20 },
  { id: 'bud3', categoryId: 'cat3', amount: 100, spent: 45.50 },
  { id: 'bud4', categoryId: 'cat5', amount: 150, spent: 160.00 },
  { id: 'bud5', categoryId: 'cat6', amount: 400, spent: 280.90 },
];

export const analyticsData = {
  monthly: [
    { name: 'Food & Drinks', value: 350 },
    { name: 'Shopping', value: 750 },
    { name: 'Transportation', value: 120 },
    { name: 'Housing', value: 800 },
    { name: 'Entertainment', value: 250 },
    { name: 'Groceries', value: 400 },
  ],
};
