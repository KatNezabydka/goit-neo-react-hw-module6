import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { contactPersistedReducer } from './contactsSlice.js';
import { filterReducer } from './filtersSlice.js';

export const store = configureStore({
  reducer: {
    contacts: contactPersistedReducer,
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});
export const persistor = persistStore(store);