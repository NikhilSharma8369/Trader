import React from 'react';

export const Pending = () => {
  const accountStats = {
    balance: 0.0,
    equity: 9993.2,
    margin: 10.93,
    freeMargin: 9982.27,
    credit: 10000.0,
  };

  // Calculate margin level as (Equity / Margin) * 100
  const marginLevel =
    accountStats.margin !== 0
      ? ((accountStats.equity / accountStats.margin) * 100).toFixed(2) + '%'
      : '—';

  return (
    <div className="p-4 h-[170px]">
      <h2 className="font-semibold mb-2">Pending Orders</h2>
      <div className="flex flex-wrap gap-x-6 text-sm">
        <span>
          <strong>Balance:</strong> {accountStats.balance.toFixed(2)}
        </span>
        <span>
          <strong>Equity:</strong> {accountStats.equity.toFixed(2)}
        </span>
        <span>
          <strong>Margin:</strong> {accountStats.margin.toFixed(2)}
        </span>
        <span>
          <strong>Free Margin:</strong> {accountStats.freeMargin.toFixed(2)}
        </span>
        <span>
          <strong>Credit:</strong> {accountStats.credit.toFixed(2)}
        </span>
        <span>
          <strong>Margin Level:</strong> {marginLevel}
        </span>
      </div>
    </div>
  );
};
