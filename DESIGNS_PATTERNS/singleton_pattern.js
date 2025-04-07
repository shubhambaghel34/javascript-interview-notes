class DBConnection {
    constructor() {
      if (DBConnection.instance) return DBConnection.instance;
      console.log("🔌 Connected to DB");
      DBConnection.instance = this;
    }
  
    query(sql) {
      console.log("Running query:", sql);
    }
  }
  
  const db1 = new DBConnection();
  const db2 = new DBConnection();
  
  console.log(db1 === db2); // true
  