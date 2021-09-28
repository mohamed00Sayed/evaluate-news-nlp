import { checkURL } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'
import { create } from './js/Creator'
import { MissingRequiredException, NotSpecificTypeException } from './js/Exceptions'
import { createTemplateResults, createTableBody } from './js/createTemplate'


import './styles/resets.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/base.scss'
import './styles/nav.scss'
import './styles/result.scss'
import '../../public/logo2.png'


export {
  checkURL,
  handleSubmit,
  create,
  MissingRequiredException,
  NotSpecificTypeException,
  createTemplateResults,
  createTableBody
}
