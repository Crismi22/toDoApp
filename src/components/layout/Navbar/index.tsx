import { FC } from "react";

import Navbar from "react-bootstrap/Navbar";

type Props = {
  onChangePage: (page: string) => void;
};
const NavBar: FC<Props> = ({ onChangePage }) => {
  return (
    <>
      <button onClick={() => onChangePage("SignUp")}>SignUp</button>
      <button onClick={() => onChangePage("Profile")}>Profile</button>
      <button onClick={() => onChangePage("Dashboard")}>Dashboard</button>
    </>
  );

};

export default Navbar;