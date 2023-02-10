import { toast } from "react-toastify";

export const LS_CONTACTS = 'contacts_list';

export const setToLocalStorage = (key, data) => {
 localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = key => {
try {
    return JSON.parse(localStorage.getItem(key));
    
} catch (err) {
    toast.error(err.message);
}

};