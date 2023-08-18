import React, { useState } from 'react'
import "./local.css"

const Local = ({ data, deleteUser }) => {


    const [update, setUpdate] = useState(false);


    const handleSelect = () => {
        localStorage.removeItem(data[0])
        deleteUser(true)

    }

    const handleUpdate = () => {

        setUpdate(true)
    }


    const handleUpdateUser = e => {

        if(e.target.idValue.value.length>0){

            localStorage.setItem(data[0], e.target.idValue.value)
            deleteUser(true)

        }

    }

    return (
        <div className='local__container'>


            {
                update?
                
                    <form  className='local__form' onSubmit={handleUpdateUser} action="">
                        <input className='local__form-input' type="text" id="idValue" autoComplete='off' autoFocus  placeholder={data[1]}/>
                        <input className='local__form-updateFull' type="submit" value="confirm" />
                        
                    </form>
                

                :
                
                <div className="local__btns">
                    <p className='local__data'>{data[1]}</p>
                    <button className='local__form-update' onClick={handleUpdate}><i class='bx bx-edit-alt'></i></button>
                    <button className='local__form-delete' onClick={handleSelect}><i class='bx bx-trash'></i></button>
                </div>
                
            }

        </div>

    )
}

export default Local