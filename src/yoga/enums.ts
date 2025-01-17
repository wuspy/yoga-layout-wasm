export const ALIGN_AUTO = 0 as const;
export const ALIGN_FLEX_START = 1 as const;
export const ALIGN_CENTER = 2 as const;
export const ALIGN_FLEX_END = 3 as const;
export const ALIGN_STRETCH = 4 as const;
export const ALIGN_BASELINE = 5 as const;
export const ALIGN_SPACE_BETWEEN = 6 as const;
export const ALIGN_SPACE_AROUND = 7 as const;

export type Align =
    | typeof ALIGN_AUTO
    | typeof ALIGN_FLEX_START
    | typeof ALIGN_CENTER
    | typeof ALIGN_FLEX_END
    | typeof ALIGN_STRETCH
    | typeof ALIGN_BASELINE
    | typeof ALIGN_SPACE_BETWEEN
    | typeof ALIGN_SPACE_AROUND;

export const DIMENSION_WIDTH = 0 as const;
export const DIMENSION_HEIGHT = 1 as const;

export type Dimension =
    | typeof DIMENSION_WIDTH
    | typeof DIMENSION_HEIGHT;

export const DIRECTION_INHERIT = 0 as const;
export const DIRECTION_LTR = 1 as const;
export const DIRECTION_RTL = 2 as const;

export type Direction =
    | typeof DIRECTION_INHERIT
    | typeof DIRECTION_LTR
    | typeof DIRECTION_RTL;

export const DISPLAY_FLEX = 0 as const;
export const DISPLAY_NONE = 1 as const;

export type Display =
    | typeof DISPLAY_FLEX
    | typeof DISPLAY_NONE;

export const EDGE_LEFT = 0 as const;
export const EDGE_TOP = 1 as const;
export const EDGE_RIGHT = 2 as const;
export const EDGE_BOTTOM = 3 as const;
export const EDGE_START = 4 as const;
export const EDGE_END = 5 as const;
export const EDGE_HORIZONTAL = 6 as const;
export const EDGE_VERTICAL = 7 as const;
export const EDGE_ALL = 8 as const;

export type Edge =
    | typeof EDGE_LEFT
    | typeof EDGE_TOP
    | typeof EDGE_RIGHT
    | typeof EDGE_BOTTOM
    | typeof EDGE_START
    | typeof EDGE_END
    | typeof EDGE_HORIZONTAL
    | typeof EDGE_VERTICAL
    | typeof EDGE_ALL;

export const EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS = 0 as const;

export type ExperimentalFeature =
    | typeof EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS;

export const FLEX_DIRECTION_COLUMN = 0 as const;
export const FLEX_DIRECTION_COLUMN_REVERSE = 1 as const;
export const FLEX_DIRECTION_ROW = 2 as const;
export const FLEX_DIRECTION_ROW_REVERSE = 3 as const;

export type FlexDirection =
    | typeof FLEX_DIRECTION_COLUMN
    | typeof FLEX_DIRECTION_COLUMN_REVERSE
    | typeof FLEX_DIRECTION_ROW
    | typeof FLEX_DIRECTION_ROW_REVERSE;

export const JUSTIFY_FLEX_START = 0 as const;
export const JUSTIFY_CENTER = 1 as const;
export const JUSTIFY_FLEX_END = 2 as const;
export const JUSTIFY_SPACE_BETWEEN = 3 as const;
export const JUSTIFY_SPACE_AROUND = 4 as const;
export const JUSTIFY_SPACE_EVENLY = 5 as const;

export type JustifyContent =
    | typeof JUSTIFY_FLEX_START
    | typeof JUSTIFY_CENTER
    | typeof JUSTIFY_FLEX_END
    | typeof JUSTIFY_SPACE_BETWEEN
    | typeof JUSTIFY_SPACE_AROUND
    | typeof JUSTIFY_SPACE_EVENLY;

export const LOG_LEVEL_ERROR = 0 as const;
export const LOG_LEVEL_WARN = 1 as const;
export const LOG_LEVEL_INFO = 2 as const;
export const LOG_LEVEL_DEBUG = 3 as const;
export const LOG_LEVEL_VERBOSE = 4 as const;
export const LOG_LEVEL_FATAL = 5 as const;

export type LogLevel =
    | typeof LOG_LEVEL_ERROR
    | typeof LOG_LEVEL_WARN
    | typeof LOG_LEVEL_INFO
    | typeof LOG_LEVEL_DEBUG
    | typeof LOG_LEVEL_VERBOSE
    | typeof LOG_LEVEL_FATAL;

export const MEASURE_MODE_UNDEFINED = 0 as const;
export const MEASURE_MODE_EXACTLY = 1 as const;
export const MEASURE_MODE_AT_MOST = 2 as const;

export type MeasureMode =
    | typeof MEASURE_MODE_UNDEFINED
    | typeof MEASURE_MODE_EXACTLY
    | typeof MEASURE_MODE_AT_MOST;

export const NODE_TYPE_DEFAULT = 0 as const;
export const NODE_TYPE_TEXT = 1 as const;

export type NodeType =
    | typeof NODE_TYPE_DEFAULT
    | typeof NODE_TYPE_TEXT;

export const OVERFLOW_VISIBLE = 0 as const;
export const OVERFLOW_HIDDEN = 1 as const;
export const OVERFLOW_SCROLL = 2 as const;

export type Overflow =
    | typeof OVERFLOW_VISIBLE
    | typeof OVERFLOW_HIDDEN
    | typeof OVERFLOW_SCROLL;

export const POSITION_TYPE_STATIC = 0 as const;
export const POSITION_TYPE_RELATIVE = 1 as const;
export const POSITION_TYPE_ABSOLUTE = 2 as const;

export type PositionType =
    | typeof POSITION_TYPE_STATIC
    | typeof POSITION_TYPE_RELATIVE
    | typeof POSITION_TYPE_ABSOLUTE;

export const PRINT_OPTIONS_LAYOUT = 1 as const;
export const PRINT_OPTIONS_STYLE = 2 as const;
export const PRINT_OPTIONS_CHILDREN = 4 as const;

export type PrintOptions =
    | typeof PRINT_OPTIONS_LAYOUT
    | typeof PRINT_OPTIONS_STYLE
    | typeof PRINT_OPTIONS_CHILDREN;

export const UNIT_UNDEFINED = 0 as const;
export const UNIT_POINT = 1 as const;
export const UNIT_PERCENT = 2 as const;
export const UNIT_AUTO = 3 as const;

export type Unit =
    | typeof UNIT_UNDEFINED
    | typeof UNIT_POINT
    | typeof UNIT_PERCENT
    | typeof UNIT_AUTO;

export const WRAP_NO_WRAP = 0 as const;
export const WRAP_WRAP = 1 as const;
export const WRAP_WRAP_REVERSE = 2 as const;

export type FlexWrap =
    | typeof WRAP_NO_WRAP
    | typeof WRAP_WRAP
    | typeof WRAP_WRAP_REVERSE;