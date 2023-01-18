import * as yup from 'yup';


let validations = yup.object().shape({
  password: yup.string().min(4, "at least 4 character").max(60, "less then 60 character").required(),
  email: yup.string().email().required(),
});

export default validations;



            
           
           