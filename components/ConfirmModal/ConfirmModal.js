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
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  return (
    <ConfirmModalWrapper>
      <Title>{title}</Title>
      <Body>
        <Checkbox
          id="confirmationCheckbox"
          labelContent={checkboxLabel}
          onChange={(event) => setCheckboxStatus(event.target.checked)}
        />
      </Body>
      <ButtonWrapper>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          buttonType="danger"
          icon={confirmationButtonIcon}
          disabled={!checkboxStatus}
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
