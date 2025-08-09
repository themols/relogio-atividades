import './styles/theme.css'
import './styles/global.css'

import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

export function Core() {
    return <TaskContextProvider>
        <Home />
    </TaskContextProvider>
}
