import ContactForm from "@/components/ContactForm/ContactForm";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function CreateNewContactPage({ onAddNewContact }) {
  const router = useRouter();

  return (
    <>
      <ContactForm
        onSubmitForm={onAddNewContact}
        headingContent="Create new contact"
      />
    </>
  );
}
