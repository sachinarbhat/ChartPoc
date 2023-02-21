<template>
  <div>
    <h1>View 1</h1>
    <div class="border border-2 border-primary mb-3">
      <v-chart class="chart" :option="option" @click="checking($event)" />
      <button class="btn btn-primary mb-2" @click="reset">reset</button>
    </div>
    <!-- Documents below code-->
    <div class="container border border-2 mb-3" style="text-align: left">
      <h5>JSON Data Format</h5>
      <pre>{{ option }}</pre>
    </div>
    <div class="container mb-5">
      <h5>EChart vue component</h5>
      <div class="row">
        <div class="col-6">
          <div class="list-group" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              target="_blank"
              href="https://github.com/ecomfe/vue-echarts#readme"
              role="tab"
              aria-controls="Document"
              >Document</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      option: {
        title: {
          text: "Submited Users",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [],
        },
        series: [
          {
            name: "Submited Users",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      data: [
        { value: 335, name: "Anual Questionnaire", parentid: "" },
        { value: 310, name: "Bar Passage Questionnaire", parentid: "" },
        { value: 234, name: "Employment Questionnaire", parentid: "" },
        { value: 135, name: "Part I", parentid: "Anual Questionnaire" },
        { value: 200, name: "Part II", parentid: "Anual Questionnaire" },
        { value: 20, name: "Part III", parentid: "Anual Questionnaire" },
        { value: 100, name: "Part IV", parentid: "Anual Questionnaire" },
        { value: 150, name: "Part V", parentid: "Anual Questionnaire" },
        { value: 135, name: "Part VI", parentid: "Anual Questionnaire" },
        { value: 300, name: "Part VII", parentid: "Anual Questionnaire" },
        { value: 100, name: "Part VIII", parentid: "Anual Questionnaire" },
        {
          value: 200,
          name: "First Year",
          parentid: "Bar Passage Questionnaire",
        },
        {
          value: 135,
          name: "First Takers",
          parentid: "Bar Passage Questionnaire",
        },
        { value: 70, name: "Profiles", parentid: "Employment Questionnaire" },
        { value: 200, name: "Summary", parentid: "Employment Questionnaire" },
        { value: 10, name: "URL", parentid: "Employment Questionnaire" },
      ],
      IsParentState: true,
    };
  },
  methods: {
    checking(event) {
      if (event.data.parentid == "") {
        this.option.legend.data = this.FilterLegend(event.data.name);
        this.option.series[0].data = this.FilterData(event.data.name);
        this.IsParentState = false;
      }
      //this.option = this.FilterChart(this.option, event.data.name);
    },
    reset() {
      if (!this.IsParentState) {
        this.option.legend.data = this.FilterLegend("");
        this.option.series[0].data = this.FilterData("");
        this.IsParentState = true;
      }
    },
    FilterLegend(name) {
      let legend = this.FilterData(name);
      let legenddata = [];
      legend.forEach((element) => {
        legenddata.push(element.name);
      });
      return legenddata;
    },
    FilterData(name) {
      return this.data.filter((item) => item.parentid === name);
    },
  },
  mounted() {
    this.option.legend.data = this.FilterLegend("");
    this.option.series[0].data = this.FilterData("");
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
