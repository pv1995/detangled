
export function events (state) {
    return state.events.slice().sort((a,b)=>new Date(a.start)-new Date(b.start))  
}

export function sortedEvents (_,getters) {
    return getters.events.sort((a,b)=>{
          if(_datesAreOnSameDay(new Date(a.start), new Date(b.start))){
              if(b.duration > a.duration) {
                  return -1
              } else if(b.duration < a.duration) {
                  return 1
              }else{
                  return 0
              }
          } else {
              return 1
          }
      })
    
  }
  const _datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

export function selectedEvent (state) {
    return state.selectedEvent
}

export function selectedMonthAndYear(state){
    return state.currentselectedMonthAndYear
}