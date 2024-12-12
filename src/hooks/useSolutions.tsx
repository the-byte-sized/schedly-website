import { translate } from "@docusaurus/Translate";
import {
  IconAsset,
  IconBooks,
  IconChefHat,
  IconClipboardText,
  IconCompass,
  IconCpu,
  IconHeartbeat,
  IconPaw,
  IconPlant2,
  IconShieldCheck,
  IconShoppingBag,
  IconTreadmill,
  IconTruckLoading,
  IconUsers
} from "@tabler/icons-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useSolutions = () => [
  {
    icon: <IconPaw size={56} stroke={2} />,
    link: "/solutions/animal-health",
    title: translate({
      id: "solutions.animalHealth.title",
      message: "Animal Health",
    }),
    description: translate({
      id: "solutions.animalHealth.description",
      message:
        "A veterinary clinic offers a variety of in-clinic services, including routine checkups, vaccinations, diagnostic exams, and wellness consultations for pets and livestock. Managing veterinarian schedules, appointment bookings, and shared resources such as diagnostic tools and examination rooms is crucial to ensuring smooth operations. ZenSched helps streamline the scheduling process, reduces booking conflicts, and enhances the customer experience.",
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
        "A dynamic coworking space that manages shared offices, meeting rooms, and event areas for freelancers, startups, and established businesses. The space coordinates schedules for shared resources like desks, private offices, and conference rooms, while also handling member bookings and event setups. Efficiently managing availability, adapting to last-minute changes, and optimizing resource allocation are essential for smooth operations. ZenSched offers a comprehensive scheduling solution to streamline bookings, maximize resource usage, and enhance member satisfaction.",
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
        "A company operates a network of physical stores alongside an e-commerce platform. The company offers services such as in-store product pickups, personal shopping appointments, inventory management, and delivery scheduling. Coordinating between in-store staff, delivery drivers, and shared resources (e.g., storage space and checkout counters) is complex, especially during peak shopping seasons. ZenSched helps RetailChain & Co. streamline scheduling, optimize resource allocation, and improve the overall customer experience.",
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
        "An innovative online learning platform offering live classes, workshops, and one-on-one tutoring sessions across a variety of subjects. The platform manages schedules for instructors, students, and shared virtual classrooms, while also handling bookings across different time zones. Coordinating instructor availability, adapting to last-minute changes, and ensuring smooth class transitions are critical for an optimal learning experience. ZenSched provides a flexible scheduling solution to streamline class management, align global schedules, and enhance the experience for both students and instructors.",
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
        "A company offers financial planning, investment advisory, and wealth management services, while SecureInsure specializes in insurance policy consultations, claims processing, and renewals. Both sectors require managing appointments with clients, coordinating staff availability, and handling shared resources like meeting rooms and specialized tools. ZenSched provides a streamlined solution to manage these scheduling needs, ensure efficient resource allocation, and enhance client communication.",
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
        "A gym offers a wide range of health and fitness services, including group classes, personal training sessions, and wellness consultations. These services require managing class schedules, coordinating trainer availability, and optimizing shared resources like studios and equipment. ZenSched provides a streamlined solution to handle these scheduling needs, ensure efficient resource utilization, and enhance member engagement through automated communication and reminders.",
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
        "A multi-specialty clinic offering a range of healthcare services, including general consultations, specialist visits, diagnostic tests, and wellness programs. The clinic manages schedules for doctors, nurses, and diagnostic equipment while coordinating patient appointments across multiple specialties. Efficiently handling bookings, adapting to last-minute changes, and ensuring optimal use of resources are critical to providing high-quality patient care. ZenSched delivers a robust scheduling solution to streamline appointment management, optimize resource allocation, and enhance the overall patient experience.",
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
        "A manufacturing company that manages production schedules, maintenance tasks, and workforce coordination. The company operates multiple production lines, shared machinery, and tools that require precise scheduling to avoid downtime and maximize efficiency. In addition, SmartMFG coordinates employee shifts, equipment maintenance, and inventory checks. ZenSched provides a robust scheduling solution to optimize operations, ensure resource allocation, and streamline communication across teams.",
    }),
  },
  {
    icon: <IconTruckLoading size={56} stroke={2} />,
    link: "/solutions/logistics-and-supply-chain",
    title: translate({
      id: "solutions.logisticAndSupplyChain.title",
      message: "Logistic & Supply Chain",
    }),
    description: translate({
      id: "solutions.logisticAndSupplyChain.description",
      message:
        "A logistics company manages a complex network of warehouses, delivery routes, and supply chain operations. The company handles a variety of tasks, including shipment scheduling, fleet management, warehouse space allocation, and loading dock assignments. Coordinating drivers, warehouse staff, and shared resources is critical to maintaining smooth operations and timely deliveries. ZenSched provides an advanced scheduling solution to optimize resource allocation, improve communication, and streamline logistics workflows.",
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
        "A company manages candidate interviews, staff onboarding, and employee training sessions for various clients. The company coordinates schedules for recruiters, hiring managers, and candidates while managing shared resources such as meeting rooms and video conferencing tools. With high volumes of interviews and tight deadlines, effective scheduling is critical to maintain smooth operations. ZenSched helps TalentHire streamline scheduling, reduce conflicts, and improve communication across all stakeholders.",
    }),
  },
  {
    icon: <IconChefHat size={56} stroke={2} />,
    link: "/solutions/restoration-and-food-delivery",
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
        "A fast-growing software company that manages team meetings, product demos, code reviews, and developer training sessions. The company operates across multiple time zones and uses shared resources like meeting rooms, video conferencing tools, and test environments. Coordinating schedules for developers, project managers, and stakeholders is essential to meet deadlines and ensure smooth collaboration. ZenSched provides a powerful scheduling solution to manage resources, align global teams, and streamline communication.",
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
        "A thriving travel and tourism company that organizes guided tours, transportation schedules, and travel itineraries for customers across multiple destinations. The business coordinates tour guides, drivers, and shared resources like vehicles, accommodations, and activity spaces. Managing bookings, adapting to last-minute changes, and ensuring smooth communication between travelers and staff is crucial to providing a seamless travel experience. ZenSched offers a robust scheduling solution to optimize resources, streamline coordination, and enhance customer satisfaction.",
    }),
  },
];

export default useSolutions;
