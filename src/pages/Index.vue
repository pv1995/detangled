<template>
  <q-page class='q-pa-lg'>
    <div class ='flex flex-center'  v-if='events === undefined || events.length  === 0'>
    <q-spinner-cube
        size="10em"
        color='primary'
    />
    </div>
      <div class="row" v-else>
      <div class="col">
          <trip-list/>
      </div>
      <div class="col">
        <calender></calender>
      </div>
    </div>
  </q-page>
</template>

<script>
import TripList from '../components/tripList.vue';
import Calender from '../components/calender.vue';
export default {
  name: 'PageIndex',
  components: {
    'trip-list':TripList,
    'calender': Calender
  },
  created() {
    this.$store.dispatch('events/getEvents')
  },
 computed:{
   events(){
     return this.$store.getters['events/events']
   }
 }
  
}
</script>
