import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteUser } from "../services/api";

/* eslint-disable react/prop-types */
const User = ({ user, getUsers }) => {
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure you want to delete this user?',
            showCancelButton: true,
            icon: 'warning',
            confirmButtonText: 'Delete',
            confirmButtonColor: '#ef4444'

        })
        if (result.isConfirmed){
            try {
              await deleteUser(id);
              toast.success("Delete successfully");
              getUsers();
            } catch(error){
              toast.error(error.message);
            }
        }
    }

    return (
        <tr className="border-b border-neutral-200 dark:border-white/10">
            <td className="border-b border-neutral-200 dark:border-white/10">{user.name}</td>
            <td className="border-b border-neutral-200 dark:border-white/10">{user.email}</td>
            <td className="border-b border-neutral-200 dark:border-white/10">
                <div className="flex gap-4 w-2/3 py-2 mx-auto">
                    <Link to={`/edit/${user.id}`} className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-md px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer">Edit</Link>
                    <button onClick={() => handleDelete(user.id)}  className="inline-block w-full text-center shadow-md text-sm bg-red-500 text-white rounded-md px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer">Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default User;