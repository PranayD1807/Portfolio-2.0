// ignore_for_file: non_constant_identifier_names

import 'package:flutter/material.dart';

import 'package:portfolio/constants/rive_assets.dart';
import 'package:portfolio/screens/about_me_details_screen.dart';
import 'package:rive/rive.dart';

class TopShortInfoWidget extends StatefulWidget {
  const TopShortInfoWidget({super.key});

  @override
  State<TopShortInfoWidget> createState() => _TopShortInfoWidgetState();
}

class _TopShortInfoWidgetState extends State<TopShortInfoWidget> {
  late RiveAnimationController controller;

  @override
  void initState() {
    super.initState();
    controller = OneShotAnimation(
      'bounce',
      autoplay: true,
    );
  }

  @override
  Widget build(BuildContext context) {
    Size deviceSize = MediaQuery.of(context).size;
    bool isMobileMode = deviceSize.width <= 750;
    return SizedBox(
      // height: deviceSize.height * 0.8,
      width: deviceSize.width,
      child: isMobileMode
          ? Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                _TopWidget(isMobileMode, deviceSize),
                _AboutMe(
                  deviceSize: deviceSize,
                  isMobileMode: isMobileMode,
                ),
              ],
            )
          : _TopWidget(
              isMobileMode,
              deviceSize,
            ),
    );
  }

  Stack _TopWidget(bool isMobileMode, Size deviceSize) {
    return Stack(
      alignment: Alignment.centerLeft,
      children: [
        Container(
          constraints: BoxConstraints(
            maxHeight: !isMobileMode
                ? deviceSize.height * 0.8
                : deviceSize.height * 0.5,
          ),
          width: !isMobileMode ? deviceSize.width * 0.6 : deviceSize.width,
          child: RiveAnimation.asset(
            RiveAssets.springRobot,
            fit: BoxFit.contain,
            controllers: [controller],
            animations: const ['idle'],
            stateMachines: const ["Motion"],
          ),
        ),
        if (!isMobileMode)
          _AboutMe(
            deviceSize: deviceSize,
            isMobileMode: isMobileMode,
          ),
      ],
    );
  }
}

class _AboutMe extends StatelessWidget {
  const _AboutMe({
    Key? key,
    required this.deviceSize,
    required this.isMobileMode,
  }) : super(key: key);
  final bool isMobileMode;
  final Size deviceSize;

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: isMobileMode ? Alignment.center : Alignment.centerRight,
      child: Container(
        padding: isMobileMode
            ? const EdgeInsets.symmetric(horizontal: 15)
            : EdgeInsets.only(right: deviceSize.width * 0.05),
        width: isMobileMode ? deviceSize.width : deviceSize.width * 0.4,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            if (isMobileMode) const SizedBox(height: 20),
            ConstrainedBox(
              constraints: const BoxConstraints(),
              child: FittedBox(
                child: Text(
                  "Hi! I am",
                  textScaleFactor: isMobileMode ? 1.5 : 3,
                  style: const TextStyle(
                    fontWeight: FontWeight.w300,
                    color: Colors.blueGrey,
                  ),
                ),
              ),
            ),
            ConstrainedBox(
              constraints: const BoxConstraints(),
              child: FittedBox(
                child: Text(
                  "PRANAY \nDHONGADE",
                  textScaleFactor: isMobileMode ? 2 : 5,
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
            ),
            Text(
              "I am a FullStack Developer (MERN & FLUTTER) from IIIT Sonepat, INDIA. I dedicate myself to the world of CODING!",
              textScaleFactor: isMobileMode ? 1 : 1.5,
              style: const TextStyle(fontStyle: FontStyle.italic),
            ),
            SizedBox(height: isMobileMode ? 20 : deviceSize.height * 0.05),
            Align(
              alignment:
                  isMobileMode ? Alignment.centerRight : Alignment.centerLeft,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (context) => const AboutMeDetailsScreen(),
                    ),
                  );
                },
                child: Padding(
                  padding: isMobileMode
                      ? EdgeInsets.zero
                      : const EdgeInsets.symmetric(vertical: 10.0),
                  child: Text(
                    "Resume",
                    textScaleFactor: isMobileMode ? 1 : 1.5,
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
