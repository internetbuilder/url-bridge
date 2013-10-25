# URL-Bridge

URL-Bridge allows you to open URLs on another computer.

## Server

The server should be run on the computer with the browser that you want to use.

### Config

Edit `server-conf.json` with the following options:

#### `listen`

The port the server will listen on.

#### `sources`

An array of allowed client IP addresses.

## Client

The client should be run on any computer which you want to open URLs from.

### Config

Edit `client-conf.json` with the IP/Hostname and port of the server.

## Misc

The server uses the following to open urls:

- `xdg-open` on GNU/Linux based systems
- `explorer.exe` on Windows systems
- `open` on OSX systems

The included `URLBridge.reg` file can be used on Windows (tested on Windows 7) to set the default browser
to be URL-Bridge.  It assumes that URL-Bridge is located at `C:\URLBridge\` and that `nodejs.exe` is
located at `C:\Program Files\nodejs\node.exe`.  It can be edited if required to change the locations.

## Todo

- Encryption: Currently plain URLs are sent across the wire. Encryption should be added for security.

Pull-requests welcome!
