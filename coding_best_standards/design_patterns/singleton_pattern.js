// 📚 JavaScript — Singleton Pattern Example
// ===========================================
// Definition:
// The Singleton Pattern ensures that a class has only ONE instance 
// throughout the entire application, and provides a global access point to it.
//
// It is commonly used for shared resources like configuration, logging, 
// caching, or database connections.

class DBConnection {
  constructor() {
    if (DBConnection.instance) return DBConnection.instance; // Return existing instance
    console.log("Connected to DB");
    DBConnection.instance = this; // Store instance
  }

  query(sql) {
    console.log("Running query:", sql);
  }
}

// Usage Example
const db1 = new DBConnection();
const db2 = new DBConnection();

console.log(db1 === db2); // true
// Output:
// Connected to DB
// true


// ===========================================
// Use Cases of Singleton Pattern
// - Database connections (only one connection object across app).
// - Configuration objects (app-wide shared settings).
// - Caching mechanisms (single source of truth for cache).
// - Logging services (centralized logging instance).
// - Managing global application state in some contexts.

// ===========================================
// Pros:
// 1. Ensures only one instance is created → saves resources.
// 2. Provides a global point of access to shared resources.
// 3. Useful for coordinating access to shared data (e.g., DB, cache).
//
// Cons:
// 1. Can introduce hidden dependencies (tight coupling).
// 2. Makes unit testing harder (due to global state).
// 3. Violates the Single Responsibility Principle (a class both manages its logic and controls its lifecycle).
// 4. Can become a bottleneck in highly concurrent systems if not designed carefully.
// ===========================================
