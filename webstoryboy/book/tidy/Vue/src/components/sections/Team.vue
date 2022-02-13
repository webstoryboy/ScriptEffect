<template>
    <section
        class="team section center-content"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="team-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content reveal-from-bottom" />
                <div
                    class="tiles-wrap"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-01.jpg')"
                                        alt="Team member 01"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Markus Hasinika
                                </h5>
                                <div class="team-item-role text-xs fw-600 mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="150">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-02.jpg')"
                                        alt="Team member 02"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Markus Hasinika
                                </h5>
                                <div class="team-item-role text-xs fw-600 mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-03.jpg')"
                                        alt="Team member 03"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Markus Hasinika
                                </h5>
                                <div class="team-item-role text-xs fw-600 mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="450">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-04.jpg')"
                                        alt="Team member 01"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Markus Hasinika
                                </h5>
                                <div class="team-item-role text-xs fw-600 mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="600">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-05.jpg')"
                                        alt="Team member 05"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Markus Hasinika
                                </h5>
                                <div class="team-item-role text-xs fw-600 mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="750">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-06.jpg')"
                                        alt="Team member 06"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Markus Hasinika
                                </h5>
                                <div class="team-item-role text-xs fw-600 mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionTilesProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CTeam',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'Get to know us',
        paragraph:
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
      }
    }
  }
}
</script>