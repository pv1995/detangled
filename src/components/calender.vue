<template>
<div>
    <div class='text-h4 text-primary q-mb-lg'> Calender </div>
      <div class='q-pa-sm flex flex-center'>
      <div v-if="selectedEvent.comment === undefined ">
   
    <q-date
        flat
        bordered
         title="Calender"
        subtitle="Start Dates of all the trips are marked"
        v-model='selectedDate'
        :events = "getDates"
        event-color="orange"
        :default-year-month="defaultMonthYear"
        :key="key"
    ></q-date>
    <div class='text-h5 text-primary'>
      Click on a trip to view duration and stay of a particular trip.
    </div>
       </div>
    <div  v-else>

     <q-date
        flat
        bordered
        :title="selectedEvent.destination"
        subtitle="Whole Duration is marked in blue"
        v-model='selectedDate'
        :events = "newDates"
        event-color="primary"
        :key="key"
        :default-year-month="getStartDateForSelectedEvent"
    ></q-date>
    <div class='text-center q-ma-lg'>
       <q-btn color='primary'  @click='deselectEvent'> De-Select Trip</q-btn>
    </div>
   
    </div>
    

    </div>
</div>
</template>

<script>
import { date } from 'quasar';
const { addToDate, formatDate } = date;
export default {
  name: 'calender',

  data(){
      return{
          selectedDate:'',
          title:'',
          key:0
      }
  },
   methods: {
    deselectEvent() {
      this.$store.dispatch('events/selectEvent', {})
    }
  },

  computed:{
      getDates(){
        return this.$store.getters['events/sortedEvents'].map(e=>formatDate(e.start, "YYYY/MM/DD"));
      },

      selectedEvent(){
        return this.$store.getters['events/selectedEvent'];
      },

      defaultMonthYear(){
        this.key++;
        return this.$store.getters['events/selectedMonthAndYear'];
      },

      getSelectedDates() {
        var allNewDates  = [];
        for(var i=0;i<this.$store.getters['events/selectedEvent'].duration;i++){
          allNewDates.push(addToDate(this.$store.getters['events/selectedEvent'].start, { days: i}));
        }
        return allNewDates;
      },

      newDates() {
        return this.getSelectedDates.map(e=>formatDate(e, "YYYY/MM/DD"));
      },

      getStartDateForSelectedEvent(){
        this.key++;
        return formatDate(this.$store.getters['events/selectedEvent'].start, 'YYYY/MM')
      },

      
  }
}
</script>
<style>
.q-date__event {
    position: absolute;
    bottom: 4px;
    left: 50%;
    opacity: 0.5;
    height: 20px;
    width: 20px;
    border-radius: 5px;
    background-color: #26a69a;
    background-color: var(--q-color-secondary);
    transform: translate3d(-50%, 0, 0);
}
.q-date--portrait{
  width: 90%
}
</style>