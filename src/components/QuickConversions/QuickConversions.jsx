import React from 'react';
import { ArrowRightLeft } from 'lucide-react';
import './QuickConversions.css';

const QuickConversions = ({ conversions, onSelect }) => {
  return (
    <div className="quick-conversions-card">
      <div className="quick-header">
        <h3 className="quick-title">⚡ جدول التحويل السريع</h3>
        <p className="quick-subtitle">Quick Conversion Table</p>
      </div>
      
      <div className="conversions-grid">
        {conversions.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(item.old, item.new)}
            className="conversion-button"
          >
            <div className="conversion-content">
              <div className="conversion-label">{item.label}</div>
              <div className="old-amount">
                {parseInt(item.old).toLocaleString()}
              </div>
              <div className="arrow-container">
                <div className="arrow-line"></div>
                <ArrowRightLeft className="w-4 h-4 text-gray-400" />
                <div className="arrow-line"></div>
              </div>
              <div className="new-amount">
                {parseInt(item.new).toLocaleString()}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickConversions;