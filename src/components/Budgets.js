import React from 'https://esm.sh/react@18';
import { CAT_ICONS, BUDGET_LIMITS } from '../data.js';
import { fmt } from '../utils.js';

const h = React.createElement;

/**
 * Budgets tab — progress bars for each expense category vs its monthly limit.
 * @param {{ expBycat: Object.<string, number> }} props
 */
export function Budgets({ expBycat }) {
  return h('div', null,
    h('div', { className: 'section-title' }, 'Monthly budget tracker'),
    Object.entries(BUDGET_LIMITS).map(([cat, limit]) => {
      const spent = expBycat[cat] || 0;
      const pct   = Math.min(100, Math.round(spent / limit * 100));
      const over  = spent > limit;

      return h('div', { key: cat, className: 'budget-row' },
        h('div', { className: 'budget-top' },
          h('span', { className: 'budget-name' }, (CAT_ICONS[cat] || '') + ' ' + cat),
          h('span', { className: 'budget-nums' }, fmt(spent) + ' / ' + fmt(limit)),
        ),
        h('div', { className: 'budget-bar-bg' },
          h('div', {
            className: 'budget-bar-fill',
            style: { width: pct + '%', background: over ? '#D85A30' : '#1D9E75' },
          }),
        ),
        over && h('div', { style: { fontSize: '11px', color: '#993C1D', marginTop: 4 } },
          'Over budget by ' + fmt(spent - limit),
        ),
      );
    }),
  );
}
