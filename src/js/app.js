import React, { useState } from 'react';

function App() {
  // 1. Funksiyalar
  const switchTab = (tab) => {
    console.log("Hozirgi sahifa:", tab);
    // Bu yerda sahifani o'zgartiruvchi logic bo'ladi
  };

  const openModal = (id) => {
    document.getElementById(id).classList.remove('hidden');
  };

  // 2. JSX (HTML kodlaringiz shu yerda bo'ladi)
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Sidebar tugmasi misoli */}
      <button 
        onClick={() => switchTab('dashboard')} 
        className="nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl"
      >
        Dashboard
      </button>

      {/* Modal tugmasi misoli */}
      <button 
        onClick={() => openModal('transaction-modal')} 
        className="bg-blue-600 text-white"
      >
        Yangi tranzaksiya
      </button>
    </div>
  );
}

export default App;