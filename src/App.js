import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import LoremContent from './components/LoremContent';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Lorem Ipsum Redux</h1>
                <LoremContent />
            </div>
        </Provider>
    );
};

export default App;
