var tBtn = $(".time-button")

    setInterval(function(){    
        var cTime = moment().format("MM/DD/YYYY hh:mm:ss");
        
        $("#clock").text(cTime)

    },1000)
