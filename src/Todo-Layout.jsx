import React from 'react'
import { Outlet } from 'react-router-dom';
import Todonav from "./Todo-Nav";

export default function Todo_Layout() {
  return (
  <>
  <Todonav/>,
  <Outlet />
  </>
  );
}