import {
    getReviewsData,
  } from '../adapter/supabaseAdapter.js';
  
  // TODO make sure this function will get called when visiting the /appointments route
  export async function getReviewsData(req, res) {
    try {
     // TODO here you can make a call to the getAppointmentsData function
     // TODO create a json response to
    } catch (err) {
      next(err);
    }
  }