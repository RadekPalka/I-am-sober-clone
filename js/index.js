const addictionTypeSelect = document.querySelector("#addiction-type")
const addictionFreeDateInput = document.querySelector("#addiction-free")
const sobrietyForm = document.querySelector("#sobriety-form")
const addictionCostInput = document.querySelector("#addiction-cost")
const defaultDate = new Date().toLocaleDateString('en-CA', {
                      year: 'numeric', month: '2-digit', day: "2-digit", hour: "2-digit", minute: "2-digit", hour12 : false
                    })
const formattedDefaultDate= defaultDate.replaceAll(",","")

addictionFreeDateInput.value = formattedDefaultDate
addictionFreeDateInput.max = formattedDefaultDate


sobrietyForm.addEventListener("submit", e=>{
  e.preventDefault()
  const userData = {
    addictionType : addictionTypeSelect.value,
    addictionFreeDate : addictionFreeDateInput.value,
    addictionCost : addictionCostInput.value
  }
  console.log(userData)
  localStorage.setItem('userData', JSON.stringify(userData))
  location.href= "./dashboard/dashboard.html"
})