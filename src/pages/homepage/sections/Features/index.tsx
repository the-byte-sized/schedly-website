import React from "react";
import Card from "@site/src/components/Card";
import {
  IconCalendarEvent,
  IconCategoryPlus,
  IconCircles,
} from "@tabler/icons-react";

type Props = {};

function Features({}: Props) {
  const iconSize = 56;
  const iconStroke = 2;
  const _className = "mb-0";

  return (
    <section id="overview" data-section="features" className="container my-5">
      <div className="row row-gap-5 mx-auto">
        <div className="col-sm-12 col-lg-4 p-2">
          <Card>
            <IconCircles size={iconSize} stroke={iconStroke} />
            <h1 className={_className}>Create entities</h1>
            <p className={_className}>
              An entity is a flexible concept. It can represent a calendar, a
              barbershop, a personal agenda, or even a task list. Its meaning
              adapts to your needs.
            </p>
          </Card>
        </div>
        <div className="col-sm-12 col-lg-4 p-2">
          <Card>
            <IconCategoryPlus size={iconSize} stroke={iconStroke} />
            <h1 className={_className}>Add exceptions</h1>
            <p className={_className}>
              Exceptions in Schedly, either blacklist or whitelist, can be
              one-time or recurring (via cron). Use them for business hours,
              employee leave, or resource unavailability—fully customizable.
            </p>
          </Card>
        </div>
        <div className="col-sm-12 col-lg-4 p-2">
          <Card>
            <IconCalendarEvent size={iconSize} stroke={iconStroke} />
            <h1 className={_className}>Schedule events</h1>
            <p className={_className}>
              Easily find slots and add events effortlessly. What's an event?
              It's whatever you need—doctor's appointment, team call, or more,
              customizable via metadata.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Features;
