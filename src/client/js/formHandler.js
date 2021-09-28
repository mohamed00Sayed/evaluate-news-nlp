import { createTemplateResults, createTableBody } from './createTemplate'
import { create } from './Creator'
const template = createTemplateResults()
function handleSubmit(event) {
  event.preventDefault()
  const resultSection = document.querySelector('#result')
  
  // check validity of text as url
  let url = document.getElementById('name').value
  if(Client.checkURL(url)){
  
    if(resultSection.hasChildNodes()){
      const table = document.querySelector('#result-table')
      const oldTableBody = document.querySelector('#tb-body')
      table.removeChild(oldTableBody)
      resultSection.removeChild(template)
    }
    const loading = create('div',null, 'Result is loading...')
    resultSection.appendChild(loading)
    

    const data = {
      url
    }
    
    console.log("::: Form Submitted ::: url is:", url)
    
    fetch('/analyze',{
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    })
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(function(res) {
      console.log("::: Passed :::")
      const data = res
      resultSection.removeChild(loading)
      const tableBody = createTableBody([data])
      if (!resultSection.firstChild) {
        resultSection.appendChild(template)
        const table = document.querySelector('#result-table')
        table.appendChild(tableBody)
      }
    })
    .catch(err => console.log(err))
  }
  else{
    alert('Enter a valid link')
  }
}

export { handleSubmit }
