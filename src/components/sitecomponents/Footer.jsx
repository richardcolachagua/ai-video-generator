import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-ironmanBlack border-t border-ironmanRed flex flex-col items-center">
      <div className="flex gap-6 mb-2">
        <Link to="/help" className="text-ironmanGold hover:underline">
          Help
        </Link>
        <Link to="/terms" className="text-ironmanRed hover:underline">
          Terms & Privacy
        </Link>
        <Link to="/contact" className="text-ironmanSilver hover:underline">
          Contact
        </Link>
      </div>
      <p className="text-ironmanSilver text-sm">
        © 2025 N.O.V.A. All rights reserved.
      </p>
    </footer>
  );
}
