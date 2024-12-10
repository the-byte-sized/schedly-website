import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Card from "@site/src/components/Card";
import {
    IconCalendarBolt,
    IconClockRecord,
    IconGavel,
    IconNotification
} from "@tabler/icons-react";
import Layout from "@theme/Layout";

export default function RideSharingSolutionPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="ZenSched for Ride Sharing"
      description="Empowering Flexible Ride Scheduling"
    >
      <main>
        <div className="container">
          <h1>Ride Sharing Service</h1>

          <p>
            From real-time scheduling to superior operational efficiency, we
            provide solutions to keep your business running smoothly.
          </p>

          <div className="row row-gap-5 mt-5">
            <div className="col-sm-12 col-md-6">
              <Card>
                <IconCalendarBolt size={56} stroke={2} />

                <h1>Flexible Scheduling Rules</h1>

                <p className="mb-0">
                  Set up individual schedules for each driver, including
                  specific working hours, days off, and vacation periods.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconClockRecord size={56} stroke={2} />

                <h1>Unpredictable Schedules</h1>

                <p className="mb-0">
                  Managing driver availability and part-time engagement poses
                  significant hurdles.
                </p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconGavel size={56} stroke={2} />

                <h1>Regulatory Compliance</h1>

                <p className="mb-0">Adhere to laws on working hours.</p>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6">
              <Card>
                <IconNotification size={56} stroke={2} />

                <h1>Real-Time Updates</h1>

                <p className="mb-0">
                  Provide instant updates to clients about riders availability,
                  reducing wait times and enhancing satisfaction.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
