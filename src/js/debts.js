// Qarzdorlar jadvalini render qilish
function renderDebts() {
    const debtBody = document.getElementById('debts-table-body');
    if (!debtBody) return;

    debtBody.innerHTML = '';
    let totalDebt = 0;

    debts.forEach(d => {
        totalDebt += d.amount;
        const row = `<tr>
            <td class="px-6 py-4 text-sm font-bold text-slate-800">${d.name}</td>
            <td class="px-6 py-4 text-sm font-extrabold text-rose-600">${d.amount.toLocaleString()} UZS</td>
            <td class="px-6 py-4 text-sm text-slate-500 font-medium">${d.date}</td>
            <td class="px-6 py-4 text-sm"><span class="bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full text-xs font-bold">${d.status}</span></td>
        </tr>`;
        debtBody.insertAdjacentHTML('beforeend', row);
    });

    // Dashboarddagi umumiy qarzlar ko'rsatkichini yangilash
    document.getElementById('metric-debt').innerText = totalDebt.toLocaleString() + ' UZS';
}

// Yangi qarz yozish
function saveDebt(e) {
    e.preventDefault();
    const name = document.getElementById('debt-name').value;
    const amount = parseFloat(document.getElementById('debt-amount').value);
    const date = document.getElementById('debt-date').value;

    debts.push({ name, amount, date, status: 'Kutilmoqda' });
    document.getElementById('debt-form').reset();
    closeModal('debt-modal');
    
    // Ma'lumotlarni qayta chizish
    renderDebts();
}