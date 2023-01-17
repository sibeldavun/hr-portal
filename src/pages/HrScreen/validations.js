import * as yup from 'yup';


let validations = yup.object().shape({
  fullName: yup.string().min(4, "at least 4 character").max(60, "less then 60 character").required().matches(/^[aA-zZüöşıçğİÜÖŞÇĞ\s]+$/, "Only alphabets are allowed for this field "),
  age: yup.number().required("only number"),
  country: yup.string().min(2, "at least 2 character").max(40, "at least 40 character").required().matches(/^[aA-zZüöşıçğİÜÖŞÇĞ\s]+$/, "Only alphabets are allowed for this field "),
  city: yup.string().min(2, "at least 2 character").max(40, "at least 40 character").required().matches(/^[aA-zZüöşıçğİÜÖŞÇĞ\s]+$/, "Only alphabets are allowed for this field "),
  email: yup.string().email().required(),
  phoneNumber: yup.string().min(11, "at least 11 numbers").max(11, "less then 11 numbers").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid').required(),
  url: yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,'Enter correct url!').required('Please enter website'),
  wageExpectation: yup.number().required("only number"),
  gender: yup.string().required()
});

export default validations;



            
           
           