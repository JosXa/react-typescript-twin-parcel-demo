import React from "react";
import { GlobalStyles } from "twin.macro";

const App = () => (
  <div>
    <GlobalStyles />
    <div tw="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div tw="flex color-green flex-col justify-center h-full space-y-5">
        Hello.
      </div>
    </div>
  </div>
);

export default App;
