//DOM is accessing html by js
var heading=document.getElementById('heading')

heading.innerHTML="hello"
var para=document.getElementsByClassName('para')
var tags=document.getElementsByTagName('a')
//it wil return all anchor in html
var query=document.querySelectorAll('.para')
var body=document.querySelector('body')

console.log(heading)
console.log(para.length)
// length is how many classes of same name
console.log(para[0])
// [0] is return first class
console.log(para[1])
console.log(tags)
console.log(query)
heading.style="color:red;font-size:2rem"
console.log(heading.classList)
heading.classList.add("six")
heading.classList.remove('one')
body.classList.add("dark")
