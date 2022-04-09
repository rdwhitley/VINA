import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { createRoot } from "react-dom/client"
// import { Router, Switch, Route } from 'react-router';
import { Link, Route, Switch,Router,BrowserRouter } from "react-router-dom";
// import "./index.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from "./App/App.js"

// import reportWebVitals from "./reportWebVitals"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(<App />)
