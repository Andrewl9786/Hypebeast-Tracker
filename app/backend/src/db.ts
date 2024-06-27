import mongoose from 'mongoose'

export async function initMongoose() {
  try {
    await mongoose.connect('mongodb://localhost:27017/plugin_db');
    console.log('connection established')
  } catch (error) {
    console.error(error);
  }
}
