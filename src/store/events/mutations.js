export function setEvents (state, events) {
    state.events  = events.data
}

export function setSelectedEvent(state, event) {
    state.selectedEvent = {...event};
}

export function setCurrentselectedMonthAndYear(state,payload) {
    state.currentselectedMonthAndYear = payload
}