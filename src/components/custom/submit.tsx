import {
  Box,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  Container,
  Field,
  createListCollection,
  Select,
  Portal,
} from "@chakra-ui/react";
import { RefObject } from "react";
import { toaster } from "../ui/toaster";
import { send } from "@emailjs/browser";
import { useFormik } from "formik";

export function DirectorySubmissionForm({
  submitRef,
}: {
  submitRef: RefObject<HTMLDivElement | null>;
}) {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      city: "",
      lga: "",
      state: "",
      landmark: "",
      contactPersonName: "",
      contactPersonRole: "",
      contactPersonPhone: "",
      alternativePhone: "",
      images: null, // To store the selected file
      additionalNotes: "",
      paymentDescription: "",
      type: "",
      managingBody: "",
      openingHours: "",
      emergencyAccessAvailable: [""],
      deceasedGroup: [""],
      typeOfOwnership: [""],
      paymentType: [""],
      paymentDetails: "",
      paymentMethod: [""],
      availableServices: [""],
      facilitiesAvailable: [""],
      fullName: "",
      email: "",
      phoneNumber: "",
    },
    async onSubmit(values) {
      console.log(values);
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
      const APIkey = import.meta.env.VITE_EMAILJS_API_KEY || "";

      try {
        await send(serviceID, "contact_me", values, APIkey);
        // if (response.ok) {
        toaster.create({
          title: "Submission Successful!",
          description:
            "Your details have been received. Kindly send the images to us maqbarahdirectoryng@gmail.com",
          type: "success",
          duration: 5000,
        });
        // Reset form after successful submission
        formik.setValues({
          name: "",
          address: "",
          city: "",
          lga: "",
          state: "",
          landmark: "",
          contactPersonName: "",
          contactPersonPhone: "",
          images: null,
          additionalNotes: "",
          paymentDescription: "",
          alternativePhone: "",
          type: "",
          managingBody: "",
          openingHours: "",
          availableServices: [""],
          facilitiesAvailable: [""],
          emergencyAccessAvailable: [""],
          deceasedGroup: [""],
          typeOfOwnership: [""],
          paymentType: [""],
          paymentDetails: "",
          paymentMethod: [""],
          contactPersonRole: "",
          fullName: "",
          email: "",
          phoneNumber: "",
        });
        // Clear file input manually if needed (for uncontrolled inputs)
        const fileInput = document.getElementById(
          "picture"
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } catch (error: any) {
        console.error("Submission error:", error);
        toaster.create({
          title: "Submission Failed.",
          description:
            error.message ||
            "There was an error submitting your details. Please try again.",
          type: "error",
          duration: 5000,
        });
      }
    },
  });
  const typeOfOwnership = createListCollection({
    items: [
      { label: "Public", value: "Public" },
      { label: "Private", value: "Private" },
      { label: "Community Managed", value: "Community Managed" },
      { label: "Mosque Affliated", value: "Mosque Affliated" },
      { label: "Society Affliated", value: "Society Affliated" },
    ],
  });
  const deceasedGroup = createListCollection({
    items: [
      { label: "Adults", value: "Adults" },
      { label: "Children/Infact", value: "Children/Infact" },
      { label: "Only Muslims", value: "Only Muslims" },
      { label: "Local Residents Only", value: "Local Residents Only" },
      { label: "Open to All", value: "Open to All" },
    ],
  });
  const paymentType = createListCollection({
    items: [
      { label: "Free", value: "Free" },
      { label: "Donation Based", value: "Donation Based" },
      { label: "Fixed Fees", value: "Fixed Fees" },
    ],
  });
  const paymentMethod = createListCollection({
    items: [
      { label: "Cash", value: "Cash" },
      { label: "Bank Transfer", value: "Bank Transfer" },
      { label: "Online Payment", value: "Online Payment" },
    ],
  });
  const availableServices = createListCollection({
    items: [
      { label: "Ghusl (ritual washing)", value: "Ghusl (ritual washing)" },
      { label: "Kafan (shrouding)", value: "Kafan (shrouding)" },
      { label: "Grave digging", value: "Grave digging" },
      { label: "Janazah Prayer Site", value: "Janazah Prayer Site" },
      { label: "Transport Assistance", value: "Transport Assistance" },
    ],
  });
  const facilitiesAvailable = createListCollection({
    items: [
      { label: "Water Source", value: "Water Source" },
      { label: "Ghusl (Washing) Rooom", value: "Ghusl (Washing) Rooom" },
      { label: "Shelter / Shade", value: "Shelter / Shade" },
      { label: "Waiting area for Family", value: "Waiting area for Family" },
      { label: "Parking Space", value: "Parking Space" },
      { label: "Security", value: "Security" },
      { label: "Accessible for elderly", value: "Accessible for elderly" },
    ],
  });
  const emergencyAvailable = createListCollection({
    items: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
    ],
  });

  return (
    <Box
      as="section"
      py={{ base: "10", md: "20" }}
      bg="gray.50"
      color="gray.800"
      ref={submitRef}
    >
      <Container maxW="container.lg" px={{ base: "4", md: "8" }}>
        <VStack gap="4" align="stretch">
          <Heading
            as="h2"
            size={{ base: "lg", md: "2xl" }}
            mb={{ base: 4, md: 0 }}
            textAlign={"center"}
          >
            Submit A Maqbarah Details
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            textAlign="center"
            mb="6"
          >
            Please fill out the form below to submit your information for our
            directory.
          </Text>

          <Box
            bg="white"
            p={{ base: "6", md: "8", lg: "10" }}
            borderRadius="xl"
            shadow="xl"
          >
            <form onSubmit={formik.handleSubmit}>
              <VStack gap="5">
                <Text fontWeight={"bold"} color="gray.500">
                  Section 1: Basic Information
                </Text>
                {/* Name */}
                <Field.Root id="name" required>
                  <Field.Label>Name</Field.Label>
                  <Input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="Enter maqbarah name"
                  />
                </Field.Root>

                {/* Address */}
                <Field.Root id="address" required>
                  <Field.Label>Address</Field.Label>
                  <Input
                    type="address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    placeholder="Enter street address and area"
                  />
                </Field.Root>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap="4" width="full">
                  {/* City */}

                  <Field.Root id="city" required>
                    <Field.Label>City</Field.Label>
                    <Input
                      type="text"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      placeholder="Enter city or town"
                    />
                  </Field.Root>

                  {/* LGA */}
                  <Field.Root id="lga" required>
                    <Field.Label>LGA</Field.Label>
                    <Input
                      type="text"
                      name="lga"
                      value={formik.values.lga}
                      onChange={formik.handleChange}
                      placeholder="Local Government Area"
                    />
                  </Field.Root>

                  {/* State */}
                  <Field.Root id="state" required>
                    <Field.Label>State</Field.Label>
                    <Input
                      type="text"
                      name="state"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      placeholder="State"
                    />
                  </Field.Root>
                </SimpleGrid>
                {/* Address */}
                <Field.Root id="landmark" required>
                  <Field.Label>Nearby Landmark(s)</Field.Label>
                  <Input
                    type="landmark"
                    name="landmark"
                    value={formik.values.landmark}
                    onChange={formik.handleChange}
                    placeholder="Enter landmark"
                  />
                </Field.Root>
                <Text fontWeight={"bold"} color="gray.500">
                  Section 2: Contact Information
                </Text>
                {/* Contact Person Name */}
                <Field.Root id="contactPersonName" required>
                  <Field.Label>Contact Person Name</Field.Label>
                  <Input
                    type="text"
                    name="contactPersonName"
                    value={formik.values.contactPersonName}
                    onChange={formik.handleChange}
                    placeholder="Name of contact person"
                  />
                </Field.Root>

                {/* Contact Person Phone Number */}
                <Field.Root id="contactPersonPhone" required>
                  <Field.Label>Contact Person Phone Number</Field.Label>
                  <Input
                    type="text"
                    name="contactPersonPhone"
                    value={formik.values.contactPersonPhone}
                    onChange={formik.handleChange}
                    placeholder="e.g., +2348012345678"
                  />
                </Field.Root>
                {/* Contact Person Phone Number */}
                <Field.Root id="contactPersonRole" required>
                  <Field.Label>Contact Person Role</Field.Label>
                  <Input
                    type="text"
                    name="contactPersonRole"
                    value={formik.values.contactPersonRole}
                    onChange={formik.handleChange}
                    placeholder="Caretaker, Manager, etc."
                  />
                </Field.Root>
                <Text fontWeight={"bold"} color="gray.500">
                  Section 3: Management & Ownership
                </Text>
                <Field.Root id="typeOfOwnership" required>
                  <Select.Root
                    multiple
                    collection={typeOfOwnership}
                    size="sm"
                    name="typeOfOwnership"
                    value={formik.values.typeOfOwnership}
                    onValueChange={(e: { value: any }) =>
                      formik.setFieldValue("typeOfOwnership", e.value)
                    }
                  >
                    <Select.HiddenSelect />
                    <Select.Label>Type of Ownership</Select.Label>
                    <Select.Control>
                      <Select.Trigger>
                        <Select.ValueText placeholder="Select type" />
                      </Select.Trigger>
                      <Select.IndicatorGroup>
                        <Select.Indicator />
                      </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                      <Select.Positioner>
                        <Select.Content>
                          {typeOfOwnership.items.map((framework) => (
                            <Select.Item item={framework} key={framework.value}>
                              {framework.label}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Portal>
                  </Select.Root>
                  <Field.Root id="managingBody" required>
                    <Field.Label>Managing Body</Field.Label>
                    <Input
                      type="text"
                      name="managingBody"
                      value={formik.values.managingBody}
                      onChange={formik.handleChange}
                      placeholder="Enter name of managing body"
                    />
                  </Field.Root>
                </Field.Root>

                <Text fontWeight={"bold"} color="gray.500">
                  Section 4: Burial Details
                </Text>
                <Field.Root id="openingHours" required>
                  <Field.Label>Opening & Closing Times</Field.Label>
                  <Input
                    type="text"
                    name="openingHours"
                    value={formik.values.openingHours}
                    onChange={formik.handleChange}
                    placeholder="7:00AM - 5:30PM"
                  />
                </Field.Root>
                <Field.Root id="type" required>
                  <Select.Root
                    collection={emergencyAvailable}
                    size="sm"
                    name="emergencyAvailable"
                    value={formik.values.emergencyAccessAvailable}
                    onValueChange={(e: { value: any }) =>
                      formik.setFieldValue("emergencyAvailable", e.value)
                    }
                  >
                    <Select.HiddenSelect />
                    <Select.Label>Emergency Available</Select.Label>
                    <Select.Control>
                      <Select.Trigger>
                        <Select.ValueText placeholder="Select type" />
                      </Select.Trigger>
                      <Select.IndicatorGroup>
                        <Select.Indicator />
                      </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                      <Select.Positioner>
                        <Select.Content>
                          {emergencyAvailable.items.map((framework) => (
                            <Select.Item item={framework} key={framework.value}>
                              {framework.label}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Portal>
                  </Select.Root>
                </Field.Root>
                <Field.Root id="deceasedGroup" required>
                  <Select.Root
                    multiple
                    collection={deceasedGroup}
                    size="sm"
                    name="deceasedGroup"
                    value={formik.values.deceasedGroup}
                    onValueChange={(e: { value: any }) =>
                      formik.setFieldValue("deceasedGroup", e.value)
                    }
                  >
                    <Select.HiddenSelect />
                    <Select.Label>Who Can Be Burried?</Select.Label>
                    <Select.Control>
                      <Select.Trigger>
                        <Select.ValueText placeholder="Select type" />
                      </Select.Trigger>
                      <Select.IndicatorGroup>
                        <Select.Indicator />
                      </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                      <Select.Positioner>
                        <Select.Content>
                          {deceasedGroup.items.map((framework) => (
                            <Select.Item item={framework} key={framework.value}>
                              {framework.label}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Portal>
                  </Select.Root>
                </Field.Root>
                <Text fontWeight={"bold"} color="gray.500">
                  Section 5: Fees / Payment
                </Text>
                <Field.Root id="paymentType" required>
                  <Select.Root
                    multiple
                    collection={paymentType}
                    size="sm"
                    name="paymentType"
                    value={formik.values.paymentType}
                    onValueChange={(e: { value: any }) =>
                      formik.setFieldValue("paymentType", e.value)
                    }
                  >
                    <Select.HiddenSelect />
                    <Select.Label>Is Burial Free or Paid?</Select.Label>
                    <Select.Control>
                      <Select.Trigger>
                        <Select.ValueText placeholder="Select type" />
                      </Select.Trigger>
                      <Select.IndicatorGroup>
                        <Select.Indicator />
                      </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                      <Select.Positioner>
                        <Select.Content>
                          {paymentType.items.map((framework) => (
                            <Select.Item item={framework} key={framework.value}>
                              {framework.label}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Portal>
                  </Select.Root>
                </Field.Root>

                <Field.Root id="paymentDescription">
                  <Field.Label>If Paid, State Charges</Field.Label>
                  <Textarea
                    name="paymentDescription"
                    value={formik.values.paymentDescription}
                    onChange={formik.handleChange}
                    placeholder="Enter charges breakdown including grave digging, ghusl, etc."
                    size="lg"
                    rows={2}
                    resize="vertical"
                  />
                </Field.Root>
                <Field.Root id="paymentMethod" required>
                  <Select.Root
                    multiple
                    collection={paymentMethod}
                    size="sm"
                    name="paymentMethod"
                    value={formik.values.paymentMethod}
                    onValueChange={(e: { value: any }) =>
                      formik.setFieldValue("paymentMethod", e.value)
                    }
                  >
                    <Select.HiddenSelect />
                    <Select.Label>Payment Method Accepted</Select.Label>
                    <Select.Control>
                      <Select.Trigger>
                        <Select.ValueText placeholder="Select type" />
                      </Select.Trigger>
                      <Select.IndicatorGroup>
                        <Select.Indicator />
                      </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                      <Select.Positioner>
                        <Select.Content>
                          {paymentMethod.items.map((framework) => (
                            <Select.Item item={framework} key={framework.value}>
                              {framework.label}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Portal>
                  </Select.Root>
                </Field.Root>
                <Text fontWeight={"bold"} color="gray.500">
                  Section 6: Services & Facilities
                </Text>
                <Field.Root id="typavailableServicese" required>
                  <Select.Root
                    multiple
                    collection={availableServices}
                    size="sm"
                    name="availableServices"
                    value={formik.values.availableServices}
                    onValueChange={(e: { value: any }) =>
                      formik.setFieldValue("availableServices", e.value)
                    }
                  >
                    <Select.HiddenSelect />
                    <Select.Label>Available Services</Select.Label>
                    <Select.Control>
                      <Select.Trigger>
                        <Select.ValueText placeholder="Select type" />
                      </Select.Trigger>
                      <Select.IndicatorGroup>
                        <Select.Indicator />
                      </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                      <Select.Positioner>
                        <Select.Content>
                          {availableServices.items.map((framework) => (
                            <Select.Item item={framework} key={framework.value}>
                              {framework.label}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Portal>
                  </Select.Root>
                </Field.Root>
                <Field.Root id="facilitiesAvailable" required>
                  <Select.Root
                    multiple
                    collection={facilitiesAvailable}
                    size="sm"
                    name="facilitiesAvailable"
                    value={formik.values.facilitiesAvailable}
                    onValueChange={(e: { value: any }) =>
                      formik.setFieldValue("facilitiesAvailable", e.value)
                    }
                  >
                    <Select.HiddenSelect />
                    <Select.Label>Facilities Available</Select.Label>
                    <Select.Control>
                      <Select.Trigger>
                        <Select.ValueText placeholder="Select type" />
                      </Select.Trigger>
                      <Select.IndicatorGroup>
                        <Select.Indicator />
                      </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                      <Select.Positioner>
                        <Select.Content>
                          {facilitiesAvailable.items.map((framework) => (
                            <Select.Item item={framework} key={framework.value}>
                              {framework.label}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Portal>
                  </Select.Root>
                </Field.Root>
                <Text fontWeight={"bold"} color="gray.500">
                  Section 7: Visual & Final Notes
                </Text>
                {/* Picture Upload */}
                {/* <Field.Root id="images">
                  <Field.Label>Upload Picture</Field.Label>
                  <FileUpload.Root
                    maxW="full"
                    alignItems="stretch"
                    maxFiles={10}
                    accept={[".png", ".jpg", ".jpeg", ".gif"]}
                    maxFileSize={1024 * 1024 * 5}
                    name="images"
                    onFileChange={(e: { acceptedFiles: any[] }) =>
                      formik.setFieldValue("images", e.acceptedFiles[0])
                    }
                  >
                    <FileUpload.HiddenInput />
                    <FileUpload.Dropzone>
                      <Icon size="md" color="fg.muted">
                        <LuUpload />
                      </Icon>
                      <FileUpload.DropzoneContent>
                        <Box>Drag and drop files here</Box>
                        <Box color="fg.muted">.png, .jpg up to 5MB</Box>
                      </FileUpload.DropzoneContent>
                    </FileUpload.Dropzone>
                    <FileUpload.List />
                  </FileUpload.Root>
                </Field.Root> */}

                {/* Additional Notes */}
                <Field.Root id="additionalNotes">
                  <Field.Label>Additional Notes</Field.Label>
                  <Textarea
                    name="additionalNotes"
                    value={formik.values.additionalNotes}
                    onChange={formik.handleChange}
                    placeholder="Any additional information or special requests..."
                    size="lg"
                    rows={4}
                    resize="vertical"
                  />
                </Field.Root>
                <Text fontWeight={"bold"} color="gray.500">
                  Section 8: This form was filled by
                </Text>
                {/* Name */}
                <Field.Root id="fullName" required>
                  <Field.Label>Full Name</Field.Label>
                  <Input
                    type="text"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    placeholder="Enter your fullname"
                  />
                </Field.Root>

                {/* Phone */}
                <Field.Root id="phoneNumber" required>
                  <Field.Label>Phone Number</Field.Label>
                  <Input
                    type="tel"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    placeholder="Enter your phone number"
                  />
                </Field.Root>
                <Field.Root id="email" required>
                  <Field.Label>Email</Field.Label>
                  <Input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Enter your email address"
                  />
                </Field.Root>
                {/* Submit Button */}
                <Button
                  type="submit"
                  colorPalette="forest"
                  transition="all 0.2s"
                  mt="6" // Margin top for separation
                  w={"full"}
                  color={"white"}
                  loading={formik.isSubmitting}
                >
                  Submit Details
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
