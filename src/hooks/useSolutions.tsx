import { translate } from "@docusaurus/Translate";
import {
  IconAsset,
  IconBooks,
  IconCar,
  IconClipboardText,
  IconCompass,
  IconCpu,
  IconHeartbeat,
  IconPlant2,
  IconSeeding,
  IconShieldCheck,
  IconShoppingBag,
  IconTreadmill,
  IconTruckLoading,
  IconUsers,
} from "@tabler/icons-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useSolutions = () => [
  {
    icon: <IconSeeding size={56} stroke={2} />,
    link: "/solutions/agriculture-and-animal-health",
    title: translate({
      id: "solutions.agricultureAndAnimalHealth.title",
      message: "Agriculture and Animal Health",
    }),
    description: translate({
      id: "solutions.agricultureAndAnimalHealth.description",
      message:
        "A bustling multi-specialty clinic offers services ranging from general practice to specialized treatments. ZenSched helps managing appointments for numerous doctors with varying schedules, handling last-minute cancellations, and accommodating emergency visits present significant challenges.",
    }),
  },
  {
    icon: <IconPlant2 size={56} stroke={2} />,
    link: "/solutions/beauty-salons",
    title: translate({
      id: "solutions.beautySalons.title",
      message: "Beauty Salons",
    }),
    description: translate({
      id: "solutions.beautySalons.description",
      message:
        "A busy beauty salon offers a wide range of services, including haircuts, coloring, styling, manicures, pedicures, facials, and massages. Each service requires different durations, specialized staff, and sometimes specific equipment or rooms. ZenSched can help in assigning services to staff members qualified to perform them, preventing scheduling errors or managing the availability of specific resources like treatment rooms or styling chairs to avoid double bookings.",
    }),
  },
  {
    icon: <IconUsers size={56} stroke={2} />,
    link: "/solutions/coworking-space-management",
    title: translate({
      id: "solutions.coworkingSpaceManagement.title",
      message: "Coworking Spaces",
    }),
    description: translate({
      id: "solutions.coworkingSTypographyaceManagement.description",
      message:
        "A co-working space provides members with the ability to book conference rooms and shared facilities. ZenSched helps with managing bookings across multiple locations and prevent scheduling conflicts.",
    }),
  },
  {
    icon: <IconShoppingBag size={56} stroke={2} />,
    link: "/solutions/ecommerce-and-retail",
    title: translate({
      id: "solutions.ecommerceAndRetail.title",
      message: "E-commerce & Retail",
    }),
    description: translate({
      id: "solutions.ecommerceAndRetail.description",
      message:
        "An online platform offers live classes across different time zones with instructors worldwide. ZenSched helps coordinating class times, managing instructor availability, and handling student bookings.",
    }),
  },
  {
    icon: <IconBooks size={56} stroke={2} />,
    link: "/solutions/education",
    title: translate({
      id: "solutions.education.title",
      message: "Education",
    }),
    description: translate({
      id: "solutions.education.description",
      message:
        "An online education platform offers live classes across different time zones with instructors worldwide. ZenSched helps coordinating class times, managing instructor availability, and handling student bookings.",
    }),
  },
  {
    icon: <IconShieldCheck size={56} stroke={2} />,
    link: "/solutions/finance-and-insurance",
    title: translate({
      id: "solutions.financeAndInsurance.title",
      message: "Finance & Insurance",
    }),
    description: translate({
      id: "solutions.financeAndInsurance.description",
      message:
        "An online finance and insurance platform offers live classes across different time zones with instructors worldwide. ZenSched helps coordinating class times, managing instructor availability, and handling student bookings.",
    }),
  },
  {
    icon: <IconTreadmill size={56} stroke={2} />,
    link: "/solutions/health-and-fitness",
    title: translate({
      id: "solutions.healthAndFitness.title",
      message: "Health & Fitness",
    }),
    description: translate({
      id: "solutions.healthAndFitness.description",
      message:
        "An online finance and insurance platform offers live classes across different time zones with instructors worldwide. ZenSched helps coordinating class times, managing instructor availability, and handling student bookings.",
    }),
  },
  {
    icon: <IconHeartbeat size={56} stroke={2} />,
    link: "/solutions/healthcare",
    title: translate({
      id: "solutions.healthcare.title",
      message: "Healthcare",
    }),
    description: translate({
      id: "solutions.healthcare.description",
      message:
        "A bustling multi-specialty clinic offers services ranging from general practice to specialized treatments. ZenSched helps managing appointments for numerous doctors with varying schedules, handling last-minute cancellations, and accommodating emergency visits present significant challenges.",
    }),
  },
  {
    icon: <IconAsset size={56} stroke={2} />,
    link: "/solutions/industrial-and-manufacturing",
    title: translate({
      id: "solutions.industrialAndManufacturing.title",
      message: "Industrial & Manufacturing",
    }),
    description: translate({
      id: "solutions.industrialAndManufacturing.description",
      message:
        "A bustling multi-specialty clinic offers services ranging from general practice to specialized treatments. ZenSched helps managing appointments for numerous doctors with varying schedules, handling last-minute cancellations, and accommodating emergency visits present significant challenges.",
    }),
  },
  {
    icon: <IconTruckLoading size={56} stroke={2} />,
    link: "/solutions/logistic-and-supply-chain",
    title: translate({
      id: "solutions.logisticAndSupplyChain.title",
      message: "Logistic & Supply Chain",
    }),
    description: translate({
      id: "solutions.logisticAndSupplyChain.description",
      message:
        "A bustling multi-specialty clinic offers services ranging from general practice to specialized treatments. ZenSched helps managing appointments for numerous doctors with varying schedules, handling last-minute cancellations, and accommodating emergency visits present significant challenges.",
    }),
  },
  {
    icon: <IconClipboardText size={56} stroke={2} />,
    link: "/solutions/recruitment-and-staffing",
    title: translate({
      id: "solutions.recruitmentAndStaffing.title",
      message: "Recruitment & Staffing",
    }),
    description: translate({
      id: "solutions.recruitmentAndStaffing.description",
      message:
        "A bustling multi-specialty clinic offers services ranging from general practice to specialized treatments. ZenSched helps managing appointments for numerous doctors with varying schedules, handling last-minute cancellations, and accommodating emergency visits present significant challenges.",
    }),
  },
  {
    icon: <IconCar size={56} stroke={2} />,
    link: "/solutions/ride-sharing",
    title: translate({
      id: "solutions.rideSharingService.title",
      message: "Ride Sharing",
    }),
    description: translate({
      id: "solutions.rideSharingService.description",
      message:
        "A rapidly growing ride-sharing service operates in multiple cities, connecting passengers with drivers via a mobile app. The service faces complex scheduling challenges, such as adhering to local laws regarding driver working hour and mandatory breaks ZenSched helps streamline scheduling processes, reducing administrative overhead and manual interventions optimizing operations.",
    }),
  },
  {
    icon: <IconCpu size={56} stroke={2} />,
    link: "/solutions/tech-and-software",
    title: translate({
      id: "solutions.techAndSoftware.title",
      message: "Tech & Software",
    }),
    description: translate({
      id: "solutions.techAndSoftware.description",
      message:
        "A rapidly growing ride-sharing service operates in multiple cities, connecting passengers with drivers via a mobile app. The service faces complex scheduling challenges, such as adhering to local laws regarding driver working hour and mandatory breaks ZenSched helps streamline scheduling processes, reducing administrative overhead and manual interventions optimizing operations.",
    }),
  },
  {
    icon: <IconCompass size={56} stroke={2} />,
    link: "/solutions/travel-and-tourism",
    title: translate({
      id: "solutions.travelAndTourism.title",
      message: "Travel & Tourism",
    }),
    description: translate({
      id: "solutions.travelAndTourism.description",
      message:
        "A rapidly growing ride-sharing service operates in multiple cities, connecting passengers with drivers via a mobile app. The service faces complex scheduling challenges, such as adhering to local laws regarding driver working hour and mandatory breaks ZenSched helps streamline scheduling processes, reducing administrative overhead and manual interventions optimizing operations.",
    }),
  },
];

export default useSolutions;
