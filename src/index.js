import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { createRoot } from "react-dom/client"
// import "./index.css"
import App from "./App/App.js"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

// import reportWebVitals from "./reportWebVitals"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
