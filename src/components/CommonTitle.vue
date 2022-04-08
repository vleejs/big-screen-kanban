<template>
	<div class="common-title one-xl-yc">
		<span>
			<slot />
		</span>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.common-title {
	width: 457px;
	height: 60px;
	background-color: inherit;

	background-image: url('../assets/imgs/top-left-title.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	padding-left: 72px;
	span {
		font-size: 18px;
		color: #fff;
	}
}
</style>
