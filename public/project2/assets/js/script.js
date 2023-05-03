//Task#1
alert ( "Welcome to my first senond project" ) ;

//Task#2
let fname = prompt ( "Please enter your first name" , 'Sherry' ) ;
while ( ( fname == "" ) || ( fname === null ) ) {
     fname = prompt ( "INVALID INPUT. Please enter your first name" , 'Sherry' ) ;
}

//Task#3
let lname = prompt ( "Please enter your last name" , 'Zarei' ) ;
while ( ( lname == "" ) || ( lname === null ) ) {
     lname = prompt ( "INVALID INPUT. Please enter your last name." , 'Zarei' ) ;
}
console.log ( 'Full Name ' + ' ' + fname + " " + lname ) ;  //Task#6: Console.log: Displaying the data within browser console.

//Task#4
let program = prompt ( "Please enter you program name" , 'Computer Systems Analyst' ) ;
console.log ( 'Program Name' + ' ' + program ) ;           //Task#6: Console.log: Displaying the data within browser console.

//Task#5
let YearOfStudy = prompt ( "Please enter your year of study" , 1 ) ;


while ( ( YearOfStudy < 1 ) || ( YearOfStudy > 3 ) || isNaN ( parseInt (YearOfStudy) ) ) {
     if ( ( YearOfStudy === null ) || ( YearOfStudy == "" ) ) {
          YearOfStudy = "1" ;
     }
     else YearOfStudy = prompt ( "INVALID INPUT. Please enter your year of study" , 1 );
}
console.log ( 'Year of Study' + ' ' + YearOfStudy ) ;     //Task#6: Console.log: Displaying the data within browser console.

//Task#6: Displaying the data within the browser
let full_name = document.getElementById ("full_name") ;
full_name.innerHTML = "Full Name:" + fname + " " + lname ;

let program_of_study = document.getElementById ( "program_of_study" ) ;
program_of_study.innerHTML = "Program Name:" + " " + program ;

let year_of_study = document.getElementById ( "year_of_study" ) ;
year_of_study.innerHTML = "Year of Study:" + " " + YearOfStudy ;
