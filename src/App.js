import React from "react";
import Abwaans from "./components/Abwaans";

const App = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Abwaans />
        </div>
      </div>
    </div>
  );
};

export default App;
