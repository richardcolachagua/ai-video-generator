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

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: call signup API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/80">
      <Card className="w-full max-w-md bg-neutral-900 text-white shadow-s-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-xl font-semibold">
            Create your own N.O.V.A. account
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Button
            type="button"
            className="w-full bg-white text-neutral-900 hover:bg-neutral-100"
          >
            Sign up with Google
          </Button>

          <div className="flex-items-center gap-2 text-xs text-neutral-500">
            <div className="flex-1 h-px bg-neutral-700" />
            <span>sign up with email</span>
            <div className="flex-1 h-px bg-neutral-700" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-neutral-300">First name</label>
                <Input
                  type="text"
                  placeholder="First name"
                  className="bg-neutral-800 border-neutral-700 text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-neutral-300">Last name</label>
                <Input
                  type="text"
                  placeholder="Last name"
                  className="bg-neutral-800 border-neutral-700 text-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-neutral-300">Email</label>
              <Input
                type="email"
                placeholder="name@email.com"
                className="bg-neutral-800 border-neutral-700 text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-neutral-300">Password</label>
              <Input
                type="password"
                placeholder="Create password"
                className="bg-neutral-800 border-neutral-700 text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-neutral-300">
                Confirm password
              </label>
              <Input
                type="password"
                placeholder="Repeat password"
                className="bg-neutral-800 border-neutral-700 text-sm"
              />
            </div>

            <label className="flex items-center gap-2 text-xs text-neutral-400">
              <input type="checkbox" className="h-3 w-3" />
              I&apos;d like to receive emails with updates and offers.
            </label>

            <Button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-500"
            >
              Create account
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-center gap-2 text-xs text-neutral-400">
          <div>
            Already have an account?{" "}
            <Link to="/login" className="text-violet-400 hover:text-violet-200">
              Log in
            </Link>
          </div>
          <p className="text-[10px] text-neutral-500 text-center">
            By creating an account, you agree to the Terms of Service and
            Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
