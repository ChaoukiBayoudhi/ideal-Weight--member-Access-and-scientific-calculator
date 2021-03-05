function idealWeight()
{
    let size=document.getElementById("size_id").value;
    let age=document.getElementById("age_id").value;
    let gender=document.getElementById("age_id").value;
    let idealW;
    if(gender=="Female")
    
        idealW=((size/2-30)*(age+180))/200;
    else
        idealW=((3*size-250)*(age+270))/1200;
    document.write(idealW);
//document.getElementById("result").innerHTML=idealW;
}
//document.getElementById("re