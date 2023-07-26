import { volumes } from "@/pages/lib/data";
import Image from "next/image";
import Link from "next/link";
import { uid } from "uid";

export default function volume() {
  const volume = "the-return-of-the-king";
  const data = volumes.find(({ slug }) => slug === volume);

  const currentIndex = volumes.findIndex(({ slug }) => slug === volume);
  const prevVolume = volumes[currentIndex - 1];
  const nextVolume = volumes[currentIndex + 1];

  console.log();
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
        src={`/images/${volume}.png`}
        width={140}
        height={230}
        alt={volume}
      />
      <ul>
        {prevVolume ? (
          <li>
            <Link href={`/volumes/${prevVolume.slug}`}>prevVolume</Link>
          </li>
        ) : null}
        {nextVolume ? (
          <li>
            <Link href={`/volumes/${nextVolume.slug}`}>nextVolume</Link>
          </li>
        ) : null}
      </ul>
    </>
  );
}
