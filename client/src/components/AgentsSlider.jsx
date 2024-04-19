import React, { useEffect, useState } from 'react'

export default function AgentsSlider() {
    const [user,setUser] = useState([]);

    useEffect(()=>{
        const fetchListing = async () =>{
            try{
                const res = await fetch('/api/user/get');
                const data = await res.json();
                setUser(data)
                console.log(data);
            }
            catch(error){
                console.log(error);
            }
            fetchListing();
        }
    },[])
  return (
    <div>
      
    </div>
  )
}
