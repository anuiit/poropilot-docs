# Account

The Account API allows retrieval of account-related information.

## Methods

### `by_puuid(puuid)`

This method retrieves account information using the PUUID.

**Parameters:**

- `puuid`: The platform-agnostic identifier that is unique to each player across all Riot Games.

---

### `by_gamename(gamename, tagline)`

This method retrieves account information using the gamename and tagline.

**Parameters:**

- `gamename`: The name of the game.
- `tagline`: The tagline associated with the game.