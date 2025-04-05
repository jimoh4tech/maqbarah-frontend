import React, { useEffect, useState } from "react";
import {
  Box,
  chakra,
  Text,
  VStack,
  HStack,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaClock,
  FaCalendarAlt,
  FaHourglassHalf,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Wrap Framer Motion's motion.div with Chakra's chakra factory
const MotionBox = chakra(motion.div);

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

export const ComingSoon: React.FC = () => {
  // Set your desired launch date
  const launchDate = new Date("2025-08-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(launchDate)
  );

  const navigation = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(launchDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <Box
      position="relative"
      minH="100vh"
      bgImage='url("https://source.unsplash.com/1600x900/?mosque,islam")'
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "rgba(255,255,255,0.85)",
      }}
    >
      <VStack
        gap={8}
        textAlign="center"
        position="relative"
        zIndex={1}
        px={4}
        py={10}
      >
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ transition: "opacity 1s, transform 1s" }}
        >
          <Heading size="2xl" color={"green.600"}>
            🚀 Coming Soon
          </Heading>
        </MotionBox>
        <Text fontSize="xl" color={"gray.800"} maxW="lg">
          Welcome to the Maqbarah Directory – Your Guide to Verified Muslim
          Burial Grounds in Nigeria.
        </Text>
        <Text fontSize="md" color={"gray.800"} maxW="lg">
          We are diligently working to launch a platform where you can search
          for and submit Maqbarah locations across Nigeria. Join us as we build
          a community resource that honors Islamic burial practices.
        </Text>
        <HStack gap={6}>
          {[
            {
              label: "days",
              value: timeLeft.days,
              icon: <FaCalendarAlt size={20} />,
            },
            {
              label: "hours",
              value: timeLeft.hours,
              icon: <FaClock size={20} />,
            },
            {
              label: "minutes",
              value: timeLeft.minutes,
              icon: <FaHourglassHalf size={20} />,
            },
            {
              label: "seconds",
              value: timeLeft.seconds,
              icon: <FaClock size={20} />,
            },
          ].map((item) => (
            <VStack key={item.label}>
              <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Text fontSize="4xl" fontWeight="bold" color={"green.600"}>
                  {item.value.toString().padStart(2, "0")}
                </Text>
              </MotionBox>
              <HStack gap={1}>
                {item.icon}
                <Text fontSize="sm" textTransform="capitalize" color="gray.500">
                  {item.label}
                </Text>
              </HStack>
            </VStack>
          ))}
        </HStack>
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, delay: 0.5 },
          }}
        >
          <Button
            colorPalette="green"
            size="lg"
            onClick={() => navigation("")}
            asChild
          >
            <Flex>
              <FaWhatsapp />
              <a
                href="https://chat.whatsapp.com/FSfde03ZvuY5X4mx0F2jOe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Our WhatsApp Group
              </a>
            </Flex>
          </Button>
        </MotionBox>
      </VStack>
    </Box>
  );
};
