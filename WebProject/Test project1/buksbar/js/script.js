window.onload = function() {
// input with id "username" on change event
document.getElementById("username").addEventListener("change", function() {
    // get the value of the input with id "username"
    var username = document.getElementById("username").value;
    // regex to check if the username has at least 1 capital letter. 1 number , 1 special character, and is at at least  8 characters long
    var regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    // check if the username matches the regex
    if (regex.test(username)) {
        // if it does, set the border color to green
        document.getElementById("username").style.borderColor = "green";
    } else {
        // if it doesn't, set the border color to red
        document.getElementById("username").style.borderColor = "red";
    }
});

document.getElementById("download").addEventListener("click", function() {
  var canvas = document.getElementById("myChart");
  var image = canvas.toDataURL("image/jpg");
  
  var link = document.createElement("a");
  link.href = image;
  link.download = "chart.jpg";
  link.click();
});

var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: "Income",
            data: [],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
        },
        {
            label: "Expenses",
            data: [],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
              beginAtZero: true
            }
        }
    }
  });
    


document.getElementById("chart-tab").addEventListener("click", function() {


var incomeJanuary = document.getElementById("income-january").value;
var expensesJanuary = document.getElementById("expenses-january").value;

var incomeFebruary = document.getElementById("income-february").value;
var expensesFebruary = document.getElementById("expenses-february").value;

var incomeMarch = document.getElementById("income-march").value;
var expensesMarch = document.getElementById("expenses-march").value;

var incomeApril = document.getElementById("income-april").value;
var expensesApril = document.getElementById("expenses-april").value;

var incomeMay = document.getElementById("income-may").value;
var expensesMay = document.getElementById("expenses-may").value;

var incomeJune = document.getElementById("income-june").value;
var expensesJune = document.getElementById("expenses-june").value;

var incomeJuly = document.getElementById("income-july").value;
var expensesJuly = document.getElementById("expenses-july").value;

var incomeAugust = document.getElementById("income-august").value;
var expensesAugust = document.getElementById("expenses-august").value;

var incomeSeptember = document.getElementById("income-september").value;
var expensesSeptember = document.getElementById("expenses-september").value;

var incomeOctober = document.getElementById("income-october").value;
var expensesOctober = document.getElementById("expenses-october").value;

var incomeNovember = document.getElementById("income-november").value;
var expensesNovember = document.getElementById("expenses-november").value;

var incomeDecember = document.getElementById("income-december").value;
var expensesDecember = document.getElementById("expenses-december").value;

var incomeData = [incomeJanuary, incomeFebruary, incomeMarch, incomeApril, incomeMay, incomeJune, incomeJuly, incomeAugust, incomeSeptember, incomeOctober, incomeNovember, incomeDecember].map(Number);
var expensesData = [expensesJanuary, expensesFebruary, expensesMarch, expensesApril, expensesMay, expensesJune, expensesJuly, expensesAugust, expensesSeptember, expensesOctober, expensesNovember, expensesDecember].map(Number);

myChart.data.datasets[0].data = incomeData;
myChart.data.datasets[1].data = expensesData;
myChart.update();

});


};