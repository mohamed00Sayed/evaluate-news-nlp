import { createTemplateResults, createTableBody } from '../src/client/js/createTemplate'

describe("Testing the creating functionality", () => {
  test("Testing the createTemplateResults() function", () => {

    expect(createTemplateResults).toBeDefined()
    expect(typeof createTemplateResults).toEqual('function')
  })
})

describe("Testing the creating functionality", () => {
  test("Testing the createTableBody() function", () => {

    expect(createTableBody).toBeDefined()
    expect(typeof createTableBody).toEqual('function')
  })
})