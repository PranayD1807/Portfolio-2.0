import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/constants/app_colors.dart';
import 'package:portfolio/widgets/navbar_button.dart';

class CustomSliverAppBar extends StatelessWidget {
  const CustomSliverAppBar({super.key, required this.deviceSize});
  final Size deviceSize;
  @override
  Widget build(BuildContext context) {
    bool isMobileMode = deviceSize.width <= 750;

    return SliverAppBar(
      pinned: true,
      expandedHeight: 300,
      // backgroundColor: const Color.fromRGBO(97, 84, 97, 1),
      flexibleSpace: FlexibleSpaceBar(
        background: Image.network(
          "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg",
          fit: BoxFit.cover,
        ),
      ),
      elevation: 0,
      leadingWidth:
          isMobileMode ? deviceSize.width * 0.4 : deviceSize.width * 0.2,
      leading: Center(
        child: FittedBox(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  "<Mellow",
                  textScaleFactor: 1.5,
                  style: GoogleFonts.rubikGlitch(),
                ),
                Text(
                  "DRAG />",
                  textScaleFactor: 1.5,
                  style: GoogleFonts.rubikGlitch(
                    textStyle: const TextStyle(color: Colors.amber),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
      centerTitle: true,
      title: !isMobileMode
          ? Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                NavbarButton(
                  text: "Home",
                  onPressed: () {},
                ),
                NavbarButton(
                  text: "About",
                  onPressed: () {},
                ),
                NavbarButton(
                  text: "Experience",
                  onPressed: () {},
                ),
                NavbarButton(
                  text: "Projects",
                  onPressed: () {},
                ),
              ],
            )
          : null,
      actions: <Widget>[
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 15.0),
          child: IconButton(
            onPressed: () {
              Scaffold.of(context).openEndDrawer();
            },
            splashColor: Colors.orange,
            splashRadius: 20,
            hoverColor: AppColors.redColor,
            icon: const FaIcon(FontAwesomeIcons.burger),
          ),
        )
      ],
    );
  }
}
