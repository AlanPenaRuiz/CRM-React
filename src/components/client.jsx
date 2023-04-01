import { useState } from "react";
import { useNavigate, Form, redirect } from "react-router-dom";
import { removeClient } from "../data/clients";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function action({ params, setState }) {
  await removeClient(params.clientId);
  setState((prevState) => ({ ...prevState, isDeleted: true }));
}

function Client({ client }) {
  const navigate = useNavigate();
  const { name, company, email, phone, id } = client;

  const [isDeleted, setIsDeleted] = useState(false);

  const handleRemove = async (e) => {
    e.preventDefault();
    if (window.confirm("Do you want to delete this record?")) {
      try {
        await removeClient(id);
        setIsDeleted(true);
        toast.success("Client removed successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <>
      <tr>
        <td>
          <ToastContainer />
        </td>
      </tr>

      <tr className="border-b">
        <td className="p-6 space-y-2">
          <p className="text-2xl text-gray-800">{name}</p>
          <p>{company}</p>
        </td>

        <td className="p-6">
          <p className="text-gray-600">
            {" "}
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {email}{" "}
          </p>
          <p className="text-gray-600">
            {" "}
            <span className="text-gray-800 uppercase font-bold">Phone: </span>
            {phone}{" "}
          </p>
        </td>

        <td className="p-6 flex gap-3 justify-end">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
            onClick={() => navigate(`/clients/${id}/edit`)}
          >
            Edit
          </button>

          {/* <Form
                method='post'
                action={`/clients/${id}/remove`}
                onSubmit={(e) => {
                    if(!confirm('Do you want to delete this record?')) {
                        e.preventDefault()
                    }
                }}
            >
                <button
                    type="submit"
                    className="text-red-600 hover:text-red-700 uppercase font-bold text-xs "
                >
                    Remove
                </button>
            </Form> */}
          <Form method="post" onSubmit={handleRemove}>
            <button
              type="submit"
              className="text-red-600 hover:text-red-700 uppercase font-bold text-xs "
            >
              Remove
            </button>
          </Form>
        </td>
      </tr>
    </>
  );
}

export default Client;
