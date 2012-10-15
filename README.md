# URL-Bridge

URL-Bridge allows you to open URLs on another computer.

## Server

The server should be run on the computer with the browser that you want to use.

### Config

Server config is simple, just edit server-conf.json and enter the port you want the server to listen on.

## Client

The client should be run on any computer which you want to open URLs from.

### Config

Client config is also simple.  Edit client-conf.json with the IP/Hostname and port of the server.

## Misc

Currently the server is designed to run on Linux based systems and uses `xdg-open` to open the URLs.
The included `URLBridge.reg` file can be used on Windows (tested on Windows 7) to set the default browser
to be URL-Bridge.  It assumes that URL-Bridge is located at `C:\URLBridge\` and that `nodejs.exe` is
located at `C:\Program Files\nodejs\node.exe`.  It can be edited if required to change the locations.

## Todo

- Encryption: Currently plain URLs are sent across the wire. Encryption should be added for security.
- Support for other operating systems.

Pull-requests welcome!
