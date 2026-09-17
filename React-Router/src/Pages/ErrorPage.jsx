import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-xl flex gap-4 flex-col items-center justify-center min-h-[calc(100vh-70px)]">
      <h1>404 - Page Not Found 😢</h1>
      <p>Aap jo URL dhoond rahe hain wo exist nahi karta!</p>
      <div>
        <Link className="border-2 px-5 py-3" to="/">
          <button>Go Back to Home</button>
        </Link>
      </div>
    </div>
    // <div>
    //     <p>Error Page</p>
    //     <button className='border-2 px-5 py-3 text-xl'><Link to="/">Click Me to Go Home</Link></button>
    // </div>
  );
};

export default ErrorPage;
