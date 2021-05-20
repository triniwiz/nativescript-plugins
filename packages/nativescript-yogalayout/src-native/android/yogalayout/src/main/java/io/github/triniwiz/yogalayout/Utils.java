package io.github.triniwiz.yogalayout;

import android.content.Context;
import android.util.Pair;
import android.view.View;

import com.facebook.soloader.SoLoader;
import com.facebook.yoga.YogaAlign;
import com.facebook.yoga.YogaDirection;
import com.facebook.yoga.YogaEdge;
import com.facebook.yoga.YogaFlexDirection;
import com.facebook.yoga.YogaJustify;
import com.facebook.yoga.YogaNode;
import com.facebook.yoga.YogaOverflow;
import com.facebook.yoga.YogaPositionType;
import com.facebook.yoga.YogaValue;
import com.facebook.yoga.YogaWrap;
import com.facebook.yoga.android.YogaLayout;

import org.json.JSONObject;

public class Utils {

  public static YogaLayout createLayout(Context context, boolean init) {
    if (init) {
      SoLoader.init(context, false);
    }
    YogaLayout layout = new com.facebook.yoga.android.YogaLayout(context);
    layout.setClipToPadding(false);
    layout.setClipChildren(false);
    return layout;
  }

  public static void batch(String json, YogaLayout layout) {
    try {
      YogaNode node = layout.getYogaNode();
      JSONObject object = new JSONObject(json);
      String width = object.optString("width", "auto");

      if (width.equals("auto")) {
        node.setWidthAuto();
      } else if (width.contains("%")) {
        node.setWidthPercent(YogaValue.parse(width).value);
      } else if (!width.isEmpty()) {
        node.setWidth(YogaValue.parse(width).value);
      }

      String height = object.optString("height", "auto");

      if (width.equals("auto")) {
        node.setHeightAuto();
      } else if (height.contains("%")) {
        node.setHeightPercent(YogaValue.parse(height).value);
      } else if (!height.isEmpty()) {
        node.setHeight(YogaValue.parse(height).value);
      }

      String maxWidth = object.optString("maxWidth");

      if (maxWidth.contains("%")) {
        node.setMaxWidthPercent(YogaValue.parse(maxWidth).value);
      } else if (!maxWidth.isEmpty()) {
        node.setMaxWidth(YogaValue.parse(maxWidth).value);
      }


      String maxHeight = object.optString("maxHeight");
      if (maxHeight.contains("%")) {
        node.setMaxHeightPercent(YogaValue.parse(maxHeight).value);
      } else if (!maxHeight.isEmpty()) {
        node.setMaxHeight(YogaValue.parse(maxHeight).value);
      }


      String alignItems = object.optString("alignItems", "stretch");
      node.setAlignItems(parseStringAlignItems(alignItems));


      String overflow = object.optString("overflow", "visible");
      node.setOverflow(parseStringOverflow(overflow));

      String position = object.optString("position", "relative");
      node.setPositionType(parseStringPosition(position));

      String left = object.optString("left");
      if (!left.isEmpty()) {
        Pair<YogaEdge, Float> leftPos = parseStringEdgeValue(left, "left");
        if (leftPos != null) {
          node.setPosition(leftPos.first, leftPos.second);
        }
      }

      String top = object.optString("top");
      if (!top.isEmpty()) {
        Pair<YogaEdge, Float> topPos = parseStringEdgeValue(top, "top");
        if (topPos != null) {
          node.setPosition(topPos.first, topPos.second);
        }
      }

      String right = object.optString("right");
      if (!right.isEmpty()) {
        Pair<YogaEdge, Float> rightPos = parseStringEdgeValue(right, "right");
        if (rightPos != null) {
          node.setPosition(rightPos.first, rightPos.second);
        }
      }

      String bottom = object.optString("bottom");
      if (!bottom.isEmpty()) {
        Pair<YogaEdge, Float> bottomPos = parseStringEdgeValue(bottom, "bottom");
        if (bottomPos != null) {
          node.setPosition(bottomPos.first, bottomPos.second);
        }
      }

      String paddingLeft = object.optString("paddingLeft");
      if (!paddingLeft.isEmpty()) {
        Pair<YogaEdge, Float> paddingLeftPos = parseStringEdgeValue(paddingLeft, "left");
        if (paddingLeftPos != null) {
          node.setPadding(paddingLeftPos.first, paddingLeftPos.second);
        }
      }


      String paddingTop = object.optString("paddingTop");
      if (!paddingTop.isEmpty()) {
        Pair<YogaEdge, Float> paddingTopPos = parseStringEdgeValue(paddingTop, "top");
        if (paddingTopPos != null) {
          node.setPadding(paddingTopPos.first, paddingTopPos.second);
        }
      }


      String paddingRight = object.optString("paddingRight");
      if (!paddingRight.isEmpty()) {
        Pair<YogaEdge, Float> paddingRightPos = parseStringEdgeValue(paddingRight, "right");
        if (paddingRightPos != null) {
          node.setPadding(paddingRightPos.first, paddingRightPos.second);
        }
      }


      String paddingBottom = object.optString("paddingBottom");
      if (!paddingBottom.isEmpty()) {
        Pair<YogaEdge, Float> paddingBottomPos = parseStringEdgeValue(paddingBottom, "bottom");
        if (paddingBottomPos != null) {
          node.setPadding(paddingBottomPos.first, paddingBottomPos.second);
        }
      }


      String marginLeft = object.optString("marginLeft");
      if (!marginLeft.isEmpty()) {
        Pair<YogaEdge, Float> marginLeftPos = parseStringEdgeValue(marginLeft, "left");
        if (marginLeftPos != null) {
          node.setMargin(marginLeftPos.first, marginLeftPos.second);
        }
      }


      String marginTop = object.optString("marginTop");
      if (!marginTop.isEmpty()) {
        Pair<YogaEdge, Float> marginTopPos = parseStringEdgeValue(marginTop, "top");
        if (marginTopPos != null) {
          node.setMargin(marginTopPos.first, marginTopPos.second);
        }
      }


      String marginRight = object.optString("marginRight");
      if (!marginRight.isEmpty()) {
        Pair<YogaEdge, Float> marginRightPos = parseStringEdgeValue(marginRight, "right");
        if (marginRightPos != null) {
          node.setMargin(marginRightPos.first, marginRightPos.second);
        }
      }


      String marginBottom = object.optString("marginBottom");
      if (!marginBottom.isEmpty()) {
        Pair<YogaEdge, Float> marginBottomPos = parseStringEdgeValue(marginBottom, "bottom");
        if (marginBottomPos != null) {
          node.setMargin(marginBottomPos.first, marginBottomPos.second);
        }
      }

      String justifyContent = object.optString("justifyContent", "flex-start");
      node.setJustifyContent(parseStringJustify(justifyContent));

      String flexWrap = object.optString("flexWrap", "no-wrap");
      node.setWrap(parseStringWrap(flexWrap));

      double flex = object.optDouble("flex", 1d);
      node.setFlex((float) flex);

      String flexDirection = object.optString("flexDirection", "row");
      node.setFlexDirection(parseStringFlexDirection(flexDirection));


      String flexBasis = object.optString("flexBasis", "auto");

      if (flexBasis.equals("auto")) {
        node.setFlexBasisAuto();
      } else if (flexBasis.contains("%")) {
        node.setFlexBasisPercent(YogaValue.parse(flexBasis).value);
      } else if (!flexBasis.isEmpty()) {
        node.setFlexBasis(YogaValue.parse(flexBasis).value);
      }

      String alignSelf = object.optString("alignSelf", "auto");
      node.setAlignSelf(parseStringAlignSelf(alignSelf));

      double flexGrow = object.optDouble("flexGrow", 0);
      if (node.getFlexGrow() != (float) flexGrow) {
        node.setFlexGrow((float) flexGrow);
      }

      double flexShrink = object.optDouble("flexShrink", 1);
      if (node.getFlexShrink() != (float) flexShrink) {
        node.setFlexShrink((float) flexShrink);
      }

      String alignContent = object.optString("alignContent");
      if (!alignContent.isEmpty()) {
        node.setAlignContent(parseStringAlignContent(alignContent));
      }

      if (object.has("aspectRatio")) {
        double aspectRatio = object.getDouble("aspectRatio");
        node.setAspectRatio((float) aspectRatio);
      }

      if (object.has("direction")) {
        YogaDirection direction = parseStringDirection(object.optString("direction", "inherit"));
        node.setDirection(direction);
      }

    } catch (Exception ignored) {

    }
  }

  public static void batchChild(String json, YogaLayout layout, View view) {
    try {
      YogaNode node = layout.getYogaNodeForView(view);
      if (node != null) {
        JSONObject object = new JSONObject(json);

        String position = object.optString("position", "relative");
        node.setPositionType(parseStringPosition(position));

        double flex = object.optDouble("flex", 1d);
        node.setFlex((float) flex);

        String alignSelf = object.optString("alignSelf", "auto");
        node.setAlignSelf(parseStringAlignSelf(alignSelf));

        double flexGrow = object.optDouble("flexGrow", 0);
        if (node.getFlexGrow() != (float) flexGrow) {
          node.setFlexGrow((float) flexGrow);
        }

        double flexShrink = object.optDouble("flexShrink", 1);
        if (node.getFlexShrink() != (float) flexShrink) {
          node.setFlexShrink((float) flexShrink);
        }

        if (object.has("direction")) {
          YogaDirection direction = parseStringDirection(object.optString("direction", "inherit"));
          node.setDirection(direction);
        }
      }

    } catch (Exception ignored) {

    }
  }

  public static String getLayoutDirection(YogaNode node) {
    if (node.getLayoutDirection() == YogaDirection.LTR) {
      return "ltr";
    } else if (node.getLayoutDirection() == YogaDirection.RTL) {
      return "rtl";
    } else {
      return "inherit";
    }
  }

  public static String getStyleDirection(YogaNode node) {
    if (node.getStyleDirection() == YogaDirection.LTR) {
      return "ltr";
    } else if (node.getStyleDirection() == YogaDirection.RTL) {
      return "rtl";
    } else {
      return "inherit";
    }
  }


  static YogaDirection parseStringDirection(String direction) {
    switch (direction) {
      case "ltr":
        return YogaDirection.LTR;
      case "rtl":
        return YogaDirection.RTL;
      default:
        return YogaDirection.INHERIT;
    }
  }


  static YogaAlign parseStringAlignSelf(String alignSelf) {
    switch (alignSelf) {
      case "center":
        return YogaAlign.CENTER;
      case "flex-end":
        return YogaAlign.FLEX_END;
      case "flex-start":
        return YogaAlign.FLEX_START;
      case "baseline":
        return YogaAlign.BASELINE;
      case "stretch":
        return YogaAlign.STRETCH;
      default:
        return YogaAlign.AUTO;
    }
  }

  static YogaAlign parseStringAlignContent(String alignContent) {
    switch (alignContent) {
      case "center":
        return YogaAlign.CENTER;
      case "flex-end":
        return YogaAlign.FLEX_END;
      case "flex-start":
        return YogaAlign.FLEX_START;
      case "space-between":
        return YogaAlign.SPACE_BETWEEN;
      case "space-around":
        return YogaAlign.SPACE_AROUND;
      case "stretch":
        return YogaAlign.STRETCH;
      default:
        return YogaAlign.AUTO;
    }
  }

  static YogaAlign parseStringAlignItems(String alignItems) {
    switch (alignItems) {
      case "center":
        return YogaAlign.CENTER;
      case "flex-end":
        return YogaAlign.FLEX_END;
      case "flex-start":
        return YogaAlign.FLEX_START;
      case "baseline":
        return YogaAlign.BASELINE;
      default:
        return YogaAlign.STRETCH;
    }
  }

  static YogaOverflow parseStringOverflow(String overflow) {
    switch (overflow) {
      case "hidden":
        return YogaOverflow.HIDDEN;
      case "scroll":
        return YogaOverflow.SCROLL;
      default:
        return YogaOverflow.VISIBLE;
    }
  }

  static YogaPositionType parseStringPosition(String position) {
    if ("absolute".equals(position)) {
      return YogaPositionType.ABSOLUTE;
    }
    return YogaPositionType.RELATIVE;
  }

  static YogaEdge parseStringEdge(String value) {
    switch (value) {
      case "left":
        return YogaEdge.LEFT;
      case "top":
        return YogaEdge.TOP;
      case "right":
        return YogaEdge.RIGHT;
      case "bottom":
        return YogaEdge.BOTTOM;
      case "start":
        return YogaEdge.START;
      case "end":
        return YogaEdge.END;
      case "vertical":
        return YogaEdge.VERTICAL;
      case "horizontal":
        return YogaEdge.HORIZONTAL;
      case "all":
        return YogaEdge.ALL;
      default:
        return null;
    }
  }

  static Pair<YogaEdge, Float> parseStringEdgeValue(String value, String position) {
    YogaEdge edge = parseStringEdge(position);
    if (edge == null) {
      return null;
    }
    float result;
    if (value.contains("%")) {
      result = YogaValue.parse(value).value;
    } else if (!value.isEmpty()) {
      result = YogaValue.parse(value).value;
    } else {
      return null;
    }
    return new Pair<>(edge, result);
  }

  static YogaJustify parseStringJustify(String value) {
    switch (value) {
      case "flex-end":
        return YogaJustify.FLEX_END;
      case "center":
        return YogaJustify.CENTER;
      case "space-around":
        return YogaJustify.SPACE_AROUND;
      case "space-between":
        return YogaJustify.SPACE_BETWEEN;
      case "space-evenly":
        return YogaJustify.SPACE_EVENLY;
      default:
        return YogaJustify.FLEX_START;
    }
  }

  static YogaFlexDirection parseStringFlexDirection(String value) {
    switch (value) {
      case "row-reverse":
        return YogaFlexDirection.ROW_REVERSE;
      case "column":
        return YogaFlexDirection.COLUMN;
      case "column-reverse":
        return YogaFlexDirection.COLUMN_REVERSE;
      default:
        return YogaFlexDirection.ROW;
    }
  }

  static YogaWrap parseStringWrap(String value) {
    switch (value) {
      case "wrap":
        return YogaWrap.WRAP;
      case "wrap-reverse":
        return YogaWrap.WRAP_REVERSE;
      default:
        return YogaWrap.NO_WRAP;
    }
  }

}

