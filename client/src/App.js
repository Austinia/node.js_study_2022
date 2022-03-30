import "./App.css";
import React, { useState, useEffect } from "react";
import Customer from "./components/Customer";

function App() {
  const [customers, setCustomers] = useState({
    customerlist: [],
  });

  useEffect(() => {
    
    callApi()
      .then((res) => setCustomers({ customerlist: res }))
      .catch((err) => console.log(err));
  }, []);

  const callApi = async () => {
    const response = await fetch("http://localhost:4000/api/customers");
    const body = await response.json();
    return body;
  };

  return (
    <div>
      {customers.customerlist.map((e) => {
        return (
          <Customer
            key={e.id}
            id={e.id}
            name={e.name}
            birthday={e.birthday}
            gender={e.gender}
            job={e.job}
          />
        );
      })}
    </div>
  );
}

export default App;
