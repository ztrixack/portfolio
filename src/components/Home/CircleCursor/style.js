import tw, { styled } from 'twin.macro'

export const Cursor = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid #fefefe;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: all 150ms ease;
  transition-property: opacity, background-color, transform, mix-blend-mode;
  background-color: #fff;

  ${({ hidden }) => hidden && tw`opacity-0`}
  ${({ clicked }) =>
    clicked &&
    `
      transform: translate(-50%, -50%) scale(0.9);
      background-color: #000;
    `}
`
