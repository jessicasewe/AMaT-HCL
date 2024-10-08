import logo from "../../_assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-40 lg:px-8">
      {" "}
      {/* Adjusted py-20 */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto w-auto mb-3"
          src={logo}
          alt="AMaT-HCL"
          width={70}
          height={70}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-900">
          Log in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-blue-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-blue-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="text-right text-red-600 text-sm">
            <Link href="/auth/forget_password">Forget Password?</Link>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Log in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?
          <a
            href="#"
            className="font-semibold leading-6 text-blue-900 hover:text-blue-500"
          >
            Sign Up Now!
          </a>
        </p>
      </div>
    </div>
  );
}
