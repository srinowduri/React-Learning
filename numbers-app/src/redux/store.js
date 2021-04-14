import { createStore } from 'redux';

import numberReducer from '../redux/numberReducer';

export default createStore(numberReducer);