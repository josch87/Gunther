import GlobalStyle from "../styles";
import { useImmerLocalStorageState } from "@/hooks/useImmerLocalStorageState";
import { contactsSampleData } from "@/data/SampleData";

export default function App({ Component, pageProps }) {
  const [contacts, updateContacts] = useImmerLocalStorageState("contacts", {
    defaultValue: contactsSampleData,
  });

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} contacts={contacts} />
    </>
  );
}
