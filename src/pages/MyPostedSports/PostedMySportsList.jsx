import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import PostedMySports from './PostedMySports';
import { sportsCreatedByPromise } from '../../utlities/myapplicatoinAPI';

const PostedMySportsList = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    return (
        <div>
           

            <PostedMySports sportsCreatedByPromise ={sportsCreatedByPromise(user.email)}> </PostedMySports>
            
        </div>
    );
};

export default PostedMySportsList;


