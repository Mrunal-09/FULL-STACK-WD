var button=document.querySelector('button')
var input=document.querySelector('input')
var list=document.querySelector('ul')

var duplicates=[]
//to not add duplicates

var deleteitem=(value)=>{
  const index =duplicates.indexOf(value)
  //console.log(index)
  duplicates.splice(index,1)
  console.log(duplicates)
}

const callbackfunc=(event) =>{
  const inputvalue=input.value
  if(duplicates.includes(inputvalue)){
    console.log('already exists')
  }
  else{
    duplicates.push(inputvalue)
  const element=document.createElement('li')
  const textnode=document.createTextNode(inputvalue)
  element.appendChild(textnode)
  list.appendChild(element)
  console.log(input.value)
  /*element.addEventListener('click',()=>{
    console.log('clicked')
  })*/
  /*element.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML)
  })
  //returns the value clicked
}*/
element.addEventListener('click',(e)=>{ deleteitem
(e.target.innerHTML)})
  //to remove from array displayed on console
  element.addEventListener('click',(e)=>{
    e.target.remove()})
  }  //to remove from list on screen
}

button.addEventListener('click',callbackfunc)