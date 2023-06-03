<template>
    <div class="container">
        <p>All the noise in my brain. I clamp it to the page so it will be still - Barbara Kingsolver</p>
        <Icon icon="ic:baseline-add" color="#000" width="74" height="80" @click="showTaskInput"/>
        
    </div>
</template>


<script setup>
import { defineEmits } from 'vue';
import { Icon } from '@iconify/vue';

const emit = defineEmits([
    'showJournalInput'
]);

const showTaskInput = () => {
    emit('showJournalInput');
};
</script>


<style scoped>
.container {
    background-color: purple;
    display: flex;
    text-align: center;
}

.container p {
    padding: 12px 28px 5px 12px;
    background-color: #fff;
    color: #000;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.container button {
    width: 70px;
    border: none;
    outline: none;
}
</style>