import * as yup from 'yup';


let validations = yup.object().shape({
  
    technicalCaseScore: yup.number().required("only number"),
    technicalIntScore: yup.number().required("only number"),
  
});

export default validations;
