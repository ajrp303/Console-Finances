console.log('Financial Analysis \n\n -------------- \n\n')

// finances.length will = total months due to every month having a profit/loss value
console.log('Total Months: ' + finances.length);

TotalProfitLoss = 0;

TotalChange = 0;

ProfitLossArray = [];

// iterate over every array to sum the total profit or loss selecting only the p/l values
for (index_1 = 0, index_2 = 1; index_1 < finances.length; index_1++, index_2++) {
    TotalProfitLoss = TotalProfitLoss + finances[index_1][1];
    //iterate over every array to calculate the difference between p/l per month, and form new array with the figures and month
    if (index_2 < finances.length) {
        DifferenceInProfitLoss = finances[index_2][1]-finances[index_1][1];
        ProfitLossArray.push([DifferenceInProfitLoss, finances[index_2][0]]);
        //take absolute value of the differences in p/l to sum together for meaningful insight
        TotalChange = TotalChange + Math.abs(DifferenceInProfitLoss);        
        }
} 

console.log('Total: $' + TotalProfitLoss);
//conditional to change aformentioned absolute value to profit or less dependant on value of total profit or loss
if (TotalProfitLoss < 0) {
    console.log('Average Change: $' + Math.round((TotalChange)*-1/(finances.length-1)))
} else {
    console.log('Average Change: $' + Math.round(TotalChange/(finances.length-1)));
}

//sort array on (loss, profit) so results accurate for any data set
ProfitLossArray.sort(function(a,b) {
    return a[0]-b[0]
});

console.log('Greatest Increase In Profits: ' + ProfitLossArray[(ProfitLossArray.length-1)][1] + ' ($' + ProfitLossArray[(ProfitLossArray.length-1)][0] + ')');

console.log('Greatest Decrease In Profits: ' + ProfitLossArray[0][1] + ' ($' + ProfitLossArray[0][0] + ')');





