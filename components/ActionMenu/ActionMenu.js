import {
  materialContact,
  materialMeeting,
  materialPlus,
} from "@/assets/Icons8";
import Image from "next/image";
import {
  DropdownList,
  DropdownListItem,
  StyledActionMenu,
  StyledImage,
  StyledLink,
  StyledSpan,
} from "./ActionMenu.styled";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";

export default function ActionMenu() {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);

  function closeDropdown() {
    isActionMenuOpen && setIsActionMenuOpen(false);
  }

  const actionMenuItems = [
    {
      icon: materialContact,
      iconAlt: "Contact icon",
      title: "New contact",
      url: "/contacts/new",
    },
    {
      icon: materialMeeting,
      iconAlt: "Interaction icon",
      title: "New interaction",
      url: "/interactions/new",
    },
  ];

  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        isActionMenuOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setIsActionMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isActionMenuOpen]);

  return (
    <StyledActionMenu ref={ref}>
      {isActionMenuOpen ? null : <Tooltip id="action-menu-tooltip" />}
      <StyledImage
        src={materialPlus}
        width={30}
        height={30}
        alt="Create new &#8230; menu"
        aria-expanded={isActionMenuOpen ? "true" : "false"}
        onClick={() => setIsActionMenuOpen((prev) => !prev)}
        data-tooltip-id="action-menu-tooltip"
        data-tooltip-content="Create new &#8230;"
        data-tooltip-place="bottom"
      />
      {isActionMenuOpen && (
        <DropdownList>
          {actionMenuItems.map((actionMenuItem, index) => {
            return (
              <DropdownListItem key={index} onClick={closeDropdown}>
                <StyledLink href={actionMenuItem.url}>
                  <StyledSpan>
                    <Image
                      src={actionMenuItem.icon}
                      width={20}
                      height={20}
                      alt={actionMenuItem.iconAlt}
                    />
                    {actionMenuItem.title}
                  </StyledSpan>
                </StyledLink>
              </DropdownListItem>
            );
          })}
        </DropdownList>
      )}
    </StyledActionMenu>
  );
}
