//import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getClients } from '../data/clients'
import Client from '../components/client';

/* export function loader() { 
    const clients = getClients()
    return clients
} */
function useClientData() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const data = await getClients();
      setClients(data);
    }
    loadClients();
  }, []);

  return clients;
}

function Index() {
  const clients = useClientData();
  return (
      <>
        <h1 className="font-black text-4xl text-blue-900">Clients</h1>
        <p className="mt-3">Admin your costumers</p>

        {clients.length ? (
          <table className='w-full bg-white shadow mt-5 table-auto'>
              <thead className='bg-blue-800 text-white'>
                  <tr>
                      <th className='p-2'>Client</th>
                      <th className='p-2'>Contact</th>
                      <th className='p-2'>Actions</th>
                  </tr>
              </thead>

                  <tbody>
                      {clients.map( CLIENT => (
                          <Client
                              client={CLIENT}
                              key={CLIENT.id}
                          />
                      ))}
                  </tbody>
          </table>
        ) : (
          <p className="text-center mt-10">No Hay Clientes aún</p>
        )}
      </>
  )
}

export default Index