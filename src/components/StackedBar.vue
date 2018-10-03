<template lang="html">
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
import am4themesKelly from '@amcharts/amcharts4/themes/kelly'

am4core.useTheme(am4themesAnimated)
am4core.useTheme(am4themesDark)
am4core.useTheme(am4themesKelly)
export default {
  mounted () {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)

    chart.marginRight = 400

    chart.data = [{
      'initiative': 'Construction',
      'flsaTarget': null,
      'dbaTarget': 27,
      'FLSA': null,
      'DBA': 2
    }, {
      'initiative': 'Restaurants',
      'flsaTarget': 10,
      'FLSA': 5,
      'fmlaTarget': 3,
      'FMLA': 1
    }, {
      'initiative': 'Landscaping',
      'H2B': 0
    }, {
      'initiative': 'Agriculture',
      'All Acts': 8
    }, {
      'initiative': 'Security Guards',
      'SCA': 3,
      'FLSA': 5
    }, {
      'initiative': 'Section 14(c)',
      'FLSA': 3
    }, {
      'initiative': 'Amusement',
      'CL': 0
    }]

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'initiative'
    categoryAxis.title.text = ''
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.minGridDistance = 20

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    // valueAxis.title.text = 'Expenditure (M)'

    // 'Indicates whether Axis' labels and ticks should be drawn inside Plot area.'
    valueAxis.renderer.inside = true
    valueAxis.renderer.opposite = true

    valueAxis.background.fill = am4core.color('pink')
    valueAxis.renderer.labels.template.align = 'center'

    // Create series
    var series1a = chart.series.push(new am4charts.ColumnSeries())
    series1a.dataFields.valueY = 'flsaTarget'
    series1a.dataFields.categoryX = 'initiative'
    series1a.name = 'FLSA Target'
    series1a.tooltipText = '{name}: [bold]{valueY}[/]'
    series1a.stacked = true

    var series1 = chart.series.push(new am4charts.ColumnSeries())
    series1.dataFields.valueY = 'FLSA'
    series1.dataFields.categoryX = 'initiative'
    series1.name = 'FLSA'
    series1.tooltipText = '{name}: [bold]{valueY}[/]'
    series1.stacked = true

    var series2a = chart.series.push(new am4charts.ColumnSeries())
    series2a.dataFields.valueY = 'dbaTarget'
    series2a.dataFields.categoryX = 'initiative'
    series2a.name = 'DBA Target'
    series2a.tooltipText = '{name}: [bold]{valueY}[/]'
    series2a.stacked = true

    var series2 = chart.series.push(new am4charts.ColumnSeries())
    series2.dataFields.valueY = 'DBA'
    series2.dataFields.categoryX = 'initiative'
    series2.name = 'DBA'
    series2.tooltipText = '{name}: [bold]{valueY}[/]'
    series2.stacked = false

    var series3a = chart.series.push(new am4charts.ColumnSeries())
    series3a.dataFields.valueY = 'fmlaTarget'
    series3a.dataFields.categoryX = 'initiative'
    series3a.name = 'FMLA Target'
    series3a.tooltipText = '{name}: [bold]{valueY}[/]'
    series3a.stacked = false

    var series3 = chart.series.push(new am4charts.ColumnSeries())
    series3.dataFields.valueY = 'FMLA'
    series3.dataFields.categoryX = 'initiative'
    series3.name = 'FMLA'
    series3.tooltipText = '{name}: [bold]{valueY}[/]'
    series3.stacked = true

    var series4 = chart.series.push(new am4charts.ColumnSeries())
    series4.dataFields.valueY = 'H2B'
    series4.dataFields.categoryX = 'initiative'
    series4.name = 'H2B'
    series4.tooltipText = '{name}: [bold]{valueY}[/]'
    series4.stacked = true

    var series5 = chart.series.push(new am4charts.ColumnSeries())
    series5.dataFields.valueY = 'SCA'
    series5.dataFields.categoryX = 'initiative'
    series5.name = 'SCA'
    series5.tooltipText = '{name}: [bold]{valueY}[/]'
    series5.stacked = true

    var series6 = chart.series.push(new am4charts.ColumnSeries())
    series6.dataFields.valueY = 'All Acts'
    series6.dataFields.categoryX = 'initiative'
    series6.name = 'All Acts'
    series6.tooltipText = '{name}: [bold]{valueY}[/]'
    series6.stacked = true

    var series7 = chart.series.push(new am4charts.ColumnSeries())
    series7.dataFields.valueY = 'CL'
    series7.dataFields.categoryX = 'initiative'
    series7.name = 'CL'
    series7.tooltipText = '{name}: [bold]{valueY}[/]'
    series7.stacked = true

    // Add cursor
    chart.cursor = new am4charts.XYCursor()
  }
}
</script>

<style scoped lang="css">
.chart {
  width: 100%;
  height: 400px;
}
</style>
