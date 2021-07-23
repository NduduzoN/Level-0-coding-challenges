function areaOfTriangle(sideOne ,sideTwo, sideThree){

    semiperimeter = 0.5*(sideOne + sideTwo + sideThree);
    area = Math.sqrt(semiperimeter * (semiperimeter-sideOne) * (semiperimeter-sideTwo) * (semiperimeter-sideThree));
return area;
}