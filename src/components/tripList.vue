<template>
    <div>
  
    
     <div class='text-h4 text-primary q-mb-lg'> Trips </div>
        <div class='row q-col-gutter-xl '>
            <div class='col-md-4 space-around' v-for='(event, index) in Events' :key='event.id'>
                <event-card :data='event' :index="index"></event-card>
            </div>
        </div>
        
    
    </div>

</template>

<script>
import EventCard from './eventCard.vue';
export default {
  name: 'TripList',
  components :  {
      'event-card':EventCard
  },

  computed:{
    Events(){
        return this.$store.getters['events/events']
    }
  }
}
</script>
