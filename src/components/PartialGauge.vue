<template lang="html">
  <v-container fluid>
    <v-scale-transition mode='out-in'>
      <v-layout align-center justify-center row fill-height>
        <div class='test' ref='chartdiv'>
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
  data () {
    return {
      flsaBwHr: 296,
      agCmpHr: 147,
      dbraBwHr: 151,
      scaBwHr: 417
    }
  },
  mounted () {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.GaugeChart)

    chart.startAngle = 0
    chart.endAngle = 360

    function createAxis (min, max, start, end, color) {
      var axis = chart.xAxes.push(new am4charts.ValueAxis())
      axis.min = min
      axis.max = max
      axis.strictMinMax = true
      axis.renderer.useChartAngles = false
      axis.renderer.startAngle = start
      axis.renderer.endAngle = end
      axis.renderer.minGridDistance = 100

      axis.renderer.line.strokeOpacity = 1
      axis.renderer.line.strokeWidth = 10
      axis.renderer.line.stroke = am4core.color(color)
      axis.renderer.ticks.template.stroke = am4core.color(color)

      axis.renderer.ticks.template.strokeOpacity = 1
      axis.renderer.grid.template.disabled = true
      axis.renderer.ticks.template.length = 10

      return axis
    }

    function createHand (axis) {
      var hand = chart.hands.push(new am4charts.ClockHand())
      hand.fill = axis.renderer.line.stroke
      hand.stroke = axis.renderer.line.stroke
      hand.axis = axis
      hand.pin.disabled = true
      hand.startWidth = 10
      hand.endWidth = 0
      hand.radius = am4core.percent(90)
      hand.innerRadius = am4core.percent(70)
      hand.value = 0
      return hand
    }

    var axis1 = createAxis(0, 400, -85, -5, '#EF6F6C')
    var axis2 = createAxis(0, 300, 5, 85, '#426A5A')
    var axis3 = createAxis(0, 300, 95, 175, '#7FB685')
    var axis4 = createAxis(0, 800, 185, 265, '#DDAE7E')

    var legend = new am4charts.Legend()
    legend.isMeasured = false
    legend.layout = 'horizontal'
    legend.y = 19
    legend.x = 0
    legend.verticalCenter = 'bottom'
    legend.parent = chart.chartContainer
    legend.data = [
      {
        'name': 'FLSA BW/HR',
        'fill': am4core.color('#DDAE7E')
      },
      {
        'name': 'AG CMP/HR',
        'fill': am4core.color('#EF6F6C')
      },
      {
        'name': 'DBRA BW/HR',
        'fill': am4core.color('#426A5A')
      },
      {
        'name': 'SCA BW/HR',
        'fill': am4core.color('#7FB685')
      }
    ]

    var labelList = new am4core.ListTemplate(new am4core.Label())
    labelList.template.isMeasured = false
    // labelList.template.background.strokeWidth = 2
    labelList.template.fontSize = 15
    labelList.template.padding(10, 10, 10, 10)
    labelList.template.y = am4core.percent(50)
    labelList.template.horizontalCenter = 'middle'

    var label = labelList.create()
    label.parent = chart.chartContainer
    label.x = am4core.percent(40)
    label.y = am4core.percent(35)
    // label.background.stroke = am4core.color('#d19aa8')
    label.fill = am4core.color('#EF6F6C')
    label.text = `$${this.flsaBwHr}`

    var label2 = labelList.create()
    label2.parent = chart.chartContainer
    label2.x = am4core.percent(60)
    label2.y = am4core.percent(35)
    // label2.background.stroke = am4core.color('#b8dfa9')
    label2.fill = am4core.color('#b8dfa9')
    label2.text = `$${this.agCmpHr}`

    var label3 = labelList.create()
    label3.parent = chart.chartContainer
    label3.x = am4core.percent(60)
    label3.y = am4core.percent(55)
    // label3.background.stroke = am4core.color('#b8dfa9')
    label3.fill = am4core.color('#b8dfa9')
    label3.text = `$${this.agCmpHr}`

    var label4 = labelList.create()
    label4.parent = chart.chartContainer
    label4.x = am4core.percent(40)
    label4.y = am4core.percent(55)
    // label4.background.stroke = am4core.color('#b8dfa9')
    label4.fill = am4core.color('#b8dfa9')
    label4.text = `$${this.agCmpHr}`

    var hand1 = createHand(axis1)
    var hand2 = createHand(axis2)
    var hand3 = createHand(axis3)
    var hand4 = createHand(axis4)

    hand1.showValue(296)
    hand2.showValue(147)
    hand3.showValue(160)
    hand4.showValue(443)
  },

  beforeDestroy () {
    if (this.chart) {
      this.chart.dispose()
    }
  }
}
</script>

<style lang="css">
.test {
  width: 500px;
  height: 500px;;
  margin: 1em auto;
}
</style>
