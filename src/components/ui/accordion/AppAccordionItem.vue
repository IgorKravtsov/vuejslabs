<template>
  <li class="accordion__item">
    <div
        class="accordion__trigger"
        :class="{'accordion__trigger_active': visible}"
        @click="open">

      <slot name="trigger">ITEM BLYAT</slot>
    </div>

    <transition
        name="accordion"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end">

      <div class="accordion__content" v-show="visible">
        <ul class="accordion__ul">
          <slot name="content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>


<script>

export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null
    };
  },
  computed: {
    visible() {
      return this.Accordion.active;
    }
  },
  methods: {
    open() {
      this.Accordion.active = !this.Accordion.active
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    }
  },
};
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  padding: 10px 20px 10px 0;
  border-bottom: 1px solid #ebebeb;
  position: relative;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.accordion__ul {
  //display: flex;
  padding: 0;
}
</style>
