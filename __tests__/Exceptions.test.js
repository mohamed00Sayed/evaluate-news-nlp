import { MissingRequiredException, NotSpecificTypeException } from '../src/client/js/Exceptions'

describe("Testing Exception Handling functionality", () => {
  test("Testing the MissingRequiredException() function", () => {

    expect(MissingRequiredException).toBeDefined()
    expect(typeof MissingRequiredException).toEqual('function')
  })
})

describe("Testing Exception Handling functionality", () => {
  test("Testing the NotSpecificTypeException() function", () => {

    expect(NotSpecificTypeException).toBeDefined()
    expect(typeof NotSpecificTypeException).toEqual('function')
  })
})