// Tranzaksiyalarni jadvalga va dashboardga render qilish
function renderTransactions() {
    const txBody = document.getElementById('transactions-table-body');
    const miniTxBody = document.getElementById('mini-transactions');
    
    if (!txBody || !miniTxBody) return;
    
    txBody.innerHTML = '';
    miniTxBody.innerHTML = '';

    let totalKirim = 0;
    let totalChiqim = 0;

    // Asosiy jadvalni to'ldirish
    transactions.forEach(tx => {
        if (tx.type === 'kirim') totalKirim += tx.amount;
        else totalChiqim += tx.amount;

        const row = `<tr>
            <td class="px-6 py-4 text-sm font-medium text-slate-500">${tx.date}</td>
            <td class="px-6 py-4 text-sm font-bold text-slate-800">${tx.desc}</td>
            <td class="px-6 py-4 text-sm"><span class="px-2.5 py-1 rounded-full text-xs font-bold ${tx.type === 'kirim' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}">${tx.type.toUpperCase()}</span></td>
            <td class="px-6 py-4 text-sm font-extrabold text-right ${tx.type === 'kirim' ? 'text-emerald-600' : 'text-rose-600'}">${tx.amount.toLocaleString()} UZS</td>
        </tr>`;
        txBody.insertAdjacentHTML('beforeend', row);
    });

    // Dashboard uchun oxirgi 3 ta tranzaksiya
    transactions.slice(-3).reverse().forEach(tx => {
        const item = `<div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div>
                <p class="text-xs font-bold text-slate-800">${tx.desc}</p>
                <span class="text-[10px] text-slate-400 font-medium">${tx.date}</span>
            </div>
            <span class="text-xs font-extrabold ${tx.type === 'kirim' ? 'text-emerald-600' : 'text-rose-600'}">${tx.type === 'kirim' ? '+' : '-'}${tx.amount.toLocaleString()}</span>
        </div>`;
        miniTxBody.insertAdjacentHTML('beforeend', item);
    });

    // Bosh sahifadagi umumiy balansni yangilash
    const baseBalance = 124500000; // Boshlang'ich kapital
    document.getElementById('metric-balance-uzs').innerText = (baseBalance + totalKirim - totalChiqim).toLocaleString() + ' UZS';
}

// Yangi tranzaksiyani massivga qo'shish
function saveTransaction(e) {
    e.preventDefault();
    const desc = document.getElementById('tx-desc').value;
    const type = document.getElementById('tx-type').value;
    const amount = parseFloat(document.getElementById('tx-amount').value);
    const date = new Date().toISOString().split('T')[0];

    transactions.push({ date, desc, type, amount });
    document.getElementById('tx-form').reset();
    closeModal('transaction-modal');
    
    // Ma'lumotlarni qayta chizish
    renderTransactions();
}

// Tranzaksiyalarni Kirim/Chiqim bo'yicha filterlash
function filterTransactions() {
    const val = document.getElementById('filter-type').value;
    const rows = document.querySelectorAll('#transactions-table-body tr');
    rows.forEach(row => {
        const type = row.querySelector('span').innerText.toLowerCase();
        if (val === 'all' || type === val) row.classList.remove('hidden');
        else row.classList.add('hidden');
    });
}