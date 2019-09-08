// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
//import { Row, Col, Card } from 'react-materialize';
import { Formik, Form, Field, ErrorMessage } from 'formik';




export const NewElement = (props) => (
  
<div>
    <h5> Cadastre seu elemento : </h5>
    <Formik
      initialValues={{  
        student:"",
        element: "",
        symbol: "",
        number: "",
        word: "",
        artdesc:"",
        elementdesc:"", }}
     
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {/* {({ isSubmitting }) => (
        // <Form>
        //   <Field type="email" name="email" />
        //   <ErrorMessage name="email" component="div" />
        //   <Field type="password" name="password" />
        //   <ErrorMessage name="password" component="div" />
        //   <button type="submit" disabled={isSubmitting}>
        //     Cadastrar
        //   </button>
        // </Form>
      )} */}
    </Formik>
  </div>
);