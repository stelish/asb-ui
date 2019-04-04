<template>
<div class="content left-align section">
    <h1>Icons</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div class="container">
        <h2>General Icons</h2>
        <SearchIcon></SearchIcon>
        <HelpFncIcon></HelpFncIcon>
        <HelpChangeIcon></HelpChangeIcon>
        <HelpTopupIcon></HelpTopupIcon>

        <ArrowDownIcon />
        <ArrowUpIcon />
        <ArrowRightIcon />
        <ArrowLeftIcon />

        <TickIcon />
        <BellIcon />
        <CloseIcon />
        <ClockIcon />
        <CircularIphoneIcon />
        <CircularPercentageIcon />
        <IdVerifiedIcon />
        <GuidesIcon />
        <CalculatorIcon />
        <PersonIcon />

    </div>

    <div class="container">

        <h2>Social Icons</h2>

        <FacebookIcon></FacebookIcon>
        <TwitterIcon></TwitterIcon>
        <SnapChatIcon></SnapChatIcon>
        <LinkedInIcon></LinkedInIcon>
        <SocialBlogIcon></SocialBlogIcon>
        <WeiboIcon></WeiboIcon>
        <YoutubeIcon></YoutubeIcon>

    </div>

    <div class="container">
        <h2>Asb icons</h2>

        <PinBranchIcon></PinBranchIcon>
        <CallColourIcon></CallColourIcon>
        <HelpAppIcon></HelpAppIcon>
        <GetALoanIcon />
        <SaveMoneyIcon />
        <GrowMoneyIcon />
        <EverydayBankingIcon />
        <CurrencyIcon />

    </div>

    <h1>Logos</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div class="container">
        <SmallAsbLogo></SmallAsbLogo>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "@/styles/icons.scss";

.icon {
    margin: 5px;
}
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
import ArrowUpIcon from '@/components/icons/arrow-up.vue';
import ArrowRightIcon from '@/components/icons/arrow-right.vue';
import ArrowLeftIcon from '@/components/icons/arrow-left.vue';
import TickIcon from '@/components/icons/tick.vue';
import BellIcon from '@/components/icons/bell.vue';
import CloseIcon from '@/components/icons/close.vue';
import ClockIcon from '@/components/icons/clock.vue';
import CircularIphoneIcon from '@/components/icons/circular-iphone.vue';
import CircularPercentageIcon from '@/components/icons/circular-percentage.vue';
import IdVerifiedIcon from '@/components/icons/icon-id-verified.vue';
import GuidesIcon from '@/components/icons/guides.vue';
import CalculatorIcon from '@/components/icons/calculator.vue';
import PersonIcon from '@/components/icons/person.vue';
import GetALoanIcon from '@/components/icons/get-a-loan-icon.vue';
import SaveMoneyIcon from '@/components/icons/save-money.vue';
import GrowMoneyIcon from '@/components/icons/grow-money.vue';
import EverydayBankingIcon from '@/components/icons/everyday-banking.vue';
import CurrencyIcon from '@/components/icons/currency.vue';

import SmallAsbLogo from '@/components/logos/small-asb-logo.vue'

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
        ArrowRightIcon,
        ArrowLeftIcon,
        ArrowUpIcon,
        TickIcon,
        BellIcon,
        CloseIcon,
        ClockIcon,
        CircularIphoneIcon,
        CircularPercentageIcon,
        IdVerifiedIcon,
        GuidesIcon,
        CalculatorIcon,
        PersonIcon,
        GetALoanIcon,
        SaveMoneyIcon,
        GrowMoneyIcon,
        EverydayBankingIcon,
        CurrencyIcon
    }
})
export default class Icons extends Vue {

}
</script>
