import React, { useState } from "react";
// import "./EditProfile.scss"; 
import { useUser } from "../../context/UserContext";
import { updateUser } from "../../api";


const EditProfile = () => {
  const { user } = useUser();
  const [profile, setProfile] = useState({
    firstName: user?.name.firstname,
    lastName:  user?.name.lastname,
    email: user.email,
    address: user.address.city,
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSaveChanges =  async () => {
    if (profile.newPassword !== profile.confirmNewPassword) {
      alert("New passwords do not match!");
      return;
      }

      try {
          
          const response = await updateUser(user?.id, profile);
          alert("Profile updated successfully!");

      } catch (error) {
          alert("unexpected error while updating profile!",error);

      }
  };

  const handleCancel = () => {
    // Reset or navigate away
    alert("Changes canceled!");
  };

  return (
    <div className="edit-profile">
      <h2 className="header">Edit Your Profile</h2>

      <div className="profile-fields">
        <div className="field">
          <label className="label">First Name</label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="field">
          <label className="label">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="field">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="field">
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

      <div className="password-section">
        <h3 className="sub-header">Password Changes</h3>

        <div className="field">
          <label className="label">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={profile.currentPassword}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="field">
          <label className="label">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={profile.newPassword}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="field">
          <label className="label">Confirm New Password</label>
          <input
            type="password"
            name="confirmNewPassword"
            value={profile.confirmNewPassword}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

      <div className="actions">
        <button onClick={handleCancel} className="cancel-btn">
          Cancel
        </button>
        <button onClick={handleSaveChanges} className="save-btn">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
