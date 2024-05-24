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
          <Link
            className="button button--secondary button--lg"
            to="https://discord.gg/yvycWW8RgR"
          >
            Discord
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
      <main>
        <div className="section">
          <div className="container text--center">
            <div className="row margin-top--lg margin-bottom--lg">
              <div className="col">
                <svg
                  className="featureImage"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"
                  ></path>
                </svg>
                <h3 className="featureHeading">Open Source</h3>
                <p className="padding-horiz--md">
                  Pocket Relay is Open-Source and freely available for anyone to
                  use or modify for their own needs. The code for all components
                  of the server, and clients are available on the{" "}
                  <Link to="https://github.com/PocketRelay">GitHub</Link> some
                  projects such as the custom SSL library are on my{" "}
                  <Link to="https://github.com/jacobtread">
                    Personal GitHub
                  </Link>
                  .
                </p>
              </div>
              <div className="col">
                <svg
                  className="featureImage"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m15.502 14.367l5.03-5.014c.724-.722 1.087-1.083 1.277-1.543C22 7.351 22 6.84 22 5.82v-.49c0-1.57 0-2.355-.49-2.843C21.022 2 20.235 2 18.659 2h-.489c-1.024 0-1.537 0-1.997.19c-.46.19-.823.551-1.547 1.274l-5.03 5.014c-.846.844-1.371 1.367-1.574 1.873c-.064.16-.097.317-.097.483c0 .69.557 1.245 1.671 2.356l.15.149l1.754-1.78a.645.645 0 0 1 .919.906l-1.76 1.785l.119.117c1.114 1.11 1.67 1.666 2.362 1.666c.153 0 .3-.027.447-.081c.519-.191 1.048-.72 1.916-1.585m2.363-5.888c-.652.65-1.71.65-2.363 0a1.662 1.662 0 0 1 0-2.356c.653-.65 1.71-.65 2.363 0s.653 1.705 0 2.356M2.774 12.481a.759.759 0 0 1 0 1.074l-.156.155a.34.34 0 0 0 0 .48a.34.34 0 0 0 .483 0l1.713-1.71a.76.76 0 0 1 1.072 1.075l-1.712 1.71a1.86 1.86 0 0 1-2.629 0a1.857 1.857 0 0 1 0-2.629l.156-.155a.76.76 0 0 1 1.073 0m4.523 4.215c.293.3.288.78-.012 1.073l-1.73 1.692a.759.759 0 0 1-1.061-1.085l1.73-1.692a.759.759 0 0 1 1.073.012m4.184 1.422a.76.76 0 0 1 0 1.074l-1.713 1.71a.34.34 0 0 0 0 .48c.134.133.35.133.484 0l.156-.155A.759.759 0 0 1 11.48 22.3l-.155.155a1.86 1.86 0 0 1-2.63 0a1.857 1.857 0 0 1 0-2.629l1.713-1.71a.759.759 0 0 1 1.073.001"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M10.846 5.41L8.658 7.59c-.402.401-.77.769-1.062 1.101a5.231 5.231 0 0 0-.532.706l-.022-.021l-.08-.08a4.178 4.178 0 0 0-1.319-.865l-.106-.042l-.325-.13a.658.658 0 0 1-.223-1.077c.963-.96 2.12-2.114 2.679-2.346a2.907 2.907 0 0 1 1.537-.197c.47.07.915.311 1.641.77m3.736 11.484c.176.18.293.306.399.44c.14.179.264.368.373.567c.123.223.218.462.408.939c.155.388.67.491.968.193l.073-.072c.963-.96 2.12-2.114 2.353-2.67a2.897 2.897 0 0 0 .197-1.534c-.07-.468-.312-.912-.772-1.636l-2.195 2.189c-.411.41-.789.786-1.13 1.08a5.179 5.179 0 0 1-.674.504m-6.896-2.33a.759.759 0 1 0-1.073-1.073L4.47 15.632a.759.759 0 1 0 1.074 1.074zm2.809 2.806a.759.759 0 1 0-1.073-1.073l-2.128 2.127a.76.76 0 0 0 1.074 1.074z"
                    opacity={0.5}
                  ></path>
                </svg>
                <h3 className="featureHeading">Performant</h3>
                <p className="padding-horiz--md">
                  The server is written from the ground up in Rust providing
                  both stability and performance all while using very little
                  resources. Making it easy to run the server on an old laptop
                  or other hardware you have lying around.
                </p>
              </div>

              <div className="col">
                <svg
                  className="featureImage"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M8 2.25A6.75 6.75 0 0 0 2.969 13.5a.75.75 0 0 0 1.118-1A5.25 5.25 0 0 1 8 3.75h4a5.25 5.25 0 1 1 0 10.5h-2a.75.75 0 0 0 0 1.5h2a6.75 6.75 0 0 0 0-13.5z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M6.75 15c0-2.9 2.35-5.25 5.25-5.25h2a.75.75 0 0 0 0-1.5h-2a6.75 6.75 0 0 0 0 13.5h4a6.75 6.75 0 0 0 5.031-11.25a.75.75 0 0 0-1.118 1A5.25 5.25 0 0 1 16 20.25h-4A5.25 5.25 0 0 1 6.75 15"
                    opacity={0.5}
                  ></path>
                </svg>
                <h3 className="featureHeading">Origin/EA Compatible</h3>
                <p className="padding-horiz--md">
                  Pocket Relay is compatible with Origin/EA accounts, you can
                  play on the server using these accounts and the server is also
                  capable of importing your player data from the official
                  servers when using an Origin/EA account.
                </p>
              </div>
            </div>

            <div className="row margin-top--lg margin-bottom--lg">
              <div className="col col--4 col--offset-2">
                <svg
                  className="featureImage"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.604 4.604C9.34 2.868 10.208 2 11.286 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419c1.735 1.735 2.603 2.603 2.603 3.682c0 1.078-.868 1.946-2.604 3.682c-1.736 1.736-2.604 2.604-3.682 2.604c-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.869 10.233 5 9.365 5 8.286c0-1.078.868-1.946 2.604-3.682"
                  ></path>
                  <path
                    fill="currentColor"
                    d="m8.345 12.71l-5.52 5.518c-.342.343-.513.514-.616.692a1.562 1.562 0 0 0 0 1.562c.103.178.274.35.617.692c.342.342.513.514.692.617a1.562 1.562 0 0 0 1.562 0c.178-.103.35-.275.692-.617l5.518-5.519zm10.31-4.42l.373-.372c.342-.343.514-.514.617-.692a1.562 1.562 0 0 0 0-1.562c-.103-.179-.275-.35-.617-.692c-.342-.343-.514-.514-.692-.617a1.562 1.562 0 0 0-1.562 0c-.178.103-.35.274-.692.617l-.373.373z"
                    opacity={0.5}
                  ></path>
                </svg>
                <h3 className="featureHeading">Manageable</h3>
                <p className="padding-horiz--md">
                  Pocket Relay provides a dashboard which gives you full control
                  over the players on your server allowing you to edit and
                  modify the player data through simple editors. You can also
                  import and export player data.
                </p>
              </div>
              <div className="col col--4">
                <svg
                  className="featureImage"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4.666 9c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 3 3.734 3 4.666 3h7.268a1.972 1.972 0 0 0-.116.235c-.152.367-.152.833-.152 1.765v4zm17-3c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.064 9 19.598 9 18.666 9h-1V5c0-.932 0-1.398-.152-1.765A2.003 2.003 0 0 0 17.398 3h1.268c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765"
                    opacity={0.3}
                  ></path>
                  <path
                    fill="currentColor"
                    d="M17.514 20.765c.152-.367.152-.833.152-1.765v-4h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-1.268c.044-.075.082-.154.116-.235m-5.58.235H4.666c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 15 3.734 15 4.666 15h7v4c0 .932 0 1.398.152 1.765c.034.081.072.16.116.235"
                    opacity={0.7}
                  ></path>
                  <path
                    fill="currentColor"
                    d="M17.666 9h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-1zm-6 0v6h-7c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 9 3.734 9 4.666 9z"
                    opacity={0.5}
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M17.514 3.235c.152.367.152.833.152 1.765v14c0 .932 0 1.398-.152 1.765a2.003 2.003 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765V5c0-.932 0-1.398.152-1.765A2 2 0 0 1 12.9 2.153C13.269 2 13.735 2 14.667 2s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083M15.416 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <h3 className="featureHeading">Small</h3>
                <p className="padding-horiz--md">
                  The server requires very little space the executable only
                  taking up &lt;20mb of space. All the server files are stored
                  in a "data" folder in the same directory as the server. There
                  are also Docker images available to create a isolated server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
