import React from 'react'
import "./form.css"



const Form = ({ handleNewUser }) => {


    const handleSubmit = e => {
        e.preventDefault()

        if (e.target.id.value.length > 0) {
            let count = localStorage.length

            if (count == 0) {
                localStorage.setItem(0, e.target.id.value)
            }


            if (count > 0) {
                let keys = Object.keys(localStorage)
                let keysArray = keys.map(a => Number(a))
                let keysMax = Math.max(...keysArray)

                localStorage.setItem(keysMax + 1, e.target.id.value)
            }


            handleNewUser(true)

            e.target.id.value = ""
        }

    }



    const handleClear = (e) => {
        e.preventDefault()
        if(e.target.id.value.length != 0){
            e.target.id.value = ""
        }
    }



    const handleDelete = () => {
        localStorage.clear()
        handleNewUser(true)
    }


    return (
        <form className='form' onSubmit={handleSubmit} action="">
            <input className='form__input' type="text" id="id" autoComplete='off' placeholder='Create a new ToDo' />
            <div className="form__btns">
                <input className='form__btn-create' type="submit" value="Create" />
                <form onSubmit={handleClear} action="">
                    <input className='form__btn-clear' type="submit" value="Clear " ></input>
                </form>
            </div>

            <button className='form__btn-delete' onClick={handleDelete}>Delete all tasks</button>


        </form>
    )
}

export default Form
