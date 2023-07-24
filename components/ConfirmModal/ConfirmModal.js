import "react-confirm-alert/src/react-confirm-alert.css";
import Button from "@/components/Button/Button";
import Checkbox from "../Forms/Checkbox/Checkbox";
import { useState } from "react";
import {
  Body,
  ButtonWrapper,
  ConfirmModalWrapper,
  Title,
} from "./ConfirmModal.styled";

export default function ConfirmModal({
  onClose,
  onConfirm,
  title,
  checkboxLabel,
  confirmationButtonContent,
  confirmationButtonIcon,
}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ConfirmModalWrapper>
      <Title>{title}</Title>
      <Body>
        <Checkbox
          id="confirmationCheckbox"
          labelContent={checkboxLabel}
          onChange={(event) => setIsChecked(event.target.checked)}
        />
      </Body>
      <ButtonWrapper>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          buttonType="danger"
          icon={confirmationButtonIcon}
          disabled={!isChecked}
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          {confirmationButtonContent}
        </Button>
      </ButtonWrapper>
    </ConfirmModalWrapper>
  );
}
