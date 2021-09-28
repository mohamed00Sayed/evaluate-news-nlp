import { checkURL } from '../src/client/js/urlChecker'

describe("Testing the URL validation functionality", () => {
  test("Testing the checkURL() function", () => {
    const url1 = 'https://meaning-cloud.com'
    const output1 = true
    
    const url2 = 'facebookcom'
    const output2 = false 
    
    expect(checkURL).toBeDefined()
    expect(typeof checkURL).toEqual('function')
    expect(checkURL(url1)).toBe(output1)
    expect(checkURL(url2)).toBe(output2)
  })
})