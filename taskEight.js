function minutesToHours(number){

    var hours = Math.trunc(number/60);
    var minutes = Math.round(number % 60);
    var minutesSingularOrPlural = "";

    if(minutes > 1 || minutes == 0){
        minutesSingularOrPlural = "minutes";
    }
    else{
        minutesSingularOrPlural = "minute";
    }
    if(number < 120 && number > 59) return hours + " hour, " + minutes +" "+ minutesSingularOrPlural;
    return hours + " hours, " + minutes +" "+ minutesSingularOrPlural;   
}
