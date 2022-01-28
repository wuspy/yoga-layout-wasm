#include <yoga/Yoga.h>

#include "./Config.hh"

/* static */ Config* Config::create(void) {
  return new Config();
}

/* static */ void Config::destroy(Config* node) {
  delete node;
}

Config::Config(void) : m_config(YGConfigNew()) {}

Config::~Config(void) {
  YGConfigFree(m_config);
}

void Config::setExperimentalFeatureEnabled(int feature, bool enabled) {
  YGConfigSetExperimentalFeatureEnabled(
      m_config, static_cast<YGExperimentalFeature>(feature), enabled);
}

void Config::setPointScaleFactor(float pixelsInPoint) {
  YGConfigSetPointScaleFactor(m_config, pixelsInPoint);
}

bool Config::isExperimentalFeatureEnabled(int feature) const {
  return YGConfigIsExperimentalFeatureEnabled(
      m_config, static_cast<YGExperimentalFeature>(feature));
}

void Config::setUseWebDefaults(bool useWebDefaults) {
  YGConfigSetUseWebDefaults(m_config, useWebDefaults);
}

bool Config::getUseWebDefaults() const {
  return YGConfigGetUseWebDefaults(m_config);
}
