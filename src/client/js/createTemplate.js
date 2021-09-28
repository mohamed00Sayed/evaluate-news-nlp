export function createTemplateResults(){
  const resultDiv = Client.create('div', {'class': 'panel panel-blue margin-bottom-20'})
  
  const panelHeadingDiv = Client.create('div', {'class': 'panel-heading'})
  
  const panelTitle = Client.create('h3', {'class': 'panel-title'}, 'Result')
  
  panelHeadingDiv.appendChild(panelTitle)
  
  const panelBodyDiv = Client.create('div', {'class': 'panel-body'})
  
  const TableDiv = Client.create('div', {'class': 'table table-responsive'})
  
  const Table = Client.create('table', {'class': 'table table-stripped', 'id': 'result-table'})
  
  const TableHead = Client.create('thead')
  const HeadRow = Client.create('tr')
  
  const firstHeader = Client.create('th',null, 'Agreement')
  const secondHeader = Client.create('th', null, 'Subjectivity')
  const ThirdHeader = Client.create('th', null, 'Confidence')
  const FourthHeader = Client.create('th', null, 'Irony')
  
  HeadRow.appendChild(firstHeader)
  HeadRow.appendChild(secondHeader)
  HeadRow.appendChild(ThirdHeader)
  HeadRow.appendChild(FourthHeader)
  
  TableHead.appendChild(HeadRow)
  
  Table.appendChild(TableHead)
  
  TableDiv.appendChild(Table)
  
  panelBodyDiv.appendChild(TableDiv)
  
  resultDiv.appendChild(panelHeadingDiv)
  resultDiv.appendChild(panelBodyDiv)
  
  return resultDiv
}

export function createTableBody(data){
  if(data === null || data === undefined) throw new Client.MissingRequiredException('data is required')
  if(data && !Array.isArray(data)) throw new Client.NotSpecificTypeException('data must be an array')

  const tableBody = Client.create('tbody',{'id': 'tb-body'}) //id for table body to remove it with each request
  
  data.forEach(entry => {
    const tableRow = Client.create('tr')

    Object.keys(entry).forEach(key=> { 
      if(key === 'confidence'){
        const rowData = Client.create('td', null, entry[key] + '%')
        tableRow.appendChild(rowData)
      }
      else{
        const rowData = Client.create('td', null, entry[key])
        tableRow.appendChild(rowData)
      }
    })
    tableBody.appendChild(tableRow)
  })
  return tableBody
}