import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  leave_balance: yup.number().integer(),
  attendance: yup.number().integer(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
