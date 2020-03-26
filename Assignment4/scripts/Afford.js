function btnAfford_Click() 
{
    var mIncome;
    var parseMIncome;
    var parseTExpenses;
    var tExpenses;
    var total;
    var txtOutput;
    var flag = false;

    mIncome = document.getElementById("mIncome");
    tExpenses = document.getElementById("tExpenses");
    spnOutput = document.getElementById("spnOutput");
    txtOutput = document.getElementById("txtOutput");

    parseMIncome = parseFloat(mIncome.value);
    parseTExpenses = parseFloat(tExpenses.value);
    if(isNaN(parseMIncome)) 
    {
        flag = true;
        //spnOutput.innerHTML = "Please input a numeric value for monthly income!"
        //document.getElementById('mIncome').value = ''
    }

    if(isNaN(parseTExpenses)) 
    {
        flag = true;
        //spnOutput.innerHTML = "Please input a numeric value for total expenses!"
        //document.getElementById('tExpenses').value = ''
    }

    if(flag) //if the flag is set to true 
    {
        txtOutput.innerHTML = "Please input a numeric value for both boxes!"
    }
    else 
    {
        var newMIncome = 0;
        newMIncome = parseMIncome * .29;
        total = (parseMIncome - parseTExpenses) * .39;

        if(newMIncome > total) 
        {
            spnOutput.innerHTML = "$" + newMIncome.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            txtOutput.innerHTML = "Please use the 29% calculation for your gorss earnings."
        }
        else 
        {
            spnOutput.innerHTML = "$" + total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            txtOutput.innerHTML = "Please use the 39% calculation for your gorss earnings."
        }
    }
}

//display a table function.
function cInterest_Click() 
{
    var iYR;
    var iYears;
    var pValue;
    var parseIYR;
    var parseiYears;
    var parsePValue;
    var months;
    var monthlyRate;
    var table; 
    var div;
    var flag = false;

    iYR = document.getElementById("iYR");
    iYears = document.getElementById("iYears");
    pValue = document.getElementById("pValue");
    table = document.createElement("table"); //create an instance of the table
    div = document.getElementById("table");

    var row = table.insertRow(0);
    var cellH1 = row.insertCell(0);
    cellH1.innerHTML = "Year";

    var cellH1 = row.insertCell(1);
    cellH1.innerHTML = "Beginning Balance";

    parseIYR = parseFloat(iYR.value);
    parseiYears = parseFloat(iYears.value);
    parsePValue = parseFloat(pValue.value);

    monthlyRate = parseIYR / 12 / 100; //divide for monthly rate.
    months = parseiYears * 12; //adjust for monthly interest rate. 

    var FV = 0 ;
    for(var i = 1; i < months+1; i++) 
    {
        FV = (FV + parsePValue) * (1 + monthlyRate);
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = i.toString();

        var cell2 = row.insertCell(1);
        cell2.innerHTML = FV.toFixed(2);
    }
    div.appendChild(table);
}

function cInterest() {
    var iYR;
    var iYears;
    var pValue;
    var parseIYR;
    var parseiYears;
    var parsePValue;
    var months;
    var monthlyRate;
    var txtOutput;
    var flag = false;

    iYR = document.getElementById("iYR");
    iYears = document.getElementById("iYears");
    pValue = document.getElementById("pValue");
    txtOutput = document.getElementById("txtOutput");

    parseIYR = parseFloat(iYR.value);
    parseiYears = parseFloat(iYears.value);
    parsePValue = parseFloat(pValue.value);
    if(isNaN(parseIYR)) 
    {
        flag = true;
    }
    if(isNaN(parseiYears)) 
    {
        flag = true;
    }
    if(isNaN(parsePValue)) 
    {
        flag = true;
    }

    if(flag) {
        alert("Please input a numeric value for all boxes!");
    }
    else {
        monthlyRate = parseIYR / 12 / 100; //divide for monthly rate.
        months = parseiYears * 12; //adjust for monthly interest rate. 
    
        var FV = 0 ;
        var altInterest = 0;
        for(var i = 1; i < months+1; i++) 
        {
            parsePValue = parsePValue + (parsePValue * monthlyRate);
        }
        txtOutput.innerHTML = "$" + parsePValue.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

function PMT_Click() {
    var iYR;
    var iYears;
    var pValue;
    var parseIYR;
    var parseiYears;
    var parsePValue;
    var months;
    var monthlyRate;
    var fv = 0;
    var flag = false;

    iYR = document.getElementById("iYR");
    iYears = document.getElementById("iYears");
    pValue = document.getElementById("pValue");
    txtOutput = document.getElementById("txtOutput");

    parseIYR = parseFloat(iYR.value);
    parseiYears = parseFloat(iYears.value);
    parsePValue = parseFloat(pValue.value);

    if(isNaN(parseIYR))
    {
        flag = true;
    }
    if(isNaN(parseiYears))
    {
        flag = true;
    }
    if(isNaN(parsePValue))
    {
        flag = true;
    }

    if(flag)
    {
        alert("Please enter a numeric value for all boxes!");
    }
    else 
    {
        months = parseiYears * 12;
        monthlyRate = parseIYR / 12 / 100;
        var pow = Math.pow(1 + monthlyRate,months);
        var PMT = ((monthlyRate * (fv + pow * parsePValue))/(-1 + pow));
        txtOutput.innerHTML = "$" + PMT.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}