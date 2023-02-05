// import 'package:flutter/animation.dart';
// import 'package:flutter/cupertino.dart';
// import 'package:flutter/material.dart';

// class FancyCursor extends StatefulWidget {
//   const FancyCursor({super.key, required this.child});
//   final Widget child;
//   @override
//   State<FancyCursor> createState() => _FancyCursorState();
// }

// class _FancyCursorState extends State<FancyCursor> {
//   Offset pointer = Offset.zero;
//   @override
//   Widget build(BuildContext context) {
//     return MouseRegion(
//       cursor: SystemMouseCursors.none,
//       onHover: (eve) {
//         setState(() {
//           pointer = eve.position;
//         });
//       },
//       opaque: false,
//       child: Stack(
//         children: [
//           widget.child,
//           AnimatedPositioned(
//             duration: const Duration(milliseconds: 10),
//             left: pointer.dx - 10,
//             top: pointer.dy - 10,
//             child: Container(
//               height: 20,
//               width: 20,
//               decoration: BoxDecoration(
//                 color: Colors.amber,
//                 borderRadius: const BorderRadius.all(Radius.circular(100)),
//                 border: Border.all(
//                     width: 4, color: Colors.red, style: BorderStyle.solid),
//               ),
//             ),
//           ),
//         ],
//       ),
//     );
//   }
// }

library fancy_cursor;

import 'dart:developer';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

// ignore: must_be_immutable
class FancyCursor extends StatefulWidget {
  /// The child in which fancy cursor takes effect.
  /// All the other parameters are optional.
  ///
  /// **`Required`**
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   child: HomePage(),
  /// )
  /// ```
  final Widget child;

  /// The color of the cursor.
  ///
  /// *Optional*
  ///
  /// Defaults to `Colors.black`
  ///
  /// **Do not pass this with [customCursor]**
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   color: Colors.pink,
  ///   child: HomePage(),
  /// )
  /// ```
  Color? color;

  /// The color of the trail.
  ///
  /// *Optional*
  ///
  /// Defaults to `color.withOpacity(0.3)`
  ///
  /// cursor color with 30% opacity
  ///
  /// **Do not pass this with [trailCustomCursor]**
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   trailColor: Colors.pink.withOpacity(0.5),
  ///   child: HomePage(),
  /// )
  /// ```
  Color? trailColor;

  /// The size of the cursor.
  ///
  /// *Optional*
  ///
  /// Defaults to `8`
  ///
  /// **Do not pass this with [customCursor]**
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   size: 16,
  ///   child: HomePage(),
  /// )
  /// ```
  double? size;

  /// The size of the cursor.
  ///
  /// *Optional*
  ///
  /// Defaults to `size * 1.5`
  ///
  /// 1.5 times the cursor [size]
  ///
  /// **Do not pass this with [trailCustomCursor]**
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   trailSize: 32,
  ///   child: HomePage(),
  /// )
  /// ```
  double? trailSize;

  /// Delay between actual cursor and fancy cursor
  ///
  /// *Optional*
  ///
  /// Defaults to `Duration()` - 0ms
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   delay: Duration(milliseconds: 200),
  ///   child: HomePage(),
  /// )
  /// ```
  Duration? delay;

  /// Delay between actual cursor and cursor trail
  ///
  /// *Optional*
  ///
  /// Defaults to `this.delay + Duration(milliseconds: 300)`
  ///
  /// 300ms more than the cursor [delay]
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   delay: Duration(milliseconds: 200),
  ///   child: HomePage(),
  /// )
  /// ```
  Duration? trailDelay;

  /// Animation curve that the fancy cursor
  /// follows to reach actual cursor position
  ///
  /// *Optional*
  ///
  /// Defaults to `Curves.elasticOut`
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   curve: Curves.easeInOut,
  ///   delay: Duration(seconds: 1),
  ///   child: HomePage(),
  /// )
  /// ```
  Curve? curve;

  /// Animation curve that the trail follows to reach actual cursor position
  ///
  /// *Optional*
  ///
  /// Defaults to `Curves.elasticOut`
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   trailCurve: Curves.easeInOut,
  ///   trailDelay: Duration(seconds: 1),
  ///   child: HomePage(),
  /// )
  /// ```
  Curve? trailCurve;

  /// Custom cursor widget to replace the default circle
  ///
  /// *Optional*
  ///
  /// **Do not pass this with [color] and [size]**
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   customCursor: Image.asset('assets/cursor.gif'),
  ///   child: HomePage(),
  /// )
  /// ```
  Widget? customCursor;

  /// Custom cursor widget to replace the default trail
  ///
  /// *Optional*
  ///
  /// Defaults to trail version of [customCursor],
  /// if passed with [customColor]
  ///
  ///
  /// **Do not pass this with [trailColor] and [trailSize]**
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   customCursor: Image.asset('assets/cursorTrail.gif'),
  ///   child: HomePage(),
  /// )
  /// ```
  Widget? trailCustomCursor;

  /// Wheather trail is enabled.
  ///
  /// *Optional*
  ///
  /// Defaults to `true`.
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   trail: false,
  ///   child: HomePage(),
  /// )
  /// ```
  bool? trail;

  /// Opacity of the custom trail.
  /// Works only with [customCursor].
  /// Irrelavent with [trailCustomCursor].
  ///
  /// *Optional*
  ///
  /// Defaults to `0.3`.
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   trailOpacity: 0.6,
  ///   child: HomePage(),
  /// )
  /// ```
  double? trailOpacity;

  /// Native cursor on top of the fancy cursor
  ///
  /// *Optional*
  ///
  /// Defaults to `SystemMouseCursors.none`.
  ///
  /// *Example*
  /// ```dart
  /// FancyCursor(
  ///   nativeCursor: SystemMouseCursors.cell,
  ///   child: HomePage(),
  /// )
  /// ```
  MouseCursor? nativeCursor;

  FancyCursor({
    Key? key,
    required this.child,
    this.trail = true,
    this.color,
    this.size,
    this.delay,
    this.curve,
    this.customCursor,
    this.trailColor,
    this.trailSize,
    this.trailDelay,
    this.trailCurve,
    this.trailOpacity,
    this.trailCustomCursor,
    this.nativeCursor,
  }) : super(key: key) {
    delay ??= const Duration();
    curve ??= Curves.elasticOut;

    trailDelay ??=
        delay ?? const Duration() + const Duration(milliseconds: 300);
    trailCurve ??= curve;

    if (customCursor != null) {
      assert(color == null && size == null);
      trailCustomCursor ??= Opacity(
        opacity: trailOpacity ?? 0.3,
        child: Transform.scale(
          scale: trailSize ?? 1.2,
          child: customCursor,
        ),
      );
    } else {
      color ??= Colors.black;
      size ??= 8;

      if (trailCustomCursor != null) {
        assert(trailColor == null && trailSize == null);
      } else {
        trailColor ??= color ?? Colors.black.withOpacity(0.3);
        trailSize ??= size ?? 8 * 1.5;
      }
    }
  }

  @override
  _FancyCursorState createState() => _FancyCursorState();
}

class _FancyCursorState extends State<FancyCursor> {
  Offset position = Offset.zero;

  @override
  Widget build(BuildContext context) {
    return Material(
      child: MouseRegion(
        cursor: widget.nativeCursor ?? SystemMouseCursors.none,
        onHover: (phe) {
          setState(() => position = phe.position);
        },
        child: Stack(
          children: [
            widget.child,
            if (widget.trail == true)
              AnimatedPositioned(
                duration: widget.trailDelay ??
                    const Duration() + const Duration(milliseconds: 300),
                curve: widget.trailCurve ?? Curves.elasticOut,
                top: position.dy - ((widget.trailSize ?? 0) / 2),
                left: position.dx - ((widget.trailSize ?? 0) / 2),
                child: IgnorePointer(
                  child: widget.trailCustomCursor ??
                      Container(
                        decoration: BoxDecoration(
                          color: widget.trailColor,
                          borderRadius: BorderRadius.circular(
                              (widget.trailSize ?? 8) / 2),
                        ),
                        height: widget.trailSize,
                        width: widget.trailSize,
                      ),
                ),
              ),
            AnimatedPositioned(
              duration: widget.delay ?? const Duration(),
              curve: widget.curve ?? Curves.elasticOut,
              top: position.dy - (widget.size ?? 0) / 2,
              left: position.dx - (widget.size ?? 0) / 2,
              child: IgnorePointer(
                child: widget.customCursor ??
                    Container(
                      decoration: BoxDecoration(
                        color: widget.color,
                        borderRadius:
                            BorderRadius.circular((widget.size ?? 8 * 1.5) / 2),
                      ),
                      height: widget.size,
                      width: widget.size,
                    ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
