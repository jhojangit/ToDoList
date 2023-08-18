import { useEffect, useState } from 'react'
import './App.css'
import Form from './assets/components/form/Form'
import List from './assets/components/list/List'

function App() {


  const [newUser, setnewUser] = useState(false);

  const handleNewUser = () => {
    setnewUser(true)
  }


  const restarNewUser = () => {
    setnewUser(false)
  }


  const deleteUser = () => {
    setnewUser(true)

  }



  return (

    


    <div className="main">

      <h1 style={{color: "white", fontSize:"2rem"}}>My ToDo list</h1>
      <Form handleNewUser={handleNewUser} />

      <List
        restarNewUser={restarNewUser}
        newUser={newUser}
        deleteUser={deleteUser}
      />

    </div>





  )
}

export default App
