import React, { useState, useEffect} from 'react'
const userProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchuser = async () => {
        const response = await fetch('/api/users/profile', {
          headers: {
            Authorization: 'Bearer ${localStorage.getItem('token')}',
          },
        });
        }
    }
      
  }
}