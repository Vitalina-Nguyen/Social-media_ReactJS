import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider }  from 'react-redux';
import './index.css';
import store from './redux/redux-store';
import App from './App';


let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App state = {state} />
      </Provider>
    </React.StrictMode>
  );
}

rerenderEntireTree (store.getState());

store.subscribe ( () => {
  let state = store.getState();
  rerenderEntireTree(state);
});




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
