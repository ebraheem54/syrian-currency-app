import React, { useState } from 'react';
import Header from '../Header/Header';
import ConversionInputs from '../ConversionInputs/ConversionInputs';
import QuickConversions from '../QuickConversions/QuickConversions';
import { convertOldToNew, convertNewToOld } from '../../utils/converter';
import { quickConversions } from '../../constants/conversionData';
import { Info } from 'lucide-react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [oldAmount, setOldAmount] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const handleOldAmountChange = (e) => {
    const value = e.target.value;
    setOldAmount(value);
    setNewAmount(convertOldToNew(value));
  };

  const handleNewAmountChange = (e) => {
    const value = e.target.value;
    setNewAmount(value);
    setOldAmount(convertNewToOld(value));
  };

  const clearAll = () => {
    setOldAmount('');
    setNewAmount('');
  };

  const handleQuickSelect = (old, newVal) => {
    setOldAmount(old);
    setNewAmount(newVal);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Header />
        
        <ConversionInputs
          oldAmount={oldAmount}
          newAmount={newAmount}
          onOldChange={handleOldAmountChange}
          onNewChange={handleNewAmountChange}
          onClear={clearAll}
        />
        
        <QuickConversions
          conversions={quickConversions}
          onSelect={handleQuickSelect}
        />
        
        {/* Info Box */}
        <div className="info-box">
          <div className="info-content">
            <Info className="info-icon" />
            <div>
              <h4 className="info-title">معلومات هامة - Important Information</h4>
              <p className="info-text">
                ✨ العملة الجديدة دخلت حيز التداول في <span className="font-black">١ يناير ٢٠٢٦</span>
              </p>
              <p className="info-text">
                ✨ The new currency entered circulation on <span className="font-black">January 1, 2026</span>
              </p>
              <p className="info-tip">
                💡 ببساطة: اقسم على ١٠٠ أو احذف صفرين من المبلغ القديم
                <br />
                💡 Simply: Divide by 100 or remove two zeros
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p className="footer-main">Made with ❤️ for Syria | صُنع بحب لسوريا </p>
          <p className="footer-sub">Stay calm, calculate easy | ابقَ هادئاً، احسب بسهولة</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;