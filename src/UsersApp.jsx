import { useState } from "react";
import { UserList } from "./components/userList";


export const UsersApp = () => {

    // const [users, setUsers] = useState([])

    // const fetchUsers = async() => {
    //     try {
    //         const response = await fetch("http://www.webapi-northwind.somee.com/api/Customers")
    //         const data = await response.json();            
    //         setUsers(data);            
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // Estará cambiando el EndPoint "customers" or "employees"
    const [endpoint, setEndPoint] = useState('users')

    const handleFetch = () => {        
        setEndPoint('comments');
        // event.PreventDefault()   
        // fetchUsers()     
    }

    // useEffect(() => {
    //   fetchUsers()         
    // }, [])    
   
    return (
        <>
            {/* <h1>Lista de {endpoint == 'customers' ? 'Clientes' : 'Empleados'}</h1> */}
            <h1>Lista de {endpoint == 'users' ? 'Usuarios' : 'Comentarios'}</h1>
            <UserList endPoint={endpoint}></UserList>
            {/* <ul >
                {users.map(user => (
                    <li key={user.customerId}>{user.contactName} - {user.country} </li>
                ))}               
            </ul> */}

            {/* No poner los paréntesis porque falla handleFetch() */}
            <button onClick={handleFetch}> Cargar otra API</button>
        </>
    
  )
}
