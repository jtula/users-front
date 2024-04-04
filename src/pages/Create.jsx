import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUser } from "../services/api";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const saveUser = async(e) => {
        e.preventDefault();
        if(name === "" || email === ""){
            alert('Please fill out all inputs');
            return;
        }
        try {
          const user = await createUser({name: name, email: email});
          toast.success(`Save ${user.name} sucessfully`);
          navigate("/");
        } catch (error){
          toast.error(error.message);
        }
    }

    return (
      <div className="max-w-lg bg-white shadow-lg mx-auto p-6 rounded mt-6">
        <h2 className="text-3xl font-bold mb-4 text-center">
          New User
        </h2>
        <form onSubmit={saveUser}>
          <div className="space-y-4">
              <input id="name" required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="username" />
              <input id="email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="email" />
            <div>
              <button className="w-full mt-6 bg-blue-600 text-white rounded-md px-4 py-2 font-bold hover:bg-blue-700 hover:cursor-pointer">Save</button>
            </div>
          </div>
        </form>
      </div>
    )
}

export default Create;