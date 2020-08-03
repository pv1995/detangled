import Vue from 'vue';
import axios from 'axios';

const taskHTTP = axios.create({
    baseURL: 'http://detangled.in/develop/fc40f674-ccea-4045-acba-bc86aeb8f81b/events',
    timeout: 5000,
});
Vue.prototype.$axios = taskHTTP;

export {taskHTTP};