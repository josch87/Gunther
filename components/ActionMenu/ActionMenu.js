import { materialPlus } from "@/assets/Icons8";
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
import { useState } from "react";

export default function ActionMenu() {
  const [dropdown, setDropdown] = useState(false);

  const actionMenuItems = [
    { title: "New contact", url: "/new" },
    { title: "New interaction", url: "/interactions/new" },
  ];

  return (
    <StyledActionMenu>
      <Image src={materialPlus} width={30} height={30} alt="Add new contact" />
      <Dropdown>
        {actionMenuItems.map((actionMenuItem, index) => {
          return (
            <DropdownItem key={index}>
              <StyledLink href={actionMenuItem.url}>
                <StyledSpan>{actionMenuItem.title}</StyledSpan>
              </StyledLink>
            </DropdownItem>
          );
        })}
      </Dropdown>
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
