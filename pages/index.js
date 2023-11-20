import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      Dashboard
      <br />
      <Link href="/contacts">Contacts</Link>
      <br />
      <Link href="/interactions">Interactions</Link>
    </>
  );
}
