import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';

class CarouselWithIndicator extends StatefulWidget {
  const CarouselWithIndicator({super.key, required this.slides});
  final List<Widget> slides;
  @override
  State<StatefulWidget> createState() {
    return _CarouselWithIndicatorState();
  }
}

class _CarouselWithIndicatorState extends State<CarouselWithIndicator> {
  int _current = 0;
  final CarouselController _controller = CarouselController();

  @override
  Widget build(BuildContext context) {
    Size deviceSize = MediaQuery.of(context).size;
    bool isMobileMode = deviceSize.width <= 750;

    return Column(mainAxisSize: MainAxisSize.min, children: [
      CarouselSlider(
        items: widget.slides,
        carouselController: _controller,
        options: CarouselOptions(
          autoPlay: true,
          height:
              isMobileMode ? deviceSize.height * 0.4 : deviceSize.height * 0.6,
          viewportFraction: isMobileMode ? 0.8 : 0.3,
          onPageChanged: (index, reason) {
            setState(() {
              _current = index;
            });
          },
        ),
      ),
      const SizedBox(height: 30),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: widget.slides.asMap().entries.map((entry) {
          return GestureDetector(
            onTap: () => _controller.animateToPage(entry.key),
            child: Container(
              width: 12.0,
              height: 12.0,
              margin:
                  const EdgeInsets.symmetric(vertical: 8.0, horizontal: 4.0),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: (Theme.of(context).brightness == Brightness.dark
                        ? Colors.white
                        : Colors.black)
                    .withOpacity(_current == entry.key ? 0.9 : 0.4),
              ),
            ),
          );
        }).toList(),
      ),
    ]);
  }
}
