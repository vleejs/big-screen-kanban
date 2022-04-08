<template>
	<div class="top-center one-xc-yt">
		<span> {{ num | renderNum }}</span>
	</div>
</template>

<script>
export default {
	name: 'TopCenter',
	props: {
		num: {
			type: [Number, String],
			required: true,
		},
	},
	filters: {
		renderNum(val) {
			if (val) return val;
			return '';
		},
	},
};
</script>

<style lang="scss" scoped>
/**
* 利用text-shadow实现3d文字效果
*
* $color     立体字的初始颜色
* $dx        立体字水平偏移位置，dx>0,向右偏，建议取值[-2,2]
* $dy        立体字垂直偏移位置，dy>0,向下偏，建议取值[-2,2]，dx和dy配合控制立体字的方向
* $steps     立体字的层叠数量
* $darken    立体字的颜色变暗数值，建议取值[0,1],需要结合层叠数量，避免过多的黑色出现
* @copyright 前端开发whqet，http://blog.csdn.net/whqet 
*/
@mixin text3d($color: #02ffff, $dx: 1, $dy: -1, $steps: 10, $darken: 0.1) {
	color: $color;
	$color: darken($color, 30%);

	$output: '';
	$x: 0px;
	$y: 0px;
	@for $n from 1 to $steps {
		$output: $output + '#{$x} #{$y} 0 #{$color},';
		$x: $x + $dx;
		$y: $y + $dy;
		$color: darken($color, $darken * ($n + 10));
	}
	$output: $output +
		'#{$x} #{$y} 12px rgba(0,0,0,0.3),#{$x} #{$y} 1px rgba(0,0,0,0.5);';

	text-shadow: unquote($output);
}
.top-center {
	width: 522px;
	height: 232px;
	background-image: url('../../../assets/imgs/top-center-pan.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	span {
		color: #02ffff;
		font-family: 'MiSans-Heavy';
		font-size: 202px;
		line-height: 180px;
		@include text3d(#02ffff, 1, -0.5, 20, 0.05);
	}
}
</style>
