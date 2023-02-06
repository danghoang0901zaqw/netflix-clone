import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../components/Nav/Nav";
import { selectUser } from "../../features/userSlice";
import "./Profile.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Profile = () => {
  const user = useSelector(selectUser);
  const handleSignOut=()=>{

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
    });
    
  }
  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <button onClick={handleSignOut}  className="profile__signout">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
