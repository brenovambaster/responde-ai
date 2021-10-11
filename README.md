# responde-aí
Remover blur das questões comentadas do responde aí  #blur #respondeAí #responde #aí #remover
###  ❗🔺 Considerações
- Este repositório foi criado com a intenção de estudar mais sobre sistemas de ofuscação na web que rodam em ambientes client-side. 
- Não me responsabilizo pelo uso indevido de terceiros para obter conteúdos  dos quais não possuem acesso! Não me responsabilizo por nada!
- O código é apenas para fins educacionais com  intuito de mostrar  como ocorre a ofuscaçao e como  pode ser uma má ideia usá-la para "esconder" conteúdos.

## 🤔💭 Como usar? 
  1. Abra o devtools na página da questão do responde aí **(pode-se usar `Ctrl`+`shift`+`i`)**
  2. Abra o cosole.

![image](https://user-images.githubusercontent.com/42620040/136794780-27a189be-8a35-4753-8206-1b89f03896f5.png)
  
  3. Copie o código e cole:
```js 
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
else{alert("Desculpe-me, não foi possível obter os dados")
}
success ? console.log("success") : console.log("not found ClassName")
```
Exemplo do trecho de Código

![image](https://user-images.githubusercontent.com/42620040/136797344-545e061b-0353-4afa-85eb-f92d5a1da208.png)

  4. Dê enter e pronto
 ## Exemplos: 
  ![image](https://user-images.githubusercontent.com/42620040/136795749-0e62360f-a21b-4461-8bea-b957261dded6.png)
  ![image](https://user-images.githubusercontent.com/42620040/136795880-a25d0da4-d95b-4683-8588-561d474bc0c8.png)


  
