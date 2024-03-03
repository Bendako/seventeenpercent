import Image from "next/image";
import Card from "./components/Card";

export default function Home() {

  const numberOfCards: number = 10;


  return (
    <div className="container p-10 h-screen flex flex-col items-center justify-center">
      {[...Array(numberOfCards)].map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
}
