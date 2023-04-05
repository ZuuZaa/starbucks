import styled from "styled-components";

export const ImageWrapper = styled.div`
width: ${({width}) => width};
height: ${({height}) => height};
img {
    width: 100%;
}
`