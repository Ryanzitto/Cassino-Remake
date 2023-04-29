import { useReducer } from "react"

// import { createContext } from "react";

// export const JogoContext = createContext()

// export const JogoProvider = ({children}) => {

//     return(
//         <JogoContext.Provider value={{}}>{children}</JogoContext.Provider>
//     )
// }


const reducer = (state, action) => {
    switch(action.type){
      case "Increment":
        return {...state, count: state.count + 1}
      case "ShowText":
        return {...state, showText: !state.showText}
      default: 
          return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  })