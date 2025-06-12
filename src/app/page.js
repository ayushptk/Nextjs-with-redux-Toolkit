import Image from "next/image";
import AddUsers from "./Components/Adduser";
import DisplayUsers from "./Components/Displayuser";

export default function Home() {
  return (
   <main >
    <AddUsers />
    <DisplayUsers />

   </main>
  );
}
