import BackLink from "@/components/BackLink/BackLink";
import { useRouter } from "next/router";

export default function ContactDetailsPage({ contacts }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <BackLink href={"/"}>← All Contacts</BackLink>
    </>
  );
}
