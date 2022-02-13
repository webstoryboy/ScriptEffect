<template>
    <section
        class="features-tabs section center-content"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="features-tabs-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <c-tabs active="tab-a">
                    <c-tab-list>
                        <c-tab tabId="tab-a">
                            <div class="features-tabs-tab-image mb-12">
                                <c-image
                                    :src="require('@/assets/images/features-tabs-icon-01.svg')"
                                    alt="Tab icon 01"
                                    :width="56"
                                    :height="56" />
                            </div>
                            <div class="text-color-high fw-600 text-sm">
                                Internal Feedback
                            </div>
                        </c-tab>
                        <c-tab tabId="tab-b">
                            <div class="features-tabs-tab-image mb-12">
                                <c-image
                                    :src="require('@/assets/images/features-tabs-icon-02.svg')"
                                    alt="Tab icon 02"
                                    :width="56"
                                    :height="56" />
                            </div>
                            <div class="text-color-high fw-600 text-sm">
                                Internal Feedback
                            </div>                            
                        </c-tab>
                        <c-tab tabId="tab-c">
                            <div class="features-tabs-tab-image mb-12">
                                <c-image
                                    :src="require('@/assets/images/features-tabs-icon-03.svg')"
                                    alt="Tab icon 03"
                                    :width="56"
                                    :height="56" />
                            </div>
                            <div class="text-color-high fw-600 text-sm">
                                Internal Feedback
                            </div>                            
                        </c-tab>
                        <c-tab tabId="tab-d">
                            <div class="features-tabs-tab-image mb-12">
                                <c-image
                                    :src="require('@/assets/images/features-tabs-icon-04.svg')"
                                    alt="Tab icon 04"
                                    :width="56"
                                    :height="56" />
                            </div>
                            <div class="text-color-high fw-600 text-sm">
                                Internal Feedback
                            </div>                            
                        </c-tab>                        
                    </c-tab-list>
                    <c-tab-panel id="tab-a">
                        <c-image
                            class="has-shadow"
                            :src="require('@/assets/images/features-tabs-image.png')"
                            alt="Features tabs image 01"
                            :width="896"
                            :height="504" />
                    </c-tab-panel>
                    <c-tab-panel id="tab-b">
                        <c-image
                            class="has-shadow"
                            :src="require('@/assets/images/features-tabs-image.png')"
                            alt="Features tabs image 02"
                            :width="896"
                            :height="504" />
                    </c-tab-panel>
                    <c-tab-panel id="tab-c">
                        <c-image
                            class="has-shadow"
                            :src="require('@/assets/images/features-tabs-image.png')"
                            alt="Features tabs image 03"
                            :width="896"
                            :height="504" />
                    </c-tab-panel>
                    <c-tab-panel id="tab-d">
                        <c-image
                            class="has-shadow"
                            :src="require('@/assets/images/features-tabs-image.png')"
                            alt="Features tabs image 04"
                            :width="896"
                            :height="504" />
                    </c-tab-panel>
                </c-tabs>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CTabs, { CTabList, CTab, CTabPanel } from '@/components/elements/Tabs.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CFeaturesTabs',
  components: {
    CSectionHeader,
    CTabs,
    CTab,
    CTabPanel,
    CTabList,
    CImage
  },  
  mixins: [SectionProps],
  data() {
    return {
      sectionHeader: {
        title: 'Built exclusively for you',
        paragraph:
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
      }
    }
  }  
}
</script>