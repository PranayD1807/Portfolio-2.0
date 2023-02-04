import 'package:flutter/material.dart';

class AboutMeDetailsScreen extends StatelessWidget {
  const AboutMeDetailsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            pinned: true,
            expandedHeight: 300,
            title: const Text("About ME!"),
            // backgroundColor: const Color.fromRGBO(97, 84, 97, 1),
            flexibleSpace: FlexibleSpaceBar(
              background: Hero(
                tag: "appbar-background",
                child: Image.network(
                  "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg",
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ),
          SliverFillViewport(
              delegate: SliverChildListDelegate.fixed(
            [
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
