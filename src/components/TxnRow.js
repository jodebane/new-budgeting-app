import React from 'https://esm.sh/react@18';
import { CAT_ICONS } from '../data.js';
import { fmt } from '../utils.js';

const h = React.createElement;

/**
 * A single transaction row showing icon, name, category, date, amount, and delete button.
 * @param {{ t: object, onDel: function }} props
 */
export function TxnRow({ t, onDel }) {
  return h('div', { className: 'txn' },
    h('div', { className: 'txn-icon ' + t.type }, CAT_ICONS[t.category] || '💳'),
    h('div', { className: 'txn-info' },
      h('div', { className: 'txn-name' }, t.name),
      h('div', { className: 'txn-meta' }, t.category + ' · ' + t.date),
    ),
    h('div', { className: 'txn-amount ' + t.type },
      (t.type === 'income' ? '+' : '-') + fmt(t.amount),
    ),
    h('button', { className: 'del-btn', onClick: onDel, title: 'Delete' }, '×'),
  );
}
