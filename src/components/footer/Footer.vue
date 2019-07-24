<template>
<div class="footer">
    <div class="w-1200">
        <div class="bottom-nav fl">
            <div class="footer-nav">
                <a href="/help.html?0" class="">關於我們</a>
                <a href="javascript:;" onclick="showLine()">聯繫我們</a>
                <a href="/help.html?1" class="">取款幫助</a>
                <a href="/help.html?2" class="">存款幫助</a>
                <a href="/help.html?3" class="">常見問題</a>
            </div> 
            <p>© 2011-2020 <strong class="platform">SSG 彩票</strong>版權所有</p> 
            <p><strong class="platform">SSG 彩票</strong>鄭重提示：彩票有風險，投注需謹慎，不向未滿 18 周歲的青少年出售彩票</p>
        </div> 
        <div class="authorized fr">
            <div id="qrcode2"></div>
            <p>掃碼下載手機版</p> 
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.footer {
    min-width: 1200px;
    padding: 20px 0;
    width: 100%;
    overflow: hidden;
    margin: 0px auto;
    text-align: center;
    clear: both
}

.footer .w-1200 {
    width: 1200px;
    overflow: hidden;
    text-align: left;
    margin: 0px auto;
    clear: both;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer .footer-nav {
    line-height: 32px;
    padding-top: 5px
}

.footer .footer-nav a {
    font-size: 13px;
    color: #000;
}

.footer .footer-nav a:hover {
    /*color: #f6f6f6*/
}

.footer .footer-nav a::after {
    content:"";
    margin: 0 10px;
    border-right:1px solid #525252;
}

.footer .footer-nav a:last-child:after {
    display: none;
}
.authorized p {
    text-align: center;
    /*color: #a48c5f;*/
    line-height: 32px;
    padding-top: 5px
}

</style>

