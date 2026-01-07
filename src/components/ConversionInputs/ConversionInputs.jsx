import React from 'react';
import { RefreshCw, Edit3 } from 'lucide-react';
import './ConversionInputs.css';

const ConversionInputs = ({ oldAmount, newAmount, onOldChange, onNewChange, onClear }) => {
  return (
    <div className="conversion-card">
      {/* Info Banner */}
      <div className="info-banner">
        <Edit3 className="w-5 h-5" />
        <span>اكتب أي رقم تريده - Type ANY amount you want!</span>
        <Edit3 className="w-5 h-5" />
      </div>

      <div className="inputs-grid">
        {/* Old Currency */}
        <div className="input-section">
          <div className="input-label">
            <div className="label-badge old-badge">
              <span className="text-2xl font-black">العملة القديمة</span>
            </div>
            <p className="label-subtitle">Old Currency (Any Amount)</p>
          </div>
          
          <div className="input-wrapper old-input">
            <input
              type="number"
              inputMode="decimal"
              value={oldAmount}
              onChange={onOldChange}
              placeholder="اكتب أي مبلغ..."
              className="currency-input"
              step="any"
              min="0"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <span className="currency-symbol old-symbol">ل.س</span>
          </div>
          <p className="input-hint">مثال: 175000 أو 2750 أو أي رقم</p>
        </div>

        {/* New Currency */}
        <div className="input-section">
          <div className="input-label">
            <div className="label-badge new-badge">
              <span className="text-2xl font-black">العملة الجديدة</span>
            </div>
            <p className="label-subtitle">New Currency (Any Amount)</p>
          </div>
          
          <div className="input-wrapper new-input">
            <input
              type="number"
              inputMode="decimal"
              value={newAmount}
              onChange={onNewChange}
              placeholder="اكتب أي مبلغ..."
              className="currency-input"
              step="any"
              min="0"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <span className="currency-symbol new-symbol">ل.س</span>
          </div>
          <p className="input-hint">Example: 1750 or 27.5 or any number</p>
        </div>
      </div>

      {/* Clear Button */}
      <div className="clear-button-container">
        <button onClick={onClear} className="clear-button" type="button">
          <RefreshCw className="w-6 h-6" />
          مسح الكل - Clear All
        </button>
      </div>
    </div>
  );
};

export default ConversionInputs;