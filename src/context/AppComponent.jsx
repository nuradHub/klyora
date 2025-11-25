import React, { useState } from "react"

export const AppContext = React.createContext()

const AppComponent = ({children})=>{

  const [asideBar, setAsideBar] = useState(false)

  const value = {
    asideBar, setAsideBar
  }
  
  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
export default AppComponent