import React from "react";
import Navbar from "./(components)/Navbar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <main
        className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
