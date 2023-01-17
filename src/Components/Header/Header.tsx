import React from "react";
import { Container } from "./styles";
import ReactSwitch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title, colors } = React.useContext(ThemeContext);

  return (
    <Container>
      Hello world
      <ReactSwitch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        offColor={shade(0.3, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
};
