<template>
<div id="app">
    <keep-alive>
    <component v-bind:is="layout">

        <router-view />
    </component>
    </keep-alive>
</div>
</template>

<script>
const default_layout = 'default';

export default {
    computed: {
        layout() {
            var _layout = (this.$route.meta.layout || default_layout) + '-layout';
            return _layout;
        }
    }
}
</script>

<style lang="scss">

body {
  margin: 0;
}
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
