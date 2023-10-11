import React from 'react'
import Logosearch from '../LogoSearch/Logosearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import "./ProfileSide.css";
import FollowersCard from '../FollowersCard/FollowersCard';
const ProfileSide = () => {
  return (
    <div className='ProfileSide' >
        <Logosearch/>
        <ProfileCard/>
        <FollowersCard/>
        </div>
  )
}

export default ProfileSide