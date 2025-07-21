import LoginForm from "./LoginForm";
import logo from "../assets/Logo.svg";
import leftlogo from "../assets/LeftLogo.svg";


export const LoginPage = () => {
  return (
    <div className="min-h-screen flex    text-white">
       
        {/* Left Side  */}
        <div className="flex-[45%] p-8 flex flex-col items-center justify-center bg-[#131313]">
          <div className="w-[300px]"><div className="flex items-center space-x-2 mb-6"> 
             
          <div className="flex items-center space-x-2 mb-6">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          </div>
          <h2 className="text-3xl font-semibold mb-4">Next-Generation Trading Platform for Faster Execution!</h2>
          <p className="text-gray-400">
            Launch and scale your brokerage effortlessly with Finotrade – a next-generation trading platform offering faster execution,
            advanced charting, multi-asset support for brokers and financial institutions.
          </p>
        </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-[55%] py-2 px-16  flex justify-center items-center  bg-[#191919]  ">
           
          <LoginForm />
        
        </div>
       
    </div>
    
  );
};
 