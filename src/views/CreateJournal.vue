<template>
    <div class="container">
        <div class="time">
            <span>{{presentDay}}</span>
            <span>{{presentTime}}</span>
        </div>
        <div class="input">
            <input type="text" placeholder="Enter title..." v-model="title" class="title">
            <textarea cols="50" rows="28" placeholder="Enter text..." v-model="body" class="body"></textarea>
        </div>
        <button @click="saveJounrnal" class="btn">Create</button>
    </div>
</template>


<script setup>
import {ref, onMounted} from 'vue';
import { uid } from 'uid';
import { useRouter } from 'vue-router';
const router = useRouter();

const listOfJounrnals = ref([]);

const saveToLS = () => {
    localStorage.setItem('jounrnalList', JSON.stringify(listOfJounrnals.value));
}; 

const retrieveFromLS = () => {
  const listFromLS = JSON.parse(localStorage.getItem('jounrnalList'));
  if(listFromLS) {
    listOfJounrnals.value = listFromLS;
  }
};


let date = new Date();

const presentDay = ref('');
const presentTime = ref('');
const title = ref('');
const body = ref('');

let day;
let thisDate = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();

switch(date.getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}


onMounted(() => {
    presentDay.value = `${day}, ${thisDate} ${month} ${year}`;
    presentTime.value = `${hour} : ${minute}`;

    retrieveFromLS();
});

const saveJounrnal = () => {

    if(title.value == '' && body.value == '') {
        console.log('Your title and body cannot be empty');
        return;
    } else {
        let bodyValue = body.value.split('\n').join("\\n");
        let thisJounral = {
            id: uid(),
            title: title.value,
            body: bodyValue,
            time: presentTime.value,
            day: presentDay.value
        };
        listOfJounrnals.value.unshift(thisJounral);
        
        router.push({path: '/'});
    }
    saveToLS();
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