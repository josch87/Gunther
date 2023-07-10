import { contactTestData, contactsTestData } from "@/data/TestData";
import { getFullName } from "./getContactDetails";

test("concatenates contact name to a full name without unnecessary spaces", () => {
  const fullName = getFullName(contactTestData);
  expect(fullName).toBe("Chandler Muriel Bing");

  const fullNameWithoutMiddleName = getFullName(contactsTestData[2]);
  expect(fullNameWithoutMiddleName).toBe("Rachel Green");

  const fullNameOnlyFirstName = getFullName(contactsTestData[3]);
  expect(fullNameOnlyFirstName).toBe("Joey");
});
