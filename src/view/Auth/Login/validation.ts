import * as Yup from 'yup';

export const validationFields = () => {
    return Yup.object({
        email: Yup.string()
            .email('Не коректно вказана пошта')
            .required("Вкажіть пошту"),

        password: Yup.string()
            .required('Вкажіть пароль.') 
            .min(5, 'Пароль має містить мінімум 5 символів.')
            .matches(/[a-zA-Z]/, 'Пароль має містить латинські символи.'),
    });
};