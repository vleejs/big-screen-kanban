<template>
	<div class="top-left">
		<CommonTitle> 各省销量排名 </CommonTitle>

		<div class="chart-wrap">
			<div class="rank">
				<div class="rank-num no-1">
					<img src="@/assets/imgs/no1.png" alt="" />
				</div>
				<div class="rank-num no-2">
					<img src="@/assets/imgs/no2.png" alt="" />
				</div>
				<div class="rank-num no-3">
					<img src="@/assets/imgs/no3.png" alt="" />
				</div>
			</div>
			<div class="chart-render" ref="top-left-chart" :style="style"></div>
		</div>
	</div>
</template>

<script>
import CommonTitle from '@/components/CommonTitle.vue';
export default {
	props: {
		width: String,
		height: String,
	},
	data() {
		return {
			chart: null,
			// no1SymbolStr:
			// 	'image://data:image/png;base64,M864 896H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h704a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zM192 832h640V192H192v640z',
			no1SymbolStr: `image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==`,
			dataList: [
				{
					name: '北京',
					value: 296,
				},
				{
					name: '广东',
					value: 96,
				},
				{
					name: '江苏',
					value: 96,
				},
				{
					name: '辽宁',
					value: 96,
				},
				{
					name: '山东',
					value: 94,
				},
				{
					name: '线上',
					value: 92,
				},
				{
					name: '重庆',
					value: 49,
				},
				{
					name: '上海',
					value: 9,
				},
			],
		};
	},
	computed: {
		style() {
			return {
				width: this.width || '520px',
				height: this.height || '282px',
			};
		},
	},
	components: {
		CommonTitle,
	},
	mounted() {
		this.initChart();
	},
	methods: {
		initChart() {
			this.chart = this.$echarts.init(this.$refs['top-left-chart']);
			if (this.chart) {
				this.createdChart();
			}
		},
		// 创建图形
		createdChart() {
			if (!this.chart) {
				console.warn('图表实例不存在');
				return;
			}

			const options = this.configOption();
			this.chart.setOption(options);
		},
		yAxis() {
			const yConf = [
				{
					// 左侧地区 北京等
					axisLine: {
						show: false,
					},
					splitLine: {
						show: false,
					},
					axisTick: {
						show: false,
					},
					show: true,
					gridIndex: 0,
					position: 'left',
					triggerEvent: true,
					inverse: true,
					data: [
						'北京',
						'广东',
						'江苏',
						'辽宁',
						'山东',
						'线上',
						'重庆',
						'上海',
					],

					axisLabel: {
						// 刻度标签
						show: true,
						interval: 0,
						color: '#fff',
						align: 'left',
						margin: 60,
						fontSize: 14,
						// formatter: function (value) {
						// 	return '{title|' + value +  '}';
						// },
						// backgroundColor: {
						// 	// image: require('@/assets/no1.png'),
						// },
						rich: {
							title: {
								width: 50,
								align: 'right',
								fontSize: 14,
							},
						},
					},
				},
				{
					triggerEvent: true,
					show: true,
					inverse: true,
					data: [296, 96, 96, 96, 94, 92, 49, 9],
					axisLine: {
						show: false,
					},
					splitLine: {
						show: false,
					},
					axisTick: {
						show: false,
					},
					axisLabel: {
						interval: 0,
						shadowOffsetX: '-20px',
						color: (_, index) => {
							if (index === 0) {
								return '#f86b86';
							} else if (index === 1) {
								return '#ff8c31';
							} else if (index === 2) {
								return '#ffce76';
							} else {
								return '#618ace';
							}
						},
						align: 'left',
						verticalAlign: 'center',
						lineHeight: 40,
						fontSize: 15,
						margin: 14,
						// formatter: function () {
						// 	return '哈哈哈';
						// },
					},
				},
			];
			return yConf;
		},
		genSeries() {
			const seriesList = [
				{
					name: 'pictorialBar',
					type: 'pictorialBar',

					symbolSize: [50, 50],
					symbolOffset: [20, 0],
					z: 12,
					data: [
						{
							value: 296,
							symbolPosition: 'end',
							symbol: this.no1SymbolStr,
						},
						{
							value: 96,
							symbol: this.no1SymbolStr,
							symbolPosition: 'end',
						},
						{
							value: 96,
							symbol: this.no1SymbolStr,
							symbolPosition: 'end',
						},
						{
							value: 96,
							symbol: this.no1SymbolStr,
							symbolPosition: 'end',
						},
						{
							value: 94,
							symbol: this.no1SymbolStr,
							symbolPosition: 'end',
						},
						{
							value: 92,
							symbol: this.no1SymbolStr,
							symbolPosition: 'end',
						},
						{
							value: 49,
							symbol: this.no1SymbolStr,
							symbolPosition: 'end',
						},
						{
							value: 9,
							symbol: this.no1SymbolStr,
							symbolPosition: 'end',
						},
					],
				},
				{
					name: '各省销量',
					id: 'bar-1',
					type: 'bar',
					showBackground: true,
					backgroundStyle: {
						color: '#242424',
						borderRadius: 20,
					},
					label: {
						show: false,
					},
					barBorderRadius: 30,
					yAxisIndex: 0,
					data: this.dataList,
					barWidth: 12,
					barCategoryGap: '20',
					// // align: left,
					itemStyle: {
						color: (params) => {
							const color1 = new this.$echarts.graphic.LinearGradient(
								0,
								0,
								1,
								0,
								[
									{
										offset: 0,
										color: '#7c3046',
									},
									{
										offset: 1,
										color: '#ff889f',
									},
								],
								false
							);
							const color2 = new this.$echarts.graphic.LinearGradient(
								0,
								0,
								1,
								0,
								[
									{
										offset: 0,
										color: '#4c392a',
									},
									{
										offset: 1,
										color: '#ffa45b',
									},
								],
								false
							);
							const color3 = new this.$echarts.graphic.LinearGradient(
								0,
								0,
								1,
								0,
								[
									{
										offset: 0,
										color: '#4b412f',
									},
									{
										offset: 1,
										color: '#f1bc5b',
									},
								],
								false
							);
							const color4 = new this.$echarts.graphic.LinearGradient(
								0,
								0,
								1,
								0,
								[
									{
										offset: 0,
										color: '#2f3643',
									},
									{
										offset: 1,
										color: '#78a4ed',
									},
								],
								false
							);
							const color5 = new this.$echarts.graphic.LinearGradient(
								0,
								0,
								1,
								0,
								[
									{
										offset: 0,
										color: '#2f3643',
									},
									{
										offset: 1,
										color: '#78a4ed',
									},
								],
								false
							);
							const color6 = new this.$echarts.graphic.LinearGradient(
								0,
								0,
								1,
								0,
								[
									{
										offset: 0,
										color: '#2f3643',
									},
									{
										offset: 1,
										color: '#78a4ed',
									},
								],
								false
							);
							const color7 = new this.$echarts.graphic.LinearGradient(
								0,
								0,
								1,
								0,
								[
									{
										offset: 0,
										color: '#2f3643',
									},
									{
										offset: 1,
										color: '#78a4ed',
									},
								],
								false
							);
							const color8 = new this.$echarts.graphic.LinearGradient(
								0,
								0,
								1,
								0,
								[
									{
										offset: 0,
										color: '#772ace',
									},
									{
										offset: 1,
										color: '#dec7fc',
									},
								],
								false
							);
							const colorList = [
								color1,
								color2,
								color3,
								color4,
								color5,
								color6,
								color7,
								color8,
							];
							return colorList[params.dataIndex];
						},
						shadowColor: 'rgba(0, 0, 0, 0.5)',
						shadowBlur: 10,
					},
				},
			];

			return seriesList;
		},
		configOption() {
			const baseConfig = {
				// backgroundColor: '#000000',
				grid: {
					left: 60,
					top: 0,
					bottom: 0,
				},
				xAxis: {
					show: false, // 不展示x
				},
				yAxis: this.yAxis(),
				series: this.genSeries(),
			};
			return baseConfig;
		},
	},
};
</script>

<style lang="scss" scoped>
.top-left {
	height: 362px;
	width: 584px;
	.chart-wrap {
		padding-left: 24px;
		padding-top: 15px;
		display: flex;
		.rank {
			display: flex;
			flex-direction: column;
			margin-right: 8px;
			.rank-num {
				img {
					width: 21px;
					height: 30px;
					margin-bottom: 8px;
					margin-top: 1px;
				}
			}
		}
	}
}
</style>
