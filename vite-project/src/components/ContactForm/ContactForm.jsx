import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from './ContactForm.module.css'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Занадто коротке!")
    .max(50, "Занадто довге!")
    .required("Обов'язкове поле"),
  number: Yup.string()
    .min(3, "Занадто коротке!")
    .max(50, "Занадто довге!")
    .required("Обов'язкове поле"),
});

export default function ContactForm({ onAdd }) {

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm(); 
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" id="name" />
        <ErrorMessage className={css.errorMessage} name="name" component="span"  />
        <label htmlFor="number">Number</label>
        <Field type="text" name="number" id="number" />
        <ErrorMessage className={css.errorMessage} name="number" component="span"  />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}