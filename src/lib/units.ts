import { db } from '@/db';
import { units } from '@/db/schema';

export async function getUnits() {
  return db.select().from(units);
}
