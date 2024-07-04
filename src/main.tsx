import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import SidebarProvider from './context/SidebarContext.tsx';
import { Provider } from 'react-redux';
import store from './store/Store.tsx';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </Provider>
  </React.StrictMode>
);
