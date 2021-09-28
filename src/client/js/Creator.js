export function create(elemType, attrs, textCont){
  if(elemType === undefined || elemType === null) throw new Client.MissingRequiredException('elemType is a required argument')
  if(typeof elemType !== 'string') throw new Client.NotSpecificTypeException('elemType must be string')
  if(textCont && typeof textCont !== 'string') throw new Client.NotSpecificTypeException('elemType must be string')
  if(attrs && typeof attrs !== 'object') throw new Client.NotSpecificTypeException('elemType must be object')

  const elem = document.createElement(elemType)
  if(attrs && Object.keys(attrs).length !== 0){
    Object.keys(attrs).forEach(key => {
      elem.setAttribute(key, attrs[key])
    })
  }
  
  if(textCont){
    elem.textContent = textCont
  }
  
  return elem
}




















