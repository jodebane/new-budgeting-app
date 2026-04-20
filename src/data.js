export const CATEGORIES = {
  income:  ['Salary', 'Freelance', 'Investment', 'Gift', 'Other Income'],
  expense: ['Housing', 'Food', 'Transport', 'Health', 'Shopping',
            'Entertainment', 'Utilities', 'Education', 'Other'],
};

export const CAT_ICONS = {
  'Salary': '💼', 'Freelance': '🖥', 'Investment': '📈', 'Gift': '🎁', 'Other Income': '💰',
  'Housing': '🏠', 'Food': '🍽', 'Transport': '🚗', 'Health': '💊', 'Shopping': '🛍',
  'Entertainment': '🎬', 'Utilities': '⚡', 'Education': '📚', 'Other': '📌',
};

export const BUDGET_LIMITS = {
  'Housing': 1500, 'Food': 600, 'Transport': 300, 'Health': 200,
  'Shopping': 400, 'Entertainment': 200, 'Utilities': 150, 'Education': 200, 'Other': 100,
};

export const DEMO_TRANSACTIONS = [
  { id: 1, type: 'income',  name: 'Monthly Salary',   category: 'Salary',        amount: 4500, date: '2026-04-01' },
  { id: 2, type: 'expense', name: 'Rent',              category: 'Housing',       amount: 1200, date: '2026-04-02' },
  { id: 3, type: 'expense', name: 'Groceries',         category: 'Food',          amount: 145,  date: '2026-04-05' },
  { id: 4, type: 'income',  name: 'Freelance Project', category: 'Freelance',     amount: 800,  date: '2026-04-08' },
  { id: 5, type: 'expense', name: 'Netflix & Spotify', category: 'Entertainment', amount: 28,   date: '2026-04-10' },
  { id: 6, type: 'expense', name: 'Electric Bill',     category: 'Utilities',     amount: 87,   date: '2026-04-12' },
];
