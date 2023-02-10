import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '../Box';
import ContactForm from '../ContactForm';
import { MainHeader, SubHeader } from '../Typography';
import ContactList from '../ContactList';
import Filter from '../Filter';

export default function App() {
    return (
      <Box p={3}>
        <MainHeader mb={3}>Phonebook</MainHeader>
        <ContactForm />

        <SubHeader mt={3} mb={2}>
          Contacts
        </SubHeader>
        <Filter />
        <ContactList />

        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover={false}
          theme="light"
        />
      </Box>
    );
  }

