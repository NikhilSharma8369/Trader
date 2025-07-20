import { ChevronRight } from "lucide-react";
import React from "react";

const LoginForm = () => {
  return (
    <div className="relative w-[300px]">
      <h2 className="text-4xl font-semibold mb-6">Log in to your account</h2>
      <p className="text-sm text-gray-400 mb-4">
        Use the login credentials provided by your broker or proprietary trading firm to access your trading account.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-stone-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
             
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-stone-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
             
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Broker Domain (youbroker.com) </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded bg-stone-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-white text-black rounded hover:bg-gray-200 font-semibold"
        >
          Connect to Account
        </button>
      </form>
        <div className="w-full h-[2px] bg-[#252525] my-3"></div>
      <div className="mt-3 flex  justify-between text-sm text-gray-400  border border-gray-700  p-4 rounded-md  bg-[#252525]">
      <div> 
         <p className="text-white">
          Don’t have credentials?{" "}
          
        </p>
         <p>Get access to demo account</p>
        </div>
        <div className="flex items-center"> 
          <h1>
            <ChevronRight size={20}/>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
