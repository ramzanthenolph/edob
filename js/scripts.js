function edoban(){
var calculate = function(date, month, year, century){
    var yearcode = function( year){
        return (year + (year/4))% 7;
    }
    var arrayMonth = [0,3,3,6,1,4,6,2,5,0,3,5];
    var monthCode = function(month){
        if(month ==1){
            return arrayMonth[0];
        }
        else if(month ==2){
            return arrayMonth[1];
        }
        else if(month == 3){
            return arrayMonth[2];
        }
        else if (month == 4){
            return arrayMonth[3];
        }
        else if (month == 5){
            return arrayMonth[4];
        }
        else if (month == 6){
            return arrayMonth[5];
        }
        else if(month == 7){
            return arrayMonth[6];
        }
        else if (month == 8){
            return arrayMonth[7];
        }
        else if (month == 9){
            return arrayMonth[8];
        }
        else if (month == 10){
            return arrayMonth[9];
        }
        else if (month == 11){
            return arrayMonth[10];
        }
        else(month == 12){
            return arrayMonth[11];
        }
    }
    var centurycode = function(century){
        if (century == 17){
            return 4;
        }
        else if(century == 18){
            return 2;
        }
        else if(century == 19){
            return 0;
        }
        else if(century == 20){
            return 6;
        }
        else if (century == 21){
            return 4;
        }
        else if(century == 22){
            return 2;
        }
        else{
            return 0;
        }
    }

    if(year/=4 && year/= 400)
    return ( ( (century/4) - 2 * century - 1) + ((5 * year/4) ) + ((26 * (month + 1 ) /10)) + date ) % 7;
    }
    // This is the  formula used  for finding the day of the week.The output expected should range 0 - 6
    var date = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var century = parseInt(document.getElementById("century").value);
    var dayOfTheWeek = calculate(date, month, year, century);
    alert(dayOfTheWeek);

    /*var gdr = document.getElementById("one").value;
     //Try get document by name.same name for each gender
    if(gdr[0] == true){
        if(dayOfTheWeek==0){
            console.log("Your name is Kwasi");
        }
        else if(dayOfTheWeek ==1){
            console.log("Your name is Kwadwo");
        }
        else if(dayOfTheWeek ==2){
            console.log("Your name is Kwabena");
        }
        else if(dayOfTheWeek == 3){
            console.log("Your name is Kwaku");
        }
        else if(dayOfTheWeek == 4){
            console.log("Your name is Yam");
        }
        else if(dayOfTheWeek == 5){
            console.log("Your name is Kofi");
        }
        else{
            console.log("Your name is kwame");
        }
    }
    else if(gdr[1].checked == true ){
        if(dayOfTheWeek==0){
            console.log("Your name is Akasua");
        }
        else if(dayOfTheWeek ==1){
            console.log("Your name is Adwa");
        }
        else if(dayOfTheWeek ==2){
            console.log("Your name is Abenna");
        }
        else if(dayOfTheWeek == 3){
            console.log("Your name is Akua");
        }
        else if(dayOfTheWeek == 4){
            console.log("Your name is Afua");
        }
        else if(dayOfTheWeek == 5){
            console.log("Your name is Afua");
        }
        else{
            console.log("Your name is Ama");
        }
    }
    else {
        alert("Input gender");
    }*/
}