function timeCalc(input){
  
  var hour = Math.trunc(input/60);
  var min = input % 60;
  document.write(hour + ":" + min);
}
timeCalc(808);