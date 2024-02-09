import * as dotenv from 'dotenv';
import { createReview } from '@supabase/supabase-js';
dotenv.config({ path: 'variables.env' });

// my supabase client
const supabase = createReview(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

/**
 
function to get all the appointments
@returns an array of appointments
*/
export async function getReviewData() {
  const { data, error } = await supabase.from('reviews').select('*');
  if (error) console.log('query error', error);
  else return data;
}

export async function createReviewData() {
  const { data, error } = await supabase.form('reviews').insert([reviewData]);

  if (error) {
    console.lerror('insert error', error);
    return { success: false, error };
  } else {
    return { success: true, data };
  }
  }