// ignore_for_file: non_constant_identifier_names

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:portfolio/constants/app_assets.dart';

import 'package:portfolio/constants/rive_assets.dart';
import 'package:rive/rive.dart';

import 'package:timelines/timelines.dart';

class CustomTimeLine extends StatefulWidget {
  const CustomTimeLine({super.key, required this.steps});
  final List<Map<String, dynamic>> steps;
  @override
  State<CustomTimeLine> createState() => _CustomTimeLineState();
}

class _CustomTimeLineState extends State<CustomTimeLine> {
  @override
  Widget build(BuildContext context) {
    Size deviceSize = MediaQuery.of(context).size;
    bool isMobileMode = deviceSize.width <= 750;

    widget.steps.sort((a, b) {
      DateTime aStartDate = a["duration"][0];
      DateTime bStartDate = b["duration"][0];
      return bStartDate.compareTo(aStartDate);
    });

    return FixedTimeline.tileBuilder(
      mainAxisSize: MainAxisSize.min,
      theme: TimelineThemeData(
        color: Colors.black,
        nodePosition: isMobileMode ? 0 : null,
      ),
      builder: TimelineTileBuilder.connected(
        contentsAlign:
            isMobileMode ? ContentsAlign.basic : ContentsAlign.alternating,
        contentsBuilder: (context, index) {
          return ContentTile(index, deviceSize);
        },
        connectorBuilder: (context, index, type) => const SolidLineConnector(),
        indicatorBuilder: (_, index) {
          return DotIndicator(
            color: Colors.white,
            child: SizedBox(
              height: isMobileMode ? 50 : 100,
              width: isMobileMode ? 50 : 100,
              child: isMobileMode && kIsWeb
                  ? Image.asset(
                      index.isOdd
                          ? AppAssets.riveBookOpen
                          : AppAssets.riveBookClose,
                      fit: BoxFit.contain,
                    )
                  : RiveAnimation.asset(
                      RiveAssets.doc_icon,
                      fit: BoxFit.contain,
                      placeHolder:
                          const Center(child: CircularProgressIndicator()),
                      animations: index.isEven ? ["Reverse"] : ["Forward"],
                    ),
            ),
          );
        },
        itemCount: widget.steps.length,
      ),
    );
  }

  Widget ContentTile(int index, Size size) {
    bool isMobileMode = size.width <= 750;

    DateTime now = DateTime.now();
    List<DateTime> duration = widget.steps[index]["duration"] ?? [];
    bool isOngoing = duration[1].isAtSameMomentAs(DateTime(
      now.year,
      now.month,
    ));
    String durationStr =
        "${DateFormat("MMMM, yyyy").format(duration[0])} - ${!isOngoing ? DateFormat("MMMM, yyyy").format(duration[1]) : 'Present'}";
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 15.0),
      child: Card(
        elevation: 2,
        child: Padding(
          padding: const EdgeInsets.all(15),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                widget.steps[index]["title"] ?? "Title",
                textScaleFactor: isMobileMode ? 1.2 : 1.5,
                style: const TextStyle(
                  color: Color.fromARGB(255, 48, 48, 48),
                  fontWeight: FontWeight.bold,
                ),
              ),
              Text(
                "${widget.steps[index]["company"] ?? "Company Name"}, ${widget.steps[index]["location"] ?? "Location"}",
                textScaleFactor: 1,
                style: const TextStyle(
                  color: Color.fromARGB(255, 48, 48, 48),
                  fontWeight: FontWeight.w400,
                ),
              ),
              Text(
                durationStr,
                textScaleFactor: 1,
                style: const TextStyle(
                  color: Color.fromARGB(255, 48, 48, 48),
                  fontWeight: FontWeight.bold,
                  fontStyle: FontStyle.italic,
                ),
              ),
              Text(
                widget.steps[index]["description"] ?? "Description",
                textScaleFactor: 1,
                softWrap: true,
                style: const TextStyle(
                  color: Color.fromARGB(255, 48, 48, 48),
                  fontWeight: FontWeight.w300,
                  fontStyle: FontStyle.italic,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
