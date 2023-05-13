import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>User: {users.length}</h1>
            {
                users.map(user => <p key={user._id}>{user.email} <button>X</button> </p>)
            }
        </div>
    );
};

export default Users;