<template>
<div class="content left-align section">
    <h1 class="header-divider-l">Typography</h1>
    <p>

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
                        <h1>Heading</h1>
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
                        <h2>Heading</h2>
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
                        <h3>Heading</h3>
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
                        <h4>Heading</h4>
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
            <div class="code section">
                {{h1_string}} <br>
                {{h2_string}} <br>
                {{h3_string}} <br>
                {{h4_string}} <br>
                {{p_string}} <br>
                {{small_string}} <br>
                {{label_string}}
            </div>
        </div>
    </div>

</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';

@Component({
    components: {
    },
})
export default class Typography extends Vue {
    constructor() {
        super();
    }
    private h1_string:string = "<h1>Heading</h1>";
    private h2_string:string = "<h2>Heading</h2>";
    private h3_string:string = "<h3>Heading</h3>";
    private h4_string:string = "<h4>Heading</h4>";
    private p_string:string = '<p>paragraph</p>';
    private small_string:string = '<small>small tag</small>';
    private label_string:string = '<label>label tag</label>';

}
</script>

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
