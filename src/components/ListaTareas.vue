<template>
    <div>
        <h2>Lista de tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="añadirTarea">
        <ul>
            <li v-for="(tarea, index) in tareas" key="index">
                {{ tarea }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const tareas = ref([]);
    const nuevaTarea = ref('');
    const añadirTarea = () => {
        tareas.value.push(nuevaTarea.value);
        nuevaTarea.value = '';
    }
</script>

<style scoped>

</style>