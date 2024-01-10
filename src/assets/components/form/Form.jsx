import React, {useEffect, useState} from 'react'
import "./form.css"



const Form = ({ handleNewReminder }) => {


    const [confirm, setConfirm] = useState(false)
    const [localData, setLocalData] = useState(false)


    useEffect(() => {
        localStorage.getItem(0) ?setLocalData(true) :setLocalData(false)
    }, [confirm])


    const handleSubmit = e => {
        e.preventDefault()

        if (e.target.id.value.length > 0) {
            let count = localStorage.length

            if (count == 0) {
                localStorage.setItem(0, e.target.id.value)
                setLocalData(true)
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

    

    const handleDeleteOpen = () => {
        setConfirm(true)
    }

    const handleDeleteClose = () => {
        setConfirm(false)
    }

    const handleDelete = () => {
        localStorage.clear()
        handleNewReminder(true)
        setConfirm(false)

    }




    return (
        <form className='form' onSubmit={handleSubmit} action="">
            <input className='form__input' type="text" id="id" autoComplete='off' placeholder='Create a new reminder' autoFocus />
            <div className="form__btns">
                <input className='form__btn-create' type="submit" value="Create" required={true} />
            </div>

            {
                localData && <button className='form__btn-delete' onClick={handleDeleteOpen}>Delete all reminders</button>
            }


            {
                confirm && 

                <section className='deleteAll__form'>
                    <strong className='deleteAll__form-text'>Are you sure you want to delete?</strong>
                    <button className='deleteAll__form-btn' onClick={handleDelete}>Yes</button>
                    <button className='deleteAll__form-btn' onClick={handleDeleteClose}>No</button>
                </section>

            }

        </form>
    )
}

export default Form
