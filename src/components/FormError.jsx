import { Ban, ShieldAlert } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function FormSubmited() {
  const location = useLocation()
  const errorMessage = location.state?.message || "Server error."
  return (
    <div className="w-full max-w-md p-4">
      <div className="card border border-gray-200 shadow-md bg-white flex flex-col justify-center items-center gap-5 p-6">
        <div className="text-red-400">
          <ShieldAlert size={100} strokeWidth={2} />
        </div>
        <p className="text-2xl font-semibold tracking-tight">Sorry!</p>
        <div className="bg-gray-200 px-5 py-3 rounded-md text-gray-500 flex items-center gap-3 leading-5 w-full">
            {/* <span className="text-red-500"><Ban /></span> */}
            <p>{errorMessage}</p>
        </div>
        <Link to={"/"} className="self-start">
            <p className="text-blue-500 hover:underline">Send another response</p>
        </Link>
      </div>
    </div>
  );
}

export default FormSubmited;
