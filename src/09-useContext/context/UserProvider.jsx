import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Fabiana Graterol',
//     email: 'fabiana@gmail.com'
// }



export const UserProvider = ({children}) => {

    const [user, setUser] = useState(); 

    return (
        // <UserContext.Provider value={{ hola: 'mundo', user }}>
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
