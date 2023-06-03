<template>
  <div class="container">
    <HeaderComponent 
      @showJournalInput="showJournalInput">
    </HeaderComponent>

    <div class="body">
      <ul v-if="listOfJournals.length > 0">
      <EachJournal
        v-for="(journal, index) in listOfJournals"
        :key="index"

        :journal="journal"
        :index="index"

        @deleteThisJounrnal="deleteThisJounrnal"
      >
      </EachJournal>
    </ul>

    <div class="message" v-else>
      <p>Journals can offer you a place to be someone, anyone, who you want to be!</p>
      <p>You do not have journals to manage yet - You should add one!</p>
    </div>
    </div>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted} from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import EachJournal from '@/components/EachJournal.vue';

const router = useRouter();

const listOfJournals = ref([]);

const retrieveFromLS = () => {
  const listFromLS = JSON.parse(localStorage.getItem('jounrnalList'));
  if(listFromLS) {
    listOfJournals.value = listFromLS;
  }
};

onMounted(() => {
  retrieveFromLS();
});

const showJournalInput = () => {
  router.push({path: '/create'});
};

const deleteThisJounrnal = (index) => {
  listOfJournals.value = listOfJournals.value.filter(journal => journal.id !== index);
  localStorage.setItem('jounrnalList', JSON.stringify(listOfJournals.value));
};


</script>


<style scoped>
.body {
  background-color: purple;
  padding: 0 5px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #fff;
  box-shadow: 0 3px 7px 0px rgba(225, 225, 225, 0.5), 0 0px 2px 0px rgba(225, 225, 225, 0.1);
}

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 20px;
  border-radius: 15px;
  background-color: purple;
  padding: 15px 18px;
}

.message {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: purple;
}

.message p {
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
  background-color: purple;
}

</style>