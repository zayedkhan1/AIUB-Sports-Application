
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const myapplicationsPromise = (email) => {
  return fetch(`http://localhost:5000/applications?email=${email}`)
    .then(res => res.json());
};

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [myapplications, setMyapplications] = useState([]);

  useEffect(() => {
    if (user?.email) {
      myapplicationsPromise(user.email).then(data => {
        setMyapplications(data || []); // fallback to empty array
      });
    }
  }, [user?.email]);

  return (
    <div>
      <h2>My Applications: {myapplications.length}</h2>
      <ul>
        {myapplications.map(app => (
          <li key={app._id}>{app.email} {app.name}</li>
        ))}
      </ul>
        {/* <h2>Sports Data from Context: {sportsData.length} </h2> */}
         
    </div>
  );
};

export default MyApplications;
