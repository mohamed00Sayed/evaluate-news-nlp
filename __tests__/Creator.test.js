import { create } from '../src/client/js/Creator'

describe("Testing the creating functionality", () => {
  test("Testing the create() function", () => {
    const elemType = 'div'
    const attrs = {'id': 'dw5ed4'}
    const textCont = 'watch describe describe'
    
    expect(create).toBeDefined()
    expect(typeof create).toEqual('function')
  })
})