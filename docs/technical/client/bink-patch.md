# Bink patch

:::note 
This patch is no longer required as in v0.3.0 of the client an exploit from https://github.com/Aim4kill/Bug_OldProtoSSL was used in order to bypass this verification,
however this patch is still used for plugin loading if you are using the client plugin variant
:::

## Explanation

The `binkw32.dll` patch is a DLL that you add to your Mass Effect 3 installation to allow various features of **Pocket Relay** but it also has other use cases such as Modding

The standard `binkw32.dll` is a [DLL (Dynamic Link Library)](https://en.wikipedia.org/wiki/Dynamic-link_library) file thats commonly used in games, the normal DLL provides [Bink Video](https://en.wikipedia.org/wiki/Bink_Video) support to the game. However, in the case of modding and for **Pocket Relay** we use a custom DLL that replaces this allowing us to access the game and load our own code (While still allowing the game to use the old version under the hood)

The [custom version](https://github.com/Erik-JS/masseffect-binkw32) commonly used with **Mass Effect 3** does the following things:

- **Disables DLC Verification**: By disabling the DLC verification it allows the game to load DLCs that aren't valid, this allows modders to make DLC mods, but this also fixes a bug where sometimes DLC you own might not be verified when you connect to _Pocket Relay_
- **Disables SSL certificate validation**: By disabling the certificate verification of Mass Effect 3 it allows the game to connect to servers that aren't using the EA certificate (Previously Pocket Relay required this but we have since bypassed this requirement without the need for this)
- **ASI Plugin Loading**: The custom version allows loading `.asi` plugin files which allow custom code to be run, this is used by the _Pocket Relay Plugin Client_ to work without requiring any Administrator permissions but running the client directly inside Mass Effect 
- **Enables Console**: Enables the in-game console
