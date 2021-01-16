import styled from 'styled-components';
import { Colors } from '../../utils/styled-global';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Content = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 613px;
  height: 568px;
  border-radius: 5px;
  background: ${Colors.bege};
  border: 7px solid ${Colors.begeEscuro};
`;

export const PanelCartas = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 20px;
  height: 384px;
  width: 436px;
  justify-items: center;
`;
