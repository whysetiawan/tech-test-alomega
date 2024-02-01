import { Button, Card } from "@repo/ui";
import Logo from "../../assets/icons/logo.svg";

const LoginPage = () => {
  return (
    <main className="m-auto w-full min-h-screen flex items-center justify-center flex-col">
      <Card className="flex flex-col max-w-md md:max-w-xl ">
        <div className="rounded-3xl bg-blue-50 p-4">
          <Logo />
        </div>
        <h3 className="mt-7 text-center text-2xl font-semibold text-gray-900">
          Login
        </h3>
        <p className="mt-5 text-center text-gray-900">
          Sign in to your account and take control of your business with our
          innovative solutions.
        </p>
        <form className="mt-6 space-y-4 w-full">
          <label
            htmlFor="email"
            className="block text-md font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-slate-50 border border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@company.com"
            required
          />

          <label
            htmlFor="password"
            className="block text-md font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-slate-50 border border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
          >
            Login to your account
          </button>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-4">
            Not registered?{" "}
            <a
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </form>
      </Card>
    </main>
  );
};

export default LoginPage;
