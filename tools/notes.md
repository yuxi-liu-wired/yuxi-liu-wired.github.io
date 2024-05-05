# How to write essays

Based on [About This Website#Writing Checklist · Gwern.net](https://gwern.net/about#writing-checklist)

## Spellchecking

Use `ispell` if you are old school. Personally I just use `Code Spell Checker` in VSCode.

## Grammar checking

?

## HTML linting

## Markdown linting?

[DavidAnson/markdownlint: A Node.js style checker and lint tool for Markdown/CommonMark files.](https://github.com/DavidAnson/markdownlint)

I personally found that my markdown is already good enough that I don't need this.

[EmacsWiki: Markdown Mode](https://www.emacswiki.org/emacs/MarkdownMode): for balanced brackets & quotation marks.

## Checking for links

`linkchecker` is a good tool for checking for broken links. It is available in the Ubuntu repositories.

```bash
linkchecker -r 0 -v https://doi.org/10.1207/s15516709cog0603_1
linkchecker -r 0 -v https://doi.org/10.1207/s15516709cog0603_1#.pdf
```

### Replace by archived URL

404 Not Found

410 Gone - This response is sent when the requested content has been permanently deleted from server, with no forwarding address.

### Ignore

401 Unauthorized
Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

403 Forbidden
The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.

These two typically mean the URL is correct but the server is refusing to serve the resource, probably because I'm checking from a command line tool instead of a browser.

### Retry later

408 Request Timeout
This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.

421 Misdirected Request
The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.

Probably someone messed up their TLS configuration.

429 Too Many Requests
The user has sent too many requests in a given amount of time ("rate limiting").

500 Internal Server Error
The server has encountered a situation it does not know how to handle.

502 Bad Gateway
This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

503 Service Unavailable
The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.

504 Gateway Timeout
This error response is given when the server is acting as a gateway and cannot get a response in time.

## Manual attention (probably wrong URL)

400 Bad Request
The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).

401 Unauthorized
Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

505 HTTP Version Not Supported - The HTTP version used in the request is not supported by the server.

Probably this means I have to use `http` instead of `https`.

### Handling bad response codes

If the link is found to be dead, then put it in the `deadlinks.txt` file.

TODO: write a script to check all the links in the `deadlinks.txt` file.
