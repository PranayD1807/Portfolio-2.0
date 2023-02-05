import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:portfolio/helpers/pointer_value.dart';
import 'package:portfolio/screens/experience_widget.dart';
import 'package:portfolio/screens/projects_section_widget.dart';

import 'package:portfolio/screens/top_short_info_screen.dart';
import 'package:portfolio/widgets/appbar.dart';
import 'package:portfolio/widgets/fancy_cursor.dart';

class HomePageScreen extends StatefulWidget {
  const HomePageScreen({super.key});

  @override
  State<HomePageScreen> createState() => _HomePageScreenState();
}

class _HomePageScreenState extends State<HomePageScreen> {
  PointerValue pointerValue = PointerValue();
  @override
  Widget build(BuildContext context) {
    Size deviceSize = MediaQuery.of(context).size;
    bool isMobileMode = deviceSize.width <= 750;
    return ValueListenableBuilder(
        valueListenable: pointerValue.pointerColors,
        builder: (context, value, _) {
          return FancyCursor(
            trail: true,
            trailDelay: const Duration(milliseconds: 900),
            trailSize: 45,
            trailColor: value["trailColor"],
            color: value["color"],
            child: Scaffold(
              endDrawer: const Drawer(backgroundColor: Colors.white),
              body: CustomScrollView(
                slivers: [
                  CustomSliverAppBar(deviceSize: deviceSize),
                  SliverList(
                      delegate: SliverChildListDelegate.fixed(
                    [
                      const TopShortInfoWidget(),
                      if (isMobileMode) const SizedBox(height: 50),
                      ExperienceWidget(
                        pointerColors: pointerValue,
                      ),
                      const ProjectsSection(),
                      Container(
                        height: 700,
                      )
                    ],
                  )),
                ],
              ),
            ),
          );
        });
  }
}
