import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
import { PrivacyPolicy } from "@/pages/privacy-policy";
import { LandingPage } from "@/pages/landing";
import NotFoundPage from "@/pages/not-found";
import { Layout } from "@/layout/layout";

export const Router = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const contactUsRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const submitRef = useRef<HTMLDivElement | null>(null);
  const resourcesRef = useRef<HTMLDivElement | null>(null);
  const donateRef = useRef<HTMLDivElement | null>(null);
  const refs = [
    heroRef,
    searchRef,
    submitRef,
    resourcesRef,
    donateRef,
    contactUsRef,
  ];
  return (
    <Routes>
      <Route path="/" element={<Layout refs={refs} />}>
        <Route index element={<LandingPage refs={refs} />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
