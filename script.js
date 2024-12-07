let count=1;
function addlist(){
    let task=document.getElementById("inp")
    let text=task.value
    let ele=document.createElement("div")
    ele.setAttribute('id','task'+count)
    let  t=document.createElement("input")
    t.setAttribute('type','checkbox')
    t.setAttribute('name','x')
    let d=document.getElementById("para")
    ele.append(t)
    ele.append(text)
    d.append(ele)
    count++;
    task.value="";
    t.addEventListener("click", function() {
       if(t.checked){
        ele.style.textDecoration="line-through"
       }else{
        ele.style.textDecoration="none"
       }
    });
}