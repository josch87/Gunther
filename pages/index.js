import Heading from "@/components/Heading/Heading";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";
import Scopebox from "@/components/Scopebox/Scopebox";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <DefaultHead pageTitle="Dashboard" />
      <Heading level={1}>Dashboard</Heading>

      <Scopebox heading="Upcoming">Test</Scopebox>
    </>
  );
}
