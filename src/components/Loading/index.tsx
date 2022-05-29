import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { colors } from '../../helpers/colorsBasic';
export function Loading() {
  return (
    <RestartAltIcon
      className='animate-spin '
      style={{ color: `${colors.brain}`, width: 60, height: 60 }}
    />
  );
}
