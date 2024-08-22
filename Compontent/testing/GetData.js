import useAxios from "./CustomHook";

function GetData() {
  const { data, loading, error } = useAxios('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
        <h2>User Data</h2>
      {data.map(item => (
        <div key={item.id}>
            
         <p>  {item.name}</p> 
         <p>  {item.email}</p> 
            </div>
   
      ))}
    </div>
  );
}

export default GetData;