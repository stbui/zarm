import type { BaseDatePickerProps } from '../date-picker/interface';

export interface BaseDateSelectProps extends Omit<BaseDatePickerProps, 'visible'> {
  placeholder?: string;
  format?: string;
  hasArrow?: boolean;
}
