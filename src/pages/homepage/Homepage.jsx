import { useLocation } from "react-router";
import Header from "../../components/header/Header";

import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
      
        <Sidebar />
      </div>
    </>
  );
}
