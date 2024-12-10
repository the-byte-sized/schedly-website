import Documentation from "./sections/Documentation";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Solutions from "./sections/Solutions";
import "./styles.module.css";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Features />
        {/* <Documentation /> */}
        <Solutions />
      </main>
    </>
  );
}
