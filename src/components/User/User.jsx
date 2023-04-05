import React, { useEffect, useState } from 'react';
import SingleUser from '../SingleUser/SingleUser';

const User = () => {
    const [users , setUsers]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setUsers(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-4 w-full max-w-6xl mx-auto my-12'>
            {
                users.map(user => <SingleUser user={user}></SingleUser>)
            }
        </div>
    );
};

export default User;