<template>
    <div>
     <div class='text-h4 text-primary q-mb-lg'> Trips </div>
       <q-scroll-area
      :visible="false"
      @scroll="chooseMonth"
      style="height: 80vh; max-width: 100%;"
    >
        <div class='row q-col-gutter-xl '>
            <div class='col-md-4 space-around' v-for='(event) in Events' :key='event.id'>
                <event-card :data='event' ></event-card>
            </div>
 
        </div>
            </q-scroll-area>
    </div>
</template>

<script>
import EventCard from './eventCard.vue';
import { date } from 'quasar';
export default {
  name: 'TripList',
  components : {
      'event-card':EventCard
  },
  methods:{
      chooseMonth(e){

          var currentMonthYear =  this.$store.getters['events/selectedMonthAndYear']
         
          if(Math.floor(e.verticalPercentage/0.0250) > 0 && this.Events.length/3 >= Math.floor(e.verticalPercentage/0.0250)){
       
            var index = Math.floor(e.verticalPercentage/0.0250)  *  3;
            currentMonthYear  = date.formatDate(this.Events[index].start, 'YYYY/MM')
        
          }
          this.$store.dispatch('events/selectCurrentselectedMonthAndYear',currentMonthYear)
      }
  },
  computed:{
    Events(){
        return this.$store.getters['events/sortedEvents']
    }
  }
}
</script>
