function timeCalc(input){
  
  var hour = input/60;
  var minute = input%60;
  var total = Math.floor(hour/10) + Math.floor(hour%10) + Math.floor(minute/10) + Math.floor(minute%10);
  document.write(total);
}
timeCalc(808);