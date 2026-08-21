import { pgTable, serial, text, integer, boolean, timestamp, decimal, varchar, date } from 'drizzle-orm/pg-core';

// Projects
export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  developer: text('developer'),
  location: text('location'),
  description: text('description'),
  deliveryDate: date('delivery_date'),
  status: text('status').default('ACTIVE'),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Payment Plans
export const paymentPlans = pgTable('payment_plans', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  downPercent: integer('down_percent').notNull(),
  durationMonths: integer('duration_months').notNull(),
  isCash: boolean('is_cash').default(false),
  discountPercent: integer('discount_percent').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

// Units
export const units = pgTable('units', {
  id: serial('id').primaryKey(),
  code: varchar('code', { length: 20 }).notNull(),
  projectId: integer('project_id').references(() => projects.id),
  floor: text('floor'),
  zone: text('zone'),
  unitType: text('unit_type').default('RETAIL'),
  internalArea: decimal('internal_area', { precision: 8, scale: 2 }),
  externalArea: decimal('external_area', { precision: 8, scale: 2 }),
  view: text('view'),
  pricePerSqm: decimal('price_per_sqm', { precision: 12, scale: 2 }),
  originalPrice: decimal('original_price', { precision: 14, scale: 2 }),
  discountPercent: integer('discount_percent').default(0),
  discountAmount: decimal('discount_amount', { precision: 14, scale: 2 }),
  netPrice: decimal('net_price', { precision: 14, scale: 2 }),
  status: text('status').default('AVAILABLE'),
  assignedAgentId: integer('assigned_agent_id'),
  reservationDate: timestamp('reservation_date'),
  contractDate: timestamp('contract_date'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Users / Agents
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone'),
  role: text('role').default('SALES_AGENT'),
  status: text('status').default('ACTIVE'),
  passwordHash: text('password_hash'),
  profileImage: text('profile_image'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Leads
export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  phone: text('phone'),
  whatsapp: text('whatsapp'),
  email: text('email'),
  company: text('company'),
  source: text('source').default('OTHER'),
  campaign: text('campaign'),
  interestedProjectId: integer('interested_project_id').references(() => projects.id),
  interestedUnitCode: text('interested_unit_code'),
  unitType: text('unit_type'),
  budget: decimal('budget', { precision: 14, scale: 2 }),
  preferredPlanId: integer('preferred_plan_id').references(() => paymentPlans.id),
  temperature: text('temperature').default('WARM'),
  status: text('status').default('NEW'),
  assignedAgentId: integer('assigned_agent_id').references(() => users.id),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
  lastContact: timestamp('last_contact'),
  nextFollowUp: timestamp('next_follow_up'),
});

// Customers
export const customers = pgTable('customers', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  phone: text('phone'),
  email: text('email'),
  company: text('company'),
  source: text('source'),
  leadId: integer('lead_id').references(() => leads.id),
  assignedAgentId: integer('assigned_agent_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
});

// Reservations
export const reservations = pgTable('reservations', {
  id: serial('id').primaryKey(),
  unitId: integer('unit_id').references(() => units.id).notNull(),
  customerId: integer('customer_id').references(() => customers.id),
  leadId: integer('lead_id').references(() => leads.id),
  agentId: integer('agent_id').references(() => users.id),
  paymentPlanId: integer('payment_plan_id').references(() => paymentPlans.id),
  status: text('status').default('PENDING'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Contracts
export const contracts = pgTable('contracts', {
  id: serial('id').primaryKey(),
  contractNumber: text('contract_number').notNull(),
  customerId: integer('customer_id').references(() => customers.id).notNull(),
  unitId: integer('unit_id').references(() => units.id).notNull(),
  agentId: integer('agent_id').references(() => users.id),
  projectId: integer('project_id').references(() => projects.id),
  paymentPlanId: integer('payment_plan_id').references(() => paymentPlans.id),
  unitPrice: decimal('unit_price', { precision: 14, scale: 2 }),
  discountPercent: integer('discount_percent').default(0),
  netPrice: decimal('net_price', { precision: 14, scale: 2 }),
  downPayment: decimal('down_payment', { precision: 14, scale: 2 }),
  status: text('status').default('DRAFT'),
  contractDate: timestamp('contract_date'),
  deliveryDate: date('delivery_date'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Payments
export const payments = pgTable('payments', {
  id: serial('id').primaryKey(),
  contractId: integer('contract_id').references(() => contracts.id),
  amount: decimal('amount', { precision: 14, scale: 2 }).notNull(),
  paymentMethod: text('payment_method'),
  receiptNumber: text('receipt_number'),
  paymentDate: timestamp('payment_date').defaultNow(),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Installments
export const installments = pgTable('installments', {
  id: serial('id').primaryKey(),
  contractId: integer('contract_id').references(() => contracts.id).notNull(),
  number: integer('number').notNull(),
  dueDate: date('due_date').notNull(),
  amount: decimal('amount', { precision: 14, scale: 2 }).notNull(),
  paidAmount: decimal('paid_amount', { precision: 14, scale: 2 }).default('0'),
  status: text('status').default('UPCOMING'),
  paidDate: timestamp('paid_date'),
  notes: text('notes'),
});

// Follow-ups
export const followUps = pgTable('follow_ups', {
  id: serial('id').primaryKey(),
  customerId: integer('customer_id').references(() => customers.id),
  leadId: integer('lead_id').references(() => leads.id),
  agentId: integer('agent_id').references(() => users.id),
  followUpType: text('follow_up_type').default('CALL'),
  status: text('status').default('PENDING'),
  scheduledAt: timestamp('scheduled_at'),
  completedAt: timestamp('completed_at'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Audit logs
export const auditLogs = pgTable('audit_logs', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  action: text('action').notNull(),
  entity: text('entity'),
  entityId: integer('entity_id'),
  oldValue: text('old_value'),
  newValue: text('new_value'),
  createdAt: timestamp('created_at').defaultNow(),
});
