import logo from "../../_assets/logo.png";
import Image from "next/image";
export default function Signup() {
  return (
    <div className="mt-32 mb-32 flex justify-center text-blue-900">
      <div className="w-96">
        <div className="flex justify-center">
          <Image src={logo} alt="AMaT-HCL" className="w-24 mb-9" />
        </div>
        <div className="mb-14 text-center">
          <div className="font-extrabold text-2xl">Create Account</div>
          <div className="text-sm">
            Let&apos;s get you started. Please enter your details
          </div>
        </div>
        <form action="#" name="sign_up" className="pb-3">
          <label>Full Name</label>
          <br />
          <input
            id="name"
            required
            type="text"
            placeholder="Enter your full name"
            name="name"
            className="border-solid border-2 rounded-md w-full mb-3 p-1 text-black"
          />
          <br />
          <label>Email Address</label>
          <br />
          <input
            id="email"
            required
            type="email"
            placeholder="Enter your email address"
            name="email"
            className="border-solid border-2 rounded-md w-full mb-3 p-1 text-black"
          />
          <br />
          <label>Phone Number</label>
          <br />
          <input
            id="phone"
            required
            type="tel"
            name="phone"
            className="border-solid border-2 rounded-md w-full mb-3 p-1 text-black"
          />
          <br />
          <label>Enter Password</label>
          <br />
          <input
            id="password"
            required
            type="password"
            placeholder="*************"
            name="password"
            className="border-solid border-2 rounded-md w-full mb-3 p-1 text-black"
          />
          <br />
          <label>Confirm Password</label>
          <br />
          <input
            id="confirm_password"
            required
            type="password"
            placeholder="*************"
            name="confirm_passward"
            className="border-solid border-2 rounded-md w-full mb-3 p-1 text-black"
          />
          <br />
        </form>
        <div className="flex justify-center">
          <button
            type="submit"
            form="sign_up"
            value="Submit"
            className="bg-blue-900 text-white p-1 rounded-xl w-full"
          >
            Continue
          </button>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <a
            href="/login"
            className="font-semibold leading-6 text-blue-900 hover:text-blue-500"
          >
            Log In Now!
          </a>
        </p>
      </div>
    </div>
  );
}