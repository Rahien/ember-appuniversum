import Component from '@glimmer/component';

export default class AuButton extends Component {
  get width() {
    if (this.args.width == "block")
      return "au-c-button--block";
    else
      return "";
  }

  get skin() {
    if (this.args.skin == "secondary")
      return "au-c-button--secondary";
    if (this.args.skin == "tertiary")
      return "au-c-button--tertiary";
    else
      return "";
  }

  get alert() {
    if (this.args.alert == "true")
      return "au-c-button--alert";
    else
      return "";
  }

  get disabled() {
    if (this.args.disabled == "true")
      return "is-disabled";
    else
      return "";
  }

  get loading() {
    if (this.args.loading == "true")
      return "is-loading";
    else
      return "";
  }
}
