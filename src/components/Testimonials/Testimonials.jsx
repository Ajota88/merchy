import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { reviews } from "../../utils/constants";
import { PrevButton, NextButton } from "../CarouselButtons/CarouselButtons";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Testimonials.scss";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <h3>What they've said</h3>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {reviews.map((review) => (
              <div className="embla__slide" key={review.id}>
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
