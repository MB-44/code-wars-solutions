function countPositivesSumNegatives(input){
    let negativeSum =0,positiveSum =0;
    let output = [];

    if (input.length == 0){
        return output;
    }

    input.forEach(function(item){
        if (item >0){
            positiveSum += 1;
        }
        else{
            negativeSum += item;
        }
    })

    output.push(positiveSum,negativeSum);
    return output

}