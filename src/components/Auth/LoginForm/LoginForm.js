import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useRouter }  from "next/router";
import { Auth } from "@/api";
import { initialValues, validationSchema } from "./LoginForm.form";

const authCtrl = new Auth();

export default function LoginForm() {

    const router = useRouter();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                console.log("FORMULARIO ENVIADO");
                const response = await authCtrl.login(formValue);
                console.log(response);
                // router.push("/");
            } catch (error) {
                console.error(error);
            }
        }
    })

    return (
        <Form
            onSubmit={formik.handleSubmit} 
            style={{backgroundColor:"#CCFF00"}} >

            <div style={{color:'black'}}>Login Form</div>
            <Form.Input 
                name="identifier" 
                type="text" 
                placeholder="Email/Nombre de Usuario" 
                value={formik.values.identifier}
                onChange={formik.handleChange}
                error={formik.errors.identifier}
            />
            <Form.Input 
                name="password" 
                type="password" 
                placeholder="Contraseña"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
            />

            <Form.Button type="submit" fluid loading={formik.isSubmitting}>
                Entrar
            </Form.Button>
        </Form>
    )
}
