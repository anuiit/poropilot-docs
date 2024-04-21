---
sidebar_position: 2
---

# Getting Started
First let's install PoroPilot, you can simply install it via pip:

```bash
pip install PoroPilot
```

## First steps

Next we'll need a few things :

- An API key from Riot Games
- An '.env' file to store data
- A player or a game to analyze

To start using PoroPilot, initialize the PoroPilot class with your API key and desired region. Then, you can use the provided methods to interact with different endpoints of the Riot API.

```python
from PoroPilot import PoroPilot

# Initialize PoroPilot with your API key and region
poro_pilot = PoroPilot("YOUR_API_KEY", "REGION")

# Example: Retrieve summoner information by name
summoner_info = poro_pilot.summoner.by_name("summoner_name")
print(summoner_info)

# Example: Retrieve match information by match ID
match_info = poro_pilot.match.by_match_id("match_id")
print(match_info)
```