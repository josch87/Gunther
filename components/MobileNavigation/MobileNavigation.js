import {
  ListItem,
  StyledLink,
  StyledNavigation,
  UnorderedList,
} from "./MobileNavigation.styled";
import Image from "next/image";
import { materialContact, materialMeeting } from "@/assets/Icons8";
import { useRouter } from "next/router";

export default function MobileNavigation() {
  const router = useRouter();
  const linksData = [
    {
      id: 1,
      title: "Contacts",
      href: "/",
      icon: materialContact,
    },
    {
      id: 2,
      title: "Interactions",
      href: "/interactions",
      icon: materialMeeting,
    },
  ];
  return (
    <StyledNavigation>
      <UnorderedList>
        {linksData.map((linkData) => {
          const isActive = router.pathname === linkData.href;

          return (
            <ListItem key={linkData.id} $active={isActive}>
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
