import { CanvasJSChart } from "canvasjs-react-charts";
var React = require("react");

export const Charts = () => {
  const options = {
    animationEnabled: true,

    subtitles: [
      {
        text: "Total tokens",
        verticalAlign: "center",
        fontSize: 13,
        dockInsidePlotArea: true,
      },
      {
        text: "1 Trillen",
        fontSize: 15,
        verticalAlign: "center",
        padding: {
          top: 30,
          right: 1,
          bottom: 2,
          left: 2,
        },
      },
    ],

    data: [
      {
        type: "doughnut",
        circleAroundPieDoughnut: {
          width: 6, // Width of the border, defaults to 1
          color: "blue", // Color of the border, defaults to black
        },
        // showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Unsatisfied", y: 5 },
          { name: "Very Unsatisfied", y: 31 },
          { name: "Very Satisfied", y: 40 },
          {
            y: 7,
            name: "Will be used  to Reward  The Holders Of The Metabunnies Token Directly  In Metaverse Project Tokens",
          },
          {
            name: "Will GO TO The Team  For Marketing And Development Purposes ",
            y: 3,
          },
        ],
      },
    ],
  };
  return <CanvasJSChart options={options} />;
};
