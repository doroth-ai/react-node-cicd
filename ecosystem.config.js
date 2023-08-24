module.exports = {
  apps: [
    {
      name: 'deployment',
      script: 'npm',
      args: 'run start',
      instances: 2,
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
