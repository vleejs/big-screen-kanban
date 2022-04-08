<template>
	<div class="home-page-wrapper">
		<BigScreenWrap :width="1920" :height="1080">
			<div class="screen-container" id="snapshot-all">
				<!-- <div class="download" @click="download"></div>
					<div id="img-box"></div> -->
				<div class="first-row">
					<TopLeftComp />
					<TopCenter :num="398" id="top-center-dom" />
				</div>
				<div class="sec-row">
					<BottomListItem />
					<BottomListItem />
					<BottomListItem />
					<BottomListItem />
					<BottomListItem />
					<BottomListItem />
				</div>
			</div>
		</BigScreenWrap>
	</div>
</template>

<script>
import html2canvas from 'html2canvas';
import BigScreenWrap from '@/components/BigScreenWrap.vue';
import TopLeftComp from './compts/TopLeft.vue';
import TopCenter from './compts/TopCenter.vue';
import BottomListItem from './compts/BottomListItem';
export default {
	name: 'HomePage',
	components: {
		BigScreenWrap,
		TopLeftComp,
		TopCenter,
		BottomListItem,
	},
	data() {
		return {
			snapshotType: '',
			timerId: null,
		};
	},
	mounted() {
		if (!this.snapshotType) {
			console.warn('非dom下载');
			return;
		} else {
			setTimeout(() => {
				this.timerId = this.doSnapshot(this.snapshotType);
			}, 1200);
		}
	},
	watch: {
		'$route.query': {
			handler(newVal) {
				console.log('newVal', newVal);
				this.snapshotType = newVal.snapshot;
			},
			immediate: true,
		},
	},
	methods: {
		/** 执行快照 */
		doSnapshot(type) {
			console.log('执行快照的方式', type);
			html2canvas(document.getElementById('snapshot-all'), {
				useCORS: true,
				scale: 1, //设置放大的倍数
			})
				.then((canvas) => {
					console.log('canvas', canvas);

					let img = new Image();
					img.src = canvas.toDataURL('image/jpeg');
					let a = document.createElement('a');
					a.href = canvas.toDataURL('image/jpeg');
					a.download = 'kan';
					a.click();
				})
				.catch((err) => {
					console.log('执行快照失败', err);
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.home-page-wrapper {
	width: 100%;
	height: 100%;
	.screen-container {
		width: 100%;
		height: 100%;
		background-image: url('../../assets/imgs/home-bg.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding-top: 112px;
		padding-bottom: 30px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.first-row {
			padding: 0 28px;
			display: flex;
		}
		.sec-row {
			padding: 0 50px;
			display: flex;
			justify-content: space-between;
		}
	}
}

.img-box {
	width: 1920px;
	height: 1080px;
	border: 1px solid red;
}
</style>
