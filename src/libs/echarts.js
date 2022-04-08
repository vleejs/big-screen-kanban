/**
 * @description e5 按需加载组件
 */
import Vue from 'vue';
import * as echarts from 'echarts/core';
import {
	BarChart,
	LineChart,
	PieChart,
	PictorialBarChart,
} from 'echarts/charts';
import {
	TitleComponent,
	TooltipComponent,
	GridComponent,
	LegendComponent,
	ToolboxComponent,
	DatasetComponent,
	DataZoomInsideComponent,
	DataZoomSliderComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
	TitleComponent,
	TooltipComponent,
	GridComponent,
	BarChart,
	LineChart,
	CanvasRenderer,
	LegendComponent,
	ToolboxComponent,
	PieChart,
	DatasetComponent,
	DataZoomInsideComponent,
	DataZoomSliderComponent,
	PictorialBarChart,
]);

Vue.prototype.$echarts = echarts;
