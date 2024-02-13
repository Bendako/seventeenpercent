import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">Seventeen Percent</h1>
      <h3 className="text-3xl">(17%)</h3>
      <p className="animate-bounce m-4">
        Gonna be here fucking app soon...
      </p>
    </div>
  );
}
