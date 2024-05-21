# Bink patch

:::note 
This patch is no longer required as in v0.3.0 of the client an exploit from https://github.com/Aim4kill/Bug_OldProtoSSL was used in order to bypass this verification,
however this patch is still used for plugin loading if you are using the client plugin variant
:::

The `binkw32.dll` patch is a DLL that replaces the normal `binkw32.dll` of the game with a modified DLL that hooks into certain functionality of the game to do things like disabling DLC checking, enabling the in-game console, and disabling certificate verification. This DLL also proxies the original DLL functions to the original DLL which is usually renamed to something like `binkw23.dll` or `binkw32-old.dll`

Pocket Relay uses this patch in order to disable the certificate verification of the game which allows the game to use the servers self-signed SSL certificate which the game would normally reject

The patch included in the current Pocket Relay Client comes from https://github.com/Erik-JS/masseffect-binkw32 
