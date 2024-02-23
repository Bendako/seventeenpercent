import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="container p-10 h-screen flex flex-col items-center justify-center">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
