report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/demo_cookie_0_html_0_PC.png",
        "test": "../bitmaps_test/20191106-105939/demo_cookie_0_html_0_PC.png",
        "selector": "html",
        "fileName": "demo_cookie_0_html_0_PC.png",
        "label": "cookie",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://garris.github.io/BackstopJS/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "PC",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.02",
          "analysisTime": 1542
        }
      },
      "status": "pass"
    }
  ],
  "id": "demo"
});