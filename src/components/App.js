import React, { useState, useEffect, useRef } from 'https://esm.sh/react@18';
import { CATEGORIES, DEMO_TRANSACTIONS } from '../data.js';
import { Dashboard }    from './Dashboard.js';
import { Transactions } from './Transactions.js';
import { Budgets }      from './Budgets.js';
import { Modal }        from './Modal.js';

const h = React.createElement;

const TABS = ['dashboard', 'transactions', 'budgets'];
const STORAGE_KEY = 'budget_txns';

/**
 * Root application component. Owns all state and persists transactions
 * to localStorage.
 */
export function App() {
  const [tab,       setTab]       = useState('dashboard');
  const [txns,      setTxns]      = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form,      setForm]      = useState({
    type: 'expense', name: '', category: 'Food', amount: '',
  });
  const loaded = useRef(false);

  // Load persisted transactions on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setTxns(saved ? JSON.parse(saved) : DEMO_TRANSACTIONS);
    } catch {
      setTxns(DEMO_TRANSACTIONS);
    }
    loaded.current = true;
  }, []);

  // Persist transactions whenever they change
  useEffect(() => {
    if (!loaded.current) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(txns)); } catch {}
  }, [txns]);

  // Derived totals
  const income   = txns.filter((t) => t.type === 'income' ).reduce((s, t) => s + t.amount, 0);
  const expenses = txns.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance  = income - expenses;

  // Expense totals grouped by category (used by the Budgets tab)
  const expBycat = {};
  txns.filter((t) => t.type === 'expense').forEach((t) => {
    expBycat[t.category] = (expBycat[t.category] || 0) + t.amount;
  });

  const addTxn = () => {
    if (!form.name || !form.amount) return;
    const cats = CATEGORIES[form.type];
    const cat  = cats.includes(form.category) ? form.category : cats[0];
    setTxns((prev) => [{
      id:       Date.now(),
      type:     form.type,
      name:     form.name,
      category: cat,
      amount:   parseFloat(form.amount) || 0,
      date:     new Date().toISOString().slice(0, 10),
    }, ...prev]);
    setForm({ type: 'expense', name: '', category: 'Food', amount: '' });
    setShowModal(false);
  };

  const delTxn = (id) => setTxns((prev) => prev.filter((t) => t.id !== id));
  const recent = txns.slice(0, 5);

  return h('div', { className: 'app' },
    h('div', { className: 'tabs' },
      TABS.map((t) =>
        h('button', {
          key: t,
          className: 'tab' + (tab === t ? ' active' : ''),
          onClick: () => setTab(t),
        }, t.charAt(0).toUpperCase() + t.slice(1)),
      ),
    ),

    h('div', { style: { position: 'relative', minHeight: '400px' } },
      tab === 'dashboard'    && h(Dashboard,    { balance, income, expenses, recent, delTxn, onAdd: () => setShowModal(true) }),
      tab === 'transactions' && h(Transactions, { txns, delTxn, onAdd: () => setShowModal(true) }),
      tab === 'budgets'      && h(Budgets,      { expBycat }),
      showModal && h(Modal, { form, setForm, onSave: addTxn, onClose: () => setShowModal(false) }),
    ),
  );
}
