export default {
  apps: [
    {
      name: "backend-api",

      script: "./server.js",

      instances: "max",

      exec_mode: "cluster",

      autorestart: true,

      watch: false,

      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
}