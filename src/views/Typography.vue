<template>
<div class="content left-align section">
    <h1>Typography</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <div class="container section">
        <h2>Typography scale</h2>
        <p>
            The typographic scale illustrated below is for all our browser-based products.
        </p>

        <div class="container brand-light-grey-bg typo-ex-container">

            <div class="section">
                <!-- h1 -->
                <div class="columns typo-ex">
                    <div class="column is-2 layout-container">
                        <h1>h1</h1>
                    </div>
                    <div class="column is-2 layout-container">
                        <h1>Heading 1</h1>
                    </div>
                    <div class="column is-2 layout-container">
                        <h1>36px</h1>
                    </div>
                    <div class="column is-2 layout-container">
                        <h1>500</h1>
                    </div>
                    <div class="column is-2 layout-container">
                        <h1>1.25</h1>
                    </div>
                </div>

                <!-- h2 -->
                <div class="columns typo-ex">
                    <div class="column is-2 layout-container">
                        <h2>h2</h2>
                    </div>
                    <div class="column is-2 layout-container">
                        <h2>Heading 2</h2>
                    </div>
                    <div class="column is-2 layout-container">
                        <h2>28px</h2>
                    </div>
                    <div class="column is-2 layout-container">
                        <h2>500</h2>
                    </div>
                    <div class="column is-2 layout-container">
                        <h2>1.25</h2>
                    </div>
                </div>

                <!-- h3 -->
                <div class="columns typo-ex">
                    <div class="column is-2 layout-container">
                        <h3>h3</h3>
                    </div>
                    <div class="column is-2 layout-container">
                        <h3>Heading 3</h3>
                    </div>
                    <div class="column is-2 layout-container">
                        <h3>24px</h3>
                    </div>
                    <div class="column is-2 layout-container">
                        <h3>500</h3>
                    </div>
                    <div class="column is-2 layout-container">
                        <h3>1.25</h3>
                    </div>
                </div>

                <!-- h4 -->
                <div class="columns typo-ex">
                    <div class="column is-2 layout-container">
                        <h4>h4</h4>
                    </div>
                    <div class="column is-2 layout-container">
                        <h4>Heading 4</h4>
                    </div>
                    <div class="column is-2 layout-container">
                        <h4>20px</h4>
                    </div>
                    <div class="column is-2 layout-container">
                        <h4>500</h4>
                    </div>
                    <div class="column is-2 layout-container">
                        <h4>1.25</h4>
                    </div>
                </div>

                <!-- p -->
                <div class="columns typo-ex">
                    <div class="column is-2 layout-container">
                        <p>p</p>
                    </div>
                    <div class="column is-2 layout-container">
                        <p>paragraph tag</p>
                    </div>
                    <div class="column is-2 layout-container">
                        <p>17px</p>
                    </div>
                    <div class="column is-2 layout-container">
                        <p>normal</p>
                    </div>
                    <div class="column is-2 layout-container">
                        <p>1.0</p>
                    </div>
                </div>

                <!-- small -->
                <div class="columns typo-ex">
                    <div class="column is-2 layout-container">
                        <small>small</small>
                    </div>
                    <div class="column is-2 layout-container">
                        <small>paragraph tag</small>
                    </div>
                    <div class="column is-2 layout-container">
                        <small>15px</small>
                    </div>
                    <div class="column is-2 layout-container">
                        <small>normal</small>
                    </div>
                    <div class="column is-2 layout-container">
                        <small>1.0</small>
                    </div>
                </div>

                <!-- label -->
                <div class="columns typo-ex">
                    <div class="column is-2 layout-container">
                        <label>label</label>
                    </div>
                    <div class="column is-2 layout-container">
                        <label>label tag</label>
                    </div>
                    <div class="column is-2 layout-container">
                        <label>13px</label>
                    </div>
                    <div class="column is-2 layout-container">
                        <label>normal</label>
                    </div>
                    <div class="column is-2 layout-container">
                        <label>1.0</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="">
            <h4>Example:</h4>

        </div>
    </div>

</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout.scss';
@import '@/styles/backgrounds.scss';
@import '@/styles/typography.scss';

.typo-ex {

    h1,
    h2,
    h3,
    h4,
    p,
    small,
    label {
        margin: 5px 0;
        line-height: 1.0;
    }
}

.typo-ex-container {
    .section {
        margin: 15px 0;
    }
}
</style>
