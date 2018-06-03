import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Root } from "native-base";
import store from './app/store'; //Import the store
import Main from './app/index' //Import the app/index.js file

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root><Main /></Root>
            </Provider>
        );
    }
}
