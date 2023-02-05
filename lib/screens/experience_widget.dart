import 'dart:developer';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/helpers/pointer_value.dart';

import 'package:portfolio/widgets/timeline_widget.dart';

class ExperienceWidget extends StatefulWidget {
  const ExperienceWidget({super.key, required this.pointerColors});
  final PointerValue pointerColors;

  @override
  State<ExperienceWidget> createState() => _ExperienceWidgetState();
}

class _ExperienceWidgetState extends State<ExperienceWidget> {
  Color textColor = Colors.black;
  @override
  Widget build(BuildContext context) {
    Size deviceSize = MediaQuery.of(context).size;

    bool isMobileMode = deviceSize.width <= 750;
    List<Map<String, dynamic>> steps = [
      {
        "title": "Flutter | Firebase Developer Intern",
        "company": "Keshri Edutech",
        "location": "Virtual",
        "duration": [DateTime(2022, 3), DateTime(2022, 4)],
        "description":
            "My Task Included : \n(1) Creating new modules and upgrading old modules using flutter web for a CRM project.\n(2) Linking firebase and rest api to frontend in flutter"
      },
      {
        "title": "Flutter Developer Intern",
        "company": "Uipropitome Tech",
        "location": "Virtual",
        "duration": [DateTime(2022, 6), DateTime(2022, 8)],
        "description":
            "My Tasks as an intern include:\n(1) Creating and Maintaining UI Frontend of various projects.\n(2) Integrating Backend services such as firebase and Rest APIs"
      },
      {
        "title": "Flutter Frontend Developer",
        "company": "CalorieFit | Freelance",
        "location": "Virtual",
        "duration": [
          DateTime(2022, 11),
          DateTime(DateTime.now().year, DateTime.now().month)
        ],
        "description":
            "Building Entire Android Application from scratch and\nIntegration of backend services with frontend."
      },
      {
        "title": "FullStack Developer",
        "company": "Sameer Strings | Freelance",
        "location": "Virtual",
        "duration": [
          DateTime(2023, 1),
          DateTime(DateTime.now().year, DateTime.now().month)
        ],
        "description":
            "Project Involved working with Firebase for Backend,\nFlutter for Frontend, Razorpay for Payment Gateway."
      },
    ];
    return Container(
      // height: deviceSize.height * 0.7,
      width: deviceSize.width,
      decoration: const BoxDecoration(
          // color: AppColors.primarySwatchColor,
          ),
      padding: EdgeInsets.symmetric(horizontal: deviceSize.width * 0.05),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          Padding(
            padding: EdgeInsets.symmetric(horizontal: deviceSize.width * 0.05),
            child: Text(
              "Experience :",
              textScaleFactor: !isMobileMode ? 3 : 1.5,
              style: TextStyle(fontWeight: FontWeight.bold, color: textColor),
            ),
          ),
          if (!isMobileMode) const SizedBox(height: 30),
          CustomTimeLine(steps: steps),
        ],
      ),
    );
  }
}
