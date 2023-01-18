import * as yup from 'yup';


let validations = yup.object().shape({
  
    technicalCaseScore: yup.string().matches(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,"only number").required(),
    technicalInterviewScore: yup.string().matches(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,"only number").required(),
  
});

export default validations;
