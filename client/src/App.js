import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [userList, setUserList] = useState([])
  const [name , setName] = useState("")
  const [age , setAge] = useState()
  const [userName , setUserName] = useState("")

  useEffect(()=>{
    axios.get("http://localhost:3001/getUsers").then((result) => {
      setUserList(result.data)
    })
  },[])

  const createUser = () => {
    axios.post("http://localhost:3001/createUser",{name , age , userName }).then((Response) => {
      setUserList([...userList,{name , age , userName}])
      alert("User Created")
    })
  }

  return (
    <div className="App">
      <div className="createUser">

        <input type="text" placeholder='Enter name...' onChange={(e) => setName(e.target.value) }/>
        <input type="text" placeholder='Enter age...' onChange={(e) => setAge(e.target.value) } />
        <input type="text" placeholder='Enter user name...' onChange={(e) => setUserName(e.target.value) } />
        <button onClick={createUser}>Submit</button>
        
      </div>

      <div className="userDisplaly">
        {
          userList.map((user,index) => {
            return (
              <div key={index}>
                <h1>Name : {user.name}</h1>
                <h2>Age : {user.age}</h2>
                <h2>User Name : {user.userName}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
