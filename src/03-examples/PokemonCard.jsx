import { useEffect, useLayoutEffect, useRef, useState } from "react"


export const PokemonCard = ({id, name, sprites = [] }) => {


    const divRef = useRef();
    const [boxSize, setBoxSize] = useState(0)

    useEffect(() => {
        const {height, width }  = divRef.current.getBoundingClientRect();
        setBoxSize({height, width})

    }, [])


    return (
    <>    
        <section style={{ height:200 }}>
            <h2 ref={ divRef } className="text-capitalize"> #{id} - { name } </h2>

            <div >
                {
                    sprites.map( sprite => (

                        <img key={ sprite } src={ sprite } />
                    ))
                }

            </div>
        </section>

        <code>{  JSON.stringify(boxSize)}</code>

        <hr />
    </>
    )
}
