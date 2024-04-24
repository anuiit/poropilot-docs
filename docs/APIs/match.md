# Match

The **Match API** allows retrieval of match-related information.

## Methods

### `by_match_id(match_id)`

This method retrieves match information using the match ID.

**Parameters:**

- `match_id`: The unique identifier for the match.

---

### `by_match_id_timeline(match_id)`

This method retrieves the timeline of events for a match using the match ID.

**Parameters:**

- `match_id`: The unique identifier for the match.

---

### `by_puuid_matchlist(puuid, startTime, endTime, queue, typeGame, start, count)`

This method retrieves a list of matches for a player using their PUUID, with optional filters.

**Parameters:**

- `puuid`: The platform-agnostic identifier that is unique to each player across all Riot Games.
- `startTime`: (Optional) The start time for the range of matches to retrieve.
- `endTime`: (Optional) The end time for the range of matches to retrieve.
- `queue`: (Optional) The queue type for the matches to retrieve.
- `typeGame`: (Optional) The game type for the matches to retrieve.
- `start`: (Optional) The starting index for the list of matches to retrieve.
- `count`: (Optional) The number of matches to retrieve.



:::note

The `puuid` parameter is required, while the other parameters are optional and can be used to filter the list of matches.

:::