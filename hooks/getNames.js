export function getFullName(contact) {
  const { firstName, middleName, lastName } = contact;

  let displayName = "";

  if (firstName) {
    displayName += firstName;
  }
  if (middleName) {
    displayName += " " + middleName;
  }
  if (lastName) {
    displayName += " " + lastName;
  }

  return displayName.trim();
}
