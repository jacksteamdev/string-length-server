import { type } from "arktype";
import { FastMCP } from "fastmcp";

const server = new FastMCP({
  name: "string-length",
  version: "1.0.0",
});

server.addTool({
  name: "get_string_length",
  description: "LLMs are notoriously bad a counting characters. This tool will count the number of characters in a string.",
  parameters: type({
    text: "string",
  }),
  execute: async (args) => {
    return {
      type: "text",
      text: JSON.stringify({ length: args.text.length }),
    };
  },
});

server.start({
  transportType: "stdio",
});
