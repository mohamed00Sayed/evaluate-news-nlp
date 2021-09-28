function MissingRequiredException(message) {
  const error = new Error(message)
  error.code = "MISSING_QERUIRED_ARGUMENT"
  return error
}

MissingRequiredException.prototype = Object.create(Error.prototype)


function NotSpecificTypeException(message){
  const error = new Error(message)
  error.code = "NOT_SPECIFIED_TYPE"
  return error
}

NotSpecificTypeException.prototype = Object.create(Error.prototype)

export {
  MissingRequiredException,
  NotSpecificTypeException
}