export interface StyleProps {
    container?: {
      "padding-top": string[];
      "padding-bottom": string[];
      width: string[];
      height: string[];
    };
    display?: string[];
    width?: string[];
    height?: string[];
    gap?: string[];
    slidesPerView?: number[];
    spaceBetween?: number[];
    prevEl?: string[];
    nextEl?: string[];
  }