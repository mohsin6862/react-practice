import React from 'react';

const SingleUser = ({ user }) => {
 
    const { id, name, username, email } = user;
    const addToTeam =(id)=>{

    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Id: {id}</p>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full mt-5" onClick={()=> addToTeam()}>Add to Team</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;