export function remove(group, idx) {
  const root = document.querySelector('#response-paragraph') || (() => {
    let div = document.createElement("div")
    div.id = 'response-paragraph'
    document.body.appendChild(div)
    return div
  })()
  const code = document.getElementById('code')
  group[idx ? 'female' : 'male'].splice(-1, 1)
  code.innerText = JSON.stringify(group, null, 2)
  root.innerHTML = `<p>There are ${group.female.length} female(s) and
    ${group.male.length} male(s) in the group.</p>`
  
  return group
}