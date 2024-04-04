import { useEffect, useState } from "react";
import User from "../components/User"
import { Link } from "react-router-dom";
import { getUsers } from '../services/api';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = async() => {
      try {
        setIsLoading(true); 
        const users = await getUsers();
        setUsers(users);
        setIsLoading(false);
      } catch (error){
        console.log('Error fetching users: ', error);
      }
    };

    useEffect(() => {
      fetchUsers();
    }, [])

    return (
      <div>
        <div className="bg-white shadow-lg mx-auto p-4 rounded mt-2">
          <h2 className="font-semibold text-2xl">User list</h2>
          <div className="text-end">
              <Link to="/create" className="inline-block mt-4 shadow-md bg-blue-600 text-white rounded-md px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
                  New User
              </Link>
          </div>
          <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
            <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
              <th scope="col" className="py-4">Username</th>
              <th scope="col" className="py-4">Email</th>
              <th scope="col" className="text-center py-4">Actions</th>
            </thead>
            <tbody>
              { isLoading ? (
                "Loading users..."
              ) : (
                <>
                  {users.length > 0 ? (
                    <>
                      {
                        users.map((user, index) => {
                            return (
                              <User key={index} user={user} getUsers={fetchUsers}/>
                            )
                        })
                      }
                    </>
                  ) : (
                    <tr>
                      <td className="py-2">
                        Empty list
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
}


export default Home;