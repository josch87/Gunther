import InteractionDetailsHeader from "../../InteractionDetailsHeader/InteractionDetailsHeader";
import {
  ButtonsContainer,
  Heading,
  StickyContainer,
  StyledFieldset,
  StyledLegend,
  StyledTextarea,
} from "./InteractionForm.styled";
import { useState } from "react";
import SingleLineInput from "../SingleLineInput/SingleLineInput";
import { baseInteractionTypes } from "@/data/BaseData";
import { getFullName, getFullSortName } from "@/utils/getContactDetails";
import Button from "@/components/Button/Button";
import { useRouter } from "next/router";
import { getParticipant } from "@/utils/getInteractionDetails";

export default function InteractionForm({
  onSubmitForm,
  interaction,
  contacts,
  isUpdate,
}) {
  const router = useRouter();

  const [currentInteraction, setCurrentInteraction] = useState(interaction);
  const isEqual =
    JSON.stringify(currentInteraction) === JSON.stringify(interaction);

  const sortedActiveContacts = contacts
    .filter(
      (participant) =>
        participant.dateDeleted === null || participant.dateDeleted === ""
    )
    .slice()
    .sort((a, b) => {
      const nameA = getFullSortName(a);
      const nameB = getFullSortName(b);
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

  const participantOptions = sortedActiveContacts.map((contact) => {
    return { value: contact.id, label: getFullName(contact) };
  });

  const currentActiveParticipants = currentInteraction.participants
    .map((currentParticipantObject) => {
      return getParticipant(contacts, currentParticipantObject);
    })
    .filter(
      (participant) =>
        participant.dateDeleted === null || participant.dateDeleted === ""
    )
    .sort((a, b) => {
      const nameA = getFullSortName(a);
      const nameB = getFullSortName(b);
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    })
    .map((currentParticipant) => {
      return {
        value: currentParticipant.id,
        label: getFullName(currentParticipant),
      };
    });

  function handleUserInput(event, fieldName) {
    if (fieldName === "interactionType") {
      setCurrentInteraction({
        ...currentInteraction,
        type: event.value,
      });
    } else if (fieldName === "participants") {
      const participantsArray = event.map((participant) => participant.value);
      setCurrentInteraction({
        ...currentInteraction,
        participants: participantsArray,
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

      <Heading id="form-heading">
        {isUpdate ? "Update interaction" : "Create new interaction"}
      </Heading>
      <form
        aria-labelledby="form-heading"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitForm(currentInteraction);
        }}
      >
        <StyledFieldset>
          <StyledLegend>Interaction Details</StyledLegend>
          <SingleLineInput
            type="creatableSelect"
            labelContent="Interaction (required)"
            id="interactionType"
            name="interactionType"
            options={selectableSortedInteractionTypes}
            value={currentInteraction.type}
            onChange={(event) => handleUserInput(event, "interactionType")}
            required
            autoFocus
          />

          <SingleLineInput
            type="singleSelect"
            labelContent="Participant(s) (required)"
            id="participants"
            name="participants"
            options={participantOptions}
            isMulti
            defaultValue={currentActiveParticipants}
            onChange={(event) => handleUserInput(event, "participants")}
            required
          />

          <SingleLineInput
            type="date"
            labelContent="Date (required)"
            id="dateOfInteraction"
            name="dateOfInteraction"
            value={currentInteraction.dateOfInteraction.substring(0, 10)}
            onChange={(event) => handleUserInput(event, "dateOfInteraction")}
            required
          />
        </StyledFieldset>

        <StyledFieldset>
          <StyledLegend>Notes</StyledLegend>
          <StyledTextarea
            name="notes"
            rows="10"
            maxLength="600"
            value={currentInteraction.notes}
            onChange={(event) => handleUserInput(event, "notes")}
          ></StyledTextarea>
        </StyledFieldset>

        <ButtonsContainer>
          <Button type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" buttonType="primary" disabled={isEqual}>
            {isUpdate ? "Update interaction" : "Add new interaction"}
          </Button>
        </ButtonsContainer>
      </form>
    </>
  );
}
