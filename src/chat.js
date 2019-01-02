export function countPeople({ group, idx, btnClass }) {
  const root = document.querySelector('#response-paragraph') || (() => {
    let div = document.createElement("div")
    div.id = 'response-paragraph'
    document.body.appendChild(div)
    return div
  })()
  root.innerHTML = `<p>${idx} says: There are ${group.female.length} female(s) and ${group.male.length} male(s) in the group.</p>`
  
  document.getElementById('code').className = btnClass
  return root
}