import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connection: {
    uri: string | undefined;
    isConnected: mongoose.Connection | null;
} = {
    uri: process.env.MONGODB_URI,
    isConnected: null
};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  let db:any = '';
  if (connection.uri !== undefined) {
    db = await mongoose.connect(connection.uri, {
        dbName: 'translator',
      });
  }

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
