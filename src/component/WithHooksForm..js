import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
//import { object, string, number, date, InferType } from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstname: yup.string().required('Enter firstname'),
  lastname: yup.string().required('Enter lastname'),
  email: yup.string().email('Invalid Email').required('Email is required'),
  gender: yup.string().required('Select Gender'),
  city: yup.string().required('City is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

const WithHooksForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, 
    } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      city: "",
      password: "",
      confirmpassword: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log('Form submitted with data:', data);
  };
  

  return (
    <div className="Registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" {...register('firstname')} />
          {errors.firstname && <span className="error">{errors.firstname.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" {...register('lastname')} />
          {errors.lastname && <span className="error">{errors.lastname.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" {...register('email')} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input type="radio" name="gender" id="gender" value="male" {...register('gender')} />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="gender" value="female" {...register('gender')} />
          <label htmlFor="female">Female</label>
          {errors.gender && <span className="error">{errors.gender.message}</span>}
        </div>

        <div className="form-group">
        <label htmlFor="city">City:</label>
        <select id="city" name="city" {...register('city')}>
            <option value="">Select city</option>
            <option value="Ratnagiri">Ratnagiri</option>
            <option value="Pune">Pune</option>
            <option value="Bhusawal">Bhusawal</option>
            <option value="chiplun">chiplun</option>
            <option value="Other">Other</option>
          </select>
          {errors.city && <span className="error">{errors.city.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" {...register('password')} />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input type="password" id="confirmpassword" name="confirmpassword" {...register('confirmpassword')} />
          {errors.confirmpassword && <span className="error">{errors.confirmpassword.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WithHooksForm;
