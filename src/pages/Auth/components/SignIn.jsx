import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../../components/ui/card";

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call login API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/80">
      <Card className="w-full max-w-md bg-neutral-900 text-white shadow-2xl">
        <CardHeader className="space-y-2">
          <CardTitle className="text-center text-xl font-semibold">
            Welcome to N.O.V.A.
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Button
            type="button"
            className="w-full bg-white text-neutral-900 hover:bg-neutral-100"
          >
            Log in with Google
          </Button>

          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <div className="flex-1 h-px bg-neutral-700" />
            <span>or log in with email</span>
            <div className="flex-1 h-px bg-neutral-700" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-neutral-300">Email</label>
              <Input
                type="email"
                placeholder="name@email.com"
                className="bg-neutral-800 border-neutral-700 text-sm"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-neutral-300">
                <label>Password</label>
                <button
                  type="button"
                  className="text-neutral-400 hover:text-white"
                >
                  Forgot?
                </button>
              </div>
              <Input
                type="password"
                placeholder="Enter password"
                className="bg-neutral-800 border-neutral-700 text-sm"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-500"
            >
              Log in
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-center gap-2 text-xs text-neutral-400">
          <div>
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-violet-400 hover:text-violet-200"
            >
              Sign up
            </Link>
          </div>
          <p className="text-[10px] text-neutral-500 text-center">
            By logging in, you agree to the Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
