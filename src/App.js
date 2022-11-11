import React from "react";
import './App.css'
import HeaderLeft from "./component/LeftSide/HeaderLeft";
import RightSide from "./component/RightSide/RightSide";




export default function App() {

  return (
    <>

    <div className="side">
      <div className="flex-side">
        <HeaderLeft/>
        <RightSide/>
      </div>
    </div>
    
    </>
  );
}
