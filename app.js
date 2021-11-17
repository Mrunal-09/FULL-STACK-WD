/*let value=new Promise((resolve,reject)=>(
  setTimeout(()=>{
    resolve("Mrunal Gosavi")
  },4000)
)).then(value=>{console.log(value)})

//.then gives data once promise fullfilled,only promise does not gives data*/

const table=document.querySelector('table')
console.log(table)

fetch("https://jsonplaceholder.typicode.com/users")
.then(value=>value.json())
.then(data=>{
  console.log(data)
//gives whole data
data.forEach(user => {
  //console.log(user)
  let newRow=document.createElement('tr')
  /*let dataID=document.createElement('td')
  let dataIDtextnode=document.createTextNode(user.id)//to display id ...similar will be done for name,gmail,username but not feasible
  dataID.appendChild(dataIDtextnode)
  newRow.appendChild(dataID)*/
  //so backtick is used``
  let element= `  
  <td>${user.id}</td>
  <td>${user.name}</td>
  <td>${user.email}</td>
  <td>${user.username}</td>`
  //appendchild method only accepts node,node is object,newRow is string so cannot be appended,ie y innerhtml is used
  newRow.innerHTML=element
  table.appendChild(newRow)
})
})