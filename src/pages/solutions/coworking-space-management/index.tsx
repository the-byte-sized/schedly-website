import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Card from "@site/src/components/Card";
import {
  IconBuildings,
  IconCalendarCheck,
  IconNotification,
  IconUserShield
} from "@tabler/icons-react";
import Layout from "@theme/Layout";

export default function CoworkingSpaceManagementSolutionPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Schedly for Co-working Spaces"
      description="Streamlining Shared Workspace Management"
    >
      <main>
        <div className="container">
          <h1>Conference Room Booking for a Co-Working Space</h1>

          <p>
            A co-working space provides members with the ability to book
            conference rooms and shared facilities. They need to manage bookings
            across multiple locations, handle different membership levels, and
            prevent scheduling conflicts.
          </p>

          <div className="row row-gap-5 mt-5">
            <div className="col-sm-12 col-md-6">
              <Card>
                <IconNotification size={56} stroke={2} />

                <h1>Real-Time Availability</h1>

                <p className="mb-0">
                  Provide up-to-date booking options to members based on their
                  membership level.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconCalendarCheck size={56} stroke={2} />

                <h1>Conflict Prevention</h1>

                <p className="mb-0">
                  Automatically prevent double bookings of rooms and resources.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconBuildings size={56} stroke={2} />

                <h1>Multi-Location Support</h1>

                <p className="mb-0">
                  Manage scheduling across various locations within a single
                  system.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconUserShield size={56} stroke={2} />

                <h1>Custom Rules and Permissions</h1>

                <p className="mb-0">
                  Set booking limits and access rights for different user tiers.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
