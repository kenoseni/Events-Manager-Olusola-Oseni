import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import SignUp from './components/SignUp';
import store from "./store";

const app = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
    <SignUp />
</Provider>, app);
  