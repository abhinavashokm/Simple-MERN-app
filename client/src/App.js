import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [userList, setUserList] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((result) => {
      setUserList(result.data)
    })
  }, [])

  const createUser = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/createUser", { name, age, userName }).then((Response) => {
      setUserList([...userList, { name, age, userName }])
      setName('')
      setAge('')
      setUserName('')
      alert("User Created")
    })
  }

  return (
    <div className="App">
      <div className="create-user">
        
        <form onSubmit={createUser} >
          <input type="text" value={name} placeholder='Enter name...' onChange={(e) => setName(e.target.value)} />
          <input type="text" value={age} placeholder='Enter age...' onChange={(e) => setAge(e.target.value)} />
          <input type="text" value={userName} placeholder='Enter user name...' onChange={(e) => setUserName(e.target.value)} />
          <button type='submit' onClick={createUser}>Submit</button>
        </form>

      </div>

      <div className="userDisplaly">
        {
          [...userList].reverse().map((user, index) => {
            return (

              <div key={index} className="card">
                <div class="container">
                  <img className='personImg' src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="" />
                  <h4><b>Name : {user.name}</b></h4>
                  <p>Age : {user.age}</p>
                  <p>User Name : {user.userName}</p>
                </div>
              </div>

            )
          })
        }
      </div>

    </div>
  );
}

export default App;
