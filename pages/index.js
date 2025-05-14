import { useEffect } from "react";
import { sdk } from "@farcaster/frame-sdk";

export default function Home() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <div>
      <h1>Farcaster News Mini App</h1>
      <p>Latest headlines will appear here.</p>
    </div>
  );
}