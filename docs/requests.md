---
sidebar_position: 5
---

# Requests

### Overview
The **RequestHandler** class is a utility for making HTTP requests to the Riot Games API. It handles **caching**, **retries**, and **error handling**.

### Class Attributes
- `api_key` (str): The API key used for authentication with the Riot Games API.
- `region` (str): The region to which the requests are being made.
- `use_platform` (bool): A flag to determine whether to use the platform or the region in the request URL.
- `expire_after` (int): The cache expiration time in seconds.
- `max_retries` (int): The maximum number of retries for a request.
- `session` (requests.Session): The session used for making requests.
- `retries` (int): The current number of retries for a request.

### Methods
- ``__init__(self, api_key, region, use_platform, expire_after=3600, max_retries=3)``\
Initializes a new instance of the RequestHandler class.

- ``set_cache(self, expire_after, cache_name='riot_api_cache')``\
Sets up the cache for the requests.

- ``build(self, region, endpoint, query_params=None)``\
Builds the URL for the request.

- ``make_request(self, endpoint, query_params=None)``\
Makes a request to the specified endpoint with the given query parameters. If the request fails, it will retry up to max_retries times.

- ``handle_error(exception)``\
Handles any errors that occur during a request. If a requests.exceptions.ConnectionError or requests.exceptions.HTTPError is raised, it will log the error and retry the request. If a different type of error is raised, it will log the error and stop retrying.

### Usage
```python
handler = RequestHandler(api_key='your_api_key', region='euw1', use_platform=True)
response = handler.make_request('/lol/summoner/v4/summoners/by-name/RiotSchmick')
```
This will make a request to the /lol/summoner/v4/summoners/by-name/RiotSchmick endpoint on the Riot Games API and return the response as a JSON object.