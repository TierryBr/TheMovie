import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const host = '192.168.31.154';

if (__DEV__) {
  const tron = Reactotron.configure({ host })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
