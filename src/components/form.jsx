const Form = ({client}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Name:</label>
                <input 
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Name costumer"
                    name="name"
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="company"
                >Company:</label>
                <input 
                    id="company"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Company costumer"
                    name="company"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="mail"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email costumer"
                    name="email"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="phone"
                >Phone:</label>
                <input 
                    id="phone"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Phone number"
                    name="phone"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="comments"
                >Comments:</label>
                <textarea
                    as="textarea"
                    id="comments"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Comments costumer"
                    name="comments"
                />
            </div>
        </>
    )
}

export default Form