import { LoadingContainer, Dots, Dot, Text } from "./Loading.styled";
function Loading() {
  return (
    <LoadingContainer>
      <Text>Loading...</Text>
      <Dots>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
      </Dots>
    </LoadingContainer>
  );
}

export default Loading;
