// Initialize variables to keep track of sheep population details.
let totalMales;
let totalSheep;
let pregnantFemales;
let fatherMales;
let newBorns;
let totalAfterBirth;

// Prompt user for sheep data.
const aMales = +prompt('Enter no of Type A males:');
const bMales = +prompt('Enter no of Type B males:');
const females = +prompt('Enter no of females:');

// Check if none of the input variables are defined and exit the program if true.
if (aMales === undefined && bMales === undefined && females === undefined) {
    console.log('No input provided. Exiting...');
    alert('No input provided. Exiting...');
} else {
    // Handle the case where at least one variable is defined.
    if (aMales || bMales || females) {
        // Calculate total number of males and total sheep.
        totalMales = (aMales ?? 0) + (bMales ?? 0);
        totalSheep = totalMales + (females ?? 0);

        // Handle the scenario starting with a check on the availability of males and females.
        if ((females ?? 0) === 0 || (totalMales ?? 0) === 0) {
            // No females or males, so no births occurred. Output the total remaining sheep.
            console.log(`There were no births this year. Total Sheeps remain ${totalSheep}`);
            alert(`There were no births this year. Total Sheeps remain ${totalSheep}`);
        } else if ((aMales ?? 0) > (females ?? 0)) {
            // Type A males are more than females, leading to births with Type A males.
            pregnantFemales = (females ?? 0);
            fatherMales = pregnantFemales;
            newBorns = pregnantFemales * 2;
            totalAfterBirth = newBorns + totalSheep;

            console.log(`Number of Fathers: ${fatherMales}, Number of pregnant females: ${pregnantFemales}, Number of new borns: ${newBorns}, Total after birth: ${totalAfterBirth}`);
            alert(`Number of Fathers: ${fatherMales}, Number of pregnant females: ${pregnantFemales}, Number of new borns: ${newBorns}, Total after birth: ${totalAfterBirth}`);
        } else if ((aMales ?? 0) <= (females ?? 0)) {
            // Type A males are less than or equal to females, leading to births with Type A males.
            pregnantFemales = (aMales ?? 0);
            fatherMales = pregnantFemales;
            newBorns = pregnantFemales * 2;

            // Code checks if there are any females left
            let femalesNotPregnant = (females ?? 0) - pregnantFemales;

            if (femalesNotPregnant === 0) {
                // Code handles a case where there are no females left after Type A males are done mating, Which means Type A males were equal to females
                totalAfterBirth = newBorns + totalSheep;
                console.log(`Number of Fathers: ${fatherMales}, Number of pregnant females: ${pregnantFemales}, Number of new borns: ${newBorns}, Total after birth: ${totalAfterBirth}`);
                alert(`Number of Fathers: ${fatherMales}, Number of pregnant females: ${pregnantFemales}, Number of new borns: ${newBorns}, Total after birth: ${totalAfterBirth}`);
            } else if ((bMales ?? 0) > femalesNotPregnant) {
                // Type B males are more than females left, leading to births with Type B males.
                pregnantFemales += femalesNotPregnant;
                fatherMales += femalesNotPregnant;
                newBorns += femalesNotPregnant;
                totalAfterBirth = newBorns + totalSheep;

                console.log(`Number of Fathers: ${fatherMales}, Number of pregnant females: ${pregnantFemales}, Number of new borns: ${newBorns}, Total after birth: ${totalAfterBirth}`);
                alert(`Number of Fathers: ${fatherMales}, Number of pregnant females: ${pregnantFemales}, Number of new borns: ${newBorns}, Total after birth: ${totalAfterBirth}`);
            } else if ((bMales ?? 0) <= femalesNotPregnant) {
                // Type B males are less than or equal to females left, leading to births with Type B males.
                pregnantFemales += (bMales ?? 0);
                fatherMales += (bMales ?? 0);
                newBorns += (bMales ?? 0);
                totalAfterBirth = newBorns + totalSheep;

                console.log(`Number of Fathers: ${fatherMales}, Number of pregnant females: ${pregnantFemales}, Number of new borns: ${newBorns}, Total after birth: ${totalAfterBirth}`);
                alert(`Number of Fathers: ${fatherMales}, Number of pregnant females: ${pregnantFemales}, Number of new borns: ${newBorns}, Total after birth: ${totalAfterBirth}`);
            }
        } else if ((bMales ?? 0) > (females ?? 0)) {
            // Code handles a case where there are no Type A and Type B males are more than females, leading to births with Type B males.
            pregnantFemales = (females ?? 0);
            fatherMales = pregnantFemales;
            newBorns = pregnantFemales;
            totalAfterBirth = newBorns + totalSheep;

            console.log(`Number of Fathers: ${fatherMales}, Number of pregnant females: ${pregnantFemales}, Number of new borns: ${newBorns}, Total after birth: ${totalAfterBirth}`);
            alert(`Number of Fathers: ${fatherMales}, Number of pregnant females: ${pregnantFemales}, Number of new borns: ${newBorns}, Total after birth: ${totalAfterBirth}`);
        } else if ((bMales ?? 0) <= (females ?? 0)) {
            // Code handles a case where there are no Type A and Type B males are less than or equal to females, leading to births with Type B males.
            pregnantFemales = (bMales ?? 0);
            fatherMales = (pregnantFemales);
            newBorns = (bMales ?? 0);
            totalAfterBirth = newBorns + totalSheep;
            console.log(`Number of Fathers: ${fatherMales}, Number of pregnant females: ${pregnantFemales}, Number of new borns: ${newBorns}, Total after birth: ${totalAfterBirth}`);
            alert(`Number of Fathers: ${fatherMales}, Number of pregnant females: ${pregnantFemales}, Number of new borns: ${newBorns}, Total after birth: ${totalAfterBirth}`);
        }
    }
}
