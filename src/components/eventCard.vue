<template>
    <q-card class="my-card" flat bordered @click.stop='selectEvent'>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <!-- <div class="text-h6 q-mt-sm q-mb-xs text-primary" v-if='!editInit'>
            {{data.destination}}
          </div> -->
          <!-- <div v-else> -->
          <q-input color="primary" v-model="destination" label="Destination" @click='editTrip(data.id)'>
            <template v-slot:prepend>
              <q-icon name="subway" color='primary'/>
            </template>
          </q-input>
          <!-- </div> -->
          <div class="line-height-80">
          <!-- <div class="text-caption text-grey" v-if='!editInit'>
            Comment:  {{data.comment}}
          </div> -->
          <!-- <div v-else> -->
          <q-input dense color="primary" v-model="comment" label="Comment" @click='editTrip(data.id)'>
            <template v-slot:prepend>
              <q-icon name="speaker_notes" color='primary'/>
            </template>
          </q-input>
          <!-- </div> -->
          <div class="text-caption text-grey">
            Start Date:  {{dateToShow}}
          </div>
          <div class="text-caption text-grey">
            Duration:  {{data.duration}}
          </div>
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
      <!-- <q-btn flat color="secondary" @click.stop='editTrip(data.id)' v-if='!editInit' >
          Edit
        </q-btn> -->
        <q-btn flat color="primary"  v-if='editInit'  @click='save(data.id)'>
          Save
        </q-btn>
        <q-btn flat color="negative" @click.stop='deleteTrip(data.id)'>
          Delete
        </q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>
import { date } from 'quasar';
export default {
  name: 'eventCard',
  props:{
    data:{
      type: Object,
      required: true
    },
    index:{
      type: Number,
      required: true
    }
  },
  data(){
    return{
      editInit: false,
      destination: this.data.destination,
      comment: this.data.comment
    }
  },
  computed: {
    dateToShow() {
      if(this.data && this.data.start) {
        return  date.formatDate(this.data.start, 'YYYY-MM-DD')
      } 
      return null;
    }
  },
  methods:{
    selectEvent(){
      this.$store.dispatch('events/selectEvent', this.data)
    },
    editTrip(id){
      this.editInit = true
    },
    deleteTrip(id){
      this.$store.dispatch('events/deleteEvent',{id:id});
    },
    save(id) {
      console.log('save pressed',id, this.destination,this.comment)
      this.$store.dispatch('events/editEvent',{
       id:id,
       destination:this.destination,
       comment: this.comment,
       start:this.data.start,
       duration: this.data.duration
      }).then(()=>{
        this.editInit = false
      })
    }
  }
}
</script>
<style lang="stylus">
  .line-height-80
    height 80px
  .my-card
    cursor pointer

</style>