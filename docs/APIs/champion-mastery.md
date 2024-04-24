# Champion Mastery

The Champion Mastery API allows retrieval of champion mastery information.

## Methods

### `by_puuid(puuid)`

This method retrieves champion mastery by PUUID.

**Parameters:**

- `puuid`: The platform-agnostic identifier that is unique to each player across all Riot Games.

---

### `by_puuid_champion(puuid, champion_id)`

This method retrieves champion mastery by PUUID and champion ID.

**Parameters:**

- `puuid`: The platform-agnostic identifier that is unique to each player across all Riot Games.
- `champion_id`: The unique identifier for the champion.

---

### `by_summoner(summoner_id)`

This method retrieves champion mastery by summoner ID.

**Parameters:**

- `summoner_id`: The unique identifier for the summoner.

---

### `champ_mastery(summoner_id, champion_id)`

This method retrieves champion mastery by summoner ID and champion ID.

**Parameters:**

- `summoner_id`: The unique identifier for the summoner.
- `champion_id`: The unique identifier for the champion.

---

### `top_champs(summoner_id, count)`

This method retrieves top champion masteries by summoner ID.

**Parameters:**

- `summoner_id`: The unique identifier for the summoner.
- `count`: The number of top champion masteries to retrieve.

---

### `total_score(summoner_id)`

This method retrieves total champion mastery score by summoner ID.

**Parameters:**

- `summoner_id`: The unique identifier for the summoner.