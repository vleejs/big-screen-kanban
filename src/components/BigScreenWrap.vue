<!--
 * @Description: 数据可视化大屏适配容器组件 效果: 比例比一致时,宽度铺满
-->
<template>
	<div class="big-screen-adapter" :style="style">
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		width: {
			//设计稿宽高 默认1920*1080 16:9
			type: Number,
			default: 1920,
		},
		height: {
			type: Number,
			default: 1080,
		},
	},
	data() {
		return {
			style: {
				width: this.width + 'px',
				height: this.height + 'px',
				transform: 'scale(1) translateX(-50%)',
				transformOrigin: '0 0',
			},
		};
	},
	mounted() {
		this.setScale();
		window.addEventListener('resize', this.Debounce(this.setScale));
		this.$once('hook:beforeDestroy', () => {
			window.removeEventListener('resize', this.Debounce(this.setScale));
		});
	},
	methods: {
		Debounce: (fn, t) => {
			const delay = t || 300;
			let timer;
			return function () {
				const args = arguments;
				if (timer) {
					clearTimeout(timer);
				}
				const context = this;
				timer = setTimeout(() => {
					timer = null;
					fn.apply(context, args);
				}, delay);
			};
		},
		//获取缩放比例
		getScale() {
			const baseWidth = document.documentElement.clientWidth;
			const baseHeight = document.documentElement.clientHeight;
			const wRatio = baseWidth / this.width;
			const hRatio = baseHeight / this.height;
			const scale = wRatio < hRatio ? wRatio : hRatio; //屏幕比与设计稿不一致时, 取较小值
			return scale;
		},
		//设置容器缩放
		setScale() {
			const baseWidth = document.documentElement.clientWidth;
			this.style.transform = `scale(${this.getScale()}) translateX(-50%)`;
			this.style.width = `${baseWidth / this.getScale()}px`; //宽度铺满
		},
	},
};
</script>

<style lang="scss" scoped>
.big-screen-adapter {
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 50%;
	right: 0;
	bottom: 0;
	transition: 0.3s;
}
</style>
