module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-styled-components",
  ],
  rules: {
    "color-hex-case": "lower",
    "declaration-colon-newline-after": null,
    "selector-pseudo-element-colon-notation": null,
    "value-no-vendor-prefix": null,
    "property-no-vendor-prefix": null,
    "no-descending-specificity": null,
    "value-list-comma-newline-after": null,
    "rule-empty-line-before": null,
    "length-zero-no-unit": null,
    "max-line-length": null,
    "string-quotes": "double",
    "alpha-value-notation": "number",
    "value-keyword-case": [
      "lower",
      {
        ignoreKeywords: ["dummyValue"],
      },
    ],
    "function-parentheses-newline-inside": null,
  },
};
