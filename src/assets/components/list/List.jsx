import React, { useEffect, useState } from 'react'
import Local from '../local/Local';
import "./list.css"

const List = ({newUser, restarNewUser, deleteUser}) => {

    

    useEffect(() => {
        restarNewUser(false)

    }, [newUser]);




    let allData = Object.entries(localStorage).sort((a,b) => a[0]-b[0])



    allData = allData.filter(a => a[0]>=0)


    return (
        <div>




            {
                allData.map(elements => (
                    <Local
                    key={elements}
                    data = {elements}
                    deleteUser = {deleteUser}
                    />
                ))
            }
            
            <p className='all__data-length'>You have {allData.length} task</p>
        

        </div>
    )
}

export default List