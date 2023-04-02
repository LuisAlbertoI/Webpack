import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <main>
      welcome to react
    </main>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);