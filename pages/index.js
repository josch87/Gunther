import UpcomingWidget from "@/components/DashboardWidgets/UpcomingWidget/UpcomingWidget";
import Heading from "@/components/Heading/Heading";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";

export default function Dashboard({ interactions, contacts }) {
  return (
    <>
      <DefaultHead pageTitle="Dashboard" />
      <Heading level={1}>Dashboard</Heading>
      <UpcomingWidget interactions={interactions} contacts={contacts} />
    </>
  );
}
