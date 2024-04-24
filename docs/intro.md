---
slug: /
sidebar_position: 1
---


# Introduction

:::note[Documentation still in progress]

Please note that the API documentation for PoroPilot is currently a *work in progress*. While the basics are covered, more detailed information will be added soon. For now, please refer to this page and the ``Getting Started`` for accurate informations.

Remember that you can always refer to the [Riot Documentation](https://developer.riotgames.com/docs/lol) if you need further informations.

:::

## My Journey

I've had my fair share of struggles with integrating the League of Legends API into my projects, I've mainly used [riot-watcher](https://riot-watcher.readthedocs.io/en/latest/), but encountered issues with HTTP errors, parallelization, and the abstract code wasn't helping. It was frustrating to debug and use, making it difficult to focus on building something.

Frustrated with the limitations of existing solutions, I decided to take matters into my own hands and created **PoroPilot**, a Python wrapper designed to simplify interactions with the Riot Games API while maintaining some abstraction. 
My goal was to create a library that is easy to understand, use, and debug.

## Why PoroPilot ?

It is designed with usability and simplicity in mind. I'll make sure to add detailed documentation and more examples to help you get your project started quickly.\
\
PoroPilot can :

- **Access all Riot League of Legends APIs**
- **Automatically manages rate limits**
- **Caching on some APIs to limit redundant calls**

## What's Next

I'm continuing to improve PoroPilot to make it even more useful. Here's what's coming soon:
- **Centralized Request Handling**: A single handler to manage all API requests, making it more efficient.
- **Parallel Processing**: Using multiple threads to process requests at the same time.
- **Smarter Cache**: Reduce the number of requests when conditions are met.
- **Convenient Pipelines**: Access to essential data with pre-built pipeline methods, such as retrieving a list of recent games or a player's history with just one simple function call.


These updates will make PoroPilot more powerful and usable in production apps.