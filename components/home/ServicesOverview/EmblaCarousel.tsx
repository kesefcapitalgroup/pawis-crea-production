"use client";

import React, { FC, CSSProperties } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

type PropType = {
  slides: number[];
  images: {
    src: string;
    alt: string;
    objectPosition?: {
      default: string;
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      xxl?: string;
    };
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: FC<PropType> = (props) => {
  const { slides, images, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={images[index].src}
                alt={images[index].alt}
                style={
                  images[index].objectPosition
                    ? ({
                        "--object-position-default":
                          images[index].objectPosition!.default,
                        "--object-position-xs":
                          images[index].objectPosition!.xs ||
                          images[index].objectPosition!.default,
                        "--object-position-sm":
                          images[index].objectPosition!.sm ||
                          images[index].objectPosition!.xs ||
                          images[index].objectPosition!.default,
                        "--object-position-md":
                          images[index].objectPosition!.md ||
                          images[index].objectPosition!.sm ||
                          images[index].objectPosition!.xs ||
                          images[index].objectPosition!.default,
                        "--object-position-lg":
                          images[index].objectPosition!.lg ||
                          images[index].objectPosition!.md ||
                          images[index].objectPosition!.sm ||
                          images[index].objectPosition!.xs ||
                          images[index].objectPosition!.default,
                        "--object-position-xl":
                          images[index].objectPosition!.xl ||
                          images[index].objectPosition!.lg ||
                          images[index].objectPosition!.md ||
                          images[index].objectPosition!.sm ||
                          images[index].objectPosition!.xs ||
                          images[index].objectPosition!.default,
                        "--object-position-xxl":
                          images[index].objectPosition!.xxl ||
                          images[index].objectPosition!.xl ||
                          images[index].objectPosition!.lg ||
                          images[index].objectPosition!.md ||
                          images[index].objectPosition!.sm ||
                          images[index].objectPosition!.xs ||
                          images[index].objectPosition!.default,
                      } as CSSProperties)
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
