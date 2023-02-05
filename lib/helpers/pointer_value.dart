import 'dart:developer';

import 'package:flutter/material.dart';

class PointerValue {
  ValueNotifier<Map<String, Color>> pointerColors =
      ValueNotifier<Map<String, Color>>(
    {
      "color": Colors.orange,
      "trailColor": Colors.amber.withOpacity(0.4),
    },
  );
  void changePointerColors({required Color trailColor, required Color color}) {
    log("Called");
    pointerColors.value = {
      "color": color,
      "trailColor": trailColor,
    };
  }
}
