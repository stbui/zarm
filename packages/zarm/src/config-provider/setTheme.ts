import type { Theme } from './PropsType';

export const themes = {
  '--theme-primary-lighter': '#303030',
  '--color-text': 'rgba(255, 255, 255, 0.85)',
  '--color-text-inverse': 'rgba(255, 255, 255, 0.8)',
  '--color-text-placeholder': 'rgba(255, 255, 255, 0.3)',
  '--color-text-disabled': '#666',
  '--border-color': '#3a3b3d',
  '--opacity-mask': '0.7',
  '--calendar-background': 'transparent',
  '--calendar-week-bar-background': '#303030',
  '--picker-background': '#000',
  '--picker-header-background': '#1b1c1e',
  '--picker-mask-background-start': 'rgba(0, 0, 0, 0.4)',
  '--picker-mask-background-end': 'rgba(0, 0, 0, 0.8)',
  '--stack-picker-background': '#000',
  '--stack-picker-shadow': 'none',
  '--za-alert-button-background': '#2b2c2d',
  '--za-alert-button-active-background': '#363738',
  '--za-activity-indicator-path-color': '#3a3b3d',
  '--za-button-default-background': '#393939',
  '--za-button-default-border': 'transparent',
  '--za-button-default-color': 'rgba(255, 255, 255, 0.85)',
  '--za-button-default-active-background': 'rgba(255, 255, 255, 0.2)',
  '--za-button-default-active-border': 'transparent',
  '--za-button-default-active-color': '#fff',
  '--za-list-item-background': '#1c1c1e',
  '--za-list-item-active-background': '#363738',
  '--za-list-item-arrow-color': '#666',
  '--za-list-item-separator-color': 'rgba(84, 84, 88, 0.65)',
  '--za-list-item-info-text-color': 'rgba(235, 235, 245, 0.6)',
  '--za-list-item-after-text-color': 'rgba(235, 235, 245, 0.6)',
  '--za-loading-background': '#2b2c2d',
  '--za-collapse-arrow-color': '#666',
  '--za-collapse-arrow-disabled-color': '#333',
  '--za-checkbox-background': 'transparent',
  '--za-checkbox-border-color': 'rgb(72, 72, 74)',
  '--za-checkbox-disabled-background': '#333',
  '--za-checkbox-disabled-border-color': 'rgba(72, 72, 74, 0.7)',
  '--za-checkbox-disabled-text-color': 'rgba(255, 255, 255, 0.3)',
  '--za-checkbox-disabled-marker-color': 'rgba(255, 255, 255, 0.2)',
  '--za-confirm-button-background': '#2b2c2d',
  '--za-confirm-button-active-background': '#363738',
  '--za-radio-background': 'transparent',
  '--za-radio-border-color': 'rgb(72, 72, 74)',
  '--za-radio-disabled-background': '#333',
  '--za-radio-disabled-border-color': 'rgba(72, 72, 74, 0.7)',
  '--za-radio-disabled-text-color': 'rgba(255, 255, 255, 0.3)',
  '--za-radio-disabled-marker-color': 'rgba(255, 255, 255, 0.2)',
  '--za-input-clear-icon-color': '#8e8e93',
  '--za-keyboard-background': '#000',
  '--za-keyboard-item-background': 'rgba(255, 255, 255, 0.1)',
  '--za-slider-line-dot-color': 'var(--border-color)',
  '--za-switch-background': 'rgba(120, 120, 128, 0.32)',
  '--za-stepper-input-background': '#000',
  '--za-panel-header-color': 'rgba(235, 235, 245, 0.6)',
  '--za-panel-body-background': '#1c1c1e',
  '--za-progress-background': 'var(--border-color)',
  '--za-modal-background': '#2b2c2d',
  '--za-modal-close-color': 'rgba(255, 255, 255, 0.3)',
  '--za-modal-close-active-color': 'rgba(255, 255, 255, 0.65)',
  '--za-nav-bar-background': '#1b1c1e',
  '--za-search-bar-input-background': 'rgba(118, 118, 128, 0.24)',
  '--za-search-bar-input-placeholder-color': '#8e8e93',
  '--za-search-bar-icon-color': '#8e8e93',
  '--za-action-sheet-actions-background': '#222222',
  '--za-action-sheet-cancel-background': '#2c2c2e',
  '--za-action-sheet-item-active-background': '#404040',
  '--za-rate-color': 'var(--theme-danger-dark)',
  '--za-rate-unchecked-color': '#393939',
  '--za-tabbar-background': '#1b1c1e',
  '--za-toast-background': '#2b2c2d',
  '--za-tooltip-background': '#5b5c60',
} as const;

const setTheme = (value: Theme) => {
  document.body.setAttribute('data-theme', value);
  Object.keys(themes).forEach((key) => {
    value === 'dark'
      ? document.documentElement.style.setProperty(key, themes[key])
      : document.documentElement.style.removeProperty(key);
  });
};

export default setTheme;
