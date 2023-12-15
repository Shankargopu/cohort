/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/


function calculateTotalSpentByCategory(transactions) {
  // Create an object to store total spent for each category
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // If the category is not in the categoryTotals object, add it with the current price
    if (!categoryTotals[category]) {
      categoryTotals[category] = price;
    } else {
      // If the category is already in the categoryTotals object, add the current price to the existing total
      categoryTotals[category] += price;
    }
  });

  // Convert the categoryTotals object into the desired result format
  const result = Object.keys(categoryTotals).map((category) => ({
    category,
    totalSpent: categoryTotals[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
// const arr = calculateTotalSpentByCategory(transactions);

