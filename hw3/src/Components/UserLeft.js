import React, {useEffect, useState } from 'react'


const generateUsers = () => {
    const usercount = 10;

    const usersArray = [];
    for(let i = 1; i <= usercount; i++){
        const user = {
        id : i,
        user : `User ${i}`,
     }
     usersArray.push(user)
    }
    return usersArray;
    
    
}


export default function UserLeft() {
    
    
const users = generateUsers();
    const [Userslist, setUserslist] = useState(users);

    const [PageTitle, setPageTitle] = useState("React App")
   
    useEffect(() => {
      document.title = PageTitle;
      setPageTitle(`${Userslist.length} users left`)
    }, [PageTitle, Userslist]);
  
    
    const buttonClick = () => {
        const newArray = [...Userslist]
        const randomIndex = Math.floor(Math.random() * Userslist.length)
        newArray.splice(randomIndex, 1)
        
        setUserslist(newArray)
        
        
    }
    

   
        


  return (
   
    <div>
      
      
      <button onClick={buttonClick}>Delete user</button>
      
    
    { Userslist.map((user, ) => {
    return ( <h1 key= {user.id} >{user.user} </h1>)
    })}

    
    </div>

    
   
    
  )
}


