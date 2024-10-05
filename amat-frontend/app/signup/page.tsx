export default function Signup () {
    return (
        <div className="mt-32 flex justify-center">
            <div className="lg:w-3/5 md:w-1/2 sm:w-2/3">
                <div className="mb-9 text-center">
                    <div className="font-extrabold text-4xl">Create Account</div>
                    <div>Let&apos;s get you started. Please enter your details</div>
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
                    <button type="submit" form="sign_up" value="Submit" className="bg-blue-700 text-white p-1 rounded-xl pr-5 pl-5">Continue</button>
                </div>
            </div>
            
        </div>
    )
}