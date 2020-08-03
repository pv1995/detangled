export function setEvents (state, events) {
    state.events  = events.data;
}

export function setSelectedEvent(state, event) {
    state.selectedEvent = {...event};
}