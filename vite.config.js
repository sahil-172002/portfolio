// vite.config.js
export default {
    server: {
      host: '0.0.0.0',  // Expose the server on the network
      port: 5173,       // Set the port to 5173
      strictPort: true, // Ensure the port is used even if it's busy
    }
  }
  