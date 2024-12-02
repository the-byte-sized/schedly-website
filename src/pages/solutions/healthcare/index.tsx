import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Card from "@site/src/components/Card";
import { IconCalendarClock, IconFilter, IconProgressCheck, IconRefresh } from "@tabler/icons-react";
import Layout from "@theme/Layout";

export default function HealthcareSolutionPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Schedly for Healthcare"
      description="Revolutionizing Medical Scheduling"
    >
      <main>
        <div className="container">
          <h1>Appointment Scheduling for a Multi-Specialty Clinic</h1>

          <p>
            A bustling multi-specialty clinic offers services ranging from
            general practice to specialized treatments. Managing appointments
            for numerous doctors with varying schedules, handling last-minute
            cancellations, and accommodating emergency visits present
            significant challenges.
          </p>

          <div className="row row-gap-5 mt-5">
            <div className="col-sm-12 col-md-6">
              <Card>
                <IconCalendarClock size={56} stroke={2} />

                <h1>Advanced Availability Management</h1>

                <p className="mb-0">
                  Set up individual schedules for each doctor, including
                  specific working hours, days off, and vacation periods.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconFilter size={56} stroke={2} />

                <h1>Exception Handling</h1>

                <p className="mb-0">
                  Easily block out time slots for emergencies, conferences, or
                  personal commitments using the blacklist feature.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconRefresh size={56} stroke={2} />

                <h1>Recurring Appointments</h1>

                <p className="mb-0">
                  Schedule regular check-ups or treatments with recurring rules,
                  ensuring consistency for patients needing ongoing care.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconProgressCheck size={56} stroke={2} />

                <h1>Real-Time Updates</h1>

                <p className="mb-0">
                  Provide instant updates to patients about appointment
                  availability, reducing wait times and enhancing patient
                  satisfaction.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
