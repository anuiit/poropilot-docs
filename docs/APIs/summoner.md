# Summoner

:::warning
This API is planned to be deprecated, if you are still using endpoints from this section you should update your requests to the [Account](/APIs/account.md) API.
:::

The Summoner API is a part of the PoroPilot library that provides methods to retrieve information about a summoner in the game League of Legends.

## Methods

### `by_account(encrypted_account_id)`

This method retrieves summoner information using the encrypted account ID.

**Parameters:**

- `encrypted_account_id`: The encrypted account ID is a unique identifier associated with each player's account.

---

### `by_name(summoner_name)`

This method retrieves summoner information using the summoner's name.

**Parameters:**

- `summoner_name`: This is the name that players choose for themselves when creating an account.

---

### `by_puuid(encrypted_puuid)`

This method retrieves summoner information using the encrypted PUUID.

**Parameters:**

- `encrypted_puuid`: The PUUID is a platform-agnostic identifier that is unique to each player across all Riot Games.

---

### `by_id(encrypted_summoner_id)`

This method retrieves summoner information using the encrypted summoner ID.

**Parameters:**

- `encrypted_summoner_id`: The summoner ID is a unique identifier associated with each player's summoner, which is the in-game avatar that represents the player in the game.

:::note

All these methods require the encrypted versions of the identifiers, which are used to ensure the security and privacy of the players' data.

:::