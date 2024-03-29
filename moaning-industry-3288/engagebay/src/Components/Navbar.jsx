import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [auth, setAuth] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const Email = localStorage.getItem("email");
    if (token) {
      setAuth(token);
      setemail(Email);
    }
  }, []);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <NavLink to="/">
            <Image
              w={{ sm: "100%", md: "60%", lg: "40%" }}
              src="https://www.engagebay.com/new/assets/img/engagebay-logo.svg"
            />
          </NavLink>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Box>
          {auth === "" ? (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={4}
            >
              <NavLink to="/login">
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"md"}
                  fontWeight={600}
                  color={"white"}
                  bg={"pink.400"}
                  href={"#"}
                  _hover={{
                    bg: "pink.300",
                  }}
                >
                  Sign In
                </Button>
              </NavLink>
              <NavLink to="/signup">
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"md"}
                  fontWeight={600}
                  color={"white"}
                  bg={"pink.400"}
                  href={"#"}
                  _hover={{
                    bg: "pink.300",
                  }}
                >
                  Sign Up
                </Button>
              </NavLink>
            </Stack>
          ) : (
            <Flex gap="3">
              <Text fontWeight="bold" display={{ base: "none", md:"flex", lg:"flex" }}>{email}</Text>
              <Text display={{ base: "none", md:"flex", lg:"flex" }}
                fontWeight="bold"
                cursor="pointer"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                Logout
              </Text>
            </Flex>
          )}
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"lg"}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  const [auth, setAuth] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const Email = localStorage.getItem("email");
    if (token) {
      setAuth(token);
      setemail(Email);
    }
  }, [auth, email]);

  return (
    <Stack 
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      <Box>
        {auth === "" ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={4}
          >
            <NavLink to="/login">
              <Button
                fontSize={"md"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                href={"#"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                Sign In
              </Button>
            </NavLink>
            <NavLink to="/signup">
              <Button
                fontSize={"md"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                href={"#"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                Sign Up
              </Button>
            </NavLink>
          </Stack>
        ) : (
          <Flex gap="3">
            <Text fontWeight="bold">{email}</Text>
            <Text
              fontWeight="bold"
              cursor="pointer"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
            >
              Logout
            </Text>
          </Flex>
        )}
      </Box>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Products",
    children: [
      {
        label: "Calling",
        subLabel: "Auto Dialer Software",
        href: "/dialer",
      },
      {
        label: "Resources",
        subLabel: "Best practices and helpful guides to grow your business",
        href: "/resource",
      },
    ],
  },
  {
    label: "Free Tools",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/price",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

// export default Navbar;
