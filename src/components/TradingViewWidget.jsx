import React, { useEffect, useRef, memo } from 'react';
import { useTheme } from '../context/ThemeContext';

function TradingViewWidget() {
  const container = useRef();
  const { theme } = useTheme();

  useEffect(() => {
    const containerEl = container.current;
    containerEl.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;

    const config = {
      allow_symbol_change: true,
      autosize: true,
      symbol: 'NASDAQ:AAPL',
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: theme === 'dark' ? 'dark' : 'light',
      style: '1',
      locale: 'en',
      hide_top_toolbar: false,
      hide_side_toolbar: false,
      withdateranges: true,
      backgroundColor: theme === 'dark' ? '#0f0f0f' : '#ffffff',
      gridColor: theme === 'dark' ? '#2a2e39' : 'rgba(46, 46, 46, 0.06)',
    };

    script.innerHTML = JSON.stringify(config);
    containerEl.appendChild(script);

    return () => {
      containerEl.innerHTML = '';
    };
  }, [theme]);

  return (
    <div
      className="tradingview-widget-container w-full h-full min-h-[300px]"
      ref={container}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default memo(TradingViewWidget);
