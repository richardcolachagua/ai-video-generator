import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-ironmanBlack border-b border-ironmanRed fixed top-0 z-50">
      <Link
        to="/"
        className="text-3xl font-bold text-ironmanGold tracking-widest"
      >
        N.O.V.A.
      </Link>
      <div className="flex gap-6">
        <Link to="/">
          <Button variant="ghost" className="text-ironmanGold">
            Home
          </Button>
        </Link>
        <Link to="/create">
          <Button variant="ghost" className="ironmanRed">
            Create
          </Button>
        </Link>
        <Link to="/gallery">
          <Button variant="ghost" className="ironmanSilver">
            Gallery
          </Button>
        </Link>
      </div>
    </nav>
  );
}
