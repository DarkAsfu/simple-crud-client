import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser)
    // console.log();
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers:{
                'content-type':  'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert("Update info successfuly");
                
            }
        })
    }
    return (
        <div>
            <Link to="/users">Go User</Link>
            <h2>Update Your Info.</h2>
            <h3 className='font-bold'>{loadedUser.name}, {loadedUser.email}</h3>
            <form onSubmit={handleUpdate} className='border p-8 mt-10'>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                    </label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        name='name'
                        defaultValue={loadedUser.name}

                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name='email'
                        defaultValue={loadedUser.email}

                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;