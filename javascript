i) var num = 1;

var result = [0,0,0,0,0,0];
var num = 1;
if (num==result[0])
  document.write("Same");
 else
  document.write("Different");
=> Different


ii) var num = 0;

var result = [0,0,0,0,0,0];
var num = 0;
if (num==result[0])
  document.write("Same");
else
  document.write("Different);
=> Same


iii) var i = 0;, num=Math.floor(Math.random() * 45) + 1;
var result = [0,0,0,0,0,0];
var num;
var i = 0;

do{
  num = Math.floor(Math.random() * 45)+1;
  for (var j=0; j<=i; j++){
    if (num==result[j]) 
    break;
   }
   
   if (j<i) 
   continue;
   result[i] = num;
   i++;
 }while (i<6)
 for (var i=0; i<6; i++)
  document.write(result[i]+",");
  document.write("<br>");
