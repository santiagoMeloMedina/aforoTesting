
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { configureStore } from '../config/store/index.tsx';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={configureStore()}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
