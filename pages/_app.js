import GlobalStyle from "../styles";
import { useImmerLocalStorageState } from "@/hooks/useImmerLocalStorageState";
import { contactsSampleData } from "@/data/SampleData";
import Layout from "@/components/Layout/Layout";
import { uid } from "uid";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [contacts, updateContacts] = useImmerLocalStorageState("contacts", {
    defaultValue: contactsSampleData,
  });

  function handleAddNewContact(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newContact = Object.fromEntries(formData);

    const newContactId = uid();

    const date = new Date();
    const currentUtcDateTime = date.toISOString();

    const formattedContact = {
      id: newContactId,
      firstName: newContact.firstName,
      middleName: newContact.middleName,
      lastName: newContact.lastName,
      nickName: newContact.nickName,
      gender: newContact.gender,
      profilePicture: "",
      dateOfBirth: newContact.dateOfBirth,
      deceased: false,
      email: [],
      phone: [],
      address: [],
      socialMedia: [],
      notes: newContact.notes,
      dateCreated: currentUtcDateTime,
      dateDeleted: "",
      isSampleData: false,
    };

    if (newContact.deceased) {
      formattedContact.deceased = true;
    }

    if (newContact.emailOne) {
      formattedContact.email.push({
        value: newContact.emailOne,
        type: newContact.emailOneType,
      });
    }
    if (newContact.emailTwo) {
      formattedContact.email.push({
        value: newContact.emailTwo,
        type: newContact.emailTwoType,
      });
    }

    if (newContact.phoneOne) {
      formattedContact.phone.push({
        value: newContact.phoneOne,
        type: newContact.phoneOneType,
      });
    }

    if (newContact.phoneTwo) {
      formattedContact.phone.push({
        value: newContact.phoneTwo,
        type: newContact.phoneTwoType,
      });
    }

    if (
      newContact.addressOneType ||
      newContact.addressOneStreet ||
      newContact.addressOneZipCode ||
      newContact.addressOneCity ||
      newContact.addressOneCountry
    ) {
      formattedContact.address.push({
        type: newContact.addressOneType,
        street: newContact.addressOneStreet,
        zipCode: newContact.addressOneZipCode,
        city: newContact.addressOneCity,
        country: newContact.addressOneCountry,
      });
    }

    if (
      newContact.addressTwoType ||
      newContact.addressTwoStreet ||
      newContact.addressTwoZipCode ||
      newContact.addressTwoCity ||
      newContact.addressTwoCountry
    ) {
      formattedContact.address.push({
        type: newContact.addressTwoType,
        street: newContact.addressTwoStreet,
        zipCode: newContact.addressTwoZipCode,
        city: newContact.addressTwoCity,
        country: newContact.addressTwoCountry,
      });
    }

    if (newContact.instagram) {
      formattedContact.socialMedia.push({
        platform: "Instagram",
        username: newContact.instagram,
      });
    }
    if (newContact.twitter) {
      formattedContact.socialMedia.push({
        platform: "Twitter",
        username: newContact.twitter,
      });
    }
    if (newContact.facebook) {
      formattedContact.socialMedia.push({
        platform: "Facebook",
        username: newContact.facebook,
      });
    }

    updateContacts([...contacts, formattedContact]);

    console.log(newContact);
    // router.push(newContactId);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          contacts={contacts}
          onAddNewContact={handleAddNewContact}
        />
      </Layout>
    </>
  );
}
