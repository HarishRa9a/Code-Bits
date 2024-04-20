import { createContext,useContext } from "react";

export const todo = createContext({
  item:{
    id: 1,
    name: "example",
    isdone: false
  },
  add: (todo)=>{},
  upd: (id,todo)=>{},
  del: (id)=>{},
  done: (id)=>{}
})

export const usetodo = () => {
  return useContext(todo)
}

export const Todoprovider = todo.Provider