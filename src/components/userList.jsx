import { useState, useEffect } from "react";

export const UserList = ({ endPoint }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      // const response = await fetch(`http://www.webapi-northwind.somee.com/api/${endPoint}`);
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
      const data = await response.json();      
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData()         
    }, [endPoint])   

  return (
    <>
      <ul>
        { endPoint == 'users' ? data.map(item => <li key={item.id}>{item.name}</li>)
                                  : data.map(item => <li key={item.id}>{item.body}</li>)       
        }
         {/* { endPoint == 'customers' ? data.map(item => <li key={item.customerId}>{item.contactName}</li>)
                                  : data.map(item => <li key={item.employeeId}>{item.firstName} {item.lastName}</li>)       
        } */}
        {/* { endPoint == 'employees' ? data.map(item => (<li key={item.employeeId}>{item.firstName} {item.lastName}</li>))
           :  data.map(item => (<li key={item.customerId}>{item.contactName}</li>))          
        } */}
      </ul>
    </>
  );
};
