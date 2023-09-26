import app from "./app";
import mongoose from "mongoose";

const DB = process.env.DB_LINK?.replace(
  "<PASSWORD>",
  <string>process.env.DB_PASSWORD
);

mongoose
  .connect(<string>DB)
  .then(() => {
    console.log("Successfully connected to database!");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
