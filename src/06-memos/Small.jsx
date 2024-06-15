import { memo } from 'react'

export const Small = memo( ({ value }) => {

    console.log('Rendering small..')

    
    return (
        <small> { value } </small> 
    )
})
