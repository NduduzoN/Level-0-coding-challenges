function convertCelsiusToFahrenheit(temperature){

    fahrenheit = (temperature*1.8) + 32;
    return fahrenheit.toString() + " °F";
}

function convertFahrenheitToCelsius(temperature){

    celsius = (temperature - 32) /1.8;
    return celsius.toString() + " °C";
}