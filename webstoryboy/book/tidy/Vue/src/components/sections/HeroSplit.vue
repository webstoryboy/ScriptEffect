<template>
    <section
        class="hero section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="hero-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <div
                    class="split-wrap"
                    :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop',
                        alignTop && 'align-top'
                    ]">
                    <div class="split-item">
                        <div class="hero-content split-item-content center-content-mobile reveal-from-top">
                            <h1 class="mt-0 mb-16">
                                Landing template for startups
                            </h1>
                            <p class="mt-0 mb-32">
                                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                            </p>
                            <c-button-group>
                                <c-button tag="a" color="primary" wide-mobile href="#">
                                    Pricing and plans
                                </c-button>
                                <c-button tag="a" color="dark" wide-mobile href="#">
                                    Learn more
                                </c-button>                                
                            </c-button-group>
                        </div>
                        <div class="hero-figure split-item-image split-item-image-fill illustration-element-01 reveal-from-bottom">
                            <a
                                data-video="https://player.vimeo.com/video/174002812"
                                href="#"
                                aria-controls="video-modal"
                                @click.prevent="videoModalActive = true">
                                <c-image
                                    :src="require('@/assets/images/video-placeholder.jpg')"
                                    alt="Hero image"
                                    :width="528"
                                    :height="396" />
                            </a>
                        </div>
                        <c-modal
                            id="video-modal"
                            :active.sync="videoModalActive"
                            video="https://player.vimeo.com/video/174002812"
                            video-tag="iframe" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionSplitProps } from '@/utils/SectionProps.js'
import CButtonGroup from '@/components/elements/ButtonGroup.vue'
import CButton from '@/components/elements/Button.vue'
import CImage from '@/components/elements/Image.vue'
import CModal from '@/components/elements/Modal.vue'

export default {
  name: 'CHeroSplit',
  components: {
    CButtonGroup,
    CButton,
    CImage,
    CModal
  },
  mixins: [SectionSplitProps],
  data() {
    return {
      videoModalActive: false
    }
  },
}
</script>