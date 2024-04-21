# League API

The League API allows retrieval of league-related information.

## Methods

### `chall_queue(queue)`

This method retrieves challenger league by queue.

**Parameters:**

- `queue`: The type of game queue (e.g., RANKED_SOLO_5x5, RANKED_FLEX_SR, etc.).

---

### `summoner(summoner_id)`

This method retrieves league entries by summoner ID.

**Parameters:**

- `summoner_id`: The unique identifier for the summoner.

---

### `league_entries(queue, tier, division, page)`

This method retrieves league entries by queue, tier, division, and page.

**Parameters:**

- `queue`: The type of game queue (e.g., RANKED_SOLO_5x5, RANKED_FLEX_SR, etc.).
- `tier`: The tier of the league (e.g., IRON, BRONZE, SILVER, etc.).
- `division`: The division of the league (e.g., I, II, III, IV).
- `page`: The page number for the league entries.

---

### `gm_queue(queue)`

This method retrieves grandmaster league by queue.

**Parameters:**

- `queue`: The type of game queue (e.g., RANKED_SOLO_5x5, RANKED_FLEX_SR, etc.).

---

### `league_id(league_uuid)`

This method retrieves league by UUID.

**Parameters:**

- `league_uuid`: The unique identifier for the league.

---

### `master_queue(queue)`

This method retrieves master league by queue.

**Parameters:**

- `queue`: The type of game queue (e.g., RANKED_SOLO_5x5, RANKED_FLEX_SR, etc.).