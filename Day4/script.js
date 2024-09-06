function calculateBMI() {
    var weight = 50
    var height = 5.8

    if (isNaN(weight) || isNaN(height)) {
        console.log("Please enter a valid number for weight and height.");
        return;
    }

    var bmi = weight / Math.pow(height, 2);
    var result = "";

    if (bmi < 18.5) {
        result = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        result = "Overweight";
    } else {
        result = "Obese";
    }

    console.log("Weight: " + result)
}
calculateBMI();