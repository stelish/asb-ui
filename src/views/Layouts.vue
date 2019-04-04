<template>
<div class="content left-align section">
    <h1>Layout</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <div class="container">

        <h2>Grid layout</h2>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <!-- grid even -->
        <div class="columns">
            <div class="column is-2 layout-container center-align">
                <h3>is-2</h3>
            </div>
            <div class="column is-2 layout-container center-align">
                <h3>is-2</h3>
            </div>
            <div class="column is-2 layout-container center-align">
                <h3>is-2</h3>
            </div>
            <div class="column is-2 layout-container center-align">
                <h3>is-2</h3>
            </div>
        </div>

        <!-- grid uneven -->
        <div class="columns">
            <div class="column is-3 layout-container center-align">
                <h3>is-3</h3>
            </div>
            <div class="column is-2 layout-container center-align">
                <h3>is-2</h3>
            </div>
            <div class="column is-5 layout-container center-align">
                <h3>is-5</h3>
            </div>

        </div>

        <!-- grid full -->
        <div class="columns">
            <div class="column is-full layout-container center-align">
                <h3>is-full</h3>
            </div>
        </div>
    </div>

    <div class="container">
        <h2>Container</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>

    <div class="container">
        <h2>Spacing</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>

</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout.scss';

.layout-container {
    background: #ccc;
    margin: 5px;
    height: 100px;
}
</style>
