import './styles/theme.css'
import './styles/global.css'

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';
import { History } from './pages/History';

export function Core() {
    return <History />;
}