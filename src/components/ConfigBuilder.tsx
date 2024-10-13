import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
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
  qos: Partial<{
    type: "local" | "official" | "custom" | "disabled" | "hamachi";
    host: string;
    port: number;
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
  udp_tunnel: {
    port: number;
    external_port: number;
    enabled: boolean;
  };
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
  qos: {
    type: "local",
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
  udp_tunnel: {
    port: 9032,
    external_port: 9032,
    enabled: true,
  },
  api: {
    public_games: false,
    public_games_hide_players: true,
  },
};

function createConfigOutput(input: Config) {
  // Create a deep copy of the config data
  const copied: Config = {
    ...input,
    dashboard: { ...input.dashboard },
    galaxy_at_war: { ...input.galaxy_at_war },
    retriever: { ...input.retriever },
    api: { ...input.api },
    udp_tunnel: { ...input.udp_tunnel },
  };

  // Remove empty super email
  if (
    copied.dashboard.super_email !== undefined &&
    copied.dashboard.super_email.length === 0
  ) {
    delete copied.dashboard.super_email;
  }

  // Remove empty super password
  if (
    copied.dashboard.super_password !== undefined &&
    copied.dashboard.super_password.length === 0
  ) {
    delete copied.dashboard.super_password;
  }

  // Remove invalid ports
  if (copied.port !== undefined && Number.isNaN(copied.port)) {
    delete copied.port;
  }

  if (
    copied.udp_tunnel.port !== undefined &&
    Number.isNaN(copied.udp_tunnel.port)
  ) {
    delete copied.udp_tunnel.port;
  }

  if (
    copied.udp_tunnel.external_port !== undefined &&
    Number.isNaN(copied.udp_tunnel.external_port)
  ) {
    delete copied.udp_tunnel.external_port;
  }

  if (copied.qos !== undefined) {
    if (copied.qos.type === "custom") {
      // Remove invalid ports
      if (copied.qos.port !== undefined && Number.isNaN(copied.qos.port)) {
        delete copied.qos.port;
      }
    } else if (copied.qos.type === "hamachi") {
      delete copied.qos.port;
    } else {
      delete copied.qos.host;
      delete copied.qos.port;
    }
  }

  return copied;
}

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

  const onChangeUDPTunnelEnabled = (event: ChangeEvent<HTMLInputElement>) => {
    setConfig((config) => ({
      ...config,
      udp_tunnel: {
        ...config.udp_tunnel,
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

  const onChangeQoSType = (event: ChangeEvent<HTMLSelectElement>) => {
    setConfig((config) => ({
      ...config,
      qos: {
        type: event.target.value as any,
      },
    }));
  };

  const onChangeQoSHost = (event: ChangeEvent<HTMLInputElement>) => {
    setConfig((config) => ({
      ...config,
      qos: {
        ...config.qos,
        host: event.target.value,
      },
    }));
  };

  const onChangeQoSPort = (event: ChangeEvent<HTMLInputElement>) => {
    setConfig((config) => ({
      ...config,
      qos: {
        ...config.qos,
        port: parseInt(event.target.value),
      },
    }));
  };

  const onReset = useCallback(() => {
    setConfig(DEFAULT_CONFIG);
  }, [setConfig]);

  const onChangeUdpTunnelPort = (event: ChangeEvent<HTMLInputElement>) => {
    setConfig((config) => ({
      ...config,
      udp_tunnel: {
        ...config.udp_tunnel,
        port: parseInt(event.target.value),
      },
    }));
  };

  const onChangeUdpTunnelExternalPort = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfig((config) => ({
      ...config,
      udp_tunnel: {
        ...config.udp_tunnel,
        external_port: parseInt(event.target.value),
      },
    }));
  };

  const configOutput = useMemo(
    () => JSON.stringify(createConfigOutput(config), undefined, 2),
    [config]
  );

  const renderHost = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="host" className={styles.inputLabel}>
          Host
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#server-host"
          >
            View Documentation
          </Link>
        </label>
      </div>

      <div className="card__body">
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
          <CodeInline>0.0.0.0</CodeInline>. Must be a valid IP address
        </p>
      </div>
    </div>
  );

  const renderPort = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="port" className={styles.inputLabel}>
          Port
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#server-port"
          >
            View Documentation
          </Link>
        </label>
      </div>

      <div className="card__body">
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
    </div>
  );

  const renderSuperEmail = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="super-email" className={styles.inputLabel}>
          Super Email
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#super-admin"
          >
            View Documentation
          </Link>
        </label>
      </div>

      <div className="card__body">
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
    </div>
  );

  const renderSuperPassword = config.dashboard.super_email !== undefined &&
    config.dashboard.super_email.length > 0 && (
      <div className="card margin-bottom--md">
        <div className="card__header">
          <label htmlFor="super-email" className={styles.inputLabel}>
            Super Password
            <Link
              className={styles.moreInfo}
              href="/docs/server/configuration#super-admin"
            >
              View Documentation
            </Link>
          </label>
        </div>

        <div className="card__body">
          <input
            className={styles.input}
            id="super-email"
            name="super-email"
            type="text"
            value={config.dashboard.super_password}
            onChange={onChangeSuperPassword}
          />

          <p className={styles.description}>
            The password specified here will override the password for the super
            admin account. Useful if you are using an Origin/EA account as your
            super admin since they don't have a password so you won't be able to
            login
          </p>
        </div>
      </div>
    );

  const renderDisableRegistration = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="disable-registration" className={styles.inputLabel}>
          Disable Registration
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#disable-account-registration"
          >
            View Documentation
          </Link>
        </label>
      </div>
      <div className="card__body">
        <input
          className={styles.checkbox}
          id="disable-registration"
          name="disable-registration"
          type="checkbox"
          checked={config.dashboard.disable_registration}
          onChange={onChangeDisableRegistration}
        />
        <p className={styles.description}>
          Disable creating accounts through the dashboard
        </p>
      </div>
    </div>
  );

  const renderMenuMessage = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="menu-message" className={styles.inputLabel}>
          Menu Message
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#menu-message"
          >
            View Documentation
          </Link>
        </label>
      </div>
      <div className="card__body">
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
    </div>
  );

  const renderDecayRate = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="decay-rate" className={styles.inputLabel}>
          Decay Rate
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#daily-decay"
          >
            View Documentation
          </Link>
        </label>
      </div>
      <div className="card__body">
        <input
          className={styles.input}
          id="decay-rate"
          name="decay-rate"
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
    </div>
  );

  const renderPromotions = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="promotions" className={styles.inputLabel}>
          Promotions
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#include-promotions"
          >
            View Documentation
          </Link>
        </label>
      </div>
      <div className="card__header">
        <input
          className={styles.checkbox}
          id="promotions"
          name="promotions"
          type="checkbox"
          checked={config.galaxy_at_war.promotions}
          onChange={onChangePromotions}
        />
        <p className={styles.description}>
          Include total character promotions as a Galaxy At War asset
        </p>
      </div>
    </div>
  );

  const renderLogging = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="logging" className={styles.inputLabel}>
          Logging Level
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#logging"
          >
            View Documentation
          </Link>
        </label>
      </div>
      <div className="card__body">
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
    </div>
  );

  const renderRetrieverEnabled = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="retriever-enabled" className={styles.inputLabel}>
          Retriever Enabled
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#enabled"
          >
            View Documentation
          </Link>
        </label>
      </div>
      <div className="card__body">
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
    </div>
  );

  const renderOriginFetch = config.retriever.enabled && (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="retriever-origin-fetch" className={styles.inputLabel}>
          Origin Fetch
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#origin-fetch"
          >
            View Documentation
          </Link>
        </label>
      </div>
      <div className="card__body">
        <input
          className={styles.checkbox}
          id="retriever-origin-fetch"
          name="retriever-origin-fetch"
          type="checkbox"
          checked={config.retriever.origin_fetch}
          onChange={onChangeRetrieverOriginFetch}
        />
        <p className={styles.description}>
          Allow authenticating EA/Origin accounts using the official servers.
          Disabling this will prevent anyone using EA/Origin from playing on
          your server without{" "}
          <Link href="/docs/client/unlinked-accounts">
            Unlinking their account.
          </Link>
          .
        </p>
      </div>
    </div>
  );

  const renderOriginFetchData = config.retriever.enabled &&
    config.retriever.origin_fetch && (
      <div className="card margin-bottom--md">
        <div className="card__header">
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
        </div>
        <div className="card__body">
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
            servers, disable this if you don't want existing player data to be
            loaded.
          </p>
        </div>
      </div>
    );

  const renderTunneling = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="tunnel" className={styles.inputLabel}>
          Tunneling
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#tunnel"
          >
            View Documentation
          </Link>
        </label>
      </div>

      <div className="card__body">
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
    </div>
  );

  const renderPublicGames = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="public-games" className={styles.inputLabel}>
          Public Games
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#public-games-api"
          >
            View Documentation
          </Link>
        </label>
      </div>
      <div className="card__body">
        <input
          className={styles.checkbox}
          id="public-games"
          name="public-games"
          type="checkbox"
          checked={config.api.public_games}
          onChange={onChangeAPIPublicGames}
        />
        <p className={styles.description}>
          Allow the games API to be publicly accessible, you can enable this if
          you want to create a bot or something and want to access the games
          list API without requiring authentication
        </p>
      </div>
    </div>
  );

  const renderPublicGamesHidePlayers = config.api.public_games && (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label
          htmlFor="public-games-hide-players"
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
      </div>
      <div className="card__body">
        <input
          className={styles.checkbox}
          id="public-games-hide-players"
          name="public-games-hide-players"
          type="checkbox"
          checked={config.api.public_games_hide_players}
          onChange={onChangeAPIPublicGamesHidePlayers}
        />
        <p className={styles.description}>
          Hide the list of players from the publicly accessible games API
        </p>
      </div>
    </div>
  );

  const renderQosType = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="qos-type" className={styles.inputLabel}>
          QoS type
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#qos"
          >
            View Documentation
          </Link>
        </label>
      </div>
      <div className="card__body">
        <select
          className={styles.input}
          name="qos-type"
          id="qos-type"
          value={config.qos.type ?? "local"}
          onChange={onChangeQoSType}
        >
          <option value="official">
            Official - Use the official game QoS servers, these are the ones
            most likely to work
          </option>
          <option value="local">
            Local - Use a local emulated QoS server, will not work for most LAN
            options
          </option>
          <option value="custom">
            Custom - Use a custom specified host and port for QoS
          </option>
          <option value="disabled">Disabled - Disable QoS networking</option>
          <option value="hamachi">
            Hamachi - Configure for a Hamachi-like setup
          </option>
        </select>
        <p className={styles.description}>
          The type of QoS configuration you would like, using "Official" can be
          good if you want players who have Open NAT types to directly connect
          to each other.
          <br />
          The Hamachi is specifically for virtual LAN type networks.
          <br />
          The recommended choice is "Official" combined with the "Stricter"
          tunneling option
        </p>
      </div>
    </div>
  );

  const renderQoSCustom = config.qos !== undefined &&
    config.qos.type === "custom" && (
      <>
        <div className="card margin-bottom--md">
          <div className="card__header">
            <label htmlFor="super-email" className={styles.inputLabel}>
              QoS Custom Host
              <Link
                className={styles.moreInfo}
                href="/docs/server/configuration#custom"
              >
                View Documentation
              </Link>
            </label>
          </div>

          <div className="card__body">
            <input
              className={styles.input}
              id="qos-host"
              name="qos-host"
              type="text"
              value={config.qos.host ?? ""}
              onChange={onChangeQoSHost}
            />
            <p className={styles.description}>
              The IP address of the custom QoS server
            </p>
          </div>
        </div>
        <div className="card margin-bottom--md">
          <div className="card__header">
            <label htmlFor="super-email" className={styles.inputLabel}>
              QoS Custom Port
              <Link
                className={styles.moreInfo}
                href="/docs/server/configuration#custom"
              >
                View Documentation
              </Link>
            </label>
          </div>

          <div className="card__body">
            <input
              className={styles.input}
              id="qos-host"
              name="qos-host"
              type="number"
              value={config.qos.port ?? ""}
              onChange={onChangeQoSPort}
            />
            <p className={styles.description}>
              The port of the custom QoS server
            </p>
          </div>
        </div>
      </>
    );

  const renderQoSHamachi = config.qos !== undefined &&
    config.qos.type === "hamachi" && (
      <div className="card margin-bottom--md">
        <div className="card__header">
          <label htmlFor="super-email" className={styles.inputLabel}>
            QoS Hamachi Host
            <Link
              className={styles.moreInfo}
              href="/docs/server/configuration#hamachi"
            >
              View Documentation
            </Link>
          </label>
        </div>

        <div className="card__body">
          <input
            className={styles.input}
            id="qos-host"
            name="qos-host"
            type="text"
            value={config.qos.host ?? ""}
            onChange={onChangeQoSHost}
          />
          <p className={styles.description}>
            Set this to be the Hamachi virtual address, visible for the person
            hosting the Hamachi network (They also need to be running the
            server), specifically the IPv4 address <b>NOT</b> the IPv6 (IPv6 is
            not supported by Pocket Relay)
          </p>
        </div>
      </div>
    );

  const renderUdpTunnelPort = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="port" className={styles.inputLabel}>
          UDP Tunnel Port
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#udp-tunnel-port"
          >
            View Documentation
          </Link>
        </label>
      </div>

      <div className="card__body">
        <input
          className={styles.input}
          id="port"
          name="port"
          type="number"
          value={config.udp_tunnel.port}
          onChange={onChangeUdpTunnelPort}
        />
        <p className={styles.description}>
          This is the port the UDP tunnel server will bind to
        </p>
      </div>
    </div>
  );

  const renderUdpTunnelExternalPort = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="port" className={styles.inputLabel}>
          UDP Tunnel External Port
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#udp-tunnel-external-port"
          >
            View Documentation
          </Link>
        </label>
      </div>

      <div className="card__body">
        <input
          className={styles.input}
          id="port"
          name="port"
          type="number"
          value={config.udp_tunnel.external_port}
          onChange={onChangeUdpTunnelExternalPort}
        />
        <p className={styles.description}>
          This is the external facing port for the UDP tunnel, ensure this is
          the same as the UDP tunnel port, if you are using a reverse proxy or
          binding a different docker port this should be the external facing
          port used by your reverse proxy / docker port binding
        </p>
      </div>
    </div>
  );

  const renderUdpTunnelEnabled = (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <label htmlFor="retriever-origin-fetch" className={styles.inputLabel}>
          UDP Tunnel Enabled
          <Link
            className={styles.moreInfo}
            href="/docs/server/configuration#udp-tunnel-enabled"
          >
            View Documentation
          </Link>
        </label>
      </div>
      <div className="card__body">
        <input
          className={styles.checkbox}
          id="retriever-origin-fetch"
          name="retriever-origin-fetch"
          type="checkbox"
          checked={config.udp_tunnel.enabled}
          onChange={onChangeUDPTunnelEnabled}
        />
        <p className={styles.description}>
          Allow disabling the UDP tunnel entirely
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <button
        className="button button--secondary margin-bottom--md"
        onClick={onReset}
      >
        Reset to Default
      </button>

      <div>
        <h2>Server Connection</h2>

        {renderHost}
        {renderPort}
      </div>

      <div className="">
        <h2>Dashboard</h2>

        {renderSuperEmail}
        {renderSuperPassword}
        {renderDisableRegistration}
      </div>

      <div>
        <h2>Menu</h2>
        {renderMenuMessage}
      </div>

      <div>
        <h2>Galaxy at War</h2>

        {renderDecayRate}
        {renderPromotions}
      </div>

      <div>
        <h2>Logging</h2>
        {renderLogging}
      </div>

      <div>
        <h2>Retriever</h2>

        {renderRetrieverEnabled}
        {renderOriginFetch}
        {renderOriginFetchData}
      </div>

      <div>
        <h2>QoS</h2>
        {renderQosType}
        {renderQoSCustom}
        {renderQoSHamachi}
      </div>

      <div>
        <h2>Tunneling</h2>
        {renderTunneling}
        {renderUdpTunnelPort}
        {renderUdpTunnelExternalPort}
        {renderUdpTunnelEnabled}
      </div>

      <div>
        <h2>API</h2>

        {renderPublicGames}
        {renderPublicGamesHidePlayers}
      </div>

      <Admonition type="info">Below is your generated config</Admonition>
      <CodeBlock language="json" title="config.json" children={configOutput} />
    </div>
  );
}
