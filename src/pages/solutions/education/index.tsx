import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Card from "@site/src/components/Card";
import { IconCalendarCheck, IconLink, IconWorld } from "@tabler/icons-react";
import Layout from "@theme/Layout";

export default function EducationSolutionPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Schedly for Education"
      description="Smart Scheduling for Learning Environments"
    >
      <main>
        <div className="container">
          <h1>Class Scheduling for an Online Learning Platform</h1>

          <p>
            An online education platform offers live classes across different
            time zones with instructors worldwide. Coordinating class times,
            managing instructor availability, and handling student bookings
            require a flexible and robust scheduling system.
          </p>

          <div className="row row-gap-5 mt-5">
            <div className="col-sm-12 col-md-6">
              <Card>
                <IconWorld size={56} stroke={2} />
                <h1>Time Zone Support</h1>
                <p className="mb-0">
                  Manage scheduling across multiple time zones, ensuring classes
                  are appropriately timed for both instructors and students
                  globally.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconCalendarCheck size={56} stroke={2} />
                <h1>Dynamic Scheduling</h1>
                <p className="mb-0">
                  Adjust class times based on instructor availability and
                  student demand.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconWorld size={56} stroke={2} />
                <h1>Waitlist Management</h1>
                <p className="mb-0">
                  Automatically handle fully booked classes by adding students
                  to a waitlist and notifying them of openings.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconLink size={56} stroke={2} />
                <h1>Integration with Calendars</h1>
                <p className="mb-0">
                  Sync schedules with popular calendar apps to keep instructors
                  and students informed.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
