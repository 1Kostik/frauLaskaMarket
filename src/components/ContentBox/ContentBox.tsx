import React from 'react'

interface ContentBoxProps {
    children: string,
}
 
const ContentBox: React.FC<ContentBoxProps> = ({ children }) => {
  return (
    <>
      <div>${children}</div>
    </>
  );
};

export default ContentBox