import { Box, Flex, For, Heading, Input, Text } from "@chakra-ui/react";
import { MaqCard } from "./maq-card";
import { RefObject, useState } from "react";
import { IMaqbarahCardProps } from "@/interface/maqbarah";

export const SearchSection = ({
  searchRef,
}: {
  searchRef: RefObject<HTMLDivElement | null>;
}) => {
  const [searchText, setSearchText] = useState("");
  const maqbarahData: IMaqbarahCardProps[] = [
    {
      id: "233",
      name: "IDIF Muslim Grave Yard",
      state: "Lagos",
      lga: "Ojo",
      imageUrl: "/images/idif-4.jpg", // Example image URL
      address: "Agric Street, Off Aratumi Bus-Stop",
      city: "Iba Newsite",
      landmark: "Aratumi Bus-Stop & Abanishe Bus-Stop",
      contactPersonName: "Aboo Ibrahim",
      contactPersonPhone: "+2347045989627",
      contactPersonRole: "Coordinator",
      typeOfOwnership: ["Society-Affliated"],
      alternativePhone: "",
      emergencyAccessAvailable: "Yes",
      managingBody: "Islamic Development International Foundation",
      openingHours: "8:00AM - 5:00PM",
      deceasedGroup: ["Open to All Muslims Only"],
      paymentType: ["Fixed Fee"],
      paymentDetails: "N30,000 to N40,000 including grave digging",
      paymentMethod: ["Cash","Bank Transfer"],
      availableServices: ["Ghusl","Grave Digging", "Janazah Prayer Site"],
      facilitiesAvailable: [
        "Water Source",
        "Ghusl (Washing) Room",
        "Waiting Area for Family",
        "Parking Space",
        "Security",
        "Accessible for Elderly",
      ],
      picture: null,
      additionalNotes: "",
      paymentDescription: "",
      type: "",
      fullName: "Aboo Yasir",
      email: "maq",
      phoneNumber: "+2348026992605",
    },
    // {
    //   id: 2,
    //   name: "Maqbarah B",
    //   state: "Kebbi",
    //   lga: "Makera",
    //   imageUrl: "/images/maq-2.png",
    // },
    // {
    //   id: 3,
    //   name: "Maqbarah C",
    //   state: "Abuja",
    //   lga: "Abuja Municipal",
    //   imageUrl: "/images/maq-3.png",
    // },
    // {
    //   id: 4,
    //   name: "Maqbarah F",
    //   state: "Lagos",
    //   lga: "Ikeja",
    //   imageUrl: "/images/maq-1.png", // Example image URL
    // },
    // {
    //   id: 5,
    //   name: "Maqbarah H",
    //   state: "Kano",
    //   lga: "Kano Municipal",
    //   imageUrl: "/images/maq-2.png",
    // },
    // {
    //   id: 6,
    //   name: "Maqbarah R",
    //   state: "Kwara",
    //   lga: "Ilorin",
    //   imageUrl: "/images/maq-3.png",
    // },
    // Add more maqbarah data as needed
  ];
  return (
    <Box
      bg="white"
      py={8}
      px={{ base: 4, md: 20 }}
      borderRadius="md"
      boxShadow="md"
      ref={searchRef}
    >
      <Flex direction={"column"} align="center" justify="space-between" gap={4}>
        <Heading
          as="h2"
          size={{ base: "lg", md: "2xl" }}
          mb={{ base: 4, md: 0 }}
        >
          Search for Maqbarah
        </Heading>
        <Text fontSize="md" color="gray.600" textAlign={"center"}>
          Find Muslim burial grounds across Nigeria using multiple search
          options
        </Text>

        <Input
          type="text"
          placeholder="Search by name, state, LGA, or GPS coordinates"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Flex gap={5} wrap="wrap" justify="center" mt={6}>
          <For
            each={maqbarahData.filter(
              (item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                item.address.toLowerCase().includes(searchText.toLowerCase()) ||
                item.lga.toLowerCase().includes(searchText.toLowerCase()) ||
                item.city.toLowerCase().includes(searchText.toLowerCase()) ||
                item.state.toLowerCase().includes(searchText.toLowerCase())
            )}
          >
            {(item) => <MaqCard key={item.id} details={item} />}
          </For>
        </Flex>
      </Flex>
    </Box>
  );
};
