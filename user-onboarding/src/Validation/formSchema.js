import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    username: Yup
    .string()
    .trim()
    .required('You must have a username!')
    .min(3, 'Username must be at least 3 characters long!'),
    email: Yup
    .string()
    .email('Must be a valid email address!')
    .required('You must have an email!'),
    password: Yup
    .string()
    .required()
    .min(8, 'Password must be at least 8 characters long!'),
    tos: Yup
    .boolean()
    .oneOf([true], 'You must accept the Terms and Conditions!')
});

export default formSchema;