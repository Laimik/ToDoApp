import { useState} from 'react'

export default stateValue => {
    const [deals, setDeals] = useState(stateValue)

    return {
        deals,
        addDeals: dealsText => {
            setDeals([...deals, dealsText])
        },
        deleteDeals: dealsIndex => {
            const newDeals = deals.filter((_, index) => index !== dealsIndex)
            setDeals(newDeals)
        }   
    }
}