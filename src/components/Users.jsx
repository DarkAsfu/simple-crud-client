import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    const [allUsers, setAllUsers] = useState(users)
    console.log(allUsers);
    const handleDelete = _id =>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                alert('Deleted successfully');
                const remaining = allUsers.filter(user => user._id !== _id);
                console.log(remaining);
                setAllUsers(remaining);
            }
        })
    }
    return (
        <div>
            <h1 className='py-5'>User: {allUsers.length}</h1>
            {
                allUsers.map(user => <p className='py-3 border mt-2 px-3' key={user._id}>{user.email} <button onClick= {() => handleDelete(user._id)} className='ml-4'>X</button> </p>)
            }
        </div>
    );
};

export default Users;