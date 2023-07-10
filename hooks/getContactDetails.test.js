import { contactTestData } from "@/data/TestData";
import { getFullName } from "./getContactDetails";

test("concatenates contact name to a full name", () => {
  const fullName = getFullName(contactTestData);
  expect(fullName).toBe("Chandler Muriel Bing");
});
