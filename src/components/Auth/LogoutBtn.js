import React from "react";

const LogoutBtn = ({ logoutHandler }) => (
  <button
    id="qsLogoutBtn"
    className="btn-margin logoutBtn"
    onClick={logoutHandler}
  >
    Log Out
  </button>
);

export default LogoutBtn;