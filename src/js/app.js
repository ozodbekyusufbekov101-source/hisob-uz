// Global qidiruv tizimi (Tranzaksiyalar orasidan qidirish)
function handleGlobalSearch(query) {
    const lowerQuery = query.toLowerCase();
    const txRows = document.querySelectorAll('#transactions-table-body tr');
    
    txRows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (text.includes(lowerQuery)) row.classList.remove('hidden');
        else row.classList.add('hidden');
    });
}

// Ma'lumotlarni yangilash (Sinxronizatsiya) imitatsiyasi
function syncData() {
    alert("Ma'lumotlar server bilan muvaffaqiyatli sinxronizatsiya qilindi!");
    initApp();
}

// Ilovani to'liq ishga tushirish (Barcha ma'lumotlarni render qilish)
function initApp() {
    renderTransactions();
    renderDebts();
}

// Brauzer yuklanishi bilan ishga tushirish
window.onload = initApp;