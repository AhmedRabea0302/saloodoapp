import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import Biker from "./pages/Biker";
import PendingParcels from "./pages/PendingParcels";
import Error from "./pages/Error";

// import components
import { ProtectedRoute } from "./components/ProtectedRoutes";
import Navbar from "./components/Navbar";
import CreateParcel from "./pages/CreateParcel";
import SingleParcel from "./pages/SingleParcel";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-parcel"
            element={
              <ProtectedRoute>
                <CreateParcel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/biker"
            element={
              <ProtectedRoute>
                <Biker />
              </ProtectedRoute>
            }
          />
          <Route
            path="/all-parcels"
            element={
              <ProtectedRoute>
                <PendingParcels />
              </ProtectedRoute>
            }
          />
          <Route
            path="/single-parcel/:id"
            element={
              <ProtectedRoute>
                <SingleParcel />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
