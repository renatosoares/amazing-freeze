import styled from "styled-components";

import { breakAt, BreakpointSizes } from "styles/Breakpoints";

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSizes.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSizes.lg)} {
    max-width: 1140px;
    margin: 0 auto;
  }
`;

export default Container;
