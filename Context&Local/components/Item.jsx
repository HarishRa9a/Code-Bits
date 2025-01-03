import React, { useState } from 'react'
import { usetodo } from '../contexts/Todo';

function Item({ todo }) {
    const [edit, setedit] = useState(false)
    const [todo_m, settodo_m] = useState(todo.todo)
    const { upd, del, done } = usetodo()

    const editTodo= ()=>{
        upd(todo.id,{...todo,todo:todo_m})
        setedit(false)
    }

    const toggle=()=>{
        done(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.isdone ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.isdone}
                onChange={toggle}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${edit ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.isdone ? "line-through" : ""}`}
                value={todo_m}
                onChange={(e) => settodo_m(e.target.value)}
                readOnly={!edit}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.isdone) return;

                    if (edit) {
                        editTodo();
                    } else setedit((prev) => !prev);
                }}
                disabled={todo.isdone}
            >
                {edit ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => del(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default Item;