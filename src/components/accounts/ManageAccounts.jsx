import React from "react";
import { IconButton } from "@mui/material";
import { AccountCircle, ShoppingBag, Cancel, RateReview, ExitToApp } from "@mui/icons-material";
import './AccountDropdown.scss';
import { useNavigate } from "react-router-dom";

const AccountDropdown = ({ toggle }) => {
  const navigate = useNavigate();
  
  const handleManageaccount = () => { 
    toggle()
    navigate("/myaccount")

  }
  return (
    <div className="account-dropdown-container">
      <div className="account-dropdown">
        <div onClick={handleManageaccount} className="dropdown-header">
          <AccountCircle style={{color:"white"}} />
          <div className="manage-account">Manage My Account</div>
        </div>
        <div  onClick={toggle} className="dropdown-item">
          <IconButton className="icon">
            <ShoppingBag style={{color:"white"}} />
          </IconButton>
          <div className="item-label">My Order</div>
        </div>
        <div  onClick={toggle} className="dropdown-item">
          <IconButton className="icon">
            <Cancel style={{color:"white"}} />
          </IconButton>
          <div className="item-label">My Cancellations</div>
        </div>
        <div  onClick={toggle} className="dropdown-item">
          <IconButton className="icon">
            <RateReview style={{color:"white"}}/>
          </IconButton>
          <div className="item-label">My Reviews</div>
        </div>
        <div  onClick={toggle} className="dropdown-item">
          <IconButton className="icon">
            <ExitToApp style={{color:"white"}} />
          </IconButton>
          <div className="item-label">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default AccountDropdown;
