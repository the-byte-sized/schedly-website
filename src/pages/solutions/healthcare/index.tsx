import { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Button from "@site/src/components/Button";
import Card from "@site/src/components/Card";
import {
  IconCalendarClock,
  IconFilter,
  IconProgressCheck,
  IconRefresh,
} from "@tabler/icons-react";
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
          <div className="intro-section row my-5">
            <div className="col-12 col-md-6">
              <h1 className="fw-bolder">
                Appointment Scheduling for a Multi-Specialty Clinic
              </h1>

              <p>
                Simplify appointment management for doctors with different
                schedules. Handle last-minute cancellations, emergency visits,
                and resource allocation—all with one tool.
              </p>

              <div className="d-flex align-items-center">
                <div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder={translate({
                      id: "enterYourEmail",
                      message: "Enter your email",
                    })}
                  />
                </div>

                <a
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__e6EKmNURUpXVDBYWUVBMUVOQjRGS05KOVNZVkMwMy4u&r41d97b59b6194312b8aaa93246d4d61a=claudio.cortese%40outlook.it"
                  target="_blank"
                >
                  <Button
                    label={translate({ id: "joinWaitlistNow" })}
                    className="btn-outline-primary"
                  />
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 text-center">
              <img
                className="shadow-lg rounded-5"
                src={useBaseUrl("/img/hero-embedded-lending.jpg")}
                alt="hero pattern"
                height={375}
              />
            </div>
          </div>

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
