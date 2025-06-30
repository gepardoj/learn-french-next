import ClientComponent from "@/app/ClientComponent";
import { Button } from "@/stories/Button";

export default function Home() {
  return (
    <section className="flex flex-[0.3] flex-col justify-center gap-3">
      <h1 className="text-3xl text-center">Learn French</h1>
      <ClientComponent />
      {/* <Button
        onclick={() => start("medium")}
        label="Medium. Construct sentences"
      />
      <Button onclick={() => start("hard")} label="Hard. Writing sentences" /> */}
    </section>
  );
}