import 'package:flutter/material.dart';
import 'package:portfolio/constants/app_colors.dart';
import 'package:portfolio/constants/app_strings.dart';
import 'package:portfolio/screens/home_page_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: AppStrings.appName,
      theme: ThemeData(
        primarySwatch: AppColors.primarySwatch,
        fontFamily: "SofiaSans",
        scaffoldBackgroundColor: AppColors.scaffoldBackgroundColor,
      ),
      home: const HomePageScreen(),
      // home: TopShortInfoWidget()
    );
  }
}
