import { taskHTTP } from 'boot/axios';

export function getEvents ({commit}) {
    return new Promise((resolve, _reject) =>{
        return taskHTTP({
            method:'GET',
        })
        .then(response=>{
            console.log(response)
            commit('setEvents',response)
            resolve(true)
        }, _err=>{
            resolve(false)
        })
    });  
}


export function selectEvent({commit},payload){
    commit ('setSelectedEvent', payload)
}

export function selectCurrentselectedMonthAndYear({commit}, payload){
    commit('setCurrentselectedMonthAndYear', payload)
}

export function editEvent({dispatch}, payload) {
    return new Promise((resolve, _reject) =>{
        return taskHTTP({
            method:'PUT',
            url:`/${payload.id}`,
            data: {
                destination:payload.destination,
                comment: payload.comment,
                duration:payload.duration,
                start: payload.start
            }
        })
        .then(response=>{
            console.log(response)
            dispatch('getEvents')
            resolve(true)
        }, _err=>{
            resolve(false)
        })
    }); 
}

export function deleteEvent({dispatch}, payload) {
    return new Promise((resolve, _reject) =>{
        return taskHTTP({
            method:'DELETE',
            url:`/${payload.id}`,
        })
        .then(response=>{
            console.log(response)
            dispatch('getEvents')
            resolve(true)
        }, _err=>{
            resolve(false)
        })
    }); 
}