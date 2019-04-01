<template>
<div class="left-align">
    <h1>Components</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <div class="container">
        <h2>Actions</h2>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div class="container">
            <h3>Block buttons</h3>
            <button>default</button>
            <button class="alt">alt</button>
            <button class="yellow">yellow</button>
            <p>Code mirror:</p>
        </div>

        <div class="container">
            <h3>Clear buttons</h3>
            <button class="clear">default</button>
            <button class="alt clear">alt</button>
            <button class="yellow clear">yellow</button>
            <p>Code mirror:</p>
        </div>

        <div class="container">
            <h3>Buttons with icons</h3>
            <button>
                default with icon <HelpFncIcon></HelpFncIcon>
            </button>
            <button class="alt">
                alt with icon <HelpFncIcon></HelpFncIcon>
            </button>
            <button class="yellow">
                yellow with icon <HelpFncIcon></HelpFncIcon>
            </button>
            <p>Code mirror:</p>
        </div>

        <div class="container">
            <h3>Round buttons</h3>
            <button class="round"><HelpFncIcon></HelpFncIcon></button>
            <button class="round alt"><HelpFncIcon></HelpFncIcon></button>
            <button class="round yellow"><HelpFncIcon></HelpFncIcon></button>
            <p>Code mirror:</p>
        </div>

        <!-- radio button -->
        <div class="container">
            <h3>Radio buttons</h3>

            <AsbRadioButton :label="'One'" :value="'one'" :model="rbPicked"></AsbRadioButton>
            <AsbRadioButton :label="'Two'" :value="'two'" :model="rbPicked"></AsbRadioButton>

            <p>Code mirror:</p>
        </div>

        <!-- checkbox -->
        <div class="container">
            <h3>Checkboxes</h3>

            <AsbCheckBox :label="'test checkbox'" :checked="cb1Checked" v-on:click="toggleCb()"></AsbCheckBox>

            <p>Code mirror:</p>
        </div>

    </div>

    <div class="container">
        <h2>Link text</h2>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <a href="#">link text</a>
        <p>Code mirror:</p>
        <textarea v-model="aTagCode"></textarea>
    </div>

    <div class="container">
        <h2>Dropdowns</h2>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <AsbSelectBox :options="ddOptions" :placeholder="'Asb select box'"></AsbSelectBox>

        <select placeholder="default">
            <option>default</option>
            <option>alt</option>
            <option>yellow</option>
        </select>

        <p>Code mirror:</p>
    </div>

    <div class="container">
        <h2>Breadcrumbs</h2>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>Code mirror:</p>
    </div>

</div>
</template>

<style lang="scss" scoped>
@import '@/styles/buttons.scss';
</style>

<script lang="ts">
import TwitterIcon from '@/components/icons/twitter.vue';
import FacebookIcon from '@/components/icons/facebook.vue';
import SnapChatIcon from '@/components/icons/snapchat.vue';
import LinkedInIcon from '@/components/icons/linkedin.vue';
import SocialBlogIcon from '@/components/icons/socialblog.vue';
import WeiboIcon from '@/components/icons/weibo.vue';
import YoutubeIcon from '@/components/icons/youtube.vue';
import PinBranchIcon from '@/components/icons/pin-branch.vue';
import CallColourIcon from '@/components/icons/call-colour.vue';
import HelpAppIcon from '@/components/icons/help-app.vue';
import SearchIcon from '@/components/icons/search.vue';
import HelpFncIcon from '@/components/icons/help-fnc.vue';
import HelpChangeIcon from '@/components/icons/help-change.vue';
import HelpTopupIcon from '@/components/icons/help-topup.vue';
import ArrowDownIcon from '@/components/icons/arrow-down.vue';
import TickIcon from '@/components/icons/tick.vue';

import SmallAsbLogo from '@/components/logos/small-asb-logo.vue';
import AsbCheckBox from '@/components/actions/AsbCheckBox.vue';
import AsbRadioButton from '@/components/actions/AsbRadioButton.vue';
import AsbSelectBox,{ AsbSelectBoxItem } from '@/components/actions/AsbSelectBox.vue';

import {
    Component,
    Vue
} from 'vue-property-decorator';

@Component({
    components: {
        TwitterIcon,
        FacebookIcon,
        SnapChatIcon,
        LinkedInIcon,
        SocialBlogIcon,
        WeiboIcon,
        YoutubeIcon,
        PinBranchIcon,
        CallColourIcon,
        HelpAppIcon,
        SearchIcon,
        HelpFncIcon,
        HelpChangeIcon,
        HelpTopupIcon,
        SmallAsbLogo,
        ArrowDownIcon,
        TickIcon,
        AsbCheckBox,
        AsbRadioButton,
        AsbSelectBox,
    }
})
export default class ComponentsPage extends Vue {
    private rbPicked:boolean = false;
    private cb1Checked:boolean = false;
    private aTagCode = '<a href="#">link text</a>';
    private cmOptions:any = {
        tabSize: 2,
        mode: 'text/typescript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
    };

    private ddOptions:AsbSelectBoxItem[] = [
        {
            label: 'option 1',
            value: '1'
        },
        {
            label: 'option 2',
            value: '2'
        },
        {
            label: 'option 3',
            value: '3'
        }
    ]

    constructor() {
        super();
    }

    toggleCb():void {
        this.cb1Checked=!this.cb1Checked;
        console.log(this.cb1Checked);
    }


}
</script>
