import {createStore} from 'redux';

import {hotOrColdReducer} from './reducers';

export default createStore(hotOrColdReducer);