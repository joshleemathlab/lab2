$(document).ready(function() {
    
    $("#weatherSubmit").click(function(e) {
        e.preventDefault();
        var value = $("#weatherInput").val();
        console.log(value);
         /*var myURL= "http://api.openweathermap.org/data/2.5/weather?q=" + stuff + ",US&units=imperial" + "59c55959ab6c0e43bda4bf8e417fcb5a";*/
        var myURL= "http://api.openweathermap.org/data/2.5/weather?q=" + value + "&APPID=59c55959ab6c0e43bda4bf8e417fcb5a&units=metric"
    //var myURL= "http://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=59c55959ab6c0e43bda4bf8e417fcb5a&units=metric"
    

        $.ajax({
        url : myURL,
        dataType : "json",
        success : function(JSON) {
            console.log(JSON);
            var results="";
            var tempResults="";
            results += '<h2>Weather in ' + JSON.name + "</h2>";
        for (var i=0; i<JSON.weather.length; i++) {
            results += '<img src="http://openweathermap.org/img/w/' + JSON.weather[i].icon + '.png"/>';
            for (var k=0; k<JSON.weather.length; k++) {
                results += JSON.weather[k].description;
                if (k !== JSON.weather.length - 1){
                    results +="</p>";
                }
            }
        }
        tempResults += '<h2>Temperature in ' + JSON.name + " in Farenheight</h2>";
        console.log(JSON.main.temp);
        var temperature = JSON.main.temp;
        console.log(temperature);
        var FTemp = temperature * 9/5 + 32;
        console.log(FTemp);
        tempResults += FTemp;
        /*for (var z=0; z<JSON.main.length; z++) {
            tempResults += JSON.main[z].temp;
            if ( z !== JSON.main.length -1){
                tempResults += ", ";
            }
        }*/

        results += "</p>";
        tempResults += "</p>";
        $("#weatherResults").html(results);
        $("#weatherTempResults").html(tempResults);
        //$("#weatherCResults").html(tempResults);
        }

        });
        

    });


    $("#weatherCelSubmit").click(function(e) {
        e.preventDefault();
        var value = $("#weatherInput").val();
        console.log(value);
         /*var myURL= "http://api.openweathermap.org/data/2.5/weather?q=" + stuff + ",US&units=imperial" + "59c55959ab6c0e43bda4bf8e417fcb5a";*/
        var myURL= "http://api.openweathermap.org/data/2.5/weather?q=" + value + "&APPID=59c55959ab6c0e43bda4bf8e417fcb5a&units=metric"
    //var myURL= "http://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=59c55959ab6c0e43bda4bf8e417fcb5a&units=metric"
    

        $.ajax({
        url : myURL,
        dataType : "json",
        
        success : function(JSON) {
            console.log(JSON);
            var CResults="";
            console.log(JSON);
            var results="";
            var tempResults="";
            results += '<h2>Weather in ' + JSON.name + "</h2>";
        for (var i=0; i<JSON.weather.length; i++) {
            results += '<img src="http://openweathermap.org/img/w/' + JSON.weather[i].icon + '.png"/>';
            for (var k=0; k<JSON.weather.length; k++) {
                results += JSON.weather[k].description;
                if (k !== JSON.weather.length - 1){
                    results +="</p>";
                }
            }
        }
        CResults += '<h2>Temperature in ' + JSON.name + " in Celcius</h2>";
        console.log(JSON.main.temp);
        var CTemp = JSON.main.temp;
        console.log(CTemp);
        CResults += CTemp;
        /*for (var z=0; z<JSON.main.length; z++) {
            tempResults += JSON.main[z].temp;
            if ( z !== JSON.main.length -1){
                tempResults += ", ";
            }
        }*/

        //results += "</p>";
        CResults += "</p>";
        $("#weatherResults").html(results);
        //$("#weatherTempResults").html(tempResults);
        $("#weatherCelResults").html(CResults);
        }

        });
        

    });

    $("#stackSubmit").click(function(e) {
        e.preventDefault();
        var value = $("#stackInput").val();
        console.log(value);
         /*var myURL= "http://api.openweathermap.org/data/2.5/weather?q=" + stuff + ",US&units=imperial" + "59c55959ab6c0e43bda4bf8e417fcb5a";*/
        var myURL= "http://api.openweathermap.org/data/2.5/weather?q=" + value + "&APPID=59c55959ab6c0e43bda4bf8e417fcb5a&units=metric"
    //var myURL= "http://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=59c55959ab6c0e43bda4bf8e417fcb5a&units=metric"
    

        $.ajax({
        url : myURL,
        dataType : "json",
        success : function(JSON) {
            console.log(JSON);
            var SResults="";
            SResults += '<h2>Weather in ' + JSON.name + "</h2>";
            for (var i=0; i<JSON.weather.length; i++) {
                SResults += '<img src="http://openweathermap.org/img/w/' + JSON.weather[i].icon + '.png"/>';
                for (var k=0; k<JSON.weather.length; k++) {
                    SResults += JSON.weather[k].description;
                    if (k !== JSON.weather.length - 1){
                        SResults +="</p>";
                    }
                }
            }
        $("#stackResults").html(SResults);
        //$("#weatherTempResults").html(tempResults);
        }

        });
        

    });
   
});


