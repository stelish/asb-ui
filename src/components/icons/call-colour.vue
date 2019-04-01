<template>
        <span class="icon">
        <svg viewBox="0 0 34 59" id="icon-call-colour" width="100%" height="100%">
          <title>Icon</title>
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(.992)">
              <path
                d="M4.127.313C1.847.313 0 2.32 0 4.793V54.29c0 2.474 1.846 4.483 4.127 4.483H28.88c2.28 0 4.128-2.01 4.128-4.48v-49.5c0-2.475-1.847-4.48-4.127-4.48H4.13z"
                fill="#B6BCC4"
              ></path>
              <ellipse fill="#FFF" cx="17.254" cy="53.742" rx="2.251" ry="2.253"></ellipse>
              <path fill="#FFF" d="M3 7.244h27.01v41.952H3z"></path>
            </g>
            <path
              d="M22.594 24.26H15.64c-.306 0-.564.205-.564.544v3.143c0 .292.212.443.476.303 1.64-.87 6.964-3.683 7.066-3.734.196-.1.275-.255-.024-.255zm4.945 8.773h-4.135l-1.315-2.35h-8.58l-1.24 2.35H8.113c-.252 0-.48-.163-.313-.46a27583.03 27583.03 0 0 1 6.94-12.343c.162-.278.262-.488.747-.488h4.57c.51 0 .586.21.75.49.05.08 5.74 10.052 7.044 12.338.17.294-.053.463-.31.463zm-20-12.746v6.696c0 .29.16.214.263.025.053-.098 2.973-5.226 3.878-6.806.145-.254-.013-.46-.316-.46h-3.26c-.356 0-.563.25-.563.545z"
              fill="#FCBD1B"
            ></path>
          </g>
        </svg>
      </span>
</template>

<style lang="scss" scoped>
@import '@/styles/icons.scss';
</style>

<script lang="ts">

import {
    Component,
    Vue
} from 'vue-property-decorator';

@Component
export default class CallColourIcon extends Vue {

}
</script>