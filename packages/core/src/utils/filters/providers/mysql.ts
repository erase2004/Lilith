// Do not manually modify this file, it is automatically generated by the package at /prisma-utils in this repo.
// Update the script if you need this file to be different

import { graphql } from '@keystone-6/core'

type StringNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.String>
  // can be null
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>
  // can be null
  notIn: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.String>>
  >
  lt: graphql.Arg<typeof graphql.String>
  lte: graphql.Arg<typeof graphql.String>
  gt: graphql.Arg<typeof graphql.String>
  gte: graphql.Arg<typeof graphql.String>
  contains: graphql.Arg<typeof graphql.String>
  startsWith: graphql.Arg<typeof graphql.String>
  endsWith: graphql.Arg<typeof graphql.String>
  // can be null
  not: graphql.Arg<typeof NestedStringNullableFilter>
}>

const StringNullableFilter: StringNullableFilterType = graphql.inputObject({
  name: 'CustomStringNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.String }),
    // can be null
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    // can be null
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    lt: graphql.arg({ type: graphql.String }),
    lte: graphql.arg({ type: graphql.String }),
    gt: graphql.arg({ type: graphql.String }),
    gte: graphql.arg({ type: graphql.String }),
    contains: graphql.arg({ type: graphql.String }),
    startsWith: graphql.arg({ type: graphql.String }),
    endsWith: graphql.arg({ type: graphql.String }),
    // can be null
    not: graphql.arg({ type: NestedStringNullableFilter }),
  }),
})

type NestedStringNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.String>
  // can be null
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>
  // can be null
  notIn: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.String>>
  >
  lt: graphql.Arg<typeof graphql.String>
  lte: graphql.Arg<typeof graphql.String>
  gt: graphql.Arg<typeof graphql.String>
  gte: graphql.Arg<typeof graphql.String>
  contains: graphql.Arg<typeof graphql.String>
  startsWith: graphql.Arg<typeof graphql.String>
  endsWith: graphql.Arg<typeof graphql.String>
  // can be null
  not: graphql.Arg<typeof NestedStringNullableFilter>
}>

const NestedStringNullableFilter: NestedStringNullableFilterType =
  graphql.inputObject({
    name: 'CustomNestedStringNullableFilter',
    fields: () => ({
      // can be null
      equals: graphql.arg({ type: graphql.String }),
      // can be null
      in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
      // can be null
      notIn: graphql.arg({
        type: graphql.list(graphql.nonNull(graphql.String)),
      }),
      lt: graphql.arg({ type: graphql.String }),
      lte: graphql.arg({ type: graphql.String }),
      gt: graphql.arg({ type: graphql.String }),
      gte: graphql.arg({ type: graphql.String }),
      contains: graphql.arg({ type: graphql.String }),
      startsWith: graphql.arg({ type: graphql.String }),
      endsWith: graphql.arg({ type: graphql.String }),
      // can be null
      not: graphql.arg({ type: NestedStringNullableFilter }),
    }),
  })

type StringFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.String>
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>
  notIn: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.String>>
  >
  lt: graphql.Arg<typeof graphql.String>
  lte: graphql.Arg<typeof graphql.String>
  gt: graphql.Arg<typeof graphql.String>
  gte: graphql.Arg<typeof graphql.String>
  contains: graphql.Arg<typeof graphql.String>
  startsWith: graphql.Arg<typeof graphql.String>
  endsWith: graphql.Arg<typeof graphql.String>
  not: graphql.Arg<typeof NestedStringFilter>
}>

const StringFilter: StringFilterType = graphql.inputObject({
  name: 'CustomStringFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.String }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    lt: graphql.arg({ type: graphql.String }),
    lte: graphql.arg({ type: graphql.String }),
    gt: graphql.arg({ type: graphql.String }),
    gte: graphql.arg({ type: graphql.String }),
    contains: graphql.arg({ type: graphql.String }),
    startsWith: graphql.arg({ type: graphql.String }),
    endsWith: graphql.arg({ type: graphql.String }),
    not: graphql.arg({ type: NestedStringFilter }),
  }),
})

type NestedStringFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.String>
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>
  notIn: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.String>>
  >
  lt: graphql.Arg<typeof graphql.String>
  lte: graphql.Arg<typeof graphql.String>
  gt: graphql.Arg<typeof graphql.String>
  gte: graphql.Arg<typeof graphql.String>
  contains: graphql.Arg<typeof graphql.String>
  startsWith: graphql.Arg<typeof graphql.String>
  endsWith: graphql.Arg<typeof graphql.String>
  not: graphql.Arg<typeof NestedStringFilter>
}>

const NestedStringFilter: NestedStringFilterType = graphql.inputObject({
  name: 'CustomNestedStringFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.String }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    lt: graphql.arg({ type: graphql.String }),
    lte: graphql.arg({ type: graphql.String }),
    gt: graphql.arg({ type: graphql.String }),
    gte: graphql.arg({ type: graphql.String }),
    contains: graphql.arg({ type: graphql.String }),
    startsWith: graphql.arg({ type: graphql.String }),
    endsWith: graphql.arg({ type: graphql.String }),
    not: graphql.arg({ type: NestedStringFilter }),
  }),
})

type BoolNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.Boolean>
  // can be null
  not: graphql.Arg<typeof BoolNullableFilter>
}>

const BoolNullableFilter: BoolNullableFilterType = graphql.inputObject({
  name: 'CustomBooleanNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.Boolean }),
    // can be null
    not: graphql.arg({ type: BoolNullableFilter }),
  }),
})

type BoolFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.Boolean>
  not: graphql.Arg<typeof BoolFilter>
}>

const BoolFilter: BoolFilterType = graphql.inputObject({
  name: 'CustomBooleanFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.Boolean }),
    not: graphql.arg({ type: BoolFilter }),
  }),
})

type IntNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.Int>
  // can be null
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Int>>>
  // can be null
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Int>>>
  lt: graphql.Arg<typeof graphql.Int>
  lte: graphql.Arg<typeof graphql.Int>
  gt: graphql.Arg<typeof graphql.Int>
  gte: graphql.Arg<typeof graphql.Int>
  // can be null
  not: graphql.Arg<typeof IntNullableFilter>
}>

const IntNullableFilter: IntNullableFilterType = graphql.inputObject({
  name: 'CustomIntNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.Int }),
    // can be null
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Int)) }),
    // can be null
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Int)) }),
    lt: graphql.arg({ type: graphql.Int }),
    lte: graphql.arg({ type: graphql.Int }),
    gt: graphql.arg({ type: graphql.Int }),
    gte: graphql.arg({ type: graphql.Int }),
    // can be null
    not: graphql.arg({ type: IntNullableFilter }),
  }),
})

type IntFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.Int>
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Int>>>
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Int>>>
  lt: graphql.Arg<typeof graphql.Int>
  lte: graphql.Arg<typeof graphql.Int>
  gt: graphql.Arg<typeof graphql.Int>
  gte: graphql.Arg<typeof graphql.Int>
  not: graphql.Arg<typeof IntFilter>
}>

const IntFilter: IntFilterType = graphql.inputObject({
  name: 'CustomIntFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.Int }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Int)) }),
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Int)) }),
    lt: graphql.arg({ type: graphql.Int }),
    lte: graphql.arg({ type: graphql.Int }),
    gt: graphql.arg({ type: graphql.Int }),
    gte: graphql.arg({ type: graphql.Int }),
    not: graphql.arg({ type: IntFilter }),
  }),
})

type FloatNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.Float>
  // can be null
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Float>>>
  // can be null
  notIn: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.Float>>
  >
  lt: graphql.Arg<typeof graphql.Float>
  lte: graphql.Arg<typeof graphql.Float>
  gt: graphql.Arg<typeof graphql.Float>
  gte: graphql.Arg<typeof graphql.Float>
  // can be null
  not: graphql.Arg<typeof FloatNullableFilter>
}>

const FloatNullableFilter: FloatNullableFilterType = graphql.inputObject({
  name: 'CustomFloatNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.Float }),
    // can be null
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Float)) }),
    // can be null
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Float)) }),
    lt: graphql.arg({ type: graphql.Float }),
    lte: graphql.arg({ type: graphql.Float }),
    gt: graphql.arg({ type: graphql.Float }),
    gte: graphql.arg({ type: graphql.Float }),
    // can be null
    not: graphql.arg({ type: FloatNullableFilter }),
  }),
})

type FloatFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.Float>
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Float>>>
  notIn: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.Float>>
  >
  lt: graphql.Arg<typeof graphql.Float>
  lte: graphql.Arg<typeof graphql.Float>
  gt: graphql.Arg<typeof graphql.Float>
  gte: graphql.Arg<typeof graphql.Float>
  not: graphql.Arg<typeof FloatFilter>
}>

const FloatFilter: FloatFilterType = graphql.inputObject({
  name: 'CustomFloatFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.Float }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Float)) }),
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Float)) }),
    lt: graphql.arg({ type: graphql.Float }),
    lte: graphql.arg({ type: graphql.Float }),
    gt: graphql.arg({ type: graphql.Float }),
    gte: graphql.arg({ type: graphql.Float }),
    not: graphql.arg({ type: FloatFilter }),
  }),
})

type DateTimeNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.DateTime>
  // can be null
  in: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.DateTime>>
  >
  // can be null
  notIn: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.DateTime>>
  >
  lt: graphql.Arg<typeof graphql.DateTime>
  lte: graphql.Arg<typeof graphql.DateTime>
  gt: graphql.Arg<typeof graphql.DateTime>
  gte: graphql.Arg<typeof graphql.DateTime>
  // can be null
  not: graphql.Arg<typeof DateTimeNullableFilter>
}>

const DateTimeNullableFilter: DateTimeNullableFilterType = graphql.inputObject({
  name: 'CustomDateTimeNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.DateTime }),
    // can be null
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.DateTime)) }),
    // can be null
    notIn: graphql.arg({
      type: graphql.list(graphql.nonNull(graphql.DateTime)),
    }),
    lt: graphql.arg({ type: graphql.DateTime }),
    lte: graphql.arg({ type: graphql.DateTime }),
    gt: graphql.arg({ type: graphql.DateTime }),
    gte: graphql.arg({ type: graphql.DateTime }),
    // can be null
    not: graphql.arg({ type: DateTimeNullableFilter }),
  }),
})

type DateTimeFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.DateTime>
  in: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.DateTime>>
  >
  notIn: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.DateTime>>
  >
  lt: graphql.Arg<typeof graphql.DateTime>
  lte: graphql.Arg<typeof graphql.DateTime>
  gt: graphql.Arg<typeof graphql.DateTime>
  gte: graphql.Arg<typeof graphql.DateTime>
  not: graphql.Arg<typeof DateTimeFilter>
}>

const DateTimeFilter: DateTimeFilterType = graphql.inputObject({
  name: 'CustomDateTimeFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.DateTime }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.DateTime)) }),
    notIn: graphql.arg({
      type: graphql.list(graphql.nonNull(graphql.DateTime)),
    }),
    lt: graphql.arg({ type: graphql.DateTime }),
    lte: graphql.arg({ type: graphql.DateTime }),
    gt: graphql.arg({ type: graphql.DateTime }),
    gte: graphql.arg({ type: graphql.DateTime }),
    not: graphql.arg({ type: DateTimeFilter }),
  }),
})

type DecimalNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.Decimal>
  // can be null
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Decimal>>>
  // can be null
  notIn: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.Decimal>>
  >
  lt: graphql.Arg<typeof graphql.Decimal>
  lte: graphql.Arg<typeof graphql.Decimal>
  gt: graphql.Arg<typeof graphql.Decimal>
  gte: graphql.Arg<typeof graphql.Decimal>
  // can be null
  not: graphql.Arg<typeof DecimalNullableFilter>
}>

const DecimalNullableFilter: DecimalNullableFilterType = graphql.inputObject({
  name: 'CustomDecimalNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.Decimal }),
    // can be null
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Decimal)) }),
    // can be null
    notIn: graphql.arg({
      type: graphql.list(graphql.nonNull(graphql.Decimal)),
    }),
    lt: graphql.arg({ type: graphql.Decimal }),
    lte: graphql.arg({ type: graphql.Decimal }),
    gt: graphql.arg({ type: graphql.Decimal }),
    gte: graphql.arg({ type: graphql.Decimal }),
    // can be null
    not: graphql.arg({ type: DecimalNullableFilter }),
  }),
})

type DecimalFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.Decimal>
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Decimal>>>
  notIn: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.Decimal>>
  >
  lt: graphql.Arg<typeof graphql.Decimal>
  lte: graphql.Arg<typeof graphql.Decimal>
  gt: graphql.Arg<typeof graphql.Decimal>
  gte: graphql.Arg<typeof graphql.Decimal>
  not: graphql.Arg<typeof DecimalFilter>
}>

const DecimalFilter: DecimalFilterType = graphql.inputObject({
  name: 'CustomDecimalFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.Decimal }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Decimal)) }),
    notIn: graphql.arg({
      type: graphql.list(graphql.nonNull(graphql.Decimal)),
    }),
    lt: graphql.arg({ type: graphql.Decimal }),
    lte: graphql.arg({ type: graphql.Decimal }),
    gt: graphql.arg({ type: graphql.Decimal }),
    gte: graphql.arg({ type: graphql.Decimal }),
    not: graphql.arg({ type: DecimalFilter }),
  }),
})

type BigIntNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.BigInt>
  // can be null
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.BigInt>>>
  // can be null
  notIn: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.BigInt>>
  >
  lt: graphql.Arg<typeof graphql.BigInt>
  lte: graphql.Arg<typeof graphql.BigInt>
  gt: graphql.Arg<typeof graphql.BigInt>
  gte: graphql.Arg<typeof graphql.BigInt>
  // can be null
  not: graphql.Arg<typeof BigIntNullableFilter>
}>

const BigIntNullableFilter: BigIntNullableFilterType = graphql.inputObject({
  name: 'CustomBigIntNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.BigInt }),
    // can be null
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.BigInt)) }),
    // can be null
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.BigInt)) }),
    lt: graphql.arg({ type: graphql.BigInt }),
    lte: graphql.arg({ type: graphql.BigInt }),
    gt: graphql.arg({ type: graphql.BigInt }),
    gte: graphql.arg({ type: graphql.BigInt }),
    // can be null
    not: graphql.arg({ type: BigIntNullableFilter }),
  }),
})

type BigIntFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.BigInt>
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.BigInt>>>
  notIn: graphql.Arg<
    graphql.ListType<graphql.NonNullType<typeof graphql.BigInt>>
  >
  lt: graphql.Arg<typeof graphql.BigInt>
  lte: graphql.Arg<typeof graphql.BigInt>
  gt: graphql.Arg<typeof graphql.BigInt>
  gte: graphql.Arg<typeof graphql.BigInt>
  not: graphql.Arg<typeof BigIntFilter>
}>

const BigIntFilter: BigIntFilterType = graphql.inputObject({
  name: 'CustomBigIntFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.BigInt }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.BigInt)) }),
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.BigInt)) }),
    lt: graphql.arg({ type: graphql.BigInt }),
    lte: graphql.arg({ type: graphql.BigInt }),
    gt: graphql.arg({ type: graphql.BigInt }),
    gte: graphql.arg({ type: graphql.BigInt }),
    not: graphql.arg({ type: BigIntFilter }),
  }),
})

export const String = {
  optional: StringNullableFilter,
  required: StringFilter,
}

export const Boolean = {
  optional: BoolNullableFilter,
  required: BoolFilter,
}

export const Int = {
  optional: IntNullableFilter,
  required: IntFilter,
}

export const Float = {
  optional: FloatNullableFilter,
  required: FloatFilter,
}

export const DateTime = {
  optional: DateTimeNullableFilter,
  required: DateTimeFilter,
}

export const Decimal = {
  optional: DecimalNullableFilter,
  required: DecimalFilter,
}

export const BigInt = {
  optional: BigIntNullableFilter,
  required: BigIntFilter,
}

export { enumFilters as enum } from '../enum-filter'