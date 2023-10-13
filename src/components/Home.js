import React, {useState}from 'react'
import Profile from './Profile'

const Home = ({name}) => {
  const [showprofile , setShowprofile] = useState(false)
  const handleprofile = () =>{
    setShowprofile(!showprofile)
  }
  return (
    <>
    {showprofile?<Profile handleCancel={handleprofile}/>:(<div><div>`Welcome {name} to the expense tracker`</div>
    <button onClick={handleprofile}>complete your profile</button></div>)}
    
  
    </>
  )
}

export default Home