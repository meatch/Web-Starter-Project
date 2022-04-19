/*---------------------------
| IE 11 Support
---------------------------*/
import 'react-app-polyfill/ie11';

/*---------------------------
| Redux
---------------------------*/
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from 'Redux/store/index.js';
import { PersistGate } from 'redux-persist/integration/react';
const { store, persistor } = configureStore();

/*---------------------------
| React and 3rd Party Libraries
---------------------------*/
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MediaQueryProvider } from 'UI/common/useMediaQuery.js';

/*---------------------------
| Components
---------------------------*/
import UI from 'UI/UI.jsx';
import Preloader from 'UI/common/Preloader/Preloader.jsx';

/*---------------------------
| Compose
---------------------------*/
const App = () => {
    return (
        <ReduxProvider store={store}>
            <PersistGate loading={<Preloader />} persistor={persistor}>
                <MediaQueryProvider>
                    <BrowserRouter>
                        <UI />
                    </BrowserRouter>
                </MediaQueryProvider>
            </PersistGate>
        </ReduxProvider>
    )
}

/*---------------------------
| Render to DOM
---------------------------*/
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);