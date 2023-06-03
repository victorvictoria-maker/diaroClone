<template>
    <div class="container">
        <div class="time">
            <span>{{thisJournal.day}}</span> 
            <span>{{thisJournal.time}}</span>
        </div>
        <div class="input">
            <input type="text" placeholder="Enter title..." v-model="jounrnalTitle" class="title">
            <textarea cols="50" rows="28" v-model="jounrnalBody" class="body"></textarea>
        </div> 
        <button @click="updateJournal" class="btn">Save</button>
    </div>
</template>


<script setup>
import { onMounted, ref} from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const jounrnals = ref([]);
const thisJournal = ref({}); 
const jounrnalTitle = ref('');
const jounrnalBody = ref(''); 
let journalId = '';

let param = route.params.id;

const retrieveJournalFromLS = () => {
    const listFromLS = JSON.parse(localStorage.getItem('jounrnalList'));

    let index = listFromLS.findIndex(jou => jou.title == param);
    journalId = index;

    if(listFromLS) {
        jounrnals.value = listFromLS;
        thisJournal.value = listFromLS[journalId];
    }
};

const getThisJournalBody = () => {
    let text = thisJournal.value.body.split('\\n').join('\n');
    jounrnalBody.value = text;
};


onMounted(() => {
    retrieveJournalFromLS();
    jounrnalTitle.value = thisJournal.value.title;

    getThisJournalBody();
});


const updateJournal = () => {
    jounrnals.value[journalId].title = jounrnalTitle.value;
    let newText = jounrnalBody.value.split('\n').join("\\n");
    jounrnals.value[journalId].body = newText; 

    localStorage.setItem('jounrnalList', JSON.stringify(jounrnals.value));

    router.push({path: '/'});
};



</script>


<style scoped>
.time {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #fff;
    box-shadow: 0 3px 7px 0px rgba(225, 225, 225, 0.5), 0 0px 2px 0px rgba(225, 225, 225, 0.1);
}

.time span {
    margin: 0 20px;
    font-size: 20px;
}

.input {
    padding: 0 5px;
    margin-top: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 380px;
    border-radius: 10px;
    box-shadow: 0 3px 7px 0px rgba(225, 225, 225, 0.5), 0 0px 2px 0px rgba(225, 225, 225, 0.1);
}

.input .title {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 15px;
    border: none;
    outline: none;
}

.input .body {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 15px;
    outline: none;
    border: none;
    overflow: hidden;
}

.btn {
    width: 90%;
    margin: 10px;
    height: 30px;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #fff;
    box-shadow: 0 3px 7px 0px rgba(225, 225, 225, 0.5), 0 0px 2px 0px rgba(225, 225, 225, 0.1);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
}
</style>