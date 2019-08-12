module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateBobae {
  count: Int!
}

type AggregateBullpen {
  count: Int!
}

type AggregateClien {
  count: Int!
}

type AggregateEtoland {
  count: Int!
}

type AggregateIlbe {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bobae {
  id: ID!
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
  createdAt: DateTime!
}

type BobaeConnection {
  pageInfo: PageInfo!
  edges: [BobaeEdge]!
  aggregate: AggregateBobae!
}

input BobaeCreateInput {
  id: ID
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
}

type BobaeEdge {
  node: Bobae!
  cursor: String!
}

enum BobaeOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  author_ASC
  author_DESC
  registeredAt_ASC
  registeredAt_DESC
  hitCount_ASC
  hitCount_DESC
  link_ASC
  link_DESC
  from_ASC
  from_DESC
  createdAt_ASC
  createdAt_DESC
}

type BobaePreviousValues {
  id: ID!
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
  createdAt: DateTime!
}

type BobaeSubscriptionPayload {
  mutation: MutationType!
  node: Bobae
  updatedFields: [String!]
  previousValues: BobaePreviousValues
}

input BobaeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BobaeWhereInput
  AND: [BobaeSubscriptionWhereInput!]
  OR: [BobaeSubscriptionWhereInput!]
  NOT: [BobaeSubscriptionWhereInput!]
}

input BobaeUpdateInput {
  title: String
  author: String
  registeredAt: String
  hitCount: Int
  link: String
  from: String
}

input BobaeUpdateManyMutationInput {
  title: String
  author: String
  registeredAt: String
  hitCount: Int
  link: String
  from: String
}

input BobaeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  registeredAt: String
  registeredAt_not: String
  registeredAt_in: [String!]
  registeredAt_not_in: [String!]
  registeredAt_lt: String
  registeredAt_lte: String
  registeredAt_gt: String
  registeredAt_gte: String
  registeredAt_contains: String
  registeredAt_not_contains: String
  registeredAt_starts_with: String
  registeredAt_not_starts_with: String
  registeredAt_ends_with: String
  registeredAt_not_ends_with: String
  hitCount: Int
  hitCount_not: Int
  hitCount_in: [Int!]
  hitCount_not_in: [Int!]
  hitCount_lt: Int
  hitCount_lte: Int
  hitCount_gt: Int
  hitCount_gte: Int
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  from: String
  from_not: String
  from_in: [String!]
  from_not_in: [String!]
  from_lt: String
  from_lte: String
  from_gt: String
  from_gte: String
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [BobaeWhereInput!]
  OR: [BobaeWhereInput!]
  NOT: [BobaeWhereInput!]
}

input BobaeWhereUniqueInput {
  id: ID
}

type Bullpen {
  id: ID!
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
  createdAt: DateTime!
}

type BullpenConnection {
  pageInfo: PageInfo!
  edges: [BullpenEdge]!
  aggregate: AggregateBullpen!
}

input BullpenCreateInput {
  id: ID
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
}

type BullpenEdge {
  node: Bullpen!
  cursor: String!
}

enum BullpenOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  author_ASC
  author_DESC
  registeredAt_ASC
  registeredAt_DESC
  hitCount_ASC
  hitCount_DESC
  link_ASC
  link_DESC
  from_ASC
  from_DESC
  createdAt_ASC
  createdAt_DESC
}

type BullpenPreviousValues {
  id: ID!
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
  createdAt: DateTime!
}

type BullpenSubscriptionPayload {
  mutation: MutationType!
  node: Bullpen
  updatedFields: [String!]
  previousValues: BullpenPreviousValues
}

input BullpenSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BullpenWhereInput
  AND: [BullpenSubscriptionWhereInput!]
  OR: [BullpenSubscriptionWhereInput!]
  NOT: [BullpenSubscriptionWhereInput!]
}

input BullpenUpdateInput {
  title: String
  author: String
  registeredAt: String
  hitCount: Int
  link: String
  from: String
}

input BullpenUpdateManyMutationInput {
  title: String
  author: String
  registeredAt: String
  hitCount: Int
  link: String
  from: String
}

input BullpenWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  registeredAt: String
  registeredAt_not: String
  registeredAt_in: [String!]
  registeredAt_not_in: [String!]
  registeredAt_lt: String
  registeredAt_lte: String
  registeredAt_gt: String
  registeredAt_gte: String
  registeredAt_contains: String
  registeredAt_not_contains: String
  registeredAt_starts_with: String
  registeredAt_not_starts_with: String
  registeredAt_ends_with: String
  registeredAt_not_ends_with: String
  hitCount: Int
  hitCount_not: Int
  hitCount_in: [Int!]
  hitCount_not_in: [Int!]
  hitCount_lt: Int
  hitCount_lte: Int
  hitCount_gt: Int
  hitCount_gte: Int
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  from: String
  from_not: String
  from_in: [String!]
  from_not_in: [String!]
  from_lt: String
  from_lte: String
  from_gt: String
  from_gte: String
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [BullpenWhereInput!]
  OR: [BullpenWhereInput!]
  NOT: [BullpenWhereInput!]
}

input BullpenWhereUniqueInput {
  id: ID
}

type Clien {
  id: ID!
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
  createdAt: DateTime!
}

type ClienConnection {
  pageInfo: PageInfo!
  edges: [ClienEdge]!
  aggregate: AggregateClien!
}

input ClienCreateInput {
  id: ID
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
}

type ClienEdge {
  node: Clien!
  cursor: String!
}

enum ClienOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  author_ASC
  author_DESC
  registeredAt_ASC
  registeredAt_DESC
  hitCount_ASC
  hitCount_DESC
  link_ASC
  link_DESC
  from_ASC
  from_DESC
  createdAt_ASC
  createdAt_DESC
}

type ClienPreviousValues {
  id: ID!
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
  createdAt: DateTime!
}

type ClienSubscriptionPayload {
  mutation: MutationType!
  node: Clien
  updatedFields: [String!]
  previousValues: ClienPreviousValues
}

input ClienSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClienWhereInput
  AND: [ClienSubscriptionWhereInput!]
  OR: [ClienSubscriptionWhereInput!]
  NOT: [ClienSubscriptionWhereInput!]
}

input ClienUpdateInput {
  title: String
  author: String
  registeredAt: String
  hitCount: Int
  link: String
  from: String
}

input ClienUpdateManyMutationInput {
  title: String
  author: String
  registeredAt: String
  hitCount: Int
  link: String
  from: String
}

input ClienWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  registeredAt: String
  registeredAt_not: String
  registeredAt_in: [String!]
  registeredAt_not_in: [String!]
  registeredAt_lt: String
  registeredAt_lte: String
  registeredAt_gt: String
  registeredAt_gte: String
  registeredAt_contains: String
  registeredAt_not_contains: String
  registeredAt_starts_with: String
  registeredAt_not_starts_with: String
  registeredAt_ends_with: String
  registeredAt_not_ends_with: String
  hitCount: Int
  hitCount_not: Int
  hitCount_in: [Int!]
  hitCount_not_in: [Int!]
  hitCount_lt: Int
  hitCount_lte: Int
  hitCount_gt: Int
  hitCount_gte: Int
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  from: String
  from_not: String
  from_in: [String!]
  from_not_in: [String!]
  from_lt: String
  from_lte: String
  from_gt: String
  from_gte: String
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ClienWhereInput!]
  OR: [ClienWhereInput!]
  NOT: [ClienWhereInput!]
}

input ClienWhereUniqueInput {
  id: ID
}

scalar DateTime

type Etoland {
  id: ID!
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
  createdAt: DateTime!
}

type EtolandConnection {
  pageInfo: PageInfo!
  edges: [EtolandEdge]!
  aggregate: AggregateEtoland!
}

input EtolandCreateInput {
  id: ID
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
}

type EtolandEdge {
  node: Etoland!
  cursor: String!
}

enum EtolandOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  author_ASC
  author_DESC
  registeredAt_ASC
  registeredAt_DESC
  hitCount_ASC
  hitCount_DESC
  link_ASC
  link_DESC
  from_ASC
  from_DESC
  createdAt_ASC
  createdAt_DESC
}

type EtolandPreviousValues {
  id: ID!
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
  createdAt: DateTime!
}

type EtolandSubscriptionPayload {
  mutation: MutationType!
  node: Etoland
  updatedFields: [String!]
  previousValues: EtolandPreviousValues
}

input EtolandSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EtolandWhereInput
  AND: [EtolandSubscriptionWhereInput!]
  OR: [EtolandSubscriptionWhereInput!]
  NOT: [EtolandSubscriptionWhereInput!]
}

input EtolandUpdateInput {
  title: String
  author: String
  registeredAt: String
  hitCount: Int
  link: String
  from: String
}

input EtolandUpdateManyMutationInput {
  title: String
  author: String
  registeredAt: String
  hitCount: Int
  link: String
  from: String
}

input EtolandWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  registeredAt: String
  registeredAt_not: String
  registeredAt_in: [String!]
  registeredAt_not_in: [String!]
  registeredAt_lt: String
  registeredAt_lte: String
  registeredAt_gt: String
  registeredAt_gte: String
  registeredAt_contains: String
  registeredAt_not_contains: String
  registeredAt_starts_with: String
  registeredAt_not_starts_with: String
  registeredAt_ends_with: String
  registeredAt_not_ends_with: String
  hitCount: Int
  hitCount_not: Int
  hitCount_in: [Int!]
  hitCount_not_in: [Int!]
  hitCount_lt: Int
  hitCount_lte: Int
  hitCount_gt: Int
  hitCount_gte: Int
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  from: String
  from_not: String
  from_in: [String!]
  from_not_in: [String!]
  from_lt: String
  from_lte: String
  from_gt: String
  from_gte: String
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [EtolandWhereInput!]
  OR: [EtolandWhereInput!]
  NOT: [EtolandWhereInput!]
}

input EtolandWhereUniqueInput {
  id: ID
}

type Ilbe {
  id: ID!
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
  createdAt: DateTime!
}

type IlbeConnection {
  pageInfo: PageInfo!
  edges: [IlbeEdge]!
  aggregate: AggregateIlbe!
}

input IlbeCreateInput {
  id: ID
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
}

type IlbeEdge {
  node: Ilbe!
  cursor: String!
}

enum IlbeOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  author_ASC
  author_DESC
  registeredAt_ASC
  registeredAt_DESC
  hitCount_ASC
  hitCount_DESC
  link_ASC
  link_DESC
  from_ASC
  from_DESC
  createdAt_ASC
  createdAt_DESC
}

type IlbePreviousValues {
  id: ID!
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
  createdAt: DateTime!
}

type IlbeSubscriptionPayload {
  mutation: MutationType!
  node: Ilbe
  updatedFields: [String!]
  previousValues: IlbePreviousValues
}

input IlbeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IlbeWhereInput
  AND: [IlbeSubscriptionWhereInput!]
  OR: [IlbeSubscriptionWhereInput!]
  NOT: [IlbeSubscriptionWhereInput!]
}

input IlbeUpdateInput {
  title: String
  author: String
  registeredAt: String
  hitCount: Int
  link: String
  from: String
}

input IlbeUpdateManyMutationInput {
  title: String
  author: String
  registeredAt: String
  hitCount: Int
  link: String
  from: String
}

input IlbeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  registeredAt: String
  registeredAt_not: String
  registeredAt_in: [String!]
  registeredAt_not_in: [String!]
  registeredAt_lt: String
  registeredAt_lte: String
  registeredAt_gt: String
  registeredAt_gte: String
  registeredAt_contains: String
  registeredAt_not_contains: String
  registeredAt_starts_with: String
  registeredAt_not_starts_with: String
  registeredAt_ends_with: String
  registeredAt_not_ends_with: String
  hitCount: Int
  hitCount_not: Int
  hitCount_in: [Int!]
  hitCount_not_in: [Int!]
  hitCount_lt: Int
  hitCount_lte: Int
  hitCount_gt: Int
  hitCount_gte: Int
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  from: String
  from_not: String
  from_in: [String!]
  from_not_in: [String!]
  from_lt: String
  from_lte: String
  from_gt: String
  from_gte: String
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [IlbeWhereInput!]
  OR: [IlbeWhereInput!]
  NOT: [IlbeWhereInput!]
}

input IlbeWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBobae(data: BobaeCreateInput!): Bobae!
  updateBobae(data: BobaeUpdateInput!, where: BobaeWhereUniqueInput!): Bobae
  updateManyBobaes(data: BobaeUpdateManyMutationInput!, where: BobaeWhereInput): BatchPayload!
  upsertBobae(where: BobaeWhereUniqueInput!, create: BobaeCreateInput!, update: BobaeUpdateInput!): Bobae!
  deleteBobae(where: BobaeWhereUniqueInput!): Bobae
  deleteManyBobaes(where: BobaeWhereInput): BatchPayload!
  createBullpen(data: BullpenCreateInput!): Bullpen!
  updateBullpen(data: BullpenUpdateInput!, where: BullpenWhereUniqueInput!): Bullpen
  updateManyBullpens(data: BullpenUpdateManyMutationInput!, where: BullpenWhereInput): BatchPayload!
  upsertBullpen(where: BullpenWhereUniqueInput!, create: BullpenCreateInput!, update: BullpenUpdateInput!): Bullpen!
  deleteBullpen(where: BullpenWhereUniqueInput!): Bullpen
  deleteManyBullpens(where: BullpenWhereInput): BatchPayload!
  createClien(data: ClienCreateInput!): Clien!
  updateClien(data: ClienUpdateInput!, where: ClienWhereUniqueInput!): Clien
  updateManyCliens(data: ClienUpdateManyMutationInput!, where: ClienWhereInput): BatchPayload!
  upsertClien(where: ClienWhereUniqueInput!, create: ClienCreateInput!, update: ClienUpdateInput!): Clien!
  deleteClien(where: ClienWhereUniqueInput!): Clien
  deleteManyCliens(where: ClienWhereInput): BatchPayload!
  createEtoland(data: EtolandCreateInput!): Etoland!
  updateEtoland(data: EtolandUpdateInput!, where: EtolandWhereUniqueInput!): Etoland
  updateManyEtolands(data: EtolandUpdateManyMutationInput!, where: EtolandWhereInput): BatchPayload!
  upsertEtoland(where: EtolandWhereUniqueInput!, create: EtolandCreateInput!, update: EtolandUpdateInput!): Etoland!
  deleteEtoland(where: EtolandWhereUniqueInput!): Etoland
  deleteManyEtolands(where: EtolandWhereInput): BatchPayload!
  createIlbe(data: IlbeCreateInput!): Ilbe!
  updateIlbe(data: IlbeUpdateInput!, where: IlbeWhereUniqueInput!): Ilbe
  updateManyIlbes(data: IlbeUpdateManyMutationInput!, where: IlbeWhereInput): BatchPayload!
  upsertIlbe(where: IlbeWhereUniqueInput!, create: IlbeCreateInput!, update: IlbeUpdateInput!): Ilbe!
  deleteIlbe(where: IlbeWhereUniqueInput!): Ilbe
  deleteManyIlbes(where: IlbeWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
  createdAt: DateTime!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  author_ASC
  author_DESC
  registeredAt_ASC
  registeredAt_DESC
  hitCount_ASC
  hitCount_DESC
  link_ASC
  link_DESC
  from_ASC
  from_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  author: String
  registeredAt: String
  hitCount: Int
  link: String!
  from: String!
  createdAt: DateTime!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  author: String
  registeredAt: String
  hitCount: Int
  link: String
  from: String
}

input PostUpdateManyMutationInput {
  title: String
  author: String
  registeredAt: String
  hitCount: Int
  link: String
  from: String
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  registeredAt: String
  registeredAt_not: String
  registeredAt_in: [String!]
  registeredAt_not_in: [String!]
  registeredAt_lt: String
  registeredAt_lte: String
  registeredAt_gt: String
  registeredAt_gte: String
  registeredAt_contains: String
  registeredAt_not_contains: String
  registeredAt_starts_with: String
  registeredAt_not_starts_with: String
  registeredAt_ends_with: String
  registeredAt_not_ends_with: String
  hitCount: Int
  hitCount_not: Int
  hitCount_in: [Int!]
  hitCount_not_in: [Int!]
  hitCount_lt: Int
  hitCount_lte: Int
  hitCount_gt: Int
  hitCount_gte: Int
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  from: String
  from_not: String
  from_in: [String!]
  from_not_in: [String!]
  from_lt: String
  from_lte: String
  from_gt: String
  from_gte: String
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  bobae(where: BobaeWhereUniqueInput!): Bobae
  bobaes(where: BobaeWhereInput, orderBy: BobaeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bobae]!
  bobaesConnection(where: BobaeWhereInput, orderBy: BobaeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BobaeConnection!
  bullpen(where: BullpenWhereUniqueInput!): Bullpen
  bullpens(where: BullpenWhereInput, orderBy: BullpenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bullpen]!
  bullpensConnection(where: BullpenWhereInput, orderBy: BullpenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BullpenConnection!
  clien(where: ClienWhereUniqueInput!): Clien
  cliens(where: ClienWhereInput, orderBy: ClienOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Clien]!
  cliensConnection(where: ClienWhereInput, orderBy: ClienOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClienConnection!
  etoland(where: EtolandWhereUniqueInput!): Etoland
  etolands(where: EtolandWhereInput, orderBy: EtolandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Etoland]!
  etolandsConnection(where: EtolandWhereInput, orderBy: EtolandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EtolandConnection!
  ilbe(where: IlbeWhereUniqueInput!): Ilbe
  ilbes(where: IlbeWhereInput, orderBy: IlbeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ilbe]!
  ilbesConnection(where: IlbeWhereInput, orderBy: IlbeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IlbeConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  node(id: ID!): Node
}

type Subscription {
  bobae(where: BobaeSubscriptionWhereInput): BobaeSubscriptionPayload
  bullpen(where: BullpenSubscriptionWhereInput): BullpenSubscriptionPayload
  clien(where: ClienSubscriptionWhereInput): ClienSubscriptionPayload
  etoland(where: EtolandSubscriptionWhereInput): EtolandSubscriptionPayload
  ilbe(where: IlbeSubscriptionWhereInput): IlbeSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
}
`
      }
    