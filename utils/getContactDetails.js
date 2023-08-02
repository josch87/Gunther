import {
  materialExternalLink,
  materialFacebook,
  materialInstagram,
  materialTwitterx,
} from "@/assets/Icons8";

export function getFullName({ firstName, middleName, lastName }) {
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

export function getShortName({ firstName, lastName }) {
  let displayName = "";

  if (firstName) {
    displayName += firstName;
  }
  if (lastName) {
    displayName += "\u00A0" + lastName.charAt(0).toUpperCase() + ".";
  }

  return displayName.trim();
}

export function getFullSortName({ firstName, middleName, lastName }) {
  let sortName = "";

  if (firstName) {
    sortName += firstName.trim().toLowerCase();
  }
  if (middleName) {
    sortName += middleName.trim().toLowerCase();
  }
  if (lastName) {
    sortName += lastName.trim().toLowerCase();
  }
  return sortName;
}

export function getProfilePicture({ profilePicture }) {
  if (typeof profilePicture === "string") {
    return `/profile-pictures/${profilePicture}`;
  }

  if (profilePicture.url) {
    const aspectRatio = profilePicture.width / profilePicture.height;
    if (aspectRatio === 1) {
      return profilePicture.url;
    }
    return `https://res.cloudinary.com/dzbhtso7l/image/upload/c_thumb,g_face,h_800,w_800/${profilePicture.public_id}.${profilePicture.format}`;
  }
}

export function getSocialMediaIcon(platform) {
  if (platform === "Instagram") {
    return materialInstagram;
  }

  if (platform === "Twitter") {
    return materialTwitterx;
  }

  if (platform === "Facebook") {
    return materialFacebook;
  }

  return materialExternalLink;
}

export function getSocialMediaHyperlink(platform, username) {
  if (platform === "Instagram") {
    return `https://www.instagram.com/${username}/`;
  }
  if (platform === "Twitter") {
    return `https://twitter.com/${username}`;
  }
  if (platform === "Facebook") {
    return `https://www.facebook.com/${username}`;
  }
  return null;
}

export function getGoogleMapsLink({ street, zipCode, city, country }) {
  let encodedAddress = "";

  if (street) {
    encodedAddress += encodeURIComponent(street);
  }

  if (zipCode) {
    if (encodedAddress) {
      encodedAddress += ", ";
    }
    encodedAddress += encodeURIComponent(zipCode);
  }

  if (city) {
    if (encodedAddress) {
      encodedAddress += ", ";
    }
    encodedAddress += encodeURIComponent(city);
  }

  if (country) {
    if (encodedAddress) {
      encodedAddress += ", ";
    }
    encodedAddress += encodeURIComponent(country);
  }

  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return googleMapsLink;
}
