import 'package:flutter/material.dart';

class WaveClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    Path path = Path();
    path = Path();
    path.lineTo(0, size.height * 0.91);
    path.cubicTo(0, size.height * 0.91, size.width * 0.01, size.height * 0.93,
        size.width * 0.01, size.height * 0.93);
    path.cubicTo(size.width * 0.01, size.height * 0.96, size.width * 0.03,
        size.height, size.width * 0.04, size.height * 0.87);
    path.cubicTo(size.width * 0.06, size.height * 0.74, size.width * 0.07,
        size.height * 0.43, size.width * 0.08, size.height * 0.37);
    path.cubicTo(size.width * 0.1, size.height * 0.3, size.width * 0.11,
        size.height * 0.48, size.width * 0.12, size.height / 2);
    path.cubicTo(size.width * 0.14, size.height * 0.52, size.width * 0.15,
        size.height * 0.39, size.width * 0.17, size.height * 0.35);
    path.cubicTo(size.width * 0.18, size.height * 0.3, size.width * 0.19,
        size.height * 0.35, size.width / 5, size.height * 0.39);
    path.cubicTo(size.width * 0.22, size.height * 0.43, size.width * 0.24,
        size.height * 0.48, size.width / 4, size.height * 0.57);
    path.cubicTo(size.width * 0.26, size.height * 0.65, size.width * 0.28,
        size.height * 0.78, size.width * 0.29, size.height * 0.72);
    path.cubicTo(size.width * 0.31, size.height * 0.65, size.width * 0.32,
        size.height * 0.39, size.width / 3, size.height / 3);
    path.cubicTo(size.width * 0.35, size.height * 0.26, size.width * 0.36,
        size.height * 0.39, size.width * 0.38, size.height * 0.46);
    path.cubicTo(size.width * 0.39, size.height * 0.52, size.width * 0.4,
        size.height * 0.52, size.width * 0.42, size.height / 2);
    path.cubicTo(size.width * 0.43, size.height * 0.48, size.width * 0.44,
        size.height * 0.43, size.width * 0.46, size.height * 0.39);
    path.cubicTo(size.width * 0.47, size.height * 0.35, size.width * 0.49,
        size.height * 0.3, size.width / 2, size.height * 0.3);
    path.cubicTo(size.width * 0.51, size.height * 0.3, size.width * 0.53,
        size.height * 0.35, size.width * 0.54, size.height / 2);
    path.cubicTo(size.width * 0.56, size.height * 0.65, size.width * 0.57,
        size.height * 0.91, size.width * 0.58, size.height * 1.02);
    path.cubicTo(size.width * 0.6, size.height * 1.13, size.width * 0.61,
        size.height * 1.09, size.width * 0.63, size.height * 1.04);
    path.cubicTo(size.width * 0.64, size.height, size.width * 0.65,
        size.height * 0.96, size.width * 0.67, size.height * 0.98);
    path.cubicTo(size.width * 0.68, size.height, size.width * 0.69,
        size.height * 1.09, size.width * 0.71, size.height * 0.96);
    path.cubicTo(size.width * 0.72, size.height * 0.83, size.width * 0.74,
        size.height * 0.48, size.width * 0.75, size.height * 0.37);
    path.cubicTo(size.width * 0.76, size.height * 0.26, size.width * 0.78,
        size.height * 0.39, size.width * 0.79, size.height * 0.52);
    path.cubicTo(size.width * 0.81, size.height * 0.65, size.width * 0.82,
        size.height * 0.78, size.width * 0.83, size.height * 0.74);
    path.cubicTo(size.width * 0.85, size.height * 0.69, size.width * 0.86,
        size.height * 0.48, size.width * 0.87, size.height * 0.48);
    path.cubicTo(size.width * 0.89, size.height * 0.48, size.width * 0.9,
        size.height * 0.69, size.width * 0.92, size.height * 0.67);
    path.cubicTo(size.width * 0.93, size.height * 0.65, size.width * 0.94,
        size.height * 0.39, size.width * 0.96, size.height * 0.35);
    path.cubicTo(size.width * 0.97, size.height * 0.3, size.width,
        size.height * 0.48, size.width, size.height * 0.57);
    path.cubicTo(size.width, size.height * 0.57, size.width, size.height * 0.65,
        size.width, size.height * 0.65);
    path.cubicTo(size.width, size.height * 0.65, size.width, size.height * 1.3,
        size.width, size.height * 1.3);
    path.cubicTo(size.width, size.height * 1.3, size.width, size.height * 1.3,
        size.width, size.height * 1.3);
    path.cubicTo(size.width, size.height * 1.3, size.width * 0.97,
        size.height * 1.3, size.width * 0.96, size.height * 1.3);
    path.cubicTo(size.width * 0.94, size.height * 1.3, size.width * 0.93,
        size.height * 1.3, size.width * 0.92, size.height * 1.3);
    path.cubicTo(size.width * 0.9, size.height * 1.3, size.width * 0.89,
        size.height * 1.3, size.width * 0.87, size.height * 1.3);
    path.cubicTo(size.width * 0.86, size.height * 1.3, size.width * 0.85,
        size.height * 1.3, size.width * 0.83, size.height * 1.3);
    path.cubicTo(size.width * 0.82, size.height * 1.3, size.width * 0.81,
        size.height * 1.3, size.width * 0.79, size.height * 1.3);
    path.cubicTo(size.width * 0.78, size.height * 1.3, size.width * 0.76,
        size.height * 1.3, size.width * 0.75, size.height * 1.3);
    path.cubicTo(size.width * 0.74, size.height * 1.3, size.width * 0.72,
        size.height * 1.3, size.width * 0.71, size.height * 1.3);
    path.cubicTo(size.width * 0.69, size.height * 1.3, size.width * 0.68,
        size.height * 1.3, size.width * 0.67, size.height * 1.3);
    path.cubicTo(size.width * 0.65, size.height * 1.3, size.width * 0.64,
        size.height * 1.3, size.width * 0.63, size.height * 1.3);
    path.cubicTo(size.width * 0.61, size.height * 1.3, size.width * 0.6,
        size.height * 1.3, size.width * 0.58, size.height * 1.3);
    path.cubicTo(size.width * 0.57, size.height * 1.3, size.width * 0.56,
        size.height * 1.3, size.width * 0.54, size.height * 1.3);
    path.cubicTo(size.width * 0.53, size.height * 1.3, size.width * 0.51,
        size.height * 1.3, size.width / 2, size.height * 1.3);
    path.cubicTo(size.width * 0.49, size.height * 1.3, size.width * 0.47,
        size.height * 1.3, size.width * 0.46, size.height * 1.3);
    path.cubicTo(size.width * 0.44, size.height * 1.3, size.width * 0.43,
        size.height * 1.3, size.width * 0.42, size.height * 1.3);
    path.cubicTo(size.width * 0.4, size.height * 1.3, size.width * 0.39,
        size.height * 1.3, size.width * 0.38, size.height * 1.3);
    path.cubicTo(size.width * 0.36, size.height * 1.3, size.width * 0.35,
        size.height * 1.3, size.width / 3, size.height * 1.3);
    path.cubicTo(size.width * 0.32, size.height * 1.3, size.width * 0.31,
        size.height * 1.3, size.width * 0.29, size.height * 1.3);
    path.cubicTo(size.width * 0.28, size.height * 1.3, size.width * 0.26,
        size.height * 1.3, size.width / 4, size.height * 1.3);
    path.cubicTo(size.width * 0.24, size.height * 1.3, size.width * 0.22,
        size.height * 1.3, size.width / 5, size.height * 1.3);
    path.cubicTo(size.width * 0.19, size.height * 1.3, size.width * 0.18,
        size.height * 1.3, size.width * 0.17, size.height * 1.3);
    path.cubicTo(size.width * 0.15, size.height * 1.3, size.width * 0.14,
        size.height * 1.3, size.width * 0.12, size.height * 1.3);
    path.cubicTo(size.width * 0.11, size.height * 1.3, size.width * 0.1,
        size.height * 1.3, size.width * 0.08, size.height * 1.3);
    path.cubicTo(size.width * 0.07, size.height * 1.3, size.width * 0.06,
        size.height * 1.3, size.width * 0.04, size.height * 1.3);
    path.cubicTo(size.width * 0.03, size.height * 1.3, size.width * 0.01,
        size.height * 1.3, size.width * 0.01, size.height * 1.3);
    path.cubicTo(size.width * 0.01, size.height * 1.3, 0, size.height * 1.3, 0,
        size.height * 1.3);
    path.cubicTo(
        0, size.height * 1.3, 0, size.height * 0.91, 0, size.height * 0.91);
    return path;
  }

  @override
  bool shouldReclip(CustomClipper<Path> oldClipper) => false;
}
