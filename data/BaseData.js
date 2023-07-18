import {
  materialCall,
  materialParty,
  materialVideoConference,
} from "@/assets/Icons8";

export const baseGender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Diverse", label: "Diverse" },
];

export const baseEmailInputType = [
  { value: "Home", label: "Home" },
  { value: "Work", label: "Work" },
];

export const basePhoneInputType = [
  { value: "Home", label: "Home" },
  { value: "Work", label: "Work" },
  { value: "Mobile", label: "Mobile" },
];

export const baseAddressInputType = [
  { value: "Home", label: "Home" },
  { value: "Work", label: "Work" },
];

export const baseInteractionTypes = [
  {
    type: "Call",
    icon: materialCall,
    isSelectable: true,
  },
  {
    type: "Outgoing call",
    icon: "",
    isSelectable: false,
  },
  {
    type: "Incoming call",
    icon: "",
    isSelectable: false,
  },
  {
    type: "Video conference",
    icon: materialVideoConference,
    isSelectable: true,
  },
  {
    type: "Party",
    icon: materialParty,
    isSelectable: true,
  },
];
