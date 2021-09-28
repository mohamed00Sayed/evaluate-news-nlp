import { create } from './Creator'
import { MissingRequiredException, NotSpecificTypeException } from './Exceptions'

export function createTemplateResults(){
  const resultDiv = create('div', {'class': 'panel panel-blue margin-bottom-20'})
  
  const panelHeadingDiv = create('div', {'class': 'panel-heading'})
  
  const panelTitle = create('h3', {'class': 'panel-title'}, 'Result')
  
  panelHeadingDiv.appendChild(panelTitle)
  
  const panelBodyDiv = create('div', {'class': 'panel-body'})
  
  const TableDiv = create('div', {'class': 'table table-responsive'})
  
  const Table = create('table', {'class': 'table table-stripped', 'id': 'result-table'})
  
  const TableHead = create('thead')
  const HeadRow = create('tr')
  
  const firstHeader = create('th',null, 'Agreement')
  const secondHeader = create('th', null, 'Subjectivity')
  const ThirdHeader = create('th', null, 'Confidence')
  const FourthHeader = create('th', null, 'Irony')
  
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
  if(data === null || data === undefined) throw new MissingRequiredException('data is required')
  if(data && !Array.isArray(data)) throw new NotSpecificTypeException('data must be an array')

  const tableBody = create('tbody',{'id': 'tb-body'}) //id for table body to remove it with each request
  
  data.forEach(entry => {
    const tableRow = create('tr')

    Object.keys(entry).forEach(key=> { 
      if(key === 'confidence'){
        const rowData = create('td', null, entry[key] + '%')
        tableRow.appendChild(rowData)
      }
      else{
        const rowData = create('td', null, entry[key])
        tableRow.appendChild(rowData)
      }
    })
    tableBody.appendChild(tableRow)
  })
  return tableBody
}