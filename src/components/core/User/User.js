import React, { useContext } from 'react'
import { ApiContext } from '../../../services/Api';
import userImg from '../../../assets/user-icon.png';

const User = () => {

  const { profileApiResponse } = useContext(ApiContext);

  return (
    <div>
        <h1>USER'S PROFILE</h1>
        <img src={userImg} alt="user profile img"/>
        <ul>
          <li>Username: {profileApiResponse.display_name}</li>
          <li>Email: {profileApiResponse.email}</li>
          <li>Your plan details: Musify {profileApiResponse.product}</li>
          <li>Country: {profileApiResponse.country}</li>
          <li>Followers: {profileApiResponse.followers.total}</li>
        </ul>
    </div>
  )
}

export default User;