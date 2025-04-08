"use client";

import React, { FC, useState, memo, useMemo, useCallback } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import { LightGallerySettings } from "lightgallery/lg-settings";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import Masonry from "react-masonry-css";

// CSS
import "@/styles/portfolio/our-photography-collection.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// Image Data
import portfolioImgData from "@/public/images/portfolio-img/portfolioImgData";

interface Image {
  category: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const GALLERY_SETTINGS: Partial<LightGallerySettings> = {
  speed: 500,
  plugins: [lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgShare, lgRotate],
  autoplay: true,
  slideShowAutoplay: true,
  slideShowInterval: 5000,
  share: true,
  facebook: true,
  twitter: true,
  pinterest: true,
  selector: ".our-photography-collection-img",
};

const BREAKPOINT_COLS = {
  default: 4,
  1024: 3,
  768: 2,
  480: 1,
};

const getFilteredCategoryImages = (
  filterCategory: string,
  photoCollectionCategories: string[],
  images: Image[]
): Image[] => {
  if (filterCategory === "all") return images;
  if (filterCategory === "featured") {
    return photoCollectionCategories
      .map((photoCollectionCategory) =>
        images
          .filter((img) => img.category === photoCollectionCategory)
          .slice(0, 3)
      )
      .flat();
  }
  return images.filter((img) => img.category === filterCategory);
};

interface FilterBtnProps {
  filterCategory: string;
  btnLabel: string;
  isActive: boolean;
  handleFilterByCategory: (filterCategory: string) => void;
}

const FilterBtn: FC<FilterBtnProps> = memo(
  ({ filterCategory, btnLabel, isActive, handleFilterByCategory }) => (
    <button
      className={`filter-category-btn ${
        isActive ? "active-filter-category" : ""
      }`}
      onClick={() => handleFilterByCategory(filterCategory)}
      aria-label={btnLabel}
      role="button"
    >
      {btnLabel}
    </button>
  )
);

FilterBtn.displayName = "FilterBtn";

interface SkeletonProps {
  width: number;
  height: number;
}

const Skeleton: FC<SkeletonProps> = ({ width, height }) => (
  <div
    className="our-photography-collection-img-loading-skeleton"
    style={{
      width: "100%",
      paddingBottom: `${(height / width) * 100}%`,
    }}
  />
);

Skeleton.displayName = "Skeleton";

interface OurPhotographyCollectionImageProps {
  img: Image;
  isLoaded: boolean;
  onLoad: (src: string) => void;
}

const OurPhotographyCollectionImage: FC<OurPhotographyCollectionImageProps> =
  memo(({ img, isLoaded, onLoad }) => (
    <a
      href={`/images/portfolio-img/${img.src}`}
      className="our-photography-collection-img"
    >
      {!isLoaded && <Skeleton width={img.width} height={img.height} />}
      <Image
        alt={img.alt}
        src={`/images/portfolio-img/${img.src}`}
        width={img.width / 10}
        height={img.height / 10}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
        layout="responsive"
        onLoadingComplete={() => onLoad(img.src)}
        onError={() => console.error(`Failed to load ${img.src}`)}
        className={`our-photography-collection-img-thumbnail ${
          isLoaded
            ? "our-photography-collection-img-loaded"
            : "our-photography-collection-img-loading"
        }`}
      />
    </a>
  ));

const OurPhotographyCollection: FC = () => {
  const t_OurPhotographyCollection_Portfolio = useTranslations(
    "Portfolio.OurPhotographyCollection"
  );
  const t_Common = useTranslations("Common");

  const { sectionHeading, photographyCollectionNotLoaded } = {
    sectionHeading: t_OurPhotographyCollection_Portfolio("sectionHeading"),
    photographyCollectionNotLoaded: t_OurPhotographyCollection_Portfolio(
      "photographyCollectionNotLoaded"
    ),
  };

  const { featured, all } = {
    featured: t_Common("filterCategories.featured"),
    all: t_Common("filterCategories.all"),
  };

  const photoCollectionCategoriesKeys = [
    "children",
    "djCoverage",
    "eventCoverage",
    "fashion",
    "gastronomy",
    "marriage",
    "musicVideosBts",
    "personal",
    "photoStudio",
    "quinceañera",
  ];

  const [activeFilterCategory, setActiveFilterCategory] = useState("featured");
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const filteredCategoryImages = useMemo(
    () =>
      getFilteredCategoryImages(
        activeFilterCategory,
        photoCollectionCategoriesKeys,
        portfolioImgData
      ),
    [activeFilterCategory, photoCollectionCategoriesKeys]
  );

  const handleImageLoad = useCallback((src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  }, []);

  const handleFilterByCategory = (filterCategory: string) => {
    setActiveFilterCategory(filterCategory);
    setLoadedImages(new Set());
  };

  if (!portfolioImgData.length) {
    return (
      <p className="photography-collection-not-loaded">
        {photographyCollectionNotLoaded}
      </p>
    );
  }

  return (
    <section className="our-photography-collection">
      <div className="our-photography-collection-container">
        <h3 className="our-photography-collection-heading">{sectionHeading}</h3>

        <div className="our-photography-collection-filter-bar">
          <div className="our-photography-collection-filter-categories">
            <FilterBtn
              filterCategory="featured"
              btnLabel={featured}
              isActive={activeFilterCategory === "featured"}
              handleFilterByCategory={handleFilterByCategory}
            />
            {photoCollectionCategoriesKeys.map((photoCollectionCategoryKey) => (
              <FilterBtn
                key={photoCollectionCategoryKey}
                filterCategory={photoCollectionCategoryKey}
                btnLabel={t_Common(
                  `portfolioCategories.${photoCollectionCategoryKey}`
                )}
                isActive={activeFilterCategory === photoCollectionCategoryKey}
                handleFilterByCategory={handleFilterByCategory}
              />
            ))}
            <FilterBtn
              filterCategory="all"
              btnLabel={all}
              isActive={activeFilterCategory === "all"}
              handleFilterByCategory={handleFilterByCategory}
            />
          </div>
        </div>

        <div className="our-photography-collection-content">
          <LightGallery {...GALLERY_SETTINGS}>
            <Masonry
              breakpointCols={BREAKPOINT_COLS}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {filteredCategoryImages.map((img) => (
                <OurPhotographyCollectionImage
                  key={img.src}
                  img={img}
                  isLoaded={loadedImages.has(img.src)}
                  onLoad={handleImageLoad}
                />
              ))}
            </Masonry>
          </LightGallery>
        </div>
      </div>
    </section>
  );
};

OurPhotographyCollection.displayName = "OurPhotographyCollection";

export default OurPhotographyCollection;
