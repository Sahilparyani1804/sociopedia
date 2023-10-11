import React from 'react'
import Logosearch from '../LogoSearch/Logosearch'
import FollowersCard from "../FollowersCard/FollowersCard";
import InfoCard from '../InfoCard/InfoCard';
import "../profileSide/ProfileSide.css";
const ProfileLeft = () => {
  return (
    <div className='ProfileSide' >
      <Logosearch/>
      <InfoCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileLeft