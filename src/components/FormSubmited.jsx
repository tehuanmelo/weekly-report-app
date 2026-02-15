import { CircleCheckBig, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function FormSubmited() {
  return (
    <div className="w-full max-w-md p-4">
      <div className="card border border-gray-200 shadow-md bg-white flex flex-col justify-center items-center gap-5 p-6">
        <div className="text-green-400">
          <CircleCheckBig size={100} strokeWidth={2} />
        </div>
        <p className="text-2xl font-semibold tracking-tight">Thank you!</p>
        <p className="text-gray-500">Your submission has ben sent.</p>
        <div className="bg-gray-200 px-5 py-3 rounded-md text-gray-500 flex items-center gap-3 leading-4 w-full">
            <span className="text-green-500"><Mail /></span>
            <p>We've sent you a confirmation email.</p>
        </div>
        <Link to={"/"} className="self-start">
            <p className="text-blue-500 hover:underline">Send another response</p>
        </Link>
        <p className="leading-4 text-gray-400 text-sm">Don't see our email? Check your spam folder.</p>
      </div>
    </div>
  );
}

export default FormSubmited;
