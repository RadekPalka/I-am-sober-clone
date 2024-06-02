const addictionTypeSpan = document.querySelector("p.addiction-type>span")
const addictionDateSpan = document.querySelector("p.addiction-date>span")

const userData = JSON.parse(localStorage.getItem("userData"))
console.log(userData)
const now = new Date().toDateString()


const translatingDictionary ={
    'drugs' : 'narkotyki',
    'alcohol': 'alkohol',
    'pornography': 'pornograhia'
}
const addictionDate = new Date(Date.parse(userData.addictionFreeDate))
const formatedAddictionDate = addictionDate.toLocaleDateString("pl", {day: "numeric", month :"long", year: "numeric"})
console.log(formatedAddictionDate, typeof formatedAddictionDate)
const freeDays = (new Date() - addictionDate) /1000 * 60 * 60 *24
console.log(freeDays)
const translatetAddiction = translatingDictionary[userData.addictionType]
addictionTypeSpan.textContent = translatetAddiction
addictionDateSpan.textContent = formatedAddictionDate
