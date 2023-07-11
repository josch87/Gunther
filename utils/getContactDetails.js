import {
  materialExternalLink,
  materialFacebook,
  materialInstagram,
  materialTwitter,
} from "@/assets/Icons8";
import { Fragment } from "react";

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

export function getProfilePicture({ profilePicture }) {
  const path = "/profile-pictures/";

  if (profilePicture) {
    return path + profilePicture;
  }
}

export function getSocialMediaIcon(platform) {
  if (platform === "Instagram") {
    return materialInstagram;
  }

  if (platform === "Twitter") {
    return materialTwitter;
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