import React from 'react';
import { RefreshCw } from 'lucide-react';
import './ConversionInputs.css';

const ConversionInputs = ({ oldAmount, newAmount, onOldChange, onNewChange, onClear }) => {
  return (
    <div className="conversion-card">
      <div className="inputs-grid">
        {/* Old Currency */}
        <div className="input-section">
          <div className="input-label">
            <div className="label-badge old-badge">
              <span className="text-2xl font-black">العملة القديمة</span>
            </div>
            <p className="label-subtitle">Old Currency</p>
          </div>
          
          <div className="input-wrapper old-input">
            <input
              type="number"
              value={oldAmount}
              onChange={onOldChange}
              placeholder="0"
              className="currency-input"
            />
            <span className="currency-symbol old-symbol">ل.س</span>
          </div>
        </div>

        {/* New Currency */}
        <div className="input-section">
          <div className="input-label">
            <div className="label-badge new-badge">
              <span className="text-2xl font-black">العملة الجديدة</span>
            </div>
            <p className="label-subtitle">New Currency</p>
          </div>
          
          <div className="input-wrapper new-input">
            <input
              type="number"
              value={newAmount}
              onChange={onNewChange}
              placeholder="0"
              className="currency-input"
            />
            <span className="currency-symbol new-symbol">ل.س</span>
          </div>
        </div>
      </div>

      {/* Clear Button */}
      <div className="clear-button-container">
        <button onClick={onClear} className="clear-button">
          <RefreshCw className="w-6 h-6" />
          مسح الكل - Clear All
        </button>
      </div>
    </div>
  );
};

export default ConversionInputs;