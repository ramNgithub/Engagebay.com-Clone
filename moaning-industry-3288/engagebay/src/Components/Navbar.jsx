// import {
//   HStack,
//   Box,
//   Image,
//   Stack,
//   MenuButton,
//   Button,
//   MenuList,
//   Menu,
//   MenuItem,
//   Text,
//   Flex,
// } from "@chakra-ui/react";
// import React from "react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <Stack h={{ sm: "40px", md: "40px", lg: "80px" }} border="1px solid red">
//         <HStack
//           justifyContent="space-between"
//           border="1px solid black"
//           w={["85%", "85%", "82%"]}
//           m="auto"
//           h="100%"
//         >
//           <Box border="0px solid green" width={["10%", "25%", "13%"]}>
//             <Link to="/">
//               <Image src="https://www.engagebay.com/new/assets/img/engagebay-logo.svg " />
//             </Link>
//           </Box>
//           <HStack border="0px solid red" justifyContent="space-evenly" w="70%">
//             <Menu>
//               <MenuButton
//                 bg="none"
//                 _hover={{ bg: "whitesmoke", color: "#573098" }}
//                 as={Button}
//                 rightIcon={<ChevronDownIcon />}
//               >
//                 Products
//               </MenuButton>
//               <MenuList>
//                 <Link to="/dialer">
//                   <MenuItem _hover={{ bg: "orange.200" }}>Calling</MenuItem>
//                 </Link>
//                 <MenuItem _hover={{ bg: "orange.200" }}>
//                   Email Signature
//                 </MenuItem>
//                 <MenuItem _hover={{ bg: "orange.200" }}>Email Tracker</MenuItem>
//                 <MenuItem _hover={{ bg: "orange.200" }}>
//                   Email Validator
//                 </MenuItem>
//                 <MenuItem _hover={{ bg: "orange.200" }}>
//                   Attend a Workshop
//                 </MenuItem>
//               </MenuList>
//             </Menu>
//             <Button
//               fontSize="15px"
//               bg="none"
//               _hover={{ bg: "whitesmoke", color: "#573098" }}
//             >
//               <Link to="/price">Pricing</Link>
//             </Button>
//             {/* <Menu> */}
//             {/* <MenuButton bg="none" _hover={{ bg: "none", "color": "#573098" }} as={Button} rightIcon={<ChevronDownIcon />}> */}
//             <Button
//               fontSize="15px"
//               bg="none"
//               _hover={{ bg: "whitesmoke", color: "#573098" }}
//             >
//               <Link to="/resource">Resource</Link>
//             </Button>
//             {/* </MenuButton> */}
//             {/* <MenuList  >
//                 <MenuItem _hover={{ bg: "orange.200" }}>UTM Builder</MenuItem>
//                 <MenuItem _hover={{ bg: "orange.200" }}>Email Signature</MenuItem>
//                 <MenuItem _hover={{ bg: "orange.200" }}>Email Tracker</MenuItem>
//                 <MenuItem _hover={{ bg: "orange.200" }}>Email Validator</MenuItem>
//                 <MenuItem _hover={{ bg: "orange.200" }}>Attend a Workshop</MenuItem>
//                 </MenuList> */}
//             {/* </Menu> */}
//             <Menu>
//               <MenuButton
//                 bg="none"
//                 _hover={{ bg: "whitesmoke", color: "#573098" }}
//                 as={Button}
//                 rightIcon={<ChevronDownIcon />}
//               >
//                 Free Tools
//               </MenuButton>
//               <MenuList>
//                 <MenuItem _hover={{ bg: "orange.200" }}>UTM Builder</MenuItem>
//                 <MenuItem _hover={{ bg: "orange.200" }}>
//                   Email Signature
//                 </MenuItem>
//                 <MenuItem _hover={{ bg: "orange.200" }}>Email Tracker</MenuItem>
//                 <MenuItem _hover={{ bg: "orange.200" }}>
//                   Email Validator
//                 </MenuItem>
//                 <MenuItem _hover={{ bg: "orange.200" }}>
//                   Attend a Workshop
//                 </MenuItem>
//               </MenuList>
//             </Menu>
//             <Button
//               onClick={() => navigate("/blog")}
//               fontSize="15px"
//               _hover={{ bg: "whitesmoke", color: "#573098" }}
//             >
//               Blog
//             </Button>
//             {auth === "" ? (
//               <Flex gap="3">
//                 <Button
//                   fontSize="15px"
//                   _hover={{ bg: "whitesmoke", color: "#573098" }}
//                   onClick={() => {
//                     navigate("login");
//                   }}
//                 >
//                   Login
//                 </Button>
//                 <Button
//                   padding="20px 20px 20px 20px"
//                   bg="#6639B3"
//                   fontSize="15px"
//                   h="30px"
//                   w="98px"
//                   _hover={{ bg: "#6639B3" }}
//                   color="white"
//                 >
//                   Free Demo
//                 </Button>
//                 <Button
//                   padding="20px 20px 20px 20px"
//                   bg="#FF885E"
//                   fontSize="15px"
//                   h="30px"
//                   w="98px"
//                   border="0px solid red"
//                   _hover={{ bg: "#FF885E" }}
//                   color="white"
//                 >
//                   <Link to="/signup">Free SignUp</Link>
//                 </Button>
//               </Flex>
//             ) : (
//               <Flex gap="3">
//                 <Text fontWeight="bold">Ok@gmail.com</Text>
//                 <Text fontWeight="bold">Logout</Text>
//               </Flex>
//             )}
//           </HStack>
//         </HStack>
//       </Stack>
//     </>
//   );
// };

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
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [auth, setAuth] = useState("");

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
              w={{sm:"100%", md:"60%", lg:"40%"}}
              src="https://www.engagebay.com/new/assets/img/engagebay-logo.svg"
            />
          </NavLink>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

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
            <Text fontWeight="bold">Ok@gmail.com</Text>
            <Text fontWeight="bold" cursor="pointer">Logout</Text>
          </Flex>
        )}
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
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
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
