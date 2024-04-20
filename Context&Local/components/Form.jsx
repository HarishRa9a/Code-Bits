import React, { useState } from "react";
import {usetodo} from '../contexts/Todo'
function Form() {
    const [todo,settodo]=useState("")
    const {add}=usetodo()
    const add_todo=(e)=>{
        e.preventDefault()
        if(!todo) return;
        add(todo)
        settodo("")
    }
    return (
        <>
            <form onSubmit={add_todo} className="flex">
                <input
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    value={todo}
                    onChange={(e)=>{settodo(e.target.value )}}
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                    Add
                </button>
            </form>
        </>
    )
}

export default Form;