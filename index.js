function myFunction() {
    let day= "Friday";
    let age= 25;
    age = document.getElementById("demo").value;
    day= document.getElementById("ww").value;
    age = +age;
    if ((day=="Tuesday"|| day=="Thursday") || (age>12 && age<21)) {
    alert("You are eligible to student discount");
    }
    else if((day=="Monday"||day=="Wednesday"||day=="Friday"||day=="Saturday"||day=="Sunday")||(age<=12 && age>=21)){
    alert("You must pay regular price");
    }
    }