const addictionTypeSelect = document.querySelector("#addiction-type")
const addictionFreeDateInput = document.querySelector("#addiction-free")

const defaultDate = new Date().toLocaleDateString('en-CA',{ year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll("/", "-")
console.log(defaultDate)
addictionFreeDateInput.value = defaultDate
addictionTypeSelect.addEventListener("change", e=>{
  console.log(e.target.value)
})

addictionFreeDateInput.addEventListener("change", e=>{
  console.log(e.target.value, typeof e.target.value)
})