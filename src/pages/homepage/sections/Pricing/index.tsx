import React from "react";
import Button from "@site/src/components/Button";
import Card from "@site/src/components/Card";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import styles from "./styles.module.css";

function Pricing() {
  const [premiumPrice, setPremiumPrice] = React.useState<string>("€15/mo");

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setPremiumPrice("€12/yr") : setPremiumPrice("€15/mo");
  };

  return (
    <section
      id="pricing"
      data-section="pricing"
      className="w-100 overflow-hidden text-center position-relative bg-light"
    >
      <div className="container">
        <div className="mb-5">
          <h1 className="fs-1">Our Pricing Plans</h1>
          <p className="fs-5">Choose the plan that fits your needs.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <Card className={styles.card}>
              <div className="d-flex flex-column">
                <h1 className="fs-3">Starter Plan</h1>
                <p className="mb-0">Perfect for getting started.</p>
              </div>
              <h1 className="my-2 text-primary">Free Forever</h1>
              <ul className="mt-auto list-unstyled my-2 align-self-start">
                <li className="d-flex gap-2 align-items-center mb-2">
                  <IconCircleCheck color="#20c997" size={24} stroke={2} />
                  <span>Basic features</span>
                </li>
                <li className="d-flex gap-2 align-items-center mb-2">
                  <IconCircleX color="#dc3545" size={24} stroke={2} />
                  <span>Limited support</span>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <IconCircleX color="#dc3545" size={24} stroke={2} />
                  <span>No custom integrations</span>
                </li>
              </ul>
              <a className="w-100 " href="">
                <Button
                  label="Choose plan"
                  className="w-100 btn-outline-primary"
                />
              </a>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className={styles.card}>
              <div className="d-flex flex-column">
                <h1 className="fs-3">Premium Plan</h1>
                <p className="mb-0">Great for scaling your needs.</p>
              </div>
              <h1 className="my-2 text-primary">{premiumPrice}</h1>
              <div className="d-flex justify-content-center align-items-center my-1">
                <span className="me-2">Monthly</span>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    onChange={handlePriceChange}
                    type="checkbox"
                    id="billingToggle"
                  />
                  <label className="form-check-label" htmlFor="billingToggle">
                    Yearly
                  </label>
                </div>
                <span className="ms-2 text-success">Save 20%!</span>
              </div>
              <ul className="mt-auto list-unstyled my-2 align-self-start">
                <li className="d-flex gap-2 align-items-center mb-2">
                  <IconCircleCheck color="#20c997" size={24} stroke={2} />
                  <span>All basic features</span>
                </li>
                <li className="d-flex gap-2 align-items-center mb-2">
                  <IconCircleCheck color="#20c997" size={24} stroke={2} />
                  <span>Priority support</span>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <IconCircleCheck color="#20c997" size={24} stroke={2} />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <a className="w-100" href="">
                <Button
                  label="Choose plan"
                  className="w-100  btn-outline-primary"
                />
              </a>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className={styles.card}>
              <div className="d-flex flex-column">
                <h1 className="fs-3">Custom</h1>
                <p className="mb-0">Tailored for your business.</p>
              </div>
              <h1 className="my-2 text-primary">Custom Pricing</h1>
              <ul className="mt-auto list-unstyled my-2 align-self-start">
                <li className=" d-flex gap-2 align-items-center mb-2">
                  <IconCircleCheck color="#20c997" size={24} stroke={2} />
                  <span>All premium features</span>
                </li>
                <li className="d-flex gap-2 align-items-center mb-2">
                  <IconCircleCheck color="#20c997" size={24} stroke={2} />
                  <span>Dedicated support</span>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <IconCircleCheck color="#20c997" size={24} stroke={2} />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <a className="w-100" href="">
                <Button
                  label="Contact us"
                  className="w-100 btn-outline-primary"
                />
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
