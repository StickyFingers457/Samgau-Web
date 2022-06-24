import React from "react";
import {AccountInfo} from '../../components/account-info'
import {AccountGood} from '../../components/account-good'
import './account-page.css'


export const AccountPage = () => {
  return <div className="account-page">
    <AccountInfo/>
    <AccountGood/>
  </div>;
};
