import React from 'react'
import "./form.css"



const Form = ({ handleNewReminder }) => {


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


            handleNewReminder(true)

            e.target.id.value = ""
        }

    }

    

    const handleDelete = () => {
        localStorage.clear()
        handleNewReminder(true)
    }


    return (
        <form className='form' onSubmit={handleSubmit} action="">
            <input className='form__input' type="text" id="id" autoComplete='off' placeholder='Create a new reminder' autoFocus />
            <div className="form__btns">
                <input className='form__btn-create' type="submit" value="Create" />

            </div>

            <button className='form__btn-delete' onClick={handleDelete}>Delete all reminders</button>


        </form>
    )
}

export default Form
