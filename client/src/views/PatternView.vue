<template>
  <v-sheet class="pattern-view-full d-flex flex-column pa-4">
    <h3>{{ pattern.name }}</h3>
    <v-table class="pattern-details-table w-100">
      <thead>
        <h4>{{ $t('pattern.details.title') }}</h4>
      </thead>
      <tbody>
        <v-for></v-for>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script lang="ts">
// import { usePatternsStore } from '@/stores/patterns'
import type Pattern from '@/types/Pattern'
import type { PatternFields } from '@/types/Pattern'
import { Attribute, Category, Craft, YarnWeight } from '@/types/Pattern'
import { basicFullDate } from '@/utils/formatters/date'

type DetailsFields = {
  [key in PatternFields]?: {
    name_key: string
    val: (p: Pattern) => string | number | Category[] | { key: string }
  }
}

const detailsFields: DetailsFields = {
  category: {
    name_key: 'categories',
    val: (p: Pattern) => p.category
  },
  colorCount: {
    name_key: 'color_count',
    val: (p: Pattern) => p.colorCount!
  },
  craft: {
    name_key: 'craft',
    val: (p: Pattern) => p.craft
  },
  gaugeSizeInCm: {
    name_key: 'gauge',
    val: (p: Pattern) => ({
      key: 'gauge_value',
      sts: p.gaugeStitches,
      rows: p.gaugeRows,
      size: p.gaugeSizeInCm
    })
  },
  updatedAt: {
    name_key: 'last_updated',
    val: (p: Pattern) => basicFullDate(p.updatedAt)
  },
  meterage: {
    name_key: 'meterage',
    val: (p: Pattern) => ({
      key: 'meterage_value',
      min: p.meterage![0],
      max: p.meterage![1]
    })
  },
  needleSize: {
    name_key: 'needle_size',
    val: (p: Pattern) => p.needleSize
  },
  publishedAt: {
    name_key: 'published',
    val: (p: Pattern) => basicFullDate(p.publishedAt!)
  },
  yarnWeight: {
    name_key: 'yarn_weight ',
    val: (p: Pattern) => p.yarnWeight!
  },
  suggestedYarn: {
    name_key: 'yarn',
    val: (p: Pattern) => p.suggestedYarn!
  }
}

const examplePattern: Pattern = {
  id: '123',
  name: 'Sunshine Sweater',
  creator: {
    id: 'abc',
    firstName: 'Willow',
    lastName: 'Rosenberg',
    email: 'willow@thegang.org'
  },
  createdAt: new Date('Jan 2 2024 08:14'),
  updatedAt: new Date('Feb 8 2024 12:02'),
  publishedAt: new Date('Feb 1 2024 15:31'),
  craft: Craft.KNIT,
  category: [Category.CLOTHING_TOPS_SWEATERS_CARDIGANS],
  yarnWeight: YarnWeight.SPORT,
  gaugeRows: 20,
  gaugeStitches: 15,
  gaugeSizeInCm: 10,
  suggestedYarn: 'Malabrigo Arroyo',
  meterage: [1500, 2000],
  needleSize: [3.0, 4.0],
  colorCount: 2,
  attributes: [Attribute.COLORWORK, Attribute.SEAMING],
  tags: [
    { id: 'a1a1', name: 'top-down' },
    { id: 'a1a1', name: 'fair isle' }
  ]
}

export default {
  name: 'PatternView',
  props: {
    id: { type: String, required: true }
  },
  data() {
    // return { patternsStore: usePatternsStore() }
    return {
      pattern: examplePattern
    }
  },
  computed: {
    // pattern() {
    //   return this.patternsStore.getPatternById(this.id)
    // }
    details() {
      const details: [string, string][] = []
      detailsFields.forEach((field: string) => {
        if (this.pattern[field]) {
        }
      })
      return details
    }
  }
}
</script>

<style scoped></style>
