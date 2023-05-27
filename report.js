"use strict"
let task=document.getElementById('task');
let SIG=document.getElementById('sig');
let Yname=document.getElementById('name');
let taskline=document.getElementById('task-name');
let ctask=document.getElementById('currenttask');
let ctaskline=document.getElementById('ctask-name');
let BP=document.getElementById('BP');
let Ddiv=document.getElementById('display');
let much=document.getElementById('much')
let list=""
function createreport(){
    let BestP=document.getElementsByClassName("BestP")
    for(let i=0;i<BestP.length;i++){
        list+=`<li>${BestP[i].value}</li>`
    }
    Ddiv.innerHTML=`*SIG ${sig.value}'23 REPORT*<br/>
<br/>
    Respected all,<br/>
    <br/>
    I, ${Yname.value} would like to tell you about SIG'23 activities.<br/>
    
    <br/>
    ${task.value}: ${taskline.value}<br/>
    =============================<br/>

<br/>
    Best Performers:<br/> 
    <ol>
    ${list}
    </ol>

<br/>
    =============================<br/>
    ${ctask.value}: ${ctaskline.value}<br/>
    
    (Students are still performing this task)<br/>
    =============================<br/>
    <br/>
    (This report has been created as per the Norms set by Chair, ACM.)<br/>
    <br/>
    *Regards,*<br/>
    *${Yname.value}*<br/>
    *SIG ${sig.value} HEAD*<br/>
    *IPEC ACM STUDENT CHAPTER*`
}
function inpmany(){
    console.log(much.value)
    for(let i=0;i<much.value;i++){
        BP.innerHTML+='<input type="text" class="BestP" placeholder="Name"/>'
    }
}