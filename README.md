#
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

Two registry files are included, `URLBridge-win7.reg` and `URLBridge-win8.reg` which can be used to
to register URLBridge as the default browser.  For Windows 7 simply run the `URLBridge-win7.reg` file.
For Windows 8 run `URLBridge-win8.reg` and then change your default browser - it will appear as a Node.js
application in the browser list.

Both files assume that URL-Bridge is located at `C:\URLBridge\` and that `nodejs.exe` is
located at `C:\Program Files\nodejs\node.exe`.  They can be edited if required to change the locations.

## Todo

- Encryption: Currently plain URLs are sent across the wire. Encryption should be added for security.

Pull-requests welcome!
