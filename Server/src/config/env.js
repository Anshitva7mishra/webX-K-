const requiredEnv = ["PORT", "MONGODB_URI", "NODE_ENV"];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    console.error(`❌ Missing environment variable: ${key}`);
    process.exit(1);
  }
});

export default {};
