import * as S from "./styled";
import { Box, Button, MaterialIcon, Typography } from "@gama-academy/smash-web";
import { useState } from "react";

export const Footer: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <S.SFooterContainer>
      <Button
        onClick={function noRefCheck() {}}
        size="1"
        color="white"
        borderRadius="md"
        disabled={isDisabled}
      >
        <Box alignment="center" dir="row" justifyContent="space-between">
          <Typography fontWeight="semi_bold" mr="1">
            Iniciar avaliação
          </Typography>
          <MaterialIcon
            name="play_circle_outline"
            color="primary.3"
            shape="round"
            shapeBackground="primary.3"
            stroke={1}
            strokeColor="primary.3"
            type="round"
          />
        </Box>
      </Button>
    </S.SFooterContainer>
  );
};
