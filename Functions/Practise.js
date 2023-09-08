// practice 

console.log("Student Marksheet : \n");

let maths = 70, english=60, science=70, history=90,s,p;
console.log(`Student Marks : \n English- ${english} \n Maths- ${maths} \n Science- ${science} \n History- ${history} \n` );

let sum = () => {
   s= maths + english + science + history ;
   console.log(`sum : ${s}`);
}

let perc = function(){
    p = (s/400) * 100;
    console.log(`Percentage : ${p}`);
 }

 function Grade(){

    if(p>=90){
        console.log("Grade : A");
    }else if (p<90 && p>=80){
        console.log("Grade : B");
    }else if (p<80 && p>=60){
        console.log("Grade : C");
    }else if (p<60 && p>=40){
        console.log("Grade : D");
    }else if (p<40){
        console.log("Grade : F");
    }
 }
 
sum();
perc();
Grade();