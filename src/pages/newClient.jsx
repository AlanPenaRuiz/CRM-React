import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import FormNewClient from "../components/form";
import Error from "../components/error";
import { addClient } from "../data/clients";

export async function action({ request }) {
  const formData = await request.formData();
  //console.log(...formData)
  const data = Object.fromEntries(formData);
  const email = formData.get("email");

  //validation
  const errors = [];
  if (Object.values(data).includes("")) {
    errors.push("All fields must be filled");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errors.push("Email is not valid");
  }

  //return errors
  if (Object.keys(errors).length) {
    return errors;
  }

  await addClient(data);

  return redirect('/');
}

function NewClient() {
  const navigate = useNavigate();
  const errors = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New client</h1>
      <p className="mt-3">Fill in all the fields to add a new client.</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

        {Array.isArray(errors) &&
          errors.length > 0 &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form
          method="post"
          //noValidate
        >
          <FormNewClient />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Register Client"
          />
        </Form>
      </div>
    </>
  );
}
export default NewClient;
