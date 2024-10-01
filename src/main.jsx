import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp.jsx'
import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook.jsx'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'
import { FocusScreen } from './04-useRef/FocusScreen.jsx'
import { Memorize } from './06-memos/Memorize.jsx'
import { MemorizeHook } from './06-memos/MemorizeHook.jsx'
import { CallbackHook } from './07-callbackHook/CallbackHook.jsx'
import { Padre } from './07-tarea-memo/Padre.jsx'
import './08-useReducer/intro-reducer.js'
import { TodoApp } from './08-useReducer/TodoApp.jsx'
import { MainApp } from './09-useContext/MainApp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <MainApp />
        </StrictMode>
    </BrowserRouter>
)
