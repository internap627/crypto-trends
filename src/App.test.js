import {functions} from './Funtions'
import { async } from 'q';




test('fetch username Bret', async () => {
    expect.assertions(1)
    
    const data = functions.fetchUser()
    expect(data).toBe('Bret')
    
  
})
