import 'package:flutter/material.dart';

class AppColors {
  static MaterialColor primarySwatch = MaterialColor(
    primarySwatchColor.value,
    const <int, Color>{
      50: primarySwatchColor,
      100: primarySwatchColor,
      200: primarySwatchColor,
      300: primarySwatchColor,
      400: primarySwatchColor,
      500: primarySwatchColor,
      600: primarySwatchColor,
      700: primarySwatchColor,
      800: primarySwatchColor,
      900: primarySwatchColor,
    },
  );

  static const Color primarySwatchColor = Color.fromRGBO(50, 57, 73, 1);
  static const Color scaffoldBackgroundColor = Colors.white;
  static const Color redColor = Color.fromRGBO(255, 0, 0, 1);

  static const LinearGradient primaryGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [
      Color(0xFF141E30),
      Color(0xFF243B55),
    ],
  );
}
