import React, { ChangeEvent, FormEvent, useMemo, useState } from "react";
import styles from "./ConfigBuilder.module.css";
import CodeBlock from "@theme/CodeBlock";
import CodeInline from "@theme/CodeInline";
import Admonition from "@theme/Admonition";
import Link from "@docusaurus/Link";

const DEFAULT_CONFIG = {
  host: "0.0.0.0",
  port: 80,
  reverse_proxy: false,
  dashboard: {
    super_email: "",
    super_password: "",
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
        <label htmlFor="host">Host</label>
        <input
          id="host"
          name="host"
          type="text"
          value={config.host}
          onChange={onChangeHost}
        />
        <p>
          Usually you won't need to change this, this is the local network
          interface IP that the server will bind on and accept connections from.
          If you don't know what this is you should probably leave it as{" "}
          <CodeInline>0.0.0.0</CodeInline> see{" "}
          <Link href="/docs/server/configuration#server-host">Server Host</Link>{" "}
          for more details
        </p>
      </div>
      <div className="field">
        <label htmlFor="port">Port</label>
        <input
          id="port"
          name="port"
          type="number"
          value={config.port}
          onChange={onChangePort}
        />
        <p>
          This is the port the server will bind to, if you change this you will
          also need to include the new port in the server connection URL see{" "}
          <Link href="/docs/server/configuration#server-port">Server Port</Link>{" "}
          for more details
        </p>
      </div>
      <h2>Dashboard</h2>
      <div className="field">
        <label htmlFor="super-email">Super Email</label>
        <input
          id="super-email"
          name="super-email"
          type="email"
          value={config.dashboard.super_email}
          onChange={onChangeSuperEmail}
        />
        <p>
          Optional super admin email address, if you create an account on the
          server with this email address they will be given the Super Admin role
          and have control over the server dashboard see{" "}
          <Link href="/docs/server/configuration#super-admin">Super Admin</Link>{" "}
          for more details
        </p>
      </div>
      <div className="field">
        <label htmlFor="super-email">Super Password</label>
        <input
          id="super-email"
          name="super-email"
          type="text"
          value={config.dashboard.super_password}
          onChange={onChangeSuperPassword}
        />
        <p>
          If you specify a super admin email this password will replace the
          password that user has assigned see{" "}
          <Link href="/docs/server/configuration#super-admin">Super Admin</Link>{" "}
          for more details
        </p>
      </div>
      <div className="field">
        <label htmlFor="super-email">Disable Registration</label>
        <input
          id="super-email"
          name="super-email"
          type="checkbox"
          checked={config.dashboard.disable_registration}
          onChange={onChangeDisableRegistration}
        />

        <p>
          Enable this option if you don't want users to be able to create an
          account through the dashboard see{" "}
          <Link href="/docs/server/configuration#disable-account-registration">
            Disable Account Registration
          </Link>{" "}
          for more details
        </p>
      </div>
      <div className="field">
        <label htmlFor="menu-message">Menu Message</label>
        <textarea
          id="menu-message"
          name="menu-message"
          value={config.menu_message}
          onChange={onChangeMenuMessage}
          rows={5}
          cols={50}
        />
        <p>
          Message of the day that will appear on the main menu see{" "}
          <Link href="/docs/server/configuration#menu-message">
            Menu Message
          </Link>{" "}
          for more details
        </p>
      </div>
      <h2>Galaxy at War</h2>
      <div className="field">
        <label htmlFor="port">Decay Rate</label>
        <input
          id="port"
          name="port"
          type="number"
          step={0.1}
          value={config.galaxy_at_war.decay}
          onChange={onChangeDecayRate}
        />
        <p>
          In the default server configuration your Galaxy At War progress will
          not decay at all, this is because &quot;decay&quot; is set to 0.0
          which doesn’t decay at all. see{" "}
          <Link href="/docs/server/configuration#daily-decay">Daily Decay</Link>{" "}
          for more details
        </p>
      </div>
      <div className="field">
        <label htmlFor="promotions">Promotions</label>
        <input
          id="promotions"
          name="promotions"
          type="checkbox"
          checked={config.galaxy_at_war.promotions}
          onChange={onChangePromotions}
        />
        <p>
          This property determines whether your total character promotions is
          included as a Galaxy At War asset see{" "}
          <Link href="/docs/server/configuration#include-promotions">
            Include Promotions
          </Link>{" "}
          for more details
        </p>
      </div>
      <h2>Logging</h2>
      <div className="field">
        <label htmlFor="menu-message">Logging Level</label>

        <select
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
        <p>
          You will probably want to leave this on info unless you're having
          issues you need to report, then you should set it to debug see{" "}
          <Link href="/docs/server/configuration#logging">Logging</Link> for
          more details
        </p>
      </div>
      <h2>Retriever</h2>
      <div className="field">
        <label htmlFor="retriever-enabled">Retriever Enabled</label>
        <input
          id="retriever-enabled"
          name="retriever-enabled"
          type="checkbox"
          checked={config.retriever.enabled}
          onChange={onChangeRetrieverEnabled}
        />
        <p>
          This property determines whether your total character promotions is
          included as a Galaxy At War asset see{" "}
          <Link href="/docs/server/configuration#enabled">Enabled</Link> for
          more details
        </p>
      </div>
      {config.retriever.enabled && (
        <>
          <div className="field">
            <label htmlFor="retriever-origin-fetch">Origin Fetch</label>
            <input
              id="retriever-origin-fetch"
              name="retriever-origin-fetch"
              type="checkbox"
              checked={config.retriever.origin_fetch}
              onChange={onChangeRetrieverOriginFetch}
            />
            <p>
              {" "}
              This setting determines whether the server is allowed to use the
              official server to authenticate Origin accounts see{" "}
              <Link href="/docs/server/configuration#origin-fetch">
                Origin Fetch
              </Link>{" "}
              for more details
            </p>
          </div>
          {config.retriever.origin_fetch && (
            <div className="field">
              <label htmlFor="retriever-origin-fetch-data">
                Origin Fetch Data
              </label>
              <input
                id="retriever-origin-fetch-data"
                name="retriever-origin-fetch-data"
                type="checkbox"
                checked={config.retriever.origin_fetch_data}
                onChange={onChangeRetrieverOriginFetchData}
              />
              <p>
                This setting determines whether the server should also fetch and
                copy over the player data of Origin accounts when creating them
                for the first time. see{" "}
                <Link href="/docs/server/configuration#origin-fetch-data">
                  Origin Fetch Data
                </Link>{" "}
                for more details
              </p>
            </div>
          )}
        </>
      )}
      <h2>Tunneling</h2>
      <div className="field">
        <label htmlFor="tunnel">Tunneling</label>

        <select
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
        <p>
          Choose the mode for how to tunnel connections see{" "}
          <Link href="/docs/server/configuration#tunnel">Tunnel</Link> for more
          details
        </p>
      </div>

      <h2>API</h2>
      <div className="field">
        <label htmlFor="retriever-enabled">Public Games</label>
        <input
          id="retriever-enabled"
          name="retriever-enabled"
          type="checkbox"
          checked={config.api.public_games}
          onChange={onChangeAPIPublicGames}
        />
        <p>
          Whether to allow public access to the games API see{" "}
          <Link href="/docs/server/configuration#public-games-api">
            Public Games API
          </Link>{" "}
          for more details
        </p>
      </div>
      {config.api.public_games && (
        <>
          <div className="field">
            <label htmlFor="retriever-origin-fetch">
              Public Games Hide Players
            </label>
            <input
              id="retriever-origin-fetch"
              name="retriever-origin-fetch"
              type="checkbox"
              checked={config.api.public_games_hide_players}
              onChange={onChangeAPIPublicGamesHidePlayers}
            />
            <p>
              Whether to hide players from the public games API see{" "}
              <Link href="/docs/server/configuration#hide-players-from-public-games">
                Hide players from public games
              </Link>{" "}
              for more details
            </p>
          </div>
        </>
      )}
      <CodeBlock language="json" title="config.json" children={configOutput} />
    </div>
  );
}
