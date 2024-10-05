import Link from "next/link";
//import { FaEnvelope } from "react-icons/fa";

export default function Forget_password () {
    return (
        <div className="mt-32 flex justify-center">
            <div className="w-2/3">
                <div className="mb-9 text-center">
                    <div className="font-extrabold text-2xl mb-2">Password Reset</div>
                    <div>Enter email address to reset password</div>
                </div>
                <form action='#' name="Forget_password" className="pb-10">
                    <label>Email Address</label><br/>
                    <input type="email" placeholder="Enter your email address" name="email" className="border-solid border-2 rounded-md w-full mb-3 p-1"/><br/>
                </form>
                <div className="flex justify-center pb-32">
                    <button type="submit" form="Forget_password" value="Submit" className=" text-white p-1 rounded-xl pr-5 pl-5" style={{backgroundColor: "orange"}}>Reset Password</button>
                </div>
                <div className="flex justify-center mb-14">Have an account? <Link href="/login" className="pl-1 text-red-600"> Sign In</Link></div>
            </div> 
        </div>
    )
}