import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import V1 from "./V1";

export default function App() {
  const navigate = useNavigate();
  useEffect(function(){
    navigate("/v1");
  },[])
  return (
      <div>
        <Routes>
          <Route exact path='/v1' element={<V1/>}/>
        </Routes>
      </div>
  );
}