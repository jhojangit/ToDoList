import React, { useEffect, useState } from 'react'
import Local from '../local/Local';
import "./list.css"

const List = ({newUser, restarNewReminder, deleteReminder}) => {


    useEffect(() => {
        restarNewReminder(false)

    }, [newUser]);



    let allData = Object.entries(localStorage).sort((a,b) => b[0]-a[0])


    allData = allData.filter(a => a[0]>=0)
    

    return (
        <div>


            {
                allData.map(elements => (
                    <Local
                    key={elements}
                    data = {elements}
                    deleteReminder = {deleteReminder}
                    />
                ))
            }
            
            <p className='all__data-length'>You have {allData.length} reminders</p>

        </div>
    )
}

export default List