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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { toaster } from "../ui/toaster";

export function DirectorySubmissionForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    lga: "",
    state: "",
    contactPersonName: "",
    contactPersonPhone: "",
    picture: null as File | null, // To store the selected file
    additionalNotes: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        picture: e.target.files![0], // Store the File object
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        picture: null,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // In a real application, you would send this formData to your backend API.
    // Example of how you might prepare data for submission (e.g., using FormData for files)
    const dataToSend = new FormData();
    for (const key in formData) {
      if (key === "picture" && formData[key]) {
        dataToSend.append(key, formData[key] as File);
      } else if (key !== "picture") {
        dataToSend.append(key, (formData as any)[key]);
      }
    }

    console.log("Form Data to be sent:", formData); // Log for debugging

    // --- IMPORTANT: Backend Integration Placeholder ---
    // Replace this with your actual API call to your backend server.
    // Your backend will then handle sending the email to maqbarahdirectoryng@gmail.com
    try {
      // Example fetch call (replace with your actual backend endpoint)
      // const response = await fetch('/api/submit-directory-entry', {
      //   method: 'POST',
      //   body: dataToSend, // Use dataToSend for FormData
      // });

      // if (response.ok) {
      toaster.create({
        title: "Submission Successful!",
        description:
          "Your details have been received. We will get back to you soon.",
        type: "success",
        duration: 5000,
      });
      // Reset form after successful submission
      setFormData({
        name: "",
        address: "",
        city: "",
        lga: "",
        state: "",
        contactPersonName: "",
        contactPersonPhone: "",
        picture: null,
        additionalNotes: "",
      });
      // Clear file input manually if needed (for uncontrolled inputs)
      const fileInput = document.getElementById("picture") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      // } else {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || 'Failed to submit form.');
      // }
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
  };

  return (
    <Box
      as="section"
      py={{ base: "10", md: "20" }}
      bg="gray.50"
      color="gray.800"
    >
      <Container maxW="container.lg" px={{ base: "4", md: "8" }}>
        <VStack gap="8" align="stretch">
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            mb="4"
            textAlign="center"
            color="gray.700"
          >
            Submit Your Directory Details
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
            as="form"
            onSubmit={handleSubmit}
            bg="white"
            p={{ base: "6", md: "8", lg: "10" }}
            borderRadius="xl"
            shadow="xl"
          >
            <VStack gap="5">
              {/* Name */}
              <Field.Root id="name" required>
                <Field.Label>Name</Field.Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter maqbarah name"
                />
              </Field.Root>

              {/* Address */}
              <Field.Root id="address" required>
                <Field.Label>Address</Field.Label>
                <Input
                  type="address"
                  name="name"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter street address"
                />
              </Field.Root>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap="4" width="full">
                {/* City */}

                <Field.Root id="city" required>
                  <Field.Label>City</Field.Label>
                  <Input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter street address"
                  />
                </Field.Root>

                {/* LGA */}
                <Field.Root id="lga" required>
                  <Field.Label>LGA</Field.Label>
                  <Input
                    type="text"
                    name="lga"
                    value={formData.lga}
                    onChange={handleChange}
                    placeholder="Local Government Area"
                  />
                </Field.Root>

                {/* State */}
                <Field.Root id="state" required>
                  <Field.Label>State</Field.Label>
                  <Input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                  />
                </Field.Root>
              </SimpleGrid>

              {/* Contact Person Name */}
              <Field.Root id="contactPersonName" required>
                <Field.Label>Contact Person Name</Field.Label>
                <Input
                  type="text"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleChange}
                  placeholder="Name of contact person"
                />
              </Field.Root>

              {/* Contact Person Phone Number */}
              <Field.Root id="contactPersonPhone" required>
                <Field.Label>Contact Person Phone Number</Field.Label>
                <Input
                  type="text"
                  name="contactPersonPhone"
                  value={formData.contactPersonPhone}
                  onChange={handleChange}
                  placeholder="e.g., +2348012345678"
                />
              </Field.Root>

              {/* Picture Upload */}
              <Field.Root id="picture">
                <Field.Label>Upload Picture</Field.Label>
                <Input
                  type="file"
                  name="picture"
                  accept="image/*" // Accept only image files
                  onChange={handleFileChange}
                  p="2" // Add some padding for the file input
                  height="auto" // Adjust height for file input
                  //   sx={{
                  //     "::file-selector-button": {
                  //       border: "none",
                  //       outline: "none",
                  //       bg: "forest.100",
                  //       color: "forest.700",
                  //       borderRadius: "md",
                  //       px: "4",
                  //       py: "2",
                  //       mr: "3",
                  //       cursor: "pointer",
                  //     },
                  //   }}
                />
                {formData.picture && (
                  <Text mt="2" fontSize="sm" color="gray.600">
                    Selected file: {formData.picture.name}
                  </Text>
                )}
              </Field.Root>

              {/* Additional Notes */}
              <Field.Root id="additionalNotes">
                <Field.Label>Additional Notes</Field.Label>
                <Textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="Any additional information or special requests..."
                  size="lg"
                  rows={4}
                  resize="vertical"
                />
              </Field.Root>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                colorScheme="forest"
                width="full"
                py="7"
                borderRadius="lg"
                fontWeight="bold"
                shadow="md"
                _hover={{ bg: "forest.700", shadow: "lg" }}
                transition="all 0.2s"
                mt="6" // Margin top for separation
              >
                Submit Details
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
