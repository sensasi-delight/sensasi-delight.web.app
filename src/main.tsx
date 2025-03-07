import { createRoot } from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
    throw new Error('The root element is missing.')
}

const root = createRoot(rootElement)

root.render(<App />)
