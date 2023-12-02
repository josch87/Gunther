import {
  ListItem,
  StyledLink,
  StyledNavigation,
  UnorderedList,
} from "./MobileNavigation.styled";
import Image from "next/image";
import {
  materialContact,
  materialHome,
  materialMeeting,
} from "@/assets/Icons8";
import { useRouter } from "next/router";
import { Tooltip } from "react-tooltip";

export default function MobileNavigation() {
  const router = useRouter();
  const linksData = [
    {
      id: 1,
      title: "Dashboard",
      href: "/",
      icon: materialHome,
    },
    {
      id: 2,
      title: "Contacts",
      href: "/contacts",
      icon: materialContact,
    },
    {
      id: 3,
      title: "Interactions",
      href: "/interactions",
      icon: materialMeeting,
    },
  ];
  return (
    <StyledNavigation>
      <Tooltip id="mobile-navigation-tooltip" />
      <UnorderedList>
        {linksData.map((linkData) => {
          const isActive = router.pathname === linkData.href;
          return (
            <ListItem
              key={linkData.id}
              $active={isActive}
              aria-label={`${linkData.title} page`}
              data-tooltip-id="mobile-navigation-tooltip"
              data-tooltip-content={linkData.title}
              data-tooltip-place="top"
            >
              <StyledLink href={linkData.href}>
                <Image
                  src={linkData.icon}
                  width={30}
                  height={30}
                  alt={`${linkData.title} page`}
                />
              </StyledLink>
            </ListItem>
          );
        })}
      </UnorderedList>
    </StyledNavigation>
  );
}
