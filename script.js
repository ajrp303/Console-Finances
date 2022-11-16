console.log('Financial Analysis \n\n -------------- \n\n')

console.log('Total Months: ' + finances.length);

//To select the profit/losses we need to select all [n][1] elements where n iterates upto the total length of the array//
TotalProfitLoss = 0;

for (index_1 = 0; index_1 < finances.length; index_1++) {
    TotalProfitLoss = TotalProfitLoss + finances[index_1][1];
} 

console.log('Total: $' + TotalProfitLoss);



