import logo from '../../_assets/logo.png';
import Image from 'next/image';
export default function Signup () {
    return (
        <div className="mt-32 mb-32 flex justify-center text-blue-900">
            <div className="w-96">
                <div className='flex justify-center'>
                    <Image src={logo} alt='AMaT-HCL' className='w-24 mb-9'/>
                </div>
                <div className="mb-14 text-center">
                    <div className="font-extrabold text-2xl">Create Account</div>
                    <div className='text-sm'>Let&apos;s get you started. Please enter your details</div>
                </div>
                <form action='#' name="sign_up" className="pb-3">
                    <label>Full Name</label><br/>
                    <input type="text" placeholder="Enter your full name" name="name" className="border-solid border-2 rounded-md w-full mb-3 p-1"/><br/>
                    <label>Email Address</label><br/>
                    <input type="email" placeholder="Enter your email address" name="email" className="border-solid border-2 rounded-md w-full mb-3 p-1"/><br/>
                    <label>Phone Number</label><br/>
                    <input type="tel" name="phone" className="border-solid border-2 rounded-md w-full mb-3 p-1"/><br/>
                    <label>Enter Password</label><br/>
                    <input type="password" placeholder="*************" name="password" className="border-solid border-2 rounded-md w-full mb-3 p-1"/><br/>
                    <label>Confirm Password</label><br/>
                    <input type="password" placeholder="*************" name="confirmPassward" className="border-solid border-2 rounded-md w-full mb-3 p-1"/><br/>
                </form>
                <div className="flex justify-center">
                    <button type="submit" form="sign_up" value="Submit" className="bg-blue-900 text-white p-1 rounded-xl w-full">Continue</button>
                </div>
            </div>
            
        </div>
    )
}