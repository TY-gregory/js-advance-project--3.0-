import "../css/style.css";

import { Chart } from "chart.js/auto";
import axios from "axios";
import _ from "lodash";

/// variable///
const btn = document.querySelector("#btn");
let i = 0;
////score calc funcion////////
function beepScores(cityData, citySummary, cityTotScore) {
  cleanPage();
  var iCanvas = document.createElement("canvas");
  iCanvas.id = "graph";
  iCanvas.className = "tab";
  iCanvas.width = 400;
  iCanvas.height = 100;
  document.body.appendChild(iCanvas);
  ///
  var iDiv = document.createElement("div");
  iDiv.id = "ris";
  iDiv.className = "totScore";
  iDiv.innerHTML += citySummary;
  iDiv.innerHTML +=
    "Total city Score" + " : " + Math.round(cityTotScore * 100) / 100;
  document.body.appendChild(iDiv);
  for (let i = 0; i < cityData.length; i++) {
    const score = _.get(cityData, `${i}.score_out_of_10`);
    const cat = _.get(cityData, `${i}.name`);
    var iDiv = document.createElement("div");
    iDiv.id = "ris" + i;
    iDiv.className = "score";
    iDiv.innerHTML += cat + " : " + `${Math.round(score)}/10`;
    document.body.appendChild(iDiv);
  }
  //////
}
//// principal function///
async function fetchwcity() {
  try {
    let city = document.getElementById("city").value;
    let city_search = city.toLowerCase().replace(" ", "-");
    console.log(city_search);
    cleanPage();
    const response = await axios.get(
      "https://api.teleport.org/api/urban_areas/slug:" +
        city_search +
        "/scores/"
    );

    console.log(response);
    const cityData = _.get(response, "data.categories");
    console.log(cityData);
    const citySummary = _.get(response, "data.summary");
    console.log(citySummary);
    const cityTotScore = _.get(response, "data.teleport_city_score");
    console.log(cityTotScore);
    beepScores(cityData, citySummary, cityTotScore);
    chart(cityData);

    // Uses the 'optional chaining' operator
  } catch (error) {
    alert("insert a correct city !");

    console.log("There was an error", error);
  }
}
///// graph function /////
function chart(cityData) {
  const score = cityData.map((x) => x.score_out_of_10);
  const categ = cityData.map((x) => x.name);
  const ctx = document.getElementById("graph").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: categ,
      datasets: [
        {
          label: "City Score  ",
          data: score,
          backgroundColor: [
            "#FF3E96",
            "#00FFFF",
            "#40E0D0",
            "#FF6103",
            "#00FF00",
            "#FFD700",
            "#FF00FF",
            "#DC143C",
            "#4B0082",
            "#2F4F4F",
            "#F5F5DC",
            "#DCDCDC",
            "#228B22",
            "#FFFF00",
            "#800080",
            "#BC8F8F",
            "#D2691E",
          ],
          borderColor: ["#000000"],
          borderWidth: 1,
        },
      ],
    },
  });
}
/// refresh function////
function cleanPage() {
  if (document.contains(document.getElementById("ris"))) {
    document.getElementById("ris").remove();
    if (document.contains(document.getElementById("totScore"))) {
      document.getElementById("totScore").remove();
    }
    if (document.contains(document.getElementById("graph"))) {
      document.getElementById("graph").remove();
    }
    for (i = 0; i < 20; i++) {
      if (document.contains(document.getElementById("ris" + i))) {
        document.getElementById("ris" + i).remove();
      }
    }
  }
}

//// add event ///
btn.addEventListener("click", fetchwcity);
