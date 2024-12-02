import express from "express";
import memorizationRoute from "./routes/memorizationRoute";

const app = express();

// Middleware
app.use(express.json());
app.use('/api',memorizationRoute);
app.use(express.static("public")); // Untuk UI

// Port Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
