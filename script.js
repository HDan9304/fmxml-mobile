// State
let budget = localStorage.getItem('totalBudget') || 0;
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Selectors
const budgetInput = document.getElementById('total-budget-input');
const setBudgetBtn = document.getElementById('set-budget-btn');
const displayTotal = document.getElementById('display-total');
const displaySpent = document.getElementById('display-spent');
const displayRemaining = document.getElementById('display-remaining');
const expenseName = document.getElementById('item-name');
const expenseAmount = document.getElementById('item-amount');
const addExpenseBtn = document.getElementById('add-expense-btn');
const expenseList = document.getElementById('expense-list');

// Initial Load
window.onload = () => {
    updateUI();
};

// Set Budget
setBudgetBtn.onclick = () => {
    budget = parseFloat(budgetInput.value);
    localStorage.setItem('totalBudget', budget);
    updateUI();
    budgetInput.value = '';
};

// Add Expense
addExpenseBtn.onclick = () => {
    const name = expenseName.value;
    const amount = parseFloat(expenseAmount.value);

    if (name && amount) {
        const expense = { id: Date.now(), name, amount };
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        updateUI();
        expenseName.value = '';
        expenseAmount.value = '';
    }
};

// Delete Expense
function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateUI();
}

// Update UI
function updateUI() {
    // Totals
    const spent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const remaining = budget - spent;

    displayTotal.innerText = `$${budget}`;
    displaySpent.innerText = `$${spent}`;
    displayRemaining.innerText = `$${remaining}`;

    // Color code remaining budget
    displayRemaining.className = remaining >= 0 ? 'remaining-positive' : 'remaining-negative';

    // List
    expenseList.innerHTML = '';
    expenses.forEach(exp => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${exp.name}</span>
            <span>$${exp.amount}</span>
            <button class="delete-btn" onclick="deleteExpense(${exp.id})">Delete</button>
        `;
        expenseList.appendChild(li);
    });
}