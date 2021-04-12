import React, { useEffect, useState, useCallback } from "react";
import * as SurveyKo from "survey-knockout";
import * as SurveyJSCreator from "survey-creator";
import "survey-creator/survey-creator.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";

import $ from "jquery";

import "pretty-checkbox/dist/pretty-checkbox.css";

import * as widgets from "surveyjs-widgets";
import { json } from "../../utils/api/jsonSurvey";
import { fetchDbToPostQuestion } from '../../utils/api/fetchToDB'

SurveyJSCreator.StylesManager.applyTheme("default");

widgets.prettycheckbox(SurveyKo);
widgets.select2(SurveyKo, $);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo, $);
widgets.jqueryuidatepicker(SurveyKo, $);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo, $);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo, $);
widgets.bootstrapslider(SurveyKo);

const SurveyCreator = () => {
  let surveyCreator;
  const [surveyy, setJsonCreator] = useState({})
  useEffect(() => {
    let options = { showEmbededSurveyTab: true };
    surveyCreator = new SurveyJSCreator.SurveyCreator(
      null,
      options
    );
    surveyCreator.saveSurveyFunc = saveMySurvey;
    surveyCreator.tabs().push({
      name: "survey-templates",
      title: "My Custom Tab",
      template: "custom-tab-survey-templates",
      action: () => {
          surveyCreator.makeNewViewActive("survey-templates");
      },
      data: {},
    });
    surveyCreator.render("surveyCreatorContainer");
  }, []) 
   
 const saveMySurvey = useCallback(async () => {

  try{
    
    
    await fetchDbToPostQuestion(JSON.parse(surveyCreator.text))

  }catch (error){
    console.error(error);
  }
  
 }, [surveyy]) 
 
  
  
    return (
    <div>
      <script type="text/html" id="custom-tab-survey-templates">
        {`<div id="test">TEST</div>`}
      </script>

      <div id="surveyCreatorContainer" />
    </div>);
}

export default SurveyCreator;
