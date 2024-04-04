import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserById, updateUser } from '../services/api';

const Edit = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [ user, setUser] = useState({
        name: "",
        email: "",
    });

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
          await updateUser(id, user);
          toast.success("Update user successfully");
          navigate('/');
        }catch(error){
          setIsLoading(false);
          toast.error(error.message);
        }
    }

    useEffect(() => {
      const getUser = async() => {
        setIsLoading(true);
        try {
          const { name, email } = await getUserById(id);
          setUser({ name, email })
          setIsLoading(false);
        }catch(error){
          setIsLoading(false);
          toast.error(error.message);
        }
      };
      getUser();
    }, [id])

    return (
      <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
        <h2 className="font-semibold text-2xl mb-4 block text-center">
            Edit user
        </h2>
        { isLoading ? ("Loading user...") : (
          <>
            <form onSubmit={handleUpdate}>
              <div className="space-y-2">
                <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="username" />
                <input type="email" value={user.email} onChange={(e) => setUser({...user, quantity: e.target.value})}  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="email" />
                <div>
                    { !isLoading && ( <button className="w-full mt-6 bg-blue-600 text-white rounded-md px-4 py-2 font-bold hover:bg-blue-700 hover:cursor-pointer">Update</button>)}         
                </div>
              </div>
            </form>
          </>
        )}
      </div>  
    )
}

export default Edit;