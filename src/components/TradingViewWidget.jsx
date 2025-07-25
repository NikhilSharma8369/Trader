import React, { useEffect, useRef, memo } from 'react';
import { useTheme } from '../context/ThemeContext';

function TradingViewWidget() {
  const container = useRef();
  const { theme } = useTheme();

  useEffect(() => {
    const containerEl = container.current;
    containerEl.innerHTML = '';

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "allow_symbol_change": true,
        "calendar": false,
        "details": false,
        "hide_side_toolbar": false,
        "hide_top_toolbar": false,
        "hide_legend": false,
        "hide_volume": false,
        "hotlist": false,
        "interval": "D",
        "locale": "en",
        "save_image": true,
        "style": "1",
        "symbol": "NASDAQ:AAPL",
        "theme": "${theme}",
        "timezone": "Etc/UTC",
        "backgroundColor": "${theme === 'dark' ? '#0f0f0f' : '#ffffff'}",
        "gridColor": "rgba(46, 46, 46, 0.06)",
        "watchlist": [],
        "withdateranges": true,
        "compareSymbols": [],
        "studies": [],
        "autosize": true
      }`;

    containerEl.appendChild(script);

    return () => {
      containerEl.innerHTML = '';
    };
  }, [theme]);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
