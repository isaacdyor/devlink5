import { Button } from "@/components/ui/button";
import { UserButton, SignUp } from "@clerk/nextjs";
import { Sign } from "crypto";

export default function Home() {
  return (
    <div className="h-screen">
      <Button>Click me</Button>
      <SignUp />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
