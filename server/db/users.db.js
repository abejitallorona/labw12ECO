const supabaseCli = require("./server/services/supabase.service");

// Create Products Table
async function createProductsTable() {
  const { error } = await supabaseCli
    .from('products')
    .insert([
      { name: 'Laptop', price: 999.99, category: 'Electronics' },
      { name: 'Phone', price: 699.99, category: 'Electronics' },
      { name: 'Headphones', price: 49.99, category: 'Accessories' },
      { name: 'Mouse', price: 29.99, category: 'Accessories' },
      { name: 'Keyboard', price: 89.99, category: 'Accessories' }
    ]);

  if (error) {
    console.error('Error creating products:', error);
  } else {
    console.log('Products created successfully');
  }
}

// Create Users Table
async function createUsersTable() {
  const now = new Date().toISOString();
  
  const { error } = await supabaseCli
    .from('users')
    .insert([
      { username: 'john_doe', email: 'john@example.com', created_at: now },
      { username: 'jane_smith', email: 'jane@example.com', created_at: now },
      { username: 'bob_jones', email: 'bob@example.com', created_at: now }
    ]);

  if (error) {
    console.error('Error creating users:', error);
  } else {
    console.log('Users created successfully');
  }
}

// Create Orders Table
async function createOrdersTable() {
  const now = new Date().toISOString();
  const yesterday = new Date(Date.now() - 86400000).toISOString();
  const twoDaysAgo = new Date(Date.now() - 86400000 * 2).toISOString();
  
  // Get first user id
  const { data: users } = await supabaseCli.from('users').select('id').limit(3);
  
  if (users && users.length > 0) {
    const { error } = await supabaseCli
      .from('orders')
      .insert([
        { user_id: users[0].id, total: 1299.98, created_at: now },
        { user_id: users[1].id, total: 49.99, created_at: yesterday },
        { user_id: users[2].id, total: 119.98, created_at: twoDaysAgo }
      ]);

    if (error) {
      console.error('Error creating orders:', error);
    } else {
      console.log('Orders created successfully');
    }
  }
}

// Initialize everything
async function initDb() {
  try {
    await createProductsTable();
    await createUsersTable();
    await createOrdersTable();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Run initialization
initDb();