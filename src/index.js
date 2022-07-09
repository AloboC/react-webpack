import { createRoot } from 'react-dom/client';
import App from './App';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

createRoot(document.querySelector('#root')).render(<App />);
