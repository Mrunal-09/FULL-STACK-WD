const a=document.querySelectorAll('input')[0]
const b=document.querySelectorAll('input')[1]

const add=document.querySelector('#add')
const subtract=document.querySelector('#subtract')
const multiply=document.querySelector('#multiply')
const divide=document.querySelector('#divide')

const resultBox=document.querySelector('.result')


 /*const sum= () => {
  const result=parseInt(a.value) + parseInt(b.value)
  resultBox.innerHTML = result
}
const minus= () => {
  const result=parseInt(a.value) - parseInt(b.value)
  resultBox.innerHTML = result
}*/

const calculate =(event,operation)=>{
  /*console.log(event.target)
  if (operation=='add'){
    console.log('adding')
  }else if (operation =='subtract'){
    console.log('subtract')
  }*/
  switch(operation){
    case "add":
      resultBox.innerHTML=parseInt(a.value) + parseInt(b.value)
      break
      case "subtract":
      resultBox.innerHTML=parseInt(a.value) - parseInt(b.value)
      break
      case "multiply":
      resultBox.innerHTML=parseInt(a.value) * parseInt(b.value)
      break
      case "divide":
      resultBox.innerHTML=parseInt(a.value) / parseInt(b.value)
      break
      default:
        resultBox.innerHTML="Not a valid operation"
  }
}
//calculate is a dummy function so that event listener uses it indirectly

add.addEventListener('click',(event) =>{
  calculate(event,'add')
})
subtract.addEventListener('click',(event) =>{
  calculate(event,'subtract')
})
multiply.addEventListener('click',(event) =>{
  calculate(event,'multiply')
})
divide.addEventListener('click',(event) =>{
  calculate(event,'divide')
})






