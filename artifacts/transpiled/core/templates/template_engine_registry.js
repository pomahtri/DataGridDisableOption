"use strict";

exports.registerTemplateEngine = registerTemplateEngine;
exports.setTemplateEngine = setTemplateEngine;
exports.getCurrentTemplateEngine = getCurrentTemplateEngine;

var _type = require("../utils/type");

var _errors = _interopRequireDefault(require("../errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateEngines = {};
var currentTemplateEngine;

function registerTemplateEngine(name, templateEngine) {
  templateEngines[name] = templateEngine;
}

function setTemplateEngine(templateEngine) {
  if ((0, _type.isString)(templateEngine)) {
    currentTemplateEngine = templateEngines[templateEngine];

    if (!currentTemplateEngine) {
      throw _errors.default.Error('E0020', templateEngine);
    }
  } else {
    currentTemplateEngine = templateEngine;
  }
}

function getCurrentTemplateEngine() {
  return currentTemplateEngine;
}