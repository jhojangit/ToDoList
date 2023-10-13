import { useEffect, useState } from 'react'
import './App.css'
import Form from './assets/components/form/Form'
import List from './assets/components/list/List'

function App() {


  const [newUser, setnewUser] = useState(false);

  const handleNewReminder = () => {
    setnewUser(true)
  }


  const restarNewReminder = () => {
    setnewUser(false)
  }


  const deleteReminder = () => {
    setnewUser(true)

  }



  return (

    


    <div className="main">

      <h1 style={{color: "white", fontSize:"2rem"}}>My Reminders</h1>
      <Form handleNewReminder={handleNewReminder} />

      <List
        restarNewReminder={restarNewReminder}
        newUser={newUser}
        deleteReminder={deleteReminder}
      />

    </div>





  )
}

export default App
