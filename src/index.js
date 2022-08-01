import React from 'react';
import { createRoot } from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';
import Basic from './basic/Basic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import ECommerce from './ecommerce/ECommerce';
import ProfilePage from './profilePage/ProfilePage';
import AttendingUsers from './attendingUsers/AttendingUsers';
import PersonalProfile from './personalProfile/PersonalProfile';
import EditButton from './editButton/EditButton';
import ProfileStatistics from './profileStatistics/ProfileStatistics';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/ecommerce" element={<ECommerce />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/attending-users" element={<AttendingUsers />} />
        <Route path="/personal-profile" element={<PersonalProfile />} />
        <Route path="/edit-button" element={<EditButton />} />
        <Route path="/profile-statistics" element={<ProfileStatistics />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
