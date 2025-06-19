import './App.css'
import UserCard from './components/UserCard'

function App() {
  const userData = [{name : "aayush" , age : 22 , hobby : "cricket"},{name : "aman" , age : 15 , hobby : "cycling"}]

  return (
    <>
     <h1>User Data</h1>
     <hr />
    {
      userData.map((user,index) =>(
      <UserCard key={index} data={user} />
    ))
    }
    </>
  )
}

export default App
