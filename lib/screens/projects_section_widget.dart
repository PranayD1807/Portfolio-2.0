import 'dart:developer';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:portfolio/widgets/carousel.dart';

class ProjectsSection extends StatelessWidget {
  const ProjectsSection({super.key});
  static final List<Map<String, dynamic>> projects = [
    {
      "title": "Fundzer Backend ( Node.js | MongoDB )",
      "imgUrl": "assets/images/pic1.jpg",
      "link": "https://github.com/PranayD1807/Invest-Mate-Backend",
      "description":
          "Investmate: our practicum project in fourth semester. Crowdunding app and its backend. Creating API and hosting on herouku",
      "duration": [DateTime(2022, 1), DateTime(2022, 4)]
    },
    {
      "title": "FundZer ( Flutter | Node.js | MongoDB)",
      "imgUrl": "assets/images/pic2.jpg",
      "link": "https://github.com/PranayD1807/Invest-Mate-Backend",
      "description": "Group Project for Practicum",
      "duration": [DateTime(2021, 12), DateTime(2022, 2)]
    },
    {
      "title": "Zchat( Flutter | Firebase )",
      "imgUrl": "assets/images/pic3.jpg",
      "link": "https://github.com/PranayD1807/Invest-Mate-Backend",
      "description":
          "Zchat is a chatting application that allows any two users to chat with each other. Made using firebase and flutter. We can also send/receive and save images",
      "duration": [DateTime(2022, 1), DateTime(2022, 4)]
    },
    {
      "title":
          "Tour Spotz ( Flutter | Firebase | MapBoxAPI & Google Maps Integration )",
      "imgUrl": "assets/images/pic4.jpg",
      "link": "https://github.com/PranayD1807/Invest-Mate-Backend",
      "description":
          "Used mapbox api to get coordinates and store data etc. Save your fav spots.",
      "duration": [DateTime(2022, 1), DateTime(2022, 4)]
    },
    {
      "title": "RecruitX ( Flutter | Firebase )",
      "imgUrl": "assets/images/pic3.jpg",
      "link": "https://github.com/PranayD1807/Invest-Mate-Backend",
      "description":
          "This was our group project for college practicum semester 2. This is a fully functional app to apply for jobs etc, This was our group project for college practicum semester 2.",
      "duration": [DateTime(2022, 1), DateTime(2022, 4)]
    },
    {
      "title": "Shop_Mate ( Flutter | Firebase )",
      "imgUrl": "assets/images/pic2.jpg",
      "link": "https://github.com/PranayD1807/Invest-Mate-Backend",
      "description": "Flutter app to browse and buy items.",
      "duration": [DateTime(2022, 1), DateTime(2022, 4)]
    },
    {
      "title": "Shop_Mate ( Flutter | Firebase )",
      "imgUrl": "assets/images/pic1.jpg",
      "link": "https://github.com/PranayD1807/Invest-Mate-Backend",
      "description": "Flutter app to browse and buy items.",
      "duration": [DateTime(2022, 1), DateTime(2022, 4)]
    }
  ];
  @override
  Widget build(BuildContext context) {
    Size deviceSize = MediaQuery.of(context).size;
    bool isMobileMode = deviceSize.width <= 750;

    return Padding(
      padding: EdgeInsets.symmetric(vertical: deviceSize.height * 0.1),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Align(
            alignment: Alignment.center,
            child: Text(
              "My Projects",
              textScaleFactor: !isMobileMode ? 3 : 1.5,
              style: const TextStyle(
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(
                vertical: 15.0, horizontal: deviceSize.width * 0.05),
            child: CarouselWithIndicator(
              slides: projects
                  .map(
                    (item) => ProjectItem(
                      key: Key(item["title"]),
                      title: item["title"],
                      description: item["description"],
                      imgUrl: item["imgUrl"],
                      link: item["link"],
                      duration: item["duration"],
                    ),
                  )
                  .toList(),
            ),
          ),
        ],
      ),
    );
  }
}

class ProjectItem extends StatefulWidget {
  const ProjectItem(
      {super.key,
      required this.imgUrl,
      required this.title,
      required this.description,
      required this.duration,
      required this.link});
  final String imgUrl;
  final String title;
  final String description;
  final List<DateTime> duration;
  final String link;

  @override
  State<ProjectItem> createState() => _ProjectItemState();
}

class _ProjectItemState extends State<ProjectItem> {
  bool isVisible = false;
  @override
  Widget build(BuildContext context) {
    DateTime now = DateTime.now();
    Size deviceSize = MediaQuery.of(context).size;
    bool isMobileMode = deviceSize.width <= 750;

    bool isOngoing = widget.duration[1].isAtSameMomentAs(DateTime(
      now.year,
      now.month,
    ));

    String durationStr =
        "${DateFormat("MMMM, yyyy").format(widget.duration[0])} - ${!isOngoing ? DateFormat("MMMM, yyyy").format(widget.duration[1]) : 'Present'}";

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      child: MouseRegion(
        onHover: (event) {
          setState(() {
            isVisible = true;
          });
        },
        onEnter: (event) {
          setState(() {
            isVisible = true;
          });
        },
        onExit: (event) {
          setState(() {
            isVisible = false;
          });
        },
        child: Stack(alignment: Alignment.bottomCenter, children: [
          Container(
            clipBehavior: Clip.hardEdge,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(15),
            ),
            child: Image.network(
              widget.imgUrl,
              height: double.maxFinite,
              width: double.maxFinite,
              fit: BoxFit.cover,
            ),
          ),
          AnimatedOpacity(
            opacity: isVisible ? 1.0 : 0.0,
            duration: const Duration(milliseconds: 200),
            child: Container(
              clipBehavior: Clip.antiAlias,
              margin: const EdgeInsets.all(10),
              width: double.maxFinite,
              constraints: BoxConstraints(
                  maxHeight: (isMobileMode
                          ? deviceSize.height * 0.4
                          : deviceSize.height * 0.6) -
                      15,
                  minHeight: (isMobileMode
                          ? deviceSize.height * 0.4
                          : deviceSize.height * 0.6) *
                      0.4),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.85),
                borderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(15),
                  topRight: Radius.circular(15),
                  bottomLeft: Radius.circular(15),
                  bottomRight: Radius.circular(15),
                ),
              ),
              padding: EdgeInsets.all(isMobileMode ? 15 : 20.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  ConstrainedBox(
                    constraints: const BoxConstraints(),
                    child: FittedBox(
                      child: Text(
                        durationStr,
                        style: TextStyle(color: Colors.blueGrey[700]),
                      ),
                    ),
                  ),
                  const SizedBox(height: 5),
                  Text(
                    widget.title,
                    textScaleFactor: isMobileMode ? 1 : 1.5,
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 5),
                  Text(
                    widget.description,
                    style: const TextStyle(
                      fontStyle: FontStyle.italic,
                      fontWeight: FontWeight.w300,
                    ),
                  )
                ],
              ),
            ),
          )
        ]),
      ),
    );
  }
}
