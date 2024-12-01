import Button from "@site/src/components/Button";
import Card from "@site/src/components/Card";
import {
  IconBooks,
  IconCar,
  IconHeartbeat,
  IconPlant2,
  IconUsers,
} from "@tabler/icons-react";

type Props = {};

function Solutions({}: Props) {
  return (
    <section id="solutions" data-section="solutions">
      <div className="container">
        <h1 className="fs-1">
          Schedly in <span className="text-primary">action</span>
        </h1>
        <p className="fs-5 w-75">
          Imagine how Schedly's innovative, tech-forward scheduling solutions
          can transform your business. Explore our use cases to see how we can
          revolutionize time management and streamline your workflows.
        </p>
        <div className="row row-gap-5 mt-5">
          <div className="col-sm-12 col-md-6">
            <a href="">
              <Card>
                <IconHeartbeat size={56} stroke={2} />
                <h1>Healthcare</h1>
                <p className="mb-0">
                  A bustling multi-specialty clinic offers services ranging from
                  general practice to specialized treatments.{" "}
                  <span className="fw-bold text-primary">
                    Schedly helps managing appointments for numerous doctors
                  </span>{" "}
                  with varying schedules, handling last-minute cancellations,
                  and accommodating emergency visits present significant
                  challenges.
                </p>
              </Card>
            </a>
          </div>
          <div className="col-12 col-md-6">
            <a href="">
              <Card>
                <IconBooks size={56} stroke={2} />
                <h1>Education</h1>
                <p className="mb-0">
                  An online education platform offers live classes across
                  different time zones with instructors worldwide.{" "}
                  <span className="fw-bold text-primary">
                    Schedly helps coordinating class times, managing instructor
                    availability, and handling student bookings.
                  </span>
                </p>
              </Card>
            </a>
          </div>
          <div className="col-12 col-xl-5">
            <a href="">
              <Card>
                <IconUsers size={56} stroke={2} />
                <h1>Coworking Space management</h1>
                <p className="mb-0">
                  A co-working space provides members with the ability to book
                  conference rooms and shared facilities.{" "}
                  <span className="fw-bold text-primary">
                    Schedly helps with managing bookings across multiple
                    locations and prevent scheduling conflicts.
                  </span>
                </p>
              </Card>
            </a>
          </div>
          <div className="col-12 col-xl-7">
            <a href="">
              <Card>
                <IconCar size={56} stroke={2} />
                <h1>Ride Sharing service</h1>
                <p className="mb-0">
                  A rapidly growing ride-sharing service operates in multiple
                  cities, connecting passengers with drivers via a mobile app.
                  The service faces complex scheduling challenges, such as
                  adhering to local laws regarding driver working hour and
                  mandatory breaks.{" "}
                  <span className="fw-bold text-primary">
                    Schedly helps streamline scheduling processes, reducing
                    administrative overhead and manual interventions optimizing
                    operations.
                  </span>
                </p>
              </Card>
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <Card>
                <IconPlant2 size={56} stroke={2} />
                <h1>Beauty Salon</h1>
                <p className="mb-0">
                  A busy beauty salon offers a wide range of services, including
                  haircuts, coloring, styling, manicures, pedicures, facials,
                  and massages. Each service requires different durations,
                  specialized staff, and sometimes specific equipment or rooms.{" "}
                  <span className="fw-bold text-primary">
                    Schedly can help in assigning services to staff members
                  </span>{" "}
                  qualified to perform them, preventing scheduling errors or
                  managing the availability of specific resources like treatment
                  rooms or styling chairs to avoid double bookings.
                </p>
              </Card>
            </a>
          </div>
          <div className="col-md-12">
            <Card className="bg-primary text-white">
              <h1>Your Business Could Be Next</h1>
              <p className="mb-0 w-75">
                Imagine the transformation Schedly can bring to your business.
                Join the companies that have revolutionized their scheduling
                with our innovative solutions.
              </p>
              <p className="fw-bold">Ready to take the next step?</p>
              <a href="">
                <Button
                  label="Get started today"
                  className="bg-white text-primary"
                />
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
