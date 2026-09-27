// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './components/App';
import './index.css'

const root = createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);