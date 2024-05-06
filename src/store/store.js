import { combineReducers, configureStore } from '@reduxjs/toolkit';

import projectReducer from '../slices/projectSlice';
import labelReducer from '../slices/labelSlice';

// export default configureStore({
//   reducer: {
//     project: projectReducer,
//   },
// });

const rootReducer = combineReducers({
  project: projectReducer,
  labe: labelReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
