import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Logo from "../../static/img/logo.svg";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container heading">
        <Logo className={styles.logo} />

        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubTitle}>
          Private server for Mass Effect 3, create and run your own server
          whether it be, to play over LAN with your friends or publicly with
          others.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Guide
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Home`}
      description="Pocket Relay is a server that has been created in order to emulate the functionality of the official game servers to allow you to play the Mass Effect 3 multiplayer seperate from the official server. This allows you create LAN games, play multiplayer offline, or even host your own public server."
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
