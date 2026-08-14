import type { Metadata } from "next";
import HomePageModern from "@/components/HomePageModern";

export const metadata: Metadata = {
  title: "dSuper SMSF | Expert SMSF Administration Services Australia",
  description:
    "CPA-led SMSF administration services for Financial Planners, Accountants & Direct Trustees. Flat fee pricing, registered tax agent, independent & unbiased.",
};

export default function HomePage() {
  return <HomePageModern />;
}
