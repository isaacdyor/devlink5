import { UserButton, SignUp } from "@clerk/nextjs";
import { Sign } from "crypto";

export default function Home() {
  return (
    <div className="h-screen">
      <SignUp />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
