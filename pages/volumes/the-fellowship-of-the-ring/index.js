import { volumes } from "@/pages/lib/data";
import Image from "next/image";
import Link from "next/link";
import { uid } from "uid";

export default function volume() {
  const volume = "the-fellowship-of-the-ring";
  const data = volumes.find(({ slug }) => slug === volume);
  console.log(data);
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <Link href="../">← All Volumes</Link>;
      <ul>
        {data.books.map((book) => (
          <li key={uid()}>{book.title}</li>
        ))}
      </ul>
      <Image
        src="/../../../public/images/the-fellowship-of-the-ring.png"
        width={140}
        height={230}
        alt="volume"
      />
    </>
  );
}
