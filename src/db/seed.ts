import { db } from './index';
import { users, projects, paymentPlans, units } from './schema';
import { hashSync } from 'bcryptjs';

export async function seed() {
  // Admin
  await db.insert(users).values({
    name: 'مدير النظام',
    email: 'admin@value9.com',
    phone: '0123456789',
    role: 'SUPER_ADMIN',
    status: 'ACTIVE',
    passwordHash: hashSync('Admin@123', 10),
  }).onConflictDoNothing();

  // Agent
  await db.insert(users).values({
    name: 'أحمد خالد',
    email: 'ahmed@value9.com',
    phone: '0101234567',
    role: 'SALES_AGENT',
    status: 'ACTIVE',
    passwordHash: hashSync('Agent@123', 10),
  }).onConflictDoNothing();

  // Project
  await db.insert(projects).values({
    name: 'VALUE 9 MALL',
    developer: 'VALUE 9 DEVELOPMENTS',
    location: 'القاهرة الجديدة',
    description: 'مجمع تجاري فاخر مع وحدات تجارية متنوعة',
    deliveryDate: '2027-12-01',
    status: 'ACTIVE',
  }).onConflictDoNothing();

  // Payment Plans
  const plans = [
    { name: '10% / 24 شهر', downPercent: 10, durationMonths: 24 },
    { name: '20% / 36 شهر', downPercent: 20, durationMonths: 36 },
    { name: '30% / 48 شهر', downPercent: 30, durationMonths: 48 },
    { name: 'نقدي / خصم 30%', downPercent: 30, durationMonths: 0, isCash: true, discountPercent: 30 },
  ];
  for (const p of plans) {
    await db.insert(paymentPlans).values(p as any).onConflictDoNothing();
  }

  // Seed units from document (F1-F30, S1-S16)
  const fUnits = [
    { code: 'F1-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '51', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '6375000' },
    { code: 'F2-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '51', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '6375000' },
    { code: 'F3-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '51', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '6375000' },
    { code: 'F4-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '51', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '6375000' },
    { code: 'F5-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '51', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '6375000' },
    { code: 'F6-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '27', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3240000' },
    { code: 'F7-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '27', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3240000' },
    { code: 'F8-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '27', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3240000' },
    { code: 'F9-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '27', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3240000' },
    { code: 'F10-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '27', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3240000' },
    { code: 'F11-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '27', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3240000' },
    { code: 'F12-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '27', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3240000' },
    { code: 'F13-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '27', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3240000' },
    { code: 'F14-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '51', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '6375000' },
    { code: 'F15-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '51', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '6375000' },
    { code: 'F16-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '51', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '6375000' },
    { code: 'F17-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '25', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3000000' },
    { code: 'F18-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '25', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3000000' },
    { code: 'F19-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '23', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '2530000' },
    { code: 'F20-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '23', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '2530000' },
    { code: 'F21-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '23', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '2530000' },
    { code: 'F22-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '23', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '2530000' },
    { code: 'F23-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '23', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '2530000' },
    { code: 'F24-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '23', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '2530000' },
    { code: 'F25-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '23', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '2530000' },
    { code: 'F26-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '23', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '2530000' },
    { code: 'F27-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '23', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '2530000' },
    { code: 'F28-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '30', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '2750000' },
    { code: 'F29-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '25', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '2750000' },
    { code: 'F30-V9', floor: 'الأرضي', zone: 'RETIAL', internalArea: '25', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '2750000' },
  ];
  const sUnits = [
    { code: 'S1-V9', floor: 'الأول', zone: 'S', internalArea: '47', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '6375000' },
    { code: 'S2-V9', floor: 'الأول', zone: 'S', internalArea: '46', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '6375000' },
    { code: 'S3-V9', floor: 'الأول', zone: 'S', internalArea: '47', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '6375000' },
    { code: 'S4-V9', floor: 'الأول', zone: 'S', internalArea: '48', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '6375000' },
    { code: 'S5-V9', floor: 'الأول', zone: 'S', internalArea: '73', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '5110000' },
    { code: 'S6-V9', floor: 'الأول', zone: 'S', internalArea: '73', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '5110000' },
    { code: 'S7-V9', floor: 'الأول', zone: 'S', internalArea: '49', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3430000' },
    { code: 'S8-V9', floor: 'الأول', zone: 'S', internalArea: '46', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3290000' },
    { code: 'S9-V9', floor: 'الأول', zone: 'S', internalArea: '46', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3290000' },
    { code: 'S10-V9', floor: 'الأول', zone: 'S', internalArea: '47', externalArea: '0', view: 'خلفي', pricePerSqm: '57375', originalPrice: '3290000' },
    { code: 'S11-V9', floor: 'الأول', zone: 'S', internalArea: '55', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '4270000' },
    { code: 'S12-V9', floor: 'الأول', zone: 'S', internalArea: '55', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '4270000' },
    { code: 'S13-V9', floor: 'الأول', zone: 'S', internalArea: '82', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '5740000' },
    { code: 'S14-V9', floor: 'الأول', zone: 'S', internalArea: '82', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '5740000' },
    { code: 'S15-V9', floor: 'الأول', zone: 'S', internalArea: '55', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '3850000' },
    { code: 'S16-V9', floor: 'الأول', zone: 'S', internalArea: '61', externalArea: '0', view: 'واجهة', pricePerSqm: '57375', originalPrice: '4270000' },
  ];
  for (const u of [...fUnits, ...sUnits]) {
    await db.insert(units).values({
      ...u,
      projectId: 1,
      status: 'AVAILABLE',
      netPrice: u.originalPrice,
      discountPercent: 0,
      discountAmount: '0',
    }).onConflictDoNothing();
  }
}
