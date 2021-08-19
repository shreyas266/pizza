name_array=["chicken pizza","cheese pizza"];    
document.getElementById("display").innerHTML=name_array;

function submit(){
    var name1=document.getElementById("stud1").value;
    
    name_array.push(name1);
    
    console.log(name_array);
    document.getElementById("display").innerHTML=name_array;
}
