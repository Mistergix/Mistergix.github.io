import Vue from "vue";
import _ from "lodash";

const publicResumeData = require('../data/resume-data.json');

let privateResumeData = {};

try {
    privateResumeData = require("../data/resume-data.private.json");
} catch (e) {
    console.log("NO PRIVATE RESUME DATA");
}

const resumeData = _.merge({}, publicResumeData, privateResumeData);

Vue.mixin(
    {
        created() {
            this.resumeData = resumeData;
        }
    }
);