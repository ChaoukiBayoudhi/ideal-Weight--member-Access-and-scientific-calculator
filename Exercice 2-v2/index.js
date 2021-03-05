function idealWeight(){

    //get values from HTML Form
    // let size=Number(document.infos.size.value);
    // let age=parseInt(document.infos.age.value);
    // let gender=document.infos.gender.value; 
    let size=Number(document.getElementById("size_id").value);
    let age=parseInt(document.getElementById("age_id").value);

   // let gender=document.getElementById("gender_id").value; 
     gender="Female";
     if(document.getElementById("male_id").checked)
         gender=document.getElementById("male_id").value;
    
    //find ideal weight
    let idealW;
    if(gender=="Female")
        idealW= (size/2 -30)*(age+180)/200;
    else
        idealW=(3*size-250)*(age+270)/1200;
    
    //show the result
    document.getElementById("result").innerHTML="Your Ideal weight is <strong>"+ idealW.toFixed(2);


}