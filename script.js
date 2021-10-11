let a=document.getElementsByClassName("styles__Solution-sc-bbicwy-3 jvFNHP")
let b=document.getElementsByClassName("styles__SolutionPart-sc-1v720xv-7 fKkFLi")
let c=document.getElementsByClassName("styles__Answer-sc-1v720xv-8 evcirm")
let success =0;
if((b.length && c.length)){
    for(let i=0; i<b.length;i++) b[i].style.filter='none';
    for(let i=0; i<c.length;i++) c[i].style.filter='none';
    success=1;
}if(a.length){
  for(let i=0; i<a.length;i++) a[i].style.filter='none';
   success=1;
}
else{alert("Desculpe-me, essa página ainda não foi configurada para tirar o blur destas questões.Contate-nos, talvez possamos ajudar")
success=0;
}
success ?console.log("success"):console.log("not found ClassName")
