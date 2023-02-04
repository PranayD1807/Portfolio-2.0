import 'package:flutter/material.dart';

class NavbarButton extends StatefulWidget {
  const NavbarButton({super.key, required this.text, this.onPressed});
  final String text;
  final Function()? onPressed;

  @override
  State<NavbarButton> createState() => _NavbarButtonState();
}

class _NavbarButtonState extends State<NavbarButton> {
  Color textColor = Colors.white;
  Color backgroundColor = Colors.transparent;
  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 15),
          backgroundColor: backgroundColor,
          shadowColor: Colors.transparent,
          elevation: 0,
        ),
        onPressed: widget.onPressed,
        child: Text(
          widget.text,
          style: TextStyle(color: textColor),
        ),
      ),
    );
  }
}
