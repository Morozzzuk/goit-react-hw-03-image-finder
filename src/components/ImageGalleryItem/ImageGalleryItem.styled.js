import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  height: 260px;
  overflow: hidden;
  flex-basis: calc((100% - 90px) / 4);
  background-color: rgb(248, 248, 248);
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transform: scale(1);

  &:hover {
    transform: scale(1.03);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: zoom-in;
  }
`;

export const GalleryImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
