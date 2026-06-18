import mongoose from "mongoose";

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Token ID is required"],
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const blacklistTokenModel = new mongoose.model(
  "blacklist_tokens",
  blacklistTokenSchema,
);

export default blacklistTokenModel;
