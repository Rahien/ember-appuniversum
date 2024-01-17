import type AuAlert from '@appuniversum/ember-appuniversum/components/au-alert';
import type AuApp from '@appuniversum/ember-appuniversum/components/au-app';
import type AuBadge from '@appuniversum/ember-appuniversum/components/au-badge';
import type AuBodyContainer from '@appuniversum/ember-appuniversum/components/au-body-container';
import type AuBrand from '@appuniversum/ember-appuniversum/components/au-brand';
import type AuButtonGroup from '@appuniversum/ember-appuniversum/components/au-button-group';
import type AuCheckbox from '@appuniversum/ember-appuniversum/components/au-checkbox';
import type AuCheckboxGroup from '@appuniversum/ember-appuniversum/components/au-checkbox-group';
import type AuContentHeader from '@appuniversum/ember-appuniversum/components/au-content-header';
import type AuContent from '@appuniversum/ember-appuniversum/components/au-content';
import type AuIcon from '@appuniversum/ember-appuniversum/components/au-icon';
import type AuInput from '@appuniversum/ember-appuniversum/components/au-input';

export default interface AppuniversumRegistry {
  AuAlert: typeof AuAlert;
  AuApp: typeof AuApp;
  AuBadge: typeof AuBadge;
  AuBodyContainer: typeof AuBodyContainer;
  AuBrand: typeof AuBrand;
  AuButtonGroup: typeof AuButtonGroup;
  AuCheckbox: typeof AuCheckbox;
  AuCheckboxGroup: typeof AuCheckboxGroup;
  AuContentHeader: typeof AuContentHeader;
  AuContent: typeof AuContent;
  AuIcon: typeof AuIcon;
  AuInput: typeof AuInput;
}
