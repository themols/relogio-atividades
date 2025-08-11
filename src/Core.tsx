import './styles/theme.css'
import './styles/global.css'

import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';

export function Core() {
    return <TaskContextProvider>
        <MessagesContainer>
            <Home />
        </MessagesContainer>
    </TaskContextProvider>
}
