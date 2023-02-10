import { createSlice, nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            reducer: (state, action) => {
                const { contacts } = state;
                const findContact = contacts.find(
                  ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
                );
        
                if (findContact) {
                  toast.warn(`${action.payload.name} is already in contacts.`);
                  return state;
                }

                return { ...state, contacts: [...state.contacts, action.payload] };
            },
            prepare: contact => {
                const id = nanoid();
                return {
                  payload: {
                    id,
                    ...contact,
                  },
                };
              },
        },

        removeContact: (state, action) => ({
            ...state,
            contacts: state.contacts.filter(({ id }) => id !== action.payload.id),
          }),
          updateFilter: (state, action) => {
            state.filter = action.payload.value.toLowerCase();
        }, 
    }
});

export const { addContact, removeContact, updateFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const persistedContactsReducer = persistReducer(
  {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
  },
  contactsReducer
);

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;