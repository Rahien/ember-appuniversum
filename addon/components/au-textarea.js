import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';

export default class AuTextarea extends Component {
  constructor() {
    super(...arguments);

    deprecate(
      '[AuTextarea] The `@value` argument is deprecated. Use the `value` attribute and the `{{on}}` modifier instead.',
      !this.useDeprecatedTextarea,
      {
        id: '@appuniversum/ember-appuniversum.au-textarea-value-argument',
        until: '3.0.0',
        for: '@appuniversum/ember-appuniversum',
        since: {
          enabled: '2.15.0',
        },
      },
    );
  }

  get useDeprecatedTextarea() {
    return 'value' in this.args;
  }

  get width() {
    if (this.args.width == 'block') return 'au-c-textarea--block';
    else return '';
  }

  get error() {
    if (this.args.error) return 'au-c-textarea--error';
    else return '';
  }

  get warning() {
    if (this.args.warning) return 'au-c-textarea--warning';
    else return '';
  }

  get disabled() {
    if (this.args.disabled) return 'is-disabled';
    else return '';
  }
}
