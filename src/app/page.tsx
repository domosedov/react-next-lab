import VaulDrawer from "./vaul_drawer";

export default function Home() {
  return (
    <div className="container mx-auto p-2">
      <h1>Home page</h1>
      <VaulDrawer classNames={{ content: "max-h-[80dvh]" }} />
      <VaulDrawer classNames={{ content: "max-h-[80vh]" }} />
      <VaulDrawer classNames={{ content: "max-h-[80svh]" }} />
      <VaulDrawer classNames={{ content: "max-h-[80lvh]" }} />
    </div>
  );
}
