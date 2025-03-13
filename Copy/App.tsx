import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Container } from './components/container/container';
import { Favourite } from './components/favourite/favourite';
import { Sidebar } from './components/sidebar/sidebar';
import Sidebar_module from './components/sidebar/sidebar.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <Sidebar />
            <Container />
            <Favourite />
        </div>
    );
}

export default App;
