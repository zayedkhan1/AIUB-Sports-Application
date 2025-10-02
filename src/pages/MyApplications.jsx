
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import ApplicationList from './ApplicationList';
import { myapplicationsPromise } from '../utlities/applicatoinApi';


const MyApplications = () => {
  const { user } = useContext(AuthContext);
  console.log(user)

  return (
    <div>

      <ApplicationList myapplicationsPromise={myapplicationsPromise(user.email)} ></ApplicationList>
    </div>
  );
};

export default MyApplications;
