import React, { ChangeEvent, FormEvent, useMemo, useState } from "react";
import styles from "./ConfigBuilder.module.css";
import CodeBlock from "@theme/CodeBlock";
import CodeInline from "@theme/CodeInline";
import Admonition from "@theme/Admonition";
import Link from "@docusaurus/Link";

export type Config = Partial<{
  host: string;
  port: number;
  reverse_proxy: boolean;
  dashboard: Partial<{
    super_email: string;
    super_password: string;
    disable_registration: boolean;
  }>;
  menu_message: string;
  galaxy_at_war: Partial<{
    decay: number;
    promotions: boolean;
  }>;
  logging: string;
  retriever: Partial<{
    enabled: boolean;
    origin_fetch: boolean;
    origin_fetch_data: boolean;
  }>;
  tunnel: string;
  api: Partial<{
    public_games: boolean;
    public_games_hide_players: boolean;
  }>;
}>;

const DEFAULT_CONFIG: Config = {
  host: "0.0.0.0",
  port: 80,
  reverse_proxy: false,
  dashboard: {
    disable_registration: false,
  },
  menu_message:
    "<font color='#B2B2B2'>Pocket Relay</font> - <font color='#FFFF66'>Logged as: {n}</font>",
  galaxy_at_war: {
    decay: 0.0,
    promotions: true,
  },
  logging: "info",
  retriever: {
    enabled: true,
    origin_fetch: true,
    origin_fetch_data: true,
  },
  tunnel: "stricter",
  api: {
    public_games: false,
    public_games_hide_players: true,
  },
};

export default function ConfigBuilder() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);

  const onChangeHost = (event: ChangeEvent<HTMLInputElement>) => {
    setConfig((config) => ({ ...config, host: event.target.value }));
  };

  const onChangePort = (event: ChangeEvent<HTMLInputElement>) => {
    setConfig((config) => ({ ...config, port: parseInt(event.target.value) }));
  };

  const onChangeSuperEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setConfig((config) => ({
      ...config,
      dashboard: { ...config.dashboard, super_email: event.target.value },
    }));
  };

  const onChangeSuperPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setConfig((config) => ({
      ...config,
      dashboard: { ...config.dashboard, super_password: event.target.value },
    }));
  };

  const onChangeDisableRegistration = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfig((config) => ({
      ...config,
      dashboard: {
        ...config.dashboard,
        disable_registration: event.target.checked,
      },
    }));
  };

  const onChangeMenuMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setConfig((config) => ({ ...config, menu_message: event.target.value }));
  };

  const onChangePromotions = (event: ChangeEvent<HTMLInputElement>) => {
    setConfig((config) => ({
      ...config,
      galaxy_at_war: {
        ...config.galaxy_at_war,
        promotions: event.target.checked,
      },
    }));
  };

  const onChangeDecayRate = (event: ChangeEvent<HTMLInputElement>) => {
    setConfig((config) => ({
      ...config,
      galaxy_at_war: {
        ...config.galaxy_at_war,
        decay: parseFloat(event.target.value),
      },
    }));
  };

  const onChangeLogging = (event: ChangeEvent<HTMLSelectElement>) => {
    setConfig((config) => ({ ...config, logging: event.target.value }));
  };

  const onChangeRetrieverEnabled = (event: ChangeEvent<HTMLInputElement>) => {
    setConfig((config) => ({
      ...config,
      retriever: {
        ...config.retriever,
        enabled: event.target.checked,
      },
    }));
  };

  const onChangeRetrieverOriginFetch = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfig((config) => ({
      ...config,
      retriever: {
        ...config.retriever,
        origin_fetch: event.target.checked,
      },
    }));
  };

  const onChangeRetrieverOriginFetchData = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfig((config) => ({
      ...config,
      retriever: {
        ...config.retriever,
        origin_fetch_data: event.target.checked,
      },
    }));
  };

  const onChangeTunneling = (event: ChangeEvent<HTMLSelectElement>) => {
    setConfig((config) => ({ ...config, tunnel: event.target.value }));
  };

  const onChangeAPIPublicGames = (event: ChangeEvent<HTMLInputElement>) => {
    setConfig((config) => ({
      ...config,
      api: {
        ...config.api,
        public_games: event.target.checked,
      },
    }));
  };

  const onChangeAPIPublicGamesHidePlayers = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfig((config) => ({
      ...config,
      api: {
        ...config.api,
        public_games_hide_players: event.target.checked,
      },
    }));
  };

  const configOutput = useMemo(
    () => JSON.stringify(config, undefined, 2),
    [config]
  );

  return (
    <div>
      <h2>Server Connection</h2>
      <div className="field">
        <label htmlFor="host" className={styles.inputLabel}>
          Host
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#server-host"
          >
            View Documentation
          </Link>
        </label>
        <input
          className={styles.input}
          id="host"
          name="host"
          type="text"
          value={config.host}
          onChange={onChangeHost}
        />
        <p className={styles.description}>
          Usually you won't need to change this, this is the local network
          interface IP that the server will bind on and accept connections from.
          If you don't know what this is you should probably leave it as{" "}
          <CodeInline>0.0.0.0</CodeInline>
        </p>
      </div>
      <div className="field">
        <label htmlFor="port" className={styles.inputLabel}>
          Port
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#server-port"
          >
            View Documentation
          </Link>
        </label>
        <input
          className={styles.input}
          id="port"
          name="port"
          type="number"
          value={config.port}
          onChange={onChangePort}
        />
        <p className={styles.description}>
          This is the port the server will bind to, if you change this you will
          also need to include the new port in the server connection URL
        </p>
      </div>
      <h2>Dashboard</h2>
      <div className="field">
        <label htmlFor="super-email" className={styles.inputLabel}>
          Super Email
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#super-admin"
          >
            View Documentation
          </Link>
        </label>
        <input
          className={styles.input}
          id="super-email"
          name="super-email"
          type="email"
          value={config.dashboard.super_email}
          onChange={onChangeSuperEmail}
        />
        <p className={styles.description}>
          Any accounts created using this email address (Including Origin/EA
          accounts) will be granted the super admin role giving them permission
          to control the server from the dashboard (You should set this to your
          email if you are the server owner)
        </p>
      </div>
      {config.dashboard.super_email !== undefined &&
        config.dashboard.super_email.length > 0 && (
          <div className="field">
            <label htmlFor="super-email" className={styles.inputLabel}>
              Super Password
              <Link
                className={styles.moreInfo}
                href="/docs/server/configuration#super-admin"
              >
                View Documentation
              </Link>
            </label>
            <input
              className={styles.input}
              id="super-email"
              name="super-email"
              type="text"
              value={config.dashboard.super_password}
              onChange={onChangeSuperPassword}
            />

            <p className={styles.description}>
              The password specified here will override the password for the
              super admin account. Useful if you are using an Origin/EA account
              as your super admin since they don't have a password so you won't
              be able to login
            </p>
          </div>
        )}

      <div className="field">
        <label htmlFor="super-email" className={styles.inputLabel}>
          Disable Registration
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#disable-account-registration"
          >
            View Documentation
          </Link>
        </label>
        <input
          className={styles.checkbox}
          id="super-email"
          name="super-email"
          type="checkbox"
          checked={config.dashboard.disable_registration}
          onChange={onChangeDisableRegistration}
        />

        <p className={styles.description}>
          Disable creating accounts through the dashboard
        </p>
      </div>
      <div className="field">
        <label htmlFor="menu-message" className={styles.inputLabel}>
          Menu Message
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#menu-message"
          >
            View Documentation
          </Link>
        </label>
        <textarea
          className={styles.input}
          id="menu-message"
          name="menu-message"
          value={config.menu_message}
          onChange={onChangeMenuMessage}
          rows={5}
          cols={50}
        />
        <p className={styles.description}>
          Message of the day that will appear on the main menu. This message
          supports some placeholders and tags, check the documentation for more
          details.
        </p>
      </div>
      <h2>Galaxy at War</h2>
      <div className="field">
        <label htmlFor="port" className={styles.inputLabel}>
          Decay Rate
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#daily-decay"
          >
            View Documentation
          </Link>
        </label>
        <input
          className={styles.input}
          id="port"
          name="port"
          type="number"
          step={0.1}
          value={config.galaxy_at_war.decay}
          onChange={onChangeDecayRate}
        />
        <p className={styles.description}>
          In the default server configuration your Galaxy At War progress will
          not decay at all, this is because &quot;decay&quot; is set to 0.0
          which doesn’t decay at all.
        </p>
      </div>
      <div className="field">
        <label htmlFor="promotions" className={styles.inputLabel}>
          Promotions
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#include-promotions"
          >
            View Documentation
          </Link>
        </label>
        <input
          className={styles.checkbox}
          id="promotions"
          name="promotions"
          type="checkbox"
          checked={config.galaxy_at_war.promotions}
          onChange={onChangePromotions}
        />
        <p className={styles.description}>
          This property determines whether your total character promotions is
          included as a Galaxy At War asset
        </p>
      </div>
      <h2>Logging</h2>
      <div className="field">
        <label htmlFor="menu-message" className={styles.inputLabel}>
          Logging Level
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#logging"
          >
            View Documentation
          </Link>
        </label>

        <select
          className={styles.input}
          name="logging"
          id="logging"
          value={config.logging}
          onChange={onChangeLogging}
        >
          <option value="debug">
            Debug - Shows all logging including debug messages
          </option>
          <option value="info">
            Info - Shows informational logging, warning and error logging
          </option>
          <option value="warn">Warn - Only shows warning and error logs</option>
          <option value="error">Error - Only shows error logs</option>
          <option value="off">Off - Doesn’t show any logs</option>
        </select>
        <p className={styles.description}>
          The level of logs the server will output. You will probably want to
          leave this on <b>Info</b> unless the developer is requesting logs to
          solve an issue then you may be asked to use the <b>Debug</b> level
        </p>
      </div>
      <h2>Retriever</h2>
      <div className="field">
        <label htmlFor="retriever-enabled" className={styles.inputLabel}>
          Retriever Enabled
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#enabled"
          >
            View Documentation
          </Link>
        </label>
        <input
          className={styles.checkbox}
          id="retriever-enabled"
          name="retriever-enabled"
          type="checkbox"
          checked={config.retriever.enabled}
          onChange={onChangeRetrieverEnabled}
        />
        <p className={styles.description}>
          Allow fetching data from the official servers is allowed or not.
          Disabling this will not allow the server to retrieve data from the
          official servers (Authenticating Origin/EA accounts and loading their
          player data)
        </p>
      </div>
      {config.retriever.enabled && (
        <>
          <div className="field">
            <label
              htmlFor="retriever-origin-fetch"
              className={styles.inputLabel}
            >
              Origin Fetch
              <Link
                className={styles.moreInfo}
                href="/docs/server/configuration#origin-fetch"
              >
                View Documentation
              </Link>
            </label>
            <input
              className={styles.checkbox}
              id="retriever-origin-fetch"
              name="retriever-origin-fetch"
              type="checkbox"
              checked={config.retriever.origin_fetch}
              onChange={onChangeRetrieverOriginFetch}
            />
            <p className={styles.description}>
              Allow authenticating EA/Origin accounts using the official
              servers. Disabling this will prevent anyone using EA/Origin from
              playing on your server without{" "}
              <Link href="/docs/client/unlinked-accounts">
                Unlinking their account.
              </Link>
              .
            </p>
          </div>
          {config.retriever.origin_fetch && (
            <div className="field">
              <label
                htmlFor="retriever-origin-fetch-data"
                className={styles.inputLabel}
              >
                Origin Fetch Data
                <Link
                  className={styles.moreInfo}
                  href="/docs/server/configuration#origin-fetch-data"
                >
                  View Documentation
                </Link>
              </label>
              <input
                className={styles.checkbox}
                id="retriever-origin-fetch-data"
                name="retriever-origin-fetch-data"
                type="checkbox"
                checked={config.retriever.origin_fetch_data}
                onChange={onChangeRetrieverOriginFetchData}
              />
              <p className={styles.description}>
                Allow loading player data of EA/Origin players from the official
                servers, disable this if you don't want existing player data to
                be loaded.
              </p>
            </div>
          )}
        </>
      )}
      <h2>Tunneling</h2>
      <div className="field">
        <label htmlFor="tunnel" className={styles.inputLabel}>
          Tunneling
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#tunnel"
          >
            View Documentation
          </Link>
        </label>

        <select
          className={styles.select}
          name="tunnel"
          id="tunnel"
          value={config.tunnel}
          onChange={onChangeTunneling}
        >
          <option value="stricter">
            Stricter - Only tunnel players who cannot be detected as Open NAT
          </option>
          <option value="always">
            Always - Always tunnel connections through the server.
          </option>
          <option value="disabled">Disabled - Disable tunneling</option>
        </select>
        <p className={styles.description}>
          Choose when the server is allowed to tunnel connections. "Stricter"
          will likely only work if you have a valid QoS server configured
        </p>
      </div>

      <h2>API</h2>
      <div className="field">
        <label htmlFor="retriever-enabled" className={styles.inputLabel}>
          Public Games
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#public-games-api"
          >
            View Documentation
          </Link>
        </label>
        <input
          className={styles.checkbox}
          id="retriever-enabled"
          name="retriever-enabled"
          type="checkbox"
          checked={config.api.public_games}
          onChange={onChangeAPIPublicGames}
        />
        <p className={styles.description}>
          Whether to allow public access to the games API
        </p>
      </div>
      {config.api.public_games && (
        <>
          <div className="field">
            <label
              htmlFor="retriever-origin-fetch"
              className={styles.inputLabel}
            >
              Public Games Hide Players
              <Link
                className={styles.moreInfo}
                href="/docs/server/configuration#hide-players-from-public-games"
              >
                View Documentation
              </Link>
            </label>
            <input
              className={styles.checkbox}
              id="retriever-origin-fetch"
              name="retriever-origin-fetch"
              type="checkbox"
              checked={config.api.public_games_hide_players}
              onChange={onChangeAPIPublicGamesHidePlayers}
            />
            <p className={styles.description}>
              Whether to hide players from the public games API
            </p>
          </div>
        </>
      )}
      <Admonition type="info">Below is your generated config</Admonition>
      <CodeBlock language="json" title="config.json" children={configOutput} />
    </div>
  );
}
