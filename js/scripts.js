function edoban(){
    
    
}

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
        if(year % 4 ==0){
            var dayOfTheWeek= (yearcode + mm(monthCode) + cc(centurycode) + date - 1) % 7;
            return dayOfTheWeek;
        }
        else{
            dayOfTheWeek= (yearcode + mm(monthCode) + cc(centurycode) + date )% 7;
            return dayOfTheWeek;
        }
    }
    
    function getGender(){
        var gdr = document.getElementById("gender").value;
     //Try get document by name.same name for each gender
    if(gdr[0].checked == true){
        var gen= 0;
        return gen;
        
    }
    else if(gdr[1].checked == true ){
        gen = 1;
        return gen;
    }
    else {
        alert("Input gender");
    }
    }
    function akanNames(dayOfTheWeek, gen){
        var maleNames = ["Kwasi", "Kwadwo", ""]
    }
    
