function maximum(){

    var args = Array.from(arguments);
    var sortedString = args.sort((a,b) => b - a);
    return sortedString[0];
}