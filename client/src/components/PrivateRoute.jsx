/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";


export default function PrivateRoute({ children }) {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? <Outlet /> : <Navigate to={'/sign-in'}/>;
}
