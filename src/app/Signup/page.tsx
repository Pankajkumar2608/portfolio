
export default function Signup() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
        <h1 className="text-4xl">Signup</h1>
        <form className="flex flex-col items-center justify-center mt-4 bg-slate-600 p-4">
          <label className="flex flex-col">
            Email:
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="email" />
          </label>
          <label className="flex flex-col">
            Password:
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" name="password" />
          </label>
          <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit">Submit</button>
        </form>
      </div>
    );
  }