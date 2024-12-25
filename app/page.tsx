import { ChristmasForm } from "@/components/christmas-form";

export default function Home() {
  return (
    <div className="h-3/5">
      <ChristmasForm/>

      <footer className="flex items-center justify-center p-2 bg-indigo-950">
        <p className="text-center text-white">Made by Gerson</p>
      </footer>
    </div>
  );
}
