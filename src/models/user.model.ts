import pool from '../config/db';
import { User } from '../types/user.types';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export const createUser = async (user: User) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const result: any = await pool.execute(
    'CALL sp_create_user(?, ?)',
    [user.email, hashedPassword]
  );

  const userId = result?.[0]?.[0]?.user_id ?? result?.[0]?.user_id;
  const token = jwt.sign({ userId, email: user.email }, JWT_SECRET, { expiresIn: '30m' });
  return token;
};

export const checkUserExists = async (user: User) => {
  const [s]: any = await pool.execute(
    'CALL sp_get_user_by_email(?)',
    [user.email]
  );

  const rows = s?.[0] ?? [];
  if (!rows || rows.length === 0) {
    throw new Error('User not found');
  }

  const row = rows[0];
  const ismatch = await bcrypt.compare(user.password, row?.password);
  if (!ismatch) {
    throw new Error('Invalid credentials');
  }

  const userId = row?.Id ?? row?.userId ?? row?.user_id;
  const token = jwt.sign({ userId, email: row?.email ?? user.email }, JWT_SECRET, { expiresIn: '30m' });
  return token;
};
