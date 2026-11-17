import { model, Schema } from 'mongoose';

const medicineSchema = new Schema(
  {
    photo: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    suppliers: {
      type: String,
      required: false,
    },
    stock: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const MedicinesCollection = model('medicines', medicineSchema);
