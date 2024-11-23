export function addNumbers(numbers) {
    //Step 1 for empty string
    if (!numbers) return 0;
    //Step 2 Extract numbers (this line will extract any positive and negative numbers from string) 
    let numberString = numbers;
    const regex = /[-]?[0-9]+/g
    const matches = numberString.match(regex);
    //Step 3 If no numbers found return 0
    if (!matches) return 0;
    //Step 4 Convert extracted numbers array into base numbers
    let numbersArray = matches.map(num => parseInt(num, 10));
    //Step5 Check if Numbers array have negative data

    let negativeArr = numbersArray.filter(el => el < 0)
    //Step 6 Throw Error if found
    if (negativeArr.length > 0) {
        throw new Error('negatives not allowed: ' + negativeArr.join(', '));
    }

}

