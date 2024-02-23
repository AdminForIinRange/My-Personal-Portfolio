import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import { Box } from "@chakra-ui/react";



export default function RootLayout() {
  return (
    <div >
      <div style={{ position: 'fixed', top: 0, width: '100%', height:"10%", zIndex: 1000}}>
      <Navbar />
      </div>
   
      

      <Outlet />
    </div>
  );
}
