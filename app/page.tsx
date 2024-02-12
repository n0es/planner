import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <div>
        This screen is for authenticated users only.
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
