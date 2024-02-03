import Header from "@/components/Header";
import Second from "@/components/Second";
import Third from "@/components/Third";
import Fourth from "@/components/fourth";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="overflow-x-hidden ">
        <Header />
        <Second />
        <Third />
      </main>
      <Fourth/>
    </div>
  );
}
