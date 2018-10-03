<template lang='html'>
  <v-container fluid>
    <v-scale-transition mode='out-in'>
      <v-layout align-center justify-center row fill-height>
        <div class='chart' ref='chartdiv'>
        </div>
      </v-layout>
    </v-scale-transition>
  </v-container>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import am4themesDark from '@amcharts/amcharts4/themes/dark'

am4core.useTheme(am4themesAnimated)
am4core.useTheme(am4themesDark)
export default {
  mounted () {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
    chart.paddingRight = 25

    /* Add data */
    chart.data = [{
      'category': '% Agency Initiated',
      'value': 32,
      'target': 46
    }, {
      'category': '% Prior Ind FLSA',
      'value': 40,
      'target': 80
    }, {
      'category': '% FLSA CMPs Collected',
      'value': 19,
      'target': 60
    }]

    /* Create axes */
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'category'
    categoryAxis.renderer.minGridDistance = 30
    categoryAxis.renderer.grid.template.disabled = true

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.minGridDistance = 30
    valueAxis.renderer.grid.template.disabled = true
    valueAxis.min = 0
    valueAxis.max = 100
    valueAxis.strictMinMax = true
    valueAxis.renderer.labels.template.adapter.add('text', function (text) {
      return text + '%'
    })

    /* Create ranges */
    function createRange (axis, from, to, color) {
      var range = axis.axisRanges.create()
      range.value = from
      range.endValue = to
      range.axisFill.fill = color
      range.axisFill.fillOpacity = 0.8
      range.label.disabled = true
    }

    createRange(valueAxis, 0, 100, am4core.color('#a955ba'))

    /* Create series */
    var series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueX = 'value'
    series.dataFields.categoryY = 'category'
    series.columns.template.fill = am4core.color('#000')
    series.columns.template.stroke = am4core.color('#fff')
    series.columns.template.strokeWidth = 1
    series.columns.template.strokeOpacity = 0.5
    series.columns.template.height = am4core.percent(25)

    var series2 = chart.series.push(new am4charts.LineSeries())
    series2.dataFields.valueX = 'target'
    series2.dataFields.categoryY = 'category'
    series2.strokeWidth = 0

    var bullet = series2.bullets.push(new am4charts.Bullet())
    var line = bullet.createChild(am4core.Line)
    line.verticalCenter = 'middle'
    line.horizontalCenter = 'middle'
    line.x1 = 0
    line.y1 = 0
    line.x2 = 0
    line.y2 = 30
    line.stroke = am4core.color('#fff')
    line.strokeWidth = 4
  }
}
</script>

<style scoped lang='css'>
.chart {
  width: 100%;
  height: 180px;
}
</style>
