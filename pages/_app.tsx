import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import store from '../src/store/store';
import { GlobalStyles } from '../styles/global-styles';


function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const modalRootExists = document.getElementById('modal-root');
    if (!modalRootExists) {
      const modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', 'modal-root');
      document.body.appendChild(modalRoot);
    }
  }, []);

  return (
    <Provider store={store}>
      <GlobalStyles />

      <Component {...pageProps} />
    </Provider>
  );
}

export default CustomApp;
