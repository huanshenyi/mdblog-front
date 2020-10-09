<template>
<!-- ユーザーページの右側のカード -->
    <div class="card">
         <div class="card-footer">
            <div href="#" class="card-footer-item">
               <span class="item">
                  <p>フォロワー</p>
                  <p>12</p>
               </span>
            </div>
            <div href="#" class="card-footer-item">
                <span class="item">
                   <p>フォロー</p>
                   <p>31</p>
                </span>
            </div>  
         </div>
         <!-- 住所 -->
         <div class="city">
             <p><span class="map-marker">住所icon</span>どこかにいる</p>
         </div>
         <!-- 見てるタグ -->
         <div class="tag-list">
            <div class="tag-list-title">
                <p><span>icon</span>フォロー中のタグ</p>
            </div>
            <div>
                <span class="tag tagcss">TagLabel</span>
            </div>
         </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: "UserRcard",
    components:{},
    setup(){

    }
})
</script>
<style scoped>
.card-footer{
   border-top: none;
   border-bottom: 1px solid #ededed;
}
.item{
    text-align: center;
    font-size: 15px;
    font-weight:bold;
}
.city{
    padding: 5px;
    margin-bottom: 11px;
    margin-top: 11px;
    text-align: center;
}
.map-marker{
    margin-right: 4px;
    font-size: 16px;
    width: 20px;
}
.tag-list{
    padding: 14px;
    border-top: 1px solid #ededed;
}
.tag-list-title{
    margin-bottom: 14px;
    text-align: left;
    display: flex;
    color: #777;
}
.tagcss{
    font-size: 12px;
    margin: 4px;
}
</style>