<template>
    <div class="container">
        <li @click="getJournalId(journal.title)">
            <div class="date">
                <div class="day">{{ formatDay(journal.day) }}</div>
                <div class="time">{{ journal.time }}</div>
            </div>
            <div class="body">
                <p class="title">{{formatTitle(journal.title)}}</p>
                <div class="bodyBody">{{ formatBody(journal.body)}}</div>
            </div>
        </li>
        <Icon icon="mdi:delete-outline" color="#000" width="24" height="80"
            @click="deleteThisJournal(journal.id)" />
    </div>
    
</template>


<script setup>
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
const router = useRouter();

const emit = defineEmits([
    'deleteThisJounrnal'
]);

const props = defineProps([
    'journal',
    'index'
]);

const formatDay = () => {
    let text = props.journal.day.slice(-8);
    return text;
};

const formatTitle = () => {
    let text = props.journal.title
    // let text1 = props.journal.title.charAt(0).toUpperCase() + props.journal.title.slice(1);
    //come back to this
    return text;
};

const formatBody = () => {
    let text = props.journal.body.split('\\n').join('\n');

    return text;
};

const getJournalId = (index) => {
    router.push({path: `${index}`});
};

const deleteThisJournal = (index) => {
    emit('deleteThisJounrnal', index);
};

</script>


<style scoped>
.container {
    list-style-type: none;
    width: 100%;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    height: 90px !important;
}

.container li {
    display: flex;
    width: 100%;
    padding: 10px;
}

.date {
    width: 20%;
    margin-right: 10px;
}

.date div {
    font-weight: 700;
    font-size: 15px;
}

.date div,
.body div {
    height: 60%;
}

.date .day {
    margin-bottom: 14px;
}

.title {
    margin-bottom: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.body {
    width: 70%;
}

.bodyBody {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis !important;
}

.container button {
    border: none;
    outline: none;
    z-index: 10;
}


@media screen and (max-width: 480px) {
  .date div {
   font-size: 12px;
  }

  .date .day {
    margin-bottom: 12px;
    margin-top: 2px;
  }

  .date .time {
    text-align: right;
}
}
</style>