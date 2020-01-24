import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validate = ({ name, password, email }) => {
    const errors = {};
    //validate name
    if (!name) {
        errors.name = "you need a name"
    }
    //validate email
    if (!email) {
        errors.email = "you need to enter an email"
    }
    //validate password
    if (!password) {
        errors.password = "you need to enter a password!"
    } else if (password.length < 8) {
        errors.password = "password must be longer than 8 characters"
    }

    return errors;
}

const handleSubmit = (values, tools) => {
    tools.resetForm();
    alert(`${values.name}'s password is: ${values.password}`);
}

function UserForm() {
    const [ users, setUsers ] = useState([]);

    return (
        <div className="container">
            <div>{users}</div>
            <Formik 
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={handleSubmit}
                validate={validate}
                render={props => {
                    return(
                        <Form>
                            <Field name="name" type="text" placeholder="Name" />
                            <ErrorMessage name="name" component="div" className="red" />

                            <Field name="email" type="text" placeholder="Email"/>
                            <ErrorMessage name="email" component="div" className="red" />

                            <Field name="password" type="password" placeholder="Password"/>
                            <ErrorMessage name="password" component="div" className="red" />

                            <input type="submit" />
                        </Form>
                    )
                }}
            />
        </div>
    )
}

export default UserForm;