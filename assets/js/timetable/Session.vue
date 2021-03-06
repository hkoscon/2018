<template>
    <div class="session-wrap" :class="classes" @click="handleClick">
        <div class="session">
            <div class="session-card z-depth-1">
                <div class="overlay">
                    <div class="card-content">
                        <template v-if="ready">
                            <span class="card-title">{{ event.display }}</span>
                            <ul class="meta">
                                <li v-if="event.language">{{ event.language }}</li>
                                <li v-if="event.level">{{ event.level }}</li>
                                <li>{{ event.venue.name }}</li>
                            </ul>
                        </template>
                        <linear-loader v-if="!ready" />
                    </div>

                    <tag :tags="event.tags" />

                    <speakers v-if="event.topic" :speakers="event.speakers" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'session',
    components: {
      LinearLoader: () => import('./LinearLoader.vue'),
      Speakers: () => import('./Speakers.vue'),
      Tag: () => import('./Tag.vue'),
    },
    props: {
      event: {
        type: Object,
        default: () => ({
          topic: false,
        }),
      },
      ready: {
        type: Boolean,
        required: true,
      },
      filter: {
        type: Object,
        required: true,
      },
      filterActive: {
        type: Boolean,
        required: true,
      },
      startTime: {
        type: String,
      },
      endTime: {
        type: String,
      },
      day: {
        type: Number,
      },
    },
    computed: {
      isActive() {
        return this.filter.level.indexOf(this.event.level) !== -1;
      },
      classes() {
        return {
          ...this.readyClass,
          ...this.activeClass,
        };
      },
      hasFilter() {
        return this.event.topic && this.filterActive;
      },
      activeClass() {
        if (!this.ready) {
          return {};
        }
        const { isActive, hasFilter } = this;
        return {
          active: hasFilter && isActive,
          deactive: hasFilter && !isActive,
        };
      },
      readyClass() {
        return {
          notReady: !this.ready,
        };
      },
    },
    methods: {
      handleClick() {
        this.openModal({
          day: this.day,
          startTime: this.startTime,
          endTime: this.endTime,
          ...this.event,
        });
      },
      ...mapActions({
        openModal: 'modal/openModal',
      }),
    },
  };
</script>