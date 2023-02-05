import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:intl/intl.dart';
import 'package:portfolio/widgets/fancy_cursor.dart';

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
          "This was our group project for college practicum semester 2. This is a fully functional app to apply for jobs etc",
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
                vertical: deviceSize.width * 0.02,
                horizontal: deviceSize.height * 0.1),
            child: MasonryGridView.count(
              crossAxisCount: 4,
              mainAxisSpacing: deviceSize.width * 0.02,
              crossAxisSpacing: deviceSize.width * 0.02,
              shrinkWrap: true,
              itemCount: projects.length,
              physics: const NeverScrollableScrollPhysics(),
              itemBuilder: (context, index) {
                return ProjectItem(
                  title: projects[index]["title"],
                  description: projects[index]["description"],
                  imgUrl: projects[index]["imgUrl"],
                  link: projects[index]["link"],
                  duration: projects[index]["duration"],
                );
              },
            ),
          )
        ],
      ),
    );
  }
}

class ProjectItem extends StatelessWidget {
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
  Widget build(BuildContext context) {
    DateTime now = DateTime.now();

    bool isOngoing = duration[1].isAtSameMomentAs(DateTime(
      now.year,
      now.month,
    ));

    String durationStr =
        "${DateFormat("MMMM, yyyy").format(duration[0])} - ${!isOngoing ? DateFormat("MMMM, yyyy").format(duration[1]) : 'Present'}";

    return Card(
      elevation: 2,
      child: Container(
        color: Colors.white,
        child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Image.network(
                imgUrl,
                fit: BoxFit.contain,
              ),
              Padding(
                padding: const EdgeInsets.all(15.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      durationStr,
                      style: TextStyle(color: Colors.blueGrey[700]),
                    ),
                    const SizedBox(height: 5),
                    Text(
                      title,
                      textScaleFactor: 1.5,
                      style: const TextStyle(fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 5),
                    Text(
                      description,
                      style: const TextStyle(
                          fontStyle: FontStyle.italic,
                          fontWeight: FontWeight.w300),
                    )
                  ],
                ),
              )
            ]),
      ),
    );
  }
}
