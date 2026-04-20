import React from 'https://esm.sh/react@18';
import { fmt } from '../utils.js';
import { TxnRow } from './TxnRow.js';

const h = React.createElement;

/**
 * Dashboard tab — summary cards, add button, and the 5 most recent transactions.
 * @param {{ balance: number, income: number, expenses: number, recent: object[], delTxn: function, onAdd: function }} props
 */
export function Dashboard({ balance, income, expenses, recent, delTxn, onAdd }) {
  return h('div', null,
    h('div', { className: 'cards' },
      h('div', { className: 'mcard' },
        h('div', { className: 'label' }, 'Balance'),
        h('div', { className: 'bal-main', style: { color: balance >= 0 ? '#0F6E56' : '#993C1D' } },
          fmt(balance),
        ),
      ),
      h('div', { className: 'mcard' },
        h('div', { className: 'label' }, 'Income'),
        h('div', { className: 'val teal' }, fmt(income)),
      ),
      h('div', { className: 'mcard' },
        h('div', { className: 'label' }, 'Expenses'),
        h('div', { className: 'val coral' }, fmt(expenses)),
      ),
    ),

    h('div', { className: 'fab' },
      h('button', { className: 'add-btn', onClick: onAdd }, '+ Add transaction'),
    ),

    h('div', { className: 'section-title' }, 'Recent activity'),
    recent.length === 0
      ? h('div', { className: 'empty' }, 'No transactions yet')
      : h('div', { className: 'txn-list' },
          recent.map((t) => h(TxnRow, { key: t.id, t, onDel: () => delTxn(t.id) })),
        ),
  );
}
