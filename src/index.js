import './index.css'
import ReactDOM2 from 'react-dom'
import ReactDOM from "react-dom/client";
import React from 'react'

import App from './App'

const el = document.getElementById('root')

const tag = <strong>Olá React!! - cabecalho</strong>

const root = ReactDOM.createRoot(document.getElementById("root2"));

ReactDOM2.render(
                <div>
                    { tag }
                </div>,
                el
                )

root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
);
