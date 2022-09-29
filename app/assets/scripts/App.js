import '../styles/styles.css';
import Main from './modules/Main';

new Main();

if (module.hot) {
    module.hot.accept()
}
