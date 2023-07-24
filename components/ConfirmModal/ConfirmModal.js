import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Button from "@/components/Button/Button";

// export default function ConfirmModal() {
//   return confirmAlert({
//     customUI: ({ onClose }) => {
//       return (
//         <div className="custom-ui">
//           <h1>Are you sure?</h1>
//           <p>You want to delete this file?</p>
//           <button onClick={onClose}>No</button>
//           <button
//             onClick={() => {
//               this.handleClickDelete();
//               onClose();
//             }}
//           >
//             Yes, Delete it!
//           </button>
//         </div>
//       );
//     },
//   });
// }

import styled from "styled-components";
import Image from "next/image";
import { materialDelete, materialDeleteWhite } from "@/assets/Icons8";
import Checkbox from "../Forms/Checkbox/Checkbox";
import { useState } from "react";

const ConfirmModalWrapper = styled.section`
  padding: 20px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 15px;
`;

const Title = styled.h1`
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

const Body = styled.div`
  font-size: 1rem;
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export default function ConfirmModal({ onClose, onConfirm }) {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <ConfirmModalWrapper>
      <Title>Warning</Title>
      <Body>
        <Checkbox
          id="confirmationCheckbox"
          labelContent="I confirm that I want to delete this interaction."
          onChange={(event) => setCheckbox(event.target.checked)}
        />
      </Body>
      <ButtonWrapper>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          buttonType="danger"
          icon={materialDeleteWhite}
          disabled={!checkbox}
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          Delete interaction
        </Button>
      </ButtonWrapper>
    </ConfirmModalWrapper>
  );
}
