import React, { Children, createContext, useState } from 'react'


export const AppStorage = createContext()


const AppStore = ({children}) => {
    let a="hellow"
    let [name,setName]=useState()
    let [active,setActive] = useState()
 

    let store={ a , name,setName,active,setActive}
    return (
       <AppStorage.Provider value={store} >
       {children}
       </AppStorage.Provider>
    )
}

export default AppStore
