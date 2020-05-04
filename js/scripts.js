    function mm(){
        var month = parseInt(document.getElementById("month").value);
        var arrayMonth = [0,3,3,6,1,4,6,2,5,0,3,5];
        if(month ==1){
            var monthCode= arrayMonth[0];
            return monthCode;
        }
        else if(month ==2){
            monthCode= arrayMonth[1];
            return monthCode
        }
        else if(month == 3){
            monthCode= arrayMonth[2];
            return monthCode;
        }
        else if (month == 4){
            monthCode = arrayMonth[3];
            return monthCode;
        }
        else if (month == 5){
            monthCode = arrayMonth[4];
            return monthCode;
        }
        else if (month == 6){
            monthCode = arrayMonth[5];
            return monthCode;
        }
        else if(month == 7){
            monthCode= arrayMonth[6];
            return monthCode;
        }
        else if (month == 8){
            monthCode = arrayMonth[7];
            return monthCode;
        }
        else if (month == 9){
            monthCode = arrayMonth[8];
            return monthCode;
        }
        else if (month == 10){
            monthCode = arrayMonth[9];
            return monthCode;
        }
        else if (month == 11){
            monthCode = arrayMonth[10];
            return monthCode;
        }
        else{
            monthCode= arrayMonth[11];
            return monthCode;
        }
    }
        function cc(){
        var century = parseInt(document.getElementById("century").value);
        if (century == 17){
            var centurycode= 4;
            return centurycode;

        }
        else if(century == 18){
            centurycode= 2;
            return centurycode;
        }
        else if(century == 19){
            centurycode= 0;
            return centurycode;
        }
        else if(century == 20){
            centurycode = 6;
            return centurycode;
        }
        else if (century == 21){
            centurycode = 4
            return centurycode;
        }
        else if(century == 22){
            centurycode= 2;
            return centurycode;
        }
        else{
            centurycode = 0
            return centurycode;
        }
    }

    
     function calculate (date, yearcode, monthCode, centurycode, year){
        var date = parseInt(document.getElementById("date").value);
        var year = parseInt(document.getElementById("year").value);
        var yearcode = (year + (year/4))% 7;
        yearcode = Math.trunc(yearcode);

        if(year % 4 == 0){
            var dayOfTheWeek = (yearcode + mm(monthCode) + cc(centurycode) + date - 1) % 7;
            return dayOfTheWeek;
            
        }
        else if(year % 4!= 0){
            dayOfTheWeek= (yearcode + mm(monthCode) + cc(centurycode) + date )% 7;
            return dayOfTheWeek
        }
        else{}
    }

var checkgender = function(){
    calculate();
    var gdr = document.getElementsByName("one").value;
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akasua", "Adwa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];

    if(gdr[0].checked == true){
        gender = "male";
    }else if(gdr[1].checked == true ){
        gender = "female";
    }
    else {
        alert("Input gender");
    }

    switch(gender){
        case "male":
            console.log("Your Akan name is" +maleNames[dayOfTheWeek]);
    }
    break;
        case
}