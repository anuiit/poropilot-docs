---
sidebar_position: 2
---

# Getting Started

This guide will help you get started with using PoroPilot to interact with the Riot Games API.


## Installation

To install, simply run the following command in your terminal :

```bash
pip install PoroPilot
```

:::note
It's recommended to use a Python environment to manage your dependencies. This isolates requirements from other projects you might be working on.

Here are two popular options for creating Python environments:

- **miniconda**: A lightweight package manager that simplifies environment creation.
- **venv**: The built-in Python module for creating virtual environments.

Choose whichever option you find more convenient!
:::

## Prerequisites

Before you start analyzing *Faker* games, you'll need:

- An **API key** from Riot Games (obtained through the [Riot Games Developer Portal](https://developer.riotgames.com/))
- An **.env file** to store your API key and other sensitive data. you can simply create a ```file.txt``` file and rename it to ```.env```, then add the Riot API key as such ```RIOT_API_KEY='RGAPI-XXXXX-XXXXX'```

Now we're all set to start getting **data** !

## Initialization

To start using PoroPilot, initialize the module with your API key and desired region as parameters :

```python
from PoroPilot import PoroPilot

import os
from dotenv import load_dotenv

# Load variables from the .env file
load_dotenv()

# Access the variables
RIOT_API_KEY = os.getenv('RIOT_API_KEY')

#Initialize a poro
poro = PoroPilot(RIOT_API_KEY, 'region')
```

:::note

Information about regions can be found [here](https://developer.riotgames.com/docs/lol#routing-values).

:::
\
With this setup complete, we can now examine any player data.

## Basic Usage
### PUUID
The **PUUID** is the core of almost every request since it is how players are identified, keep in mind that you'll manipulate those a lot.
\
\
For demonstration let's check *Faker*'s profile using the **Account API**.

```python
poro.account.by_gamename('Hide on bush', 'KR1')
```

```
'puuid': 'HLGB3uZ34jvjosrb3p0yZrq73SP_jA4Xe924CrSYIv9i9gG2I7SM6FIoZ54_A7nmPlJKsu-DnC2P_Q', 
'gameName': 'Hide on bush', 
'tagLine': 'KR1'
```

:::warning
The **Summoner API** is [planned for deprecation](https://developer.riotgames.com/docs/lol#summoner-names-to-riot-ids), so it's not recommended for future projects.
Instead, use the **Account API**, which links summoner names with Riot IDs to get the **PUUID**.

Here is an example with the **Summoner API** :

```python
poro.summoner.by_name('Hide on bush')
```

```json
"id": "wgQGYvz9KT2X0v3po1ToIHShVqauYsBxJGAvidIm2nUkxg",
"accountId": "Cc8B5qSGo_MwxzurjzlZJo5LPjqekgTAwMyshnFpAEhj",
"puuid": "HLGB3uZ34jvjosrb3p0yZrq73SP_jA4Xe924CrSYIv9i9gG2I7SM6FIoZ54_A7nmPlJKsu-DnC2P_Q",
"profileIconId": 6,
"revisionDate": 1710955400000,
"summonerLevel": 752
```

:::note
Please note that specific data, like ``profileIconId``, can only be accessed via the **Summoner API** currently. However, this is expected to change soon with its removal.
:::



\
**Nice!** This opens up the opportunity to access the player's game history and various data from specific endpoints.

### A bit further...

Using the PUUID, we can retrieve a record of the player's past games.

```python
poro.match.by_puuid_matchlist('PUUID')
```

```
['KR_6995105556', 
'KR_6995090019', 
'KR_6994022977', 
'KR_6993004745', 
'KR_6992956755', ...]
```

We can then use this list of game IDs to fetch data from a specific game.

```python
poro.match.by_match_id('KR_6995105556')
```
\
That concludes this section. 
\
\
For more detailed examples, please refer to the [Examples](/ex) page. If you need further information about a specific API, you can explore its methods on the relevant page under the ```Endpoints``` section.