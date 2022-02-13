<script>
export const CTabs = {
  template: `
    <div class="tabs">
      <slot />
    </div>
  `,
  name: 'CTabs',
  props: {
    active: {
      type: String,
    }
  },
  data() {
    return {
      provide: {
        activeId: this.active,
        changeTab: null,
      }
    }
  },
  provide() {
    this.provide.changeTab = this.changeTab
    return {
      tabs: this.provide
    }
  },
  methods: {
    changeTab(tabId) {
      this.provide.activeId = tabId
    }
  }
}

export const CTabList = {
  template: `
    <ul class="tab-list list-reset mb-0">
      <slot/>
    </ul>
  `,
  name: 'CTabList'
}

export const CTab = {
  template: `
    <li
        class="tab"
        :class="{'is-active': isActive}"
        role="tab"
        :aria-controls="tabId"
        @click="changeTab">
      <slot/>
    </li>
  `,
  name: 'CTab',
  inject: ['tabs'],
  props: {
    tabId: {
      type: String,
      default: null
    }
  },
  computed: {
    isActive() {
      return this.tabId === this.tabs.activeId
    }
  },
  methods: {
    changeTab() {
      this.tabs.changeTab(this.tabId)
    }
  }
}

export const CTabPanel = {
  template: `
    <div
        :id="id"
        class="tab-panel"
        :class="{'is-active': isActive}"
        role="tabpanel">
      <slot/>
    </div>
  `,
  name: 'CTabPanel',
  inject: ['tabs'],
  props: {
    id: {
      type: String,
      default: null
    }
  },
  computed: {
    isActive() {
      return this.id === this.tabs.activeId
    }
  }
};

export default CTabs;
</script>  