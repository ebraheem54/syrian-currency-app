import React from 'react';
import { Calculator, Sparkles, ArrowRightLeft } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-icons">
        <Sparkles className="w-8 h-8 text-amber-500" />
        <Calculator className="w-12 h-12 text-emerald-600" />
        <Sparkles className="w-8 h-8 text-amber-500" />
      </div>
      
      <h1 className="header-title-ar">محول العملة السورية</h1>
      <h2 className="header-title-en">Syrian Currency Converter</h2>
      <p className="header-subtitle">احسب فواتيرك بدون قلق - Calculate invoices stress-free</p>
      
      <div className="rate-badge">
        <ArrowRightLeft className="w-6 h-6 text-white" />
        <span className="text-white font-bold text-xl">100 قديم = 1 جديد</span>
        <ArrowRightLeft className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

export default Header;