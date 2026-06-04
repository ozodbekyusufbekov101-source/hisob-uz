// Sahifalar (Tab) o'rtasida silliq o'tish funksiyasi
function switchTab(tabId) {
    // Barcha ko'rinishlarni yashirish
    document.querySelectorAll('.dynamic-view').forEach(view => view.classList.add('hidden'));
    
    // Tanlangan ko'rinishni ko'rsatish
    document.getElementById(`view-${tabId}`).classList.remove('hidden');

    // Aktiv bo'lmagan tugmalardan stillarni olib tashlash
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('text-blue-700', 'bg-blue-50');
        btn.classList.add('text-slate-600');
    });
    
    // Aktiv tugmaga stil berish
    const activeNav = document.getElementById(`nav-${tabId}`);
    if (activeNav) {
        activeNav.classList.add('text-blue-700', 'bg-blue-50');
        activeNav.classList.remove('text-slate-600');
    }
}