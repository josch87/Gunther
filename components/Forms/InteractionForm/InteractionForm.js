import InteractionDetailsHeader from "../../InteractionDetailsHeader/InteractionDetailsHeader";
import {
  Heading,
  StickyContainer,
  StyledFieldset,
  StyledTextarea,
} from "./InteractionForm.styled";
import { useState } from "react";
import SingleLineInput from "../SingleLineInput/SingleLineInput";
import { baseInteractionTypes } from "@/data/BaseData";
import { getFullName, getFullSortName } from "@/utils/getContactDetails";

export default function InteractionForm({ interaction, contacts }) {
  const [currentInteraction, setCurrentInteraction] = useState(interaction);

  const sortedContacts = contacts.slice().sort((a, b) => {
    const nameA = getFullSortName(a);
    const nameB = getFullSortName(b);
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  const participantOptions = sortedContacts.map((contact) => {
    return { value: contact.id, label: getFullName(contact) };
  });

  function handleUserInput(event, fieldName) {
    if (fieldName === "interactionType") {
      setCurrentInteraction({
        ...currentInteraction,
        type: event.value,
      });
    } else {
      setCurrentInteraction({
        ...currentInteraction,
        [fieldName]: event.target.value,
      });
    }
  }

  const selectableSortedInteractionTypes = baseInteractionTypes
    .filter((baseInteractionType) => baseInteractionType.isSelectable)
    .sort((a, b) => {
      const typeA = a.type.toUpperCase();
      const typeB = b.type.toUpperCase();
      if (typeA < typeB) {
        return -1;
      }
      if (typeA > typeB) {
        return 1;
      }
      return 0;
    })
    .map((baseInteractionType) => {
      if (baseInteractionType.isSelectable) {
        return {
          value: baseInteractionType.type,
          label: baseInteractionType.type,
        };
      }
    });

  return (
    <>
      <StickyContainer>
        <InteractionDetailsHeader interaction={currentInteraction} />
      </StickyContainer>

      <Heading id="form-heading">Create new interaction</Heading>
      <form aria-labelledby="form-heading">
        <StyledFieldset>
          <legend>Interaction Details</legend>
          <SingleLineInput
            type="creatableSelect"
            labelContent="Interaction (required)"
            id="interactionType"
            name="interactionType"
            options={selectableSortedInteractionTypes}
            // value={currentContact.firstName}
            onChange={(event) => handleUserInput(event, "interactionType")}
            required
          />

          <SingleLineInput
            type="singleSelect"
            labelContent="Participants (required)"
            id="participants"
            name="participants"
            options={participantOptions}
            isMulti
            // value={
            //   currentContact.dateOfBirth
            //     ? currentContact.dateOfBirth.substring(0, 10)
            //     : ""
            // }
            // onChange={(event) => handleUserInput(event, "participants")}
            required
          />

          <SingleLineInput
            type="date"
            labelContent="Date (required)"
            id="dateOfInteraction"
            name="dateOfInteraction"
            // value={
            //   currentContact.dateOfBirth
            //     ? currentContact.dateOfBirth.substring(0, 10)
            //     : ""
            // }
            onChange={(event) => handleUserInput(event, "dateOfInteraction")}
            required
          />
        </StyledFieldset>

        <StyledFieldset>
          <legend>Notes</legend>
          <StyledTextarea
            name="notes"
            rows="10"
            maxLength="600"
            // value={currentContact.notes}
            onChange={(event) => handleUserInput(event, "notes")}
          ></StyledTextarea>
        </StyledFieldset>
      </form>
    </>
  );
}
