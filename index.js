 function month() {
    var monthnames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decembe"];
    var inputNumber = prompt("Enter a number ");
    var num = parseInt(inputNumber);
    if (!isNaN(num) && num >= 1 && num <= 12) {
      var numSelectedmonth = monthnames[num];
      console.log(`This month  is`, numSelectedmonth);
    } else {
      console.log("Undefine number", inputNumber);
    }
  }
  function time(){
    var times = prompt( "Enter the times");
    if (times == "1am" || times == "2am" || times =="3am" || times ==  "4am" ||times == "5am" )
    {
        console.log(" Night");
    }
    else  if (times == "6am" || times == "7am" || times =="8am" ||times == "9am" ||times == "10am" || times == "11am" ) 
  {
        console.log("Morning");}
     
  
     else if (times == "12pm" ||times ==  "1pm" || times =="2pm" || times == "3pm"  )
     
  {
        console.log("Afternoon");}
     
        else if (times == "7pm" || times == "8pm" ||times =="9pm" || 
        times ==  "10pm" || times == "11pm"||times == "12pm"  ){
            console.log("Night");
        }
  
     else if (times == "5pm" || times == "6pm" || times =="4pm")
     
  {
        console.log("Evening");
  }
     
     else{
         console.log("Invalid");
}
  }
  function Maximum() {
    var num1 = parseInt(prompt("Enter number 1"));
    var num2 = parseInt(prompt("Enter number 2"));
    var num3 = parseInt(prompt("Enter number 3"));
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Please enter valid numbers.");
        return;
    }
    var maximum = Math.max(num1, num2, num3);
    console.log("The maximum number is: " + maximum);
}
function Maximumnu() {
    var num1 = parseInt(prompt("Enter number 1"));
    var num2 = parseInt(prompt("Enter number 2"));
    if (isNaN(num1) || isNaN(num2) ) {
        console.log("Please enter valid numbers.");
        return;
    }
    var maximum = Math.max(num1, num2);
    console.log("The maximum number is: " + maximum);
}
function positiveNumber() {
    var number = prompt("enter your number")
    if (number  >= 0) {
        console.log("This number is postive")
    } else {
        console.log("This number is nagtive")
    }
}
function Divisible() {
    var Number = prompt("Enter your number");
    if (Number % 5 == 0 || Number % 11 == 0) {
      console.log("Divisible by 5 and 11",{Number});
    } else {
        console.log("Not divide by 5 and 11",{Number});
    }
  }
  function oddeven() {
    var number = parseInt(prompt("enter your number"))
    if (number % 2 == 0) {
        console.log("this number is even")
    } else {
        console.log("this number is odd")
    }
}
function leapyear() {
    var numbber = parseInt(prompt("Enter Number"))
    if (numbber % 4 == 0) {
        console.log("The year you enter is leap year")
    } else {
        console.log("The year you enter is not leap year")
    }
}

function Alphabet() {
    var character = prompt("Enter your character").toUpperCase();  

    if (character >= "A" && character <= "Z") {
        console.log("The character you enter is an alphabet");
    } else {
        console.log("The character you enter is not an alphabet");
    }
}
    function vowel() {
        var character = prompt("Enter a charter")
        if (character == "a") {
            console.log("The character you enter is vowel")
        } else if (character == "e") {
            console.log("The chracter you enter is vowel")
        } else if (character == "i") {
            console.log("The chracter you enter is vowel")
        } else if (character == "o") {
            console.log("The chracter you enter is vowel")
        } else if (character == "u") {
            console.log("The chracter you enter is vowel")
        } else {
            console.log("The character you enter is not vowel")
        }
    }
    function week() {
        var weekday = prompt("Enter The day")
        if (weekday == 1) {
            console.log("Monday")
        } else if (weekday == 2) {
            console.log("Tuesday")
        } else if (weekday == 3) {
            console.log("Wednesday")
        } else if (weekday == 4) {
            console.log("Thursday")
        } else if (weekday == 5) {
            console.log("Friday")
        }else if (weekday == 5) {
            console.log("Saturday")
        }else if (weekday == 5) {
            console.log("Sunday")
        }else {
            console.log("Enter The Correct Date")
        }
    }
      function monnth() {
        var monthnames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decembe"];
        var inputNumber = prompt("Enter a number ");
        var num = parseInt(inputNumber);
        if (!isNaN(num) && num >= 1 && num <= 12) {
          var numSelectedmonth = monthnames[num];
          console.log(`This month  is`, numSelectedmonth);
        } else {
          console.log("Undefine number", inputNumber);
        }
      }
      function Grade() {
        var Physics = parseInt(prompt("Enter Physics marks:"));
        var Chemistry = parseInt(prompt("Enter Chemistry marks:"));
        var Biology = parseInt(prompt("Enter Biology marks:"));
        var Mathematics = parseInt(prompt("Enter Mathematics marks:"));
        var Computer = parseInt(prompt("Enter Computer marks:"));
        var totalMarks = Physics + Chemistry + Biology + Mathematics + Computer;
        console.log("Physics: " , Physics);
        console.log("Chemistry: " , Chemistry);
        console.log("Biology: " , Biology);
        console.log("Mathematics: " , Mathematics);
        console.log("Computer: " , Computer);
        var percentage = (totalMarks / 500) * 100;
        console.log("Percentage: " + percentage.toFixed(0) + "%");
        allGrade(percentage);
        function allGrade(percentage) {
            if (percentage >= 90) {
                console.log("Grade: A");
            } else if (percentage >= 80) {
                console.log("Grade: B");
            } else if (percentage >= 70) {
                console.log("Grade: C");
            } else if (percentage >= 60) {
                console.log("Grade: D");
            } else {
                console.log("Grade: F");
            }
        }
    }
    function ElectricityBill() {
        var units = parseFloat(prompt("Enter electricity units:"));
    
        if (isNaN(units) || units < 0) {
            console.log(" Please enter a units number.  ");
        } else {
            var totalBill = 0;
            if (units <= 50) {
                totalBill = units * 0.50;
            } else if (units <= 150) {
                totalBill = 50 * 0.50 + (units - 50) * 0.75;
            } else if (units <= 250) {
                totalBill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
            } else {
                totalBill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
            }
            console.log("Your Electricity Bill:" +   totalBill.toFixed(0) , ("Rupees"));
        }
    }
    function calculateSalary() {
        var basicSalary = parseFloat(prompt("Enter the basic salary:"));
        if (isNaN(basicSalary) || basicSalary < 0) {
            console.log(" Please enter a basic salary.");
        } else {
            var hra, da;
            if (basicSalary <= 10000) {
                hra = (basicSalary * 0.20).toFixed(0);
                da = (basicSalary * 0.80).toFixed(0);
            } else if (basicSalary <= 20000) {
                hra = (basicSalary * 0.25).toFixed(0);
                da = (basicSalary * 0.90).toFixed(0);
            } else {
                hra = (basicSalary * 0.30).toFixed(0);
                da = (basicSalary * 0.95).toFixed(0);
            }
            var grossSalary = (basicSalary + parseFloat(hra) + parseFloat(da)).toFixed(0);
            console.log("Basic Salary: " + basicSalary.toFixed(0) , ("Rupees"));
            console.log("HRA: " + hra , ("Rupees"));
            console.log("DA: " + da , ("Rupees"));
            console.log("Your Gross Salary: " + grossSalary , ("Rupees"));
        }
    }
    function Triangle() {
        var side1 = parseFloat(prompt("Enter the length of side 1:"));
        var side2 = parseFloat(prompt("Enter the length of side 2:"));
        var side3 = parseFloat(prompt("Enter the length of side 3:"));
        if ( side1 <= 0 && side2 <= 0 && side3 <= 0) {
            console.log("Enter the correct triangle number");
        } else {
            if (side1 == side2 && side2 == side3) {
                console.log("It's an Equilateral Triangle.");
            } else if (side1 == side2 || side1 == side3 || side2 == side3) {
                console.log("It's an Isosceles Triangle.");
            } else {
                console.log("It's a Scalene Triangle.");
            }
        }
    }
    function checkTriangle() {
        var angle1 = parseFloat(prompt("Enter the number of angle 1:"));
        var angle2 = parseFloat(prompt("Enter the number of angle 2:"));
        var angle3 = parseFloat(prompt("Enter the number of angle 3:"));
    
        if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
            console.log("Invalid input. Enter the a number");
        } else {
            if (angle1 + angle2 + angle3 == 180) {
                console.log("It's a  triangle.");
            } else {
                console.log("It's not a  triangle.");
            }
        }
    }
    function ProfitOrLoss() {
        var costPrice = parseFloat(prompt("Enter the cost price:"));
        var sellingPrice = parseFloat(prompt("Enter the selling price:"));
        if (isNaN(costPrice) || isNaN(sellingPrice) || costPrice < 0 || sellingPrice < 0) {
            console.log(" Please enter correct  number");
        } else {
            let profitOrLoss = sellingPrice - costPrice;
            if (profitOrLoss > 0) {
                console.log("Your Profit: " + profitOrLoss.toFixed(0), "Rupess" );
            } else if (profitOrLoss < 0) {
                console.log("Your Loss:  " + Math.abs(profitOrLoss).toFixed(0), "Rupess" );
            } else {
                console.log("No Profit, No Loss.");
            }
        }
    }
    function CharacterType() {
        let character = prompt("Enter a character:");
    
        if (character.length === 1) {
            if (/^[a-zA-Z]$/.test(character)) {
                console.log("The character is alphabet.");
            } else if (/^\d$/.test(character)) {
                console.log("The character is a digit.");
            } else {
                console.log("The character is a special character.");
            }
        } else {
            console.log(" Please enter a single character.");
        }
    }
    
    