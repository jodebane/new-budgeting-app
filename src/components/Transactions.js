import React from 'https://esm.sh/react@18';
import { TxnRow } from './TxnRow.js';

const h = React.createElement;

/**
 * Transactions tab — full list of all transactions with delete support.
 * @param {{ txns: object[], delTxn: function, onAdd: function }} props
 */
export function Transactions({ txns, delTxn, onAdd }) {
  return h('div', null,
    h('div', { className: 'fab' },
      h('button', { className: 'add-btn', onClick: onAdd }, '+ Add transaction'),
    ),

    h('div', { className: 'section-title' }, 'All transactions'),
    txns.length === 0
      ? h('div', { className: 'empty' }, 'No transactions yet')
      : h('div', { className: 'txn-list' },
          txns.map((t) => h(TxnRow, { key: t.id, t, onDel: () => delTxn(t.id) })),
        ),
  );
}
