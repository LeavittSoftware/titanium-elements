import { TemplateResult } from 'lit';

export type SnackbarOptions = {
  actionText?: string | null;
  autoHide?: boolean | number;
  noAction?: boolean;
  overrideTemplate?: TemplateResult;
  close?: (reason: string) => void;
};
