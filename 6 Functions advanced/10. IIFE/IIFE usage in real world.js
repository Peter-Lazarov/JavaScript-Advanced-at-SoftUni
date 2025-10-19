//Real world usage of IIFE

//1. Creating Private Scope in Global Scripts
// Before ES6 modules, developers used IIFEs to avoid polluting the global namespace:
// Keeps secret and reveal() private — they don’t leak into the global scope.

(function() {
  const secret = "hidden";
  function reveal() {
    console.log(secret);
  }
  reveal();
})();

// 2. Initializing Configurations or State
// Used to run setup code immediately:
// Runs once, stores config, and avoids exposing internal logic.
const config = (function() {
  const env = "production";
  return {
    isProd: env === "production"
  };
})();

// 3. One-Time Setup in React or Node.js
// In modern apps, IIFEs are used for one-time tasks like:
// Runs once, returns a reusable object, keeps setup logic hidden.
const db = (() => {
  const connection = connectToDatabase();
  return connection;
})();

//expected value of const db is database connection object
// {
//   host: "localhost",
//   port: 5432,
//   user: "admin",
//   query: function(sql) { ... }
// }

