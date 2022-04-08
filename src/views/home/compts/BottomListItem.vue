<template>
	<div class="bottom-list-item">
		<div class="head-top">
			<div class="title one-center">
				<span class="title-name">北京销量</span>
				<span class="title-num">296</span>
			</div>
			<div class="date one-center">
				<span>截止</span>
				<span class="today">{{ today }}</span>
				<span>{{ time }}</span>
			</div>
		</div>
		<div class="main-list">
			<div class="fir-col">
				<div class="per">
					<div class="name">清河啊哈哈三年内</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
			</div>
			<div class="sec-col" v-if="!onlyOne">
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
				<div class="per">
					<div class="name">清河</div>
					<div class="num">12431</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'bottom-list-item',
	data() {
		return {
			today: this.dayjs().format('M.D'),
			time: `${this.dayjs().format('H')}:00`,
			onlyOne: false,
		};
	},
	mounted() {},
};
</script>

<style lang="scss" scoped>
.bottom-list-item {
	width: 280px;
	height: 542px;
	padding: 0 20px;
	.head-top {
		height: 74px;
		background-image: url('../../../assets/imgs/line.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		.title {
			.title-name {
				font-family: MiSans-Heavy;
				font-size: 24px;
				color: #fff;
				margin-right: 28px;
			}
			.title-num {
				font-family: MiSans-Heavy;
				font-size: 24px;
				color: #fff;
			}
		}
		.date {
			font-family: MicrosoftYaHei;
			font-size: 16px;
			color: #087272;
			padding-top: 12px;

			.today {
				margin-right: 6px;
			}
		}
	}
	.main-list {
		display: flex;
		justify-content: space-between;
		.per {
			font-size: 14px;
			font-family: SourceHanSansCN-Regular;
			color: #ffffff;
			line-height: 30px;
			display: flex;
			.name {
				width: 60px;
				overflow: hidden;
				text-overflow: ellipsis;

				white-space: nowrap;
			}
		}
	}
}
</style>
