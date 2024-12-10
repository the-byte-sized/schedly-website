import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Card from "@site/src/components/Card";
import {
    IconCalendarUser,
    IconClockRecord,
    IconRazor,
    IconRefresh
} from "@tabler/icons-react";
import Layout from "@theme/Layout";

export default function BeautySalonSolutionPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="ZenSched for Beauty Salons"
      description="Streamlining Appointment Scheduling"
    >
      <main>
        <div className="container">
          <h1>Beauty Salons Reservation System</h1>

          <p>
            A busy beauty salon offers a wide range of services, including
            haircuts, coloring, styling, manicures, pedicures, facials, and
            massages. Each service requires different durations, specialized
            staff, and sometimes specific equipment or rooms.
          </p>

          <div className="row row-gap-5 mt-5">
            <div className="col-sm-12 col-md-6">
              <Card>
                <IconCalendarUser size={56} stroke={2} />

                <h1>Staff Availability</h1>

                <p className="mb-0">
                  Manage individual schedules with real-time updates for
                  emergencies.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconClockRecord size={56} stroke={2} />

                <h1>Conflict Prevention</h1>

                <p className="mb-0">
                  Automatically prevent double bookings of rooms and resources.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconRazor size={56} stroke={2} />

                <h1>Resource Allocation</h1>

                <p className="mb-0">
                  Book treatment rooms and equipment to avoid conflicts.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconRefresh size={56} stroke={2} />

                <h1>Recurring Appointments</h1>

                <p className="mb-0">
                  Allow clients to book regular appointments with their
                  preferred staff.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
