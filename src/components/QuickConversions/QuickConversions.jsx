import React from 'react';
import { ArrowRightLeft, Zap } from 'lucide-react';
import './QuickConversions.css';

const QuickConversions = ({ conversions, onSelect }) => {
  return (
    <div className="quick-conversions-card">
      <div className="quick-header">
        <h3 className="quick-title">⚡ أمثلة سريعة - Quick Examples</h3>
        <p className="quick-subtitle">Click any example (or type your own amount above!)</p>
        <div className="examples-note">
          <Zap className="w-4 h-4" />
          <span>هذه فقط أمثلة - يمكنك كتابة أي رقم في الأعلى!</span>
        </div>
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
      
      <div className="custom-note">
        💡 <strong>ملاحظة:</strong> اكتب أي رقم مثل 175000 أو 3750 أو 892000 - لا حدود!
        <br />
        💡 <strong>Note:</strong> Type ANY number like 175000 or 3750 or 892000 - No limits!
      </div>
    </div>
  );
};

export default QuickConversions;