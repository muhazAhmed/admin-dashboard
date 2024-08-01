import React, { Suspense } from "react";
import "./App.css";
const Loader = React.lazy(() => import("./components/Loader"));
const Sidebar = React.lazy(() => import("./components/Sidebar"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Dashboard = React.lazy(() => import("./components/pages/Dashboard"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="app dark">
        <Sidebar />
        <Navbar>
          <Dashboard />
        </Navbar>
      </div>
    </Suspense>
  );
}

export default App;
