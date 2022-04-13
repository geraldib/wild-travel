import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tripSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    guides: [
      {
        name: String,
      },
    ],
    dates: [
      {
        type: Date,
      },
    ],
    description: {
      type: String,
    },
    office: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  }
);

export const Trip = mongoose.model('Trip', tripSchema);
