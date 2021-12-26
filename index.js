const button=document.querySelector('button')
const input=document.querySelector('input')
const div=document.querySelector('div')

div.innerHTML=localStorage.getItem('Inputvalue')

button.addEventListener('click',()=>{
  localStorage.setItem('Inputvalue',input.value)
  div.innerHTML=input.value
})