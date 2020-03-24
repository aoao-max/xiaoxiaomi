<template>
    <div>
       <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
            <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
        </van-goods-action>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
     methods: {
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    }
  },
    beforeRouteLeave (to,from,next){
       let flag=window.confirm("现在商品是10周内最便宜的价格\n你确定要离开吗？");
        if(flag){
            next();
        }else{
            next(false);
        }
    }
}
</script>