const { createClient } = require("@supabase/supabase-js");

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

// Test the connection when the service is initialized
(async () => {
  try {
    const { data, error } = await supabase.from('users').select('count');
    if (error) {
      console.error('Supabase connection error:', error);
    } else {
      console.log('Supabase connection successful');
    }
  } catch (err) {
    console.error('Error testing Supabase connection:', err);
  }
})();

module.exports = supabase;