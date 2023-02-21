<template>
  <div>
    <h1>View 2</h1>
    <div class="border border-2 border-primary mb-3">
      <DxChart
        id="chart"
        :customize-point="customizePoint"
        :class="isFirstLevel ? 'pointer-on-bars' : ''"
        :data-source="dataSource"
        title="Submited Users"
        @point-click="onPointClick"
      >
        <DxSeries type="bar" />
        <DxValueAxis :show-zero="false" />
        <DxLegend :visible="false" />
      </DxChart>
      <button class="btn btn-primary mb-2">
        <DxButton
          :visible="!isFirstLevel"
          text="Reset"
          icon="chevronleft"
          @click="onButtonClick"
        />
      </button>
    </div>
    <!-- Documents below code-->
    <div class="container border border-2 mb-3" style="text-align: left">
      <h5>JSON Data Format</h5>
      <pre>{{ dataSource }}</pre>
    </div>
    <div class="container mb-5">
      <h5>Devextreme vue component</h5>
      <div class="row">
        <div class="col-6">
          <div class="list-group" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              href="https://www.npmjs.com/package/devextreme-vue"
              role="tab"
              target="_blank"
              aria-controls="Installation"
              >Installation</a
            >
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              href="https://js.devexpress.com/Documentation/"
              role="tab"
              target="_blank"
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
import { DxChart, DxSeries, DxValueAxis, DxLegend } from "devextreme-vue/chart";

import { DxButton } from "devextreme-vue/button";
const colors = ["#6babac", "#e55253"];
export default {
  name: "About",
  data() {
    return {
      data: [
        { arg: "Anual Questionnaire", val: 3007613498, parentID: "" },
        { arg: "Bar Passage Questionnaire", val: 493603615, parentID: "" },
        { arg: "Employment Questionnaire", val: 438575293, parentID: "" },
        { arg: "Part I", val: 181562056, parentID: "Anual Questionnaire" },
        { arg: "Part II", val: 88487396, parentID: "Anual Questionnaire" },
        { arg: "Part II", val: 77433744, parentID: "Anual Questionnaire" },
        { arg: "Part III", val: 33848242, parentID: "Anual Questionnaire" },
        { arg: "Part IV", val: 1380083000, parentID: "Anual Questionnaire" },
        { arg: "Part V", val: 1306687000, parentID: "Anual Questionnaire" },
        { arg: "Part VI", val: 193885498, parentID: "Anual Questionnaire" },
        { arg: "Part VII", val: 126958000, parentID: "Anual Questionnaire" },
        { arg: "First Year", val: 146804372, parentID: "Bar Passage Questionnaire" },
        { arg: "First Takers", val: 82175684, parentID: "Bar Passage Questionnaire" },
        { arg: "Profiles", val: 79463663, parentID: "Employment Questionnaire" },
        { arg: "Summary", val: 66736000, parentID: "Employment Questionnaire" },
        { arg: "URL", val: 63395574, parentID: "Employment Questionnaire" },
      ],
      isFirstLevel: true,
      dataSource: null,
    };
  },
  components: {
    DxChart,
    DxSeries,
    DxValueAxis,
    DxLegend,
    DxButton,
  },
  mounted() {
    this.dataSource = this.data.filter((item) => item.parentID === "");
  },
  methods: {
    filterData(name) {
      return this.data.filter((item) => item.parentID === name);
    },
    customizePoint() {
      return {
        color: colors[Number(this.isFirstLevel)],
        hoverStyle: !this.isFirstLevel
          ? {
              hatching: "none",
            }
          : {},
      };
    },
    onPointClick({ target }) {
      if (this.isFirstLevel) {
        this.isFirstLevel = false;
        this.dataSource = this.filterData(target.originalArgument);
      }
    },
    onButtonClick() {
      if (!this.isFirstLevel) {
        this.isFirstLevel = true;
        this.dataSource = this.filterData("");
      }
    },
  },
};
</script>
<style>
#chart {
  height: 440px;
  width: 100%;
}

#chart.pointer-on-bars .dxc-series rect {
  cursor: pointer;
}

.button-container {
  text-align: center;
  height: 40px;
  position: absolute;
  top: 7px;
  left: 0;
}
</style>