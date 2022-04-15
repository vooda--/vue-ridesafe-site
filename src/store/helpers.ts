import {Base64} from "js-base64";

export default {
  tokenn(): string {
    return Base64.encode('user:test' );
  },
  defaultLanguage(): string {
    return 'en';
  }
}
