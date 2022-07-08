import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { colors } from '../../helpers/colorsBasic';

type Props = {
  color?: string;
  width?: number;
};
export function Loading({ color, width }: Props) {
  return (
    <RestartAltIcon
      className='animate-spin '
      style={{
        color: `${color ? color : colors.brain}`,
        width: `${width ? width : 60}`,
        height: `${width ? width : 60}`,
      }}
    />
  );
}
