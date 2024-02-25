import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import "./style.css"

import app from "./app";

const root = createRoot(document.getElementById("root"))
root.render(
    <StrictMode>
        <app />
    </StrictMode>
)
