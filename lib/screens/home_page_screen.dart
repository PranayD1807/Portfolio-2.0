import 'package:flutter/material.dart';
import 'package:portfolio/screens/experience_widget.dart';

import 'package:portfolio/screens/top_short_info_screen.dart';
import 'package:portfolio/widgets/appbar.dart';

class HomePageScreen extends StatelessWidget {
  const HomePageScreen({super.key});

  @override
  Widget build(BuildContext context) {
    Size deviceSize = MediaQuery.of(context).size;
    bool isMobileMode = deviceSize.width <= 750;

    return Scaffold(
      endDrawer: const Drawer(backgroundColor: Colors.white),
      body: CustomScrollView(
        slivers: [
          CustomSliverAppBar(deviceSize: deviceSize),
          SliverList(
              delegate: SliverChildListDelegate.fixed(
            [
              const TopShortInfoWidget(),
              if (isMobileMode) const SizedBox(height: 50),
              const ExperienceWidget(),
              Container(
                height: 700,
              )
            ],
          )),
        ],
      ),
    );
  }
}
