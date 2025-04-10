# string-length-server MCP Server

A simple Model Context Protocol (MCP) server that exposes a single tool to count the number of characters in a string.

This is useful because large language models (LLMs) are notoriously bad at counting characters accurately. This server provides a reliable way to get the exact string length.

## Features

### Tools

- **`get_string_length`**
  - **Description:** Counts the number of characters in a string.
  - **Parameters:**
    - `text` (string): The input string to measure.
  - **Returns:** A JSON object with the character count, e.g. `{ "length": 42 }`.

## Development

Install dependencies:

```bash
npm install
```

Build the server:

```bash
npm run build
```

For development with auto-rebuild:

```bash
npm run watch
```

## Installation

To use with Claude Desktop, add the server config:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "string-length-server": {
      "command": "/path/to/string-length-server/build/index.js"
    }
  }
}
```

Replace `/path/to/string-length-server/build/index.js` with the actual path to your compiled server file.

## Debugging

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is available as a package script:

```bash
npm run inspector
```

The Inspector will provide a URL to access debugging tools in your browser.

## License

MIT