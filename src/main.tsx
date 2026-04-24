import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root");

if (!root) throw new Error("No root element found!");

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
