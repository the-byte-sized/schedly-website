import Translate, { translate } from "@docusaurus/Translate";
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
        <h1
          className="fs-1"
          dangerouslySetInnerHTML={{
            __html: translate({
              id: "solutions.title",
              message: "Schedly in <span class='text-primary'>action</span>",
            }),
          }}
        />

        <p className="fs-5 w-75">
          <Translate id="solutions.description">
            Imagine how Schedly's innovative, tech-forward scheduling solutions
            can transform your business. Explore our solutions to see how we can
            revolutionize time management and streamline your workflows.
          </Translate>
        </p>

        <div className="row row-gap-5 mt-5">
          <div className="col-sm-12 col-md-6">
            <a href="solutions/healthcare">
              <Card>
                <IconHeartbeat size={56} stroke={2} />

                <h1>
                  <Translate id="solutions.healthcare.title">
                    Healthcare
                  </Translate>
                </h1>

                <p className="mb-0">
                  <Translate id="solutions.healthcare.description">
                    A bustling multi-specialty clinic offers services ranging
                    from general practice to specialized treatments. Schedly
                    helps managing appointments for numerous doctors with
                    varying schedules, handling last-minute cancellations, and
                    accommodating emergency visits present significant
                    challenges.
                  </Translate>
                </p>
              </Card>
            </a>
          </div>

          <div className="col-12 col-md-6">
            <a href="solutions/education">
              <Card>
                <IconBooks size={56} stroke={2} />

                <h1>
                  <Translate id="solutions.education.title">
                    Education
                  </Translate>
                </h1>

                <p className="mb-0">
                  <Translate id="solutions.education.description">
                    An online education platform offers live classes across
                    different time zones with instructors worldwide. Schedly
                    helps coordinating class times, managing instructor
                    availability, and handling student bookings.
                  </Translate>
                </p>
              </Card>
            </a>
          </div>

          <div className="col-12 col-xl-5">
            <a href="solutions/coworking-space-management">
              <Card>
                <IconUsers size={56} stroke={2} />

                <h1>
                  <Translate id="solutions.coworkingSpaceManagement.title">
                    Coworking Space management
                  </Translate>
                </h1>

                <p className="mb-0">
                  <Translate id="solutions.coworkingSpaceManagement.description">
                    A co-working space provides members with the ability to book
                    conference rooms and shared facilities. Schedly helps with
                    managing bookings across multiple locations and prevent
                    scheduling conflicts.
                  </Translate>
                </p>
              </Card>
            </a>
          </div>

          <div className="col-12 col-xl-7">
            <a href="solutions/ride-sharing">
              <Card>
                <IconCar size={56} stroke={2} />

                <h1>
                  <Translate id="solutions.rideSharingService.title">
                    Ride Sharing service
                  </Translate>
                </h1>

                <p className="mb-0">
                  <Translate id="solutions.rideSharingService.description">
                    A rapidly growing ride-sharing service operates in multiple
                    cities, connecting passengers with drivers via a mobile app.
                    The service faces complex scheduling challenges, such as
                    adhering to local laws regarding driver working hour and
                    mandatory breaks Schedly helps streamline scheduling
                    processes, reducing administrative overhead and manual
                    interventions optimizing operations.
                  </Translate>
                </p>
              </Card>
            </a>
          </div>

          <div className="col-md-12">
            <a href="solutions/beauty-salons">
              <Card>
                <IconPlant2 size={56} stroke={2} />

                <h1>
                  <Translate id="solutions.beautySalons.title">
                    Beauty Salons
                  </Translate>
                </h1>

                <p className="mb-0">
                  <Translate id="solutions.beautySalons.description">
                    A busy beauty salon offers a wide range of services,
                    including haircuts, coloring, styling, manicures, pedicures,
                    facials, and massages. Each service requires different
                    durations, specialized staff, and sometimes specific
                    equipment or rooms. Schedly can help in assigning services
                    to staff members qualified to perform them, preventing
                    scheduling errors or managing the availability of specific
                    resources like treatment rooms or styling chairs to avoid
                    double bookings.
                  </Translate>
                </p>
              </Card>
            </a>
          </div>

          <div className="col-md-12">
            <Card className="bg-primary text-white">
              <h1>
                <Translate id="yourBusinessCouldBeNext.title">
                  Your Business Could Be Next
                </Translate>
              </h1>

              <p className="mb-0 w-75">
                <Translate id="yourBusinessCouldBeNext.description">
                  Imagine the transformation Schedly can bring to your business.
                  Join the companies that have revolutionized their scheduling
                  with our innovative solutions.
                </Translate>
              </p>

              <p className="fw-bold">
                <Translate id="yourBusinessCouldBeNext.hype">
                  Ready to take the next step?
                </Translate>
              </p>

              <a href="">
                <Button
                  label={translate({ message: "joinWaitlistNow" })}
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
