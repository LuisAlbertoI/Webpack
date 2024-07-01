import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "styles";

const App = () => (
  <div className="bg-slate-900 rounded-md py-4">
    <p className="text-white text-center">welcome to react</p>
  </div>
);

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
