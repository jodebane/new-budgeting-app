import React from 'https://esm.sh/react@18';
import { CATEGORIES } from '../data.js';

const h = React.createElement;

/**
 * Modal dialog for adding a new income or expense transaction.
 * @param {{ form: object, setForm: function, onSave: function, onClose: function }} props
 */
export function Modal({ form, setForm, onSave, onClose }) {
  const cats = CATEGORIES[form.type];

  return h('div', {
    className: 'modal-bg',
    onClick: (e) => { if (e.target === e.currentTarget) onClose(); },
  },
    h('div', { className: 'modal' },
      h('h3', null, 'New transaction'),

      h('div', { className: 'form-row' },
        h('label', null, 'Type'),
        h('div', { className: 'type-toggle' },
          h('button', {
            className: 'type-btn' + (form.type === 'income' ? ' active-income' : ''),
            onClick: () => setForm((f) => ({ ...f, type: 'income', category: 'Salary' })),
          }, 'Income'),
          h('button', {
            className: 'type-btn' + (form.type === 'expense' ? ' active-expense' : ''),
            onClick: () => setForm((f) => ({ ...f, type: 'expense', category: 'Food' })),
          }, 'Expense'),
        ),
      ),

      h('div', { className: 'form-row' },
        h('label', null, 'Description'),
        h('input', {
          type: 'text',
          value: form.name,
          placeholder: 'e.g. Grocery run',
          onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
        }),
      ),

      h('div', { className: 'form-row' },
        h('label', null, 'Amount ($)'),
        h('input', {
          type: 'number',
          min: '0',
          step: '0.01',
          value: form.amount,
          placeholder: '0.00',
          onChange: (e) => setForm((f) => ({ ...f, amount: e.target.value })),
        }),
      ),

      h('div', { className: 'form-row' },
        h('label', null, 'Category'),
        h('select', {
          value: form.category,
          onChange: (e) => setForm((f) => ({ ...f, category: e.target.value })),
        }, cats.map((c) => h('option', { key: c, value: c }, c))),
      ),

      h('div', { className: 'modal-actions' },
        h('button', { className: 'cancel-btn', onClick: onClose }, 'Cancel'),
        h('button', { className: 'save-btn',   onClick: onSave  }, 'Save'),
      ),
    ),
  );
}
