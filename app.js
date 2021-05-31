var date=new Date();
document.write("current date is ",date);
var month=date.getMonth();
var currentMonth=["January","February","March","April","May","June","July","August","September","October","November","December"];
document.write("<br/>Current Month:  ",currentMonth[month]);
var date=new Date();
var day=date.getDay();
var currentDay=["Sun","Mon","Tue","Wed","Fri","Sat"];
document.write("<br/>Today is:  ",currentDay[day]);
if(day===0 || day===6)
{document.write("<br/>It's Fun Day")}
var day=date.getDate();
if(day<=15){
    document.write("<br/>It's First Fifteen days of month")
}else{document.write("<br/>It's Last fifteen days of month")}

var date=new Date();
var msdate=date.getTime();
var mins=(msdate)/(1000*60)
document.write("<br/>current Date :  ",date);
document.write("<br/>Elapsed milliseconds since January 1st,1970 :  ",msdate);
document.write("<br/>Elapsed minutes since January 1st,1970 :  ",mins);

var hours=date.getHours();
console.log(hours)
if (hours===0){document.write("it'midnight")}
else if(hours>0 && hours<=12){document.write("<br/>it's AM")}
else if(hours>12 && hours<24){document.write("<br/>it's PM")}
var laterDate=new Date("Thu Dec 31, 2020")
console.log(laterDate)
console.log(typeof laterDate)
var ramzan=new Date("June 18,2015");
console.log(ramzan)
var msramzan=ramzan.getTime();
var date=new Date();
var msdate=date.getTime();
var days=msdate-msramzan;
days=days/(1000*60*60*24);
days=Math.floor(days)
document.write("<br/>",days," days have passed since 1st Ramzam 2015")
var refDate=new Date("Sat Dec 05 2015 22:50:16")
var year=new Date("jan 1 2015")
var msrefDate=refDate.getTime();
var msYear=year.getTime();
var seconds=(msrefDate-msYear)/1000;
document.write("<br/>On reference date, ",refDate,", ",seconds," Seconds  has passed since the begining of 2015.")
 
var time=new Date();
console.log(time)
var ahead=new Date();
ahead=ahead.setHours(1);
ahead=new Date(ahead)
document.write("<br/>current date is ",ahead,"  One hours ago it was ",time)

var time=new Date();
console.log(time)
var back100=new Date();
back100=back100.setFullYear(1921);
back100=new Date(back100)
document.write("<br/>current date is ",time," 100 years back it was ",back100)

var age=+prompt("Enter your age in years");
Math.round(age);
var birthYear=new Date();
birthYear=birthYear.getFullYear();
birthYear=birthYear-age;
document.write("<br/> your age is:  ",age)
document.write("<br/> your birth year is:  ",birthYear)
var units=410;
document.getElementById("demo").innerHTML = units; 
var dueDate=new Date("March 7,2021 00:00:00")
console.log(dueDate)
var msDueDate=dueDate.getTime()
console.log(msDueDate)
var amount=410*16;
var dueAmount;
var date=new Date();
var msdate=date.getTime();
if(msdate>msDueDate){
    dueAmount=amount+350;
}
document.getElementById("netamount").innerHTML = amount; 
document.getElementById("damount").innerHTML = dueAmount;
