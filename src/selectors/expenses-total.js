export default (expenses) => {
    const amounts = expenses.map((expense) => expense.amount);
    return [0, ...amounts].reduce((previous, actual) => previous + actual);
};