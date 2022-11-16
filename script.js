console.log('Financial Analysis \n\n -------------- \n\n')

console.log('Total Months: ' + finances.length);

//To select the profit/losses we need to select all [n][1] elements where n iterates upto the total length of the array//
TotalProfitLoss = 0;

TotalChange = 0;

ProfitLossArray = [];

for (index_1 = 0, index_2 = 1; index_1 < finances.length; index_1++, index_2++) {
    TotalProfitLoss = TotalProfitLoss + finances[index_1][1];
    if (index_2 < finances.length) {
        DifferenceInProfitLoss = finances[index_2][1]-finances[index_1][1];
        ProfitLossArray.push([DifferenceInProfitLoss, finances[index_2][0]]);
        TotalChange = TotalChange + Math.abs(DifferenceInProfitLoss);        
        }
} 

console.log('Total: $' + TotalProfitLoss);

if (TotalProfitLoss < 0) {
    console.log('Average Change: $' + Math.round((TotalChange)*-1/(finances.length-1)))
} else {
    console.log('Average Change: $' + Math.round(TotalChange/(finances.length-1)));
}

ProfitLossArray.sort(function(a,b) {
    return a[0]-b[0]
});

console.log('Greatest Increase In Profits: ' + ProfitLossArray[(ProfitLossArray.length-1)][1] + ' ($' + ProfitLossArray[(ProfitLossArray.length-1)][0] + ')');

console.log('Greatest Decrease In Profits: ' + ProfitLossArray[0][1] + ' ($' + ProfitLossArray[0][0] + ')');





