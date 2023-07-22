import {
  materialContact,
  materialMeeting,
  materialPlus,
} from "@/assets/Icons8";
import Image from "next/image";
import Link from "next/link";
import {
  Dropdown,
  DropdownContainer,
  DropdownItem,
  StyledActionMenu,
  StyledLink,
  StyledSpan,
} from "./ActionMenu.styled";
import { useEffect, useRef, useState } from "react";

export default function ActionMenu() {
  const [dropdown, setDropdown] = useState(false);

  function closeDropdown() {
    dropdown && setDropdown(false);
  }

  const actionMenuItems = [
    {
      icon: materialContact,
      iconAlt: "Contact icon",
      title: "New contact",
      url: "/new",
    },
    {
      icon: materialMeeting,
      iconAlt: "Interaction icon",
      title: "New interaction",
      url: "/interactions/new",
    },
  ];

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <StyledActionMenu ref={ref}>
      <Image
        src={materialPlus}
        width={30}
        height={30}
        alt="Add new contact"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}
        // ref={ref}
      />
      {dropdown ? (
        <Dropdown>
          {actionMenuItems.map((actionMenuItem, index) => {
            return (
              <DropdownItem key={index} onClick={closeDropdown}>
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
              </DropdownItem>
            );
          })}
        </Dropdown>
      ) : null}
      {/* <Link href="/new">
        <Image
          src={materialPlus}
          width={30}
          height={30}
          alt="Add new contact"
        />
      </Link> */}
    </StyledActionMenu>
  );
}
