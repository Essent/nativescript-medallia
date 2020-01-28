
import * as app from "tns-core-modules/application";
import { isAndroid, isIOS } from "tns-core-modules/platform";
import { Medallia } from 'nativescript-medallia';
import {MEDALLIA_API_KEY_ANDROID, MEDALLIA_API_KEY_IOS} from './global-config';

declare var process: any;

function getEnvironmentVar(key: string): string {
  if (typeof process !== 'undefined' && process && process.env) {
      return process.env[key];
  } else {
      return "";
  }
}

if (isIOS) {
  Medallia.init(MEDALLIA_API_KEY_IOS);
}

app.run({ moduleName: "main-page" });

if (isAndroid) {
  Medallia.init(MEDALLIA_API_KEY_ANDROID);
}


