import "./App.css";

function App() {
  return (
    <>
      <div className="text-6xl font-extrabold text-center my-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-500 ">
          Hello world!
        </span>
      </div>

      <form className="bg-white w-96 mx-auto rounded-lg p-10">
        <input className="border border-gray-50 w-full px-3 py-2 mb-4 rounded-md disabled:bg-gray-400" disabled type="text" placeholder="Enter your name" />

        <input className="border border-gray-300 w-full px-3 py-2 mb-4 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-200 invalid:focus:ring-red-200 peer" type="email" placeholder="Enter your email" />

        <p className="ms-2 mt-0 mb-4 text-red-500 hidden peer-invalid:block">El correo es incorrecto</p>

        <input className="border border-gray-300 w-full px-3 py-2 mb-8 rounded-md focus:outline-none" type="password" placeholder="Enter your password" />

        <input className="rounded-full bg-blue-500 w-full text-white py-2 cursor-pointer hover:bg-blue-400 " type="submit" value="Submit" />
      </form>

    </>
  );
}

export default App;
