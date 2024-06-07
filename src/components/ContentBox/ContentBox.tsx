import { containerStyles } from "@styles/variables";
import React, { useLayoutEffect, useRef, useState } from "react";
import { box, imgThumb, textContainer } from "./ContentBox.styled";

interface ContentBoxProps {
  children: React.ReactNode;
  photo: string;
  contentGap: number | number[];
  isHideMobileImg?: boolean;
  changeDirection?: boolean;
  type?: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  children,
  photo,
  contentGap,
  isHideMobileImg,
  changeDirection,
  type,
}) => {
  const [textHeight, setTextHeight] = useState<number | undefined>(undefined);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(
    undefined
  );
  const imgName = photo
    .split("/")
    .pop()
    ?.replace(/\.[^/.]+$/, "");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const computedStyle = window.getComputedStyle(containerRef.current);
      const paddingLeft = parseInt(
        computedStyle.getPropertyValue("padding-left")
      );
      const paddingRight = parseInt(
        computedStyle.getPropertyValue("padding-right")
      );
      const containerWidthWithoutPadding =
        containerWidth - paddingLeft - paddingRight;
      setContainerWidth(containerWidthWithoutPadding);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      // for (const entry of entries) {
      // if (entries[0].target === textRef.current) {
      setTextHeight((entries[0].target as HTMLElement).offsetHeight);
      // }
      // }
    });

    if (textRef.current) {
      resizeObserver.observe(textRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div css={containerStyles} ref={containerRef}>
      <div css={box(contentGap, changeDirection, type)}>
        <div css={textContainer(containerWidth, type)}>
          {typeof children === "string" && <p ref={textRef}>{children}</p>}
          {typeof children === "object" && children}
        </div>
        <div css={imgThumb(textHeight, containerWidth, isHideMobileImg, type)}>
          <img src={photo} alt={imgName} />
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
