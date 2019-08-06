<template>
  <div id="app">
    <div class="swiper_box">
				<div class="swiper-main">
					<div>
						<div class="swiper-container">
							<div class="swiper-wrapper">
								<!-- <div class="swiper-slide" v-for="item in imgs">
									<a :href="item.destinationUrl">
										<img :src="item.picture_url" width="100%" height="600" />
									</a>
								</div> -->
							</div>
							<!-- 如果需要分页器 -->
							<div class="swiper-pagination"></div>
						</div>
					</div>
				</div>

			</div>
  </div>
</template>
<script>
import request from '@/common/request'
export default {
  name: 'Home',
    data () {
      return {
        imgs: [] //存储轮播图
      }
    },
    mounted() {
      this._getPics()
    },
    methods: {
      _getPics() {
        request({
          method: 'POST',
          url: '/advpicture/selectBySysAdvpicture',
          params: {}
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
<style>

</style>
