import { useState, useEffect } from "react";
import axios from "axios";

function FetchData(){

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect (() => { 
      const userData = async () => {
        setIsLoading(true);
        try {
            const response = await axios ('https://jsonplaceholder.typicode.com/users');
            setData(response.data);
        }
        catch (error) {
            setError (error);
        }
        finally {
            setIsLoading(false);
        }
      };
      userData();
    },[]);
    
    return (
        <>
        <div>
            {isLoading ? (<p>Loading..</p>) : error ? (<p>Showing error message</p>) : (
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>City</th>
            </tr>
            {data.map((item) =>( 
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
            </tr>
            ) )}
        </table>
        )}
        </div>
        </>
    );

}

export default FetchData;