import { useState } from 'react'

export default stateValue => {
    const [value, setValue] = useState(stateValue)

    return {
        value,
        onChange: event => {
            setValue(event.target.value)
          },
          reset: () => setValue('') 
    }
}