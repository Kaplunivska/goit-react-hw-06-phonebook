import FormInput from 'components/FormInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { StyledFormButton, StyledForm } from './ContactForm.styled';
import { ContactFormPropTypes } from './ContactForm.type';

const initialValues = { name: '', number: '' };
const inputs = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Name',
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  {
    name: 'number',
    type: 'tel',
    label: 'Phone number',
    placeholder: 'Phone number',
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
];
const contactSchema = object({
  name: string()
    .min(3, ({ min }) => `Name must be at least ${min} characters`)
    .max(30, ({ max }) => `Name must be at most ${max} characters`)
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name is a required'),
  number: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone is a required'),
});

export default function ContactForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting, touchedFields },
  } = useForm({
    // Для того щоб, перевірка поля відбувалася при зміні значення поля.
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(contactSchema),
  });

  const submitHandler = (data, evt) => {
    onSubmit(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)} autoComplete="off">
      {inputs.map(({ label, ...otherProps }) => {
        const { name } = otherProps;
        return (
          <FormInput
            key={name}
            {...otherProps}
            {...register(name)}
            touched={touchedFields[name]}
            error={errors[name]}
          >
            {label}
          </FormInput>
        );
      })}

      <StyledFormButton
        type="submit"
        disabled={!(isValid && isDirty) || isSubmitting}
      >
        Add contact
      </StyledFormButton>
    </StyledForm>
  );
}

ContactForm.propTypes = ContactFormPropTypes;