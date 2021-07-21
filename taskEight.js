function minutesToHours(number){

    var hours = Math.trunc(number/60);
    var minutes = Math.round(number % 60);
    var minutesSingularOrPlural = "";

    // assigh minute plueral or singular value
    if(minutes > 1){
        minutesSingularOrPlural = "minutes";
    }
    else{
        minutesSingularOrPlural = "minute";
    }
    // assigh hour plueral or singular value then print
    if(number < 120) return console.log(hours.toString() + " hour, " + minutes.toString() +" "+ minutesSingularOrPlural);
    return console.log(hours.toString() + " hours, " + minutes.toString() +" "+ minutesSingularOrPlural);   
}
