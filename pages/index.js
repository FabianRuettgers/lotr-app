import Link from "next/link";
import { introduction, volumes } from "./lib/data";
export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">The two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The return of the King
          </Link>
        </li>
      </ul>
    </div>
  );
}
