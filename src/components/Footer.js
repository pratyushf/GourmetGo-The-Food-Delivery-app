import React, { useContext } from "react";
import UserContext from "../utils/UserContext";


const Footer = () => {

  const {user} = useContext(UserContext);

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2023 gourmetGo.    [{user.name}-{user.email}]     All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

