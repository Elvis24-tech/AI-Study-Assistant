import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({
  children,
  activePage,
  setActivePage,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="lg:ml-72">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;