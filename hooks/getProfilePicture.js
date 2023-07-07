export function getProfilePicture(contact) {
  const path = "/profile-pictures/";

  const { profilePicture } = contact;

  if (profilePicture) {
    return path + profilePicture;
  }
}
