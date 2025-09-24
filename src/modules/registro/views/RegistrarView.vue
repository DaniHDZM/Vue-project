<template>
    <div>
        <Form :validation-schema="schema" @submit="onSubmit">
            <h2>Formulario de registro</h2>
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"></Field>
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="correo">Correo:</label>
                <Field type="email" name="email" id="correo" placeholder="Ingrese su email"></Field>
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import { schema } from '../schemas/validationSchemas';

    const onSubmit = (values) => {
        console.log(values)
    }
</script>

<style scoped>
    .form {
        margin-bottom: 10px;
    }
</style>