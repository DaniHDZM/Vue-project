import * as Yup from 'yup';

export const schema = Yup.object({
    nombre: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string().email('El correo no es válido').required('El correo es obligatorio')
});