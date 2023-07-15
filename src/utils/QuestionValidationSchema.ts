import { FormField } from "../types/Form";
import * as Yup from 'yup';

export const QuestionsValidationSchema = (questions: FormField[] | undefined) => {
    if (!questions) return Yup.object()
    
    return Yup.object().shape(
        Object.fromEntries(
            questions?.map((element) => {
                let yupSchema;

                if (element.type === 'ShortText') {
                    element.required
                        ? yupSchema = Yup.string().required('Required').max(150, 'Maximum 150 characters allowed')
                        : yupSchema = Yup.string().max(150, 'Maximum 150 characters allowed')
                }
                else if (element.type === 'LongText') {
                    element.required
                        ? yupSchema = Yup.string().required('Required').max(1000, 'Maximum 1000 characters allowed')
                        : yupSchema = Yup.string().max(1000, 'Maximum 1000 characters allowed')
                }
                else if (element.type === 'MultipleChoice') {
                    element.required
                        ? yupSchema = Yup.string().required('Required')
                        : yupSchema = Yup.string()
                }
                // else if (element.type === 'MultipleChoice') {
                //     element.required
                //         ? yupSchema = Yup.array().min(1, 'Please select at least one option').required('Required')
                //         : yupSchema = Yup.array()
                // }
                else if (element.type === 'email') {
                    element.required
                        ? yupSchema = Yup.string().required('Requied').email('Must be a valid email address')
                        : yupSchema = Yup.string().email('Must be a valid email address')
                }
                else if (element.type === 'link') {
                    element.required
                        ? yupSchema = Yup.string().required('Requied').url('Must be a valid URL')
                        : yupSchema = Yup.string().url('Must be a valid URL')
                }
                else if (element.type === 'Number') {
                    element.required
                        ? yupSchema = Yup.number().required('Requied')
                        : yupSchema = Yup.number().nullable().typeError('Invalid Number')
                }
                else if (element.type === 'Date') {
                    element.required
                        ? yupSchema = Yup.date().required('Date is required').typeError('Invalid date')
                        : yupSchema = Yup.date().nullable().typeError('Invalid date')
                }
                else {
                    yupSchema = Yup.string();
                }
                return [element.id, yupSchema];
            })
        )
    );
}