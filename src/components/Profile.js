import React,{useState}from 'react'

const Profile = ({handleCancel}) => {
    const [user , setUser] = useState(
        {
            name : "",
            image : "",
        }
    )
    const [submitted, setSubmitted] = useState(false);
    const HandleValue = (e) =>{
        const { name, value } = e.target;
        setUser((prevUserInput) => ({
          ...prevUserInput,
          [name]: value,
        }));
    }
    const PostData = async(e)=>{
        e.preventDefault();
        const {name , image} = user
        const response = await fetch("https://react-contact-form-9ef7f-default-rtdb.firebaseio.com/profile.json",
        {
         method : "POST",
         headers : {
             "Content-Type" : "application/json",
         },
         body:JSON.stringify({
             name ,
             image ,
         })
        }
        )
        setUser( {
         name : "",
         image : "",

     })
     setSubmitted(true);
     console.log(response)
     }
  return (
    <>
    {submitted? (
        <p>Thank you for contacting us! We will get back to you soon.</p>
      ) : (
        <form onSubmit={PostData}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            value={user.name}
            onChange={HandleValue}
            required
          />
        </div>
        <div>
          <label>Image Url</label>
          <input
            type="text"
            name="image"
            placeholder="enter image url"
            value={user.image}
            onChange={HandleValue}
            required
          />
        </div>
        <button type="submit">Submit</button>
        
        </form>
      )}
    <button type="submit" onClick={handleCancel}>cancel</button>
    </>
  )
}

export default Profile