import { persistedContactsReducer } from './contactSlice/contactSlice';
import { contactFilter } from './contactFilter/contactFilter';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: contactFilter,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
