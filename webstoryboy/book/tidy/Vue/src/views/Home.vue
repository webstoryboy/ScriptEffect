<template>
    <fragment>
        <c-hero-split has-bg-color invert-color />
        <c-features-tiles />
        <c-features-tabs top-divider bottom-outer-divider />
        <c-news class="illustration-section-01" />
        <c-roadmap top-outer-divider />
        <c-pricing has-bg-color pricing-slider />
        <c-cta has-bg-color invert-color split />
    </fragment>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutDefault.vue'
// import sections
import CHeroSplit from '@/components/sections/HeroSplit.vue'
import CFeaturesTiles from '@/components/sections/FeaturesTiles.vue'
import CFeaturesTabs from '@/components/sections/FeaturesTabs.vue'
import CNews from '@/components/sections/News.vue'
import CRoadmap from '@/components/sections/Roadmap.vue'
import CPricing from '@/components/sections/Pricing.vue'
import CCta from '@/components/sections/Cta.vue'

export default {
  name: 'Home',
  components: {
    CHeroSplit,
    CFeaturesTiles,
    CFeaturesTabs,
    CNews,
    CRoadmap,
    CPricing,
    CCta
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
