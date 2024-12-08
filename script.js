let count=1;
function addlist(){
    let task=document.getElementById("inp")
    let text=task.value
    if(task.value===""){
        alert("write something")
    }else{
    let ele=document.createElement("div")
    ele.setAttribute('id','task'+count)
    let  t=document.createElement("input")
    t.setAttribute('type','checkbox')
    t.setAttribute('name','x')
    t.style.transform="scale(1.3)"
    t.style.width="20px"
    let d=document.getElementById("para")
    let b=document.createElement("button")
    b.textContent="X"
    b.style.marginLeft="15px"
    b.style.borderRadius="50%"
    b.style.backgroundColor="peachpuff"
    ele.append(t)
    ele.append(text)
    ele.append(b)
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
    b.addEventListener('click', function(){
        ele.innerHTML=""
    })
}
}