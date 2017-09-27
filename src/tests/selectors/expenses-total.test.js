import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses.js';

test('should return 0 if no expense', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const expense = expenses[0];
    const result = selectExpensesTotal([expense]);
    expect(result).toBe(expense.amount);
});

test('should correctly add up multiple expenses', () => {
    const testExpenses = [expenses[0], expenses[1]];
    const expectedResult = expenses[0].amount + expenses[1].amount;
    const result = selectExpensesTotal(testExpenses);
    expect(result).toBe(expectedResult);
});