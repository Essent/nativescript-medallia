
import { Application, isIOS } from "@nativescript/core";
import { Medallia } from '@essent/nativescript-medallia';
import {MEDALLIA_API_KEY_ANDROID, MEDALLIA_API_KEY_IOS} from './global-config';

declare var process: any;

function getEnvironmentVar(key: string): string {
  if (typeof process !== 'undefined' && process && process.env) {
      return process.env[key];
  } else {
      return "";
  }
}

Application.run({ moduleName: "main-page" });

if (isIOS) {
    Medallia.init(MEDALLIA_API_KEY_IOS);
} else {
    Medallia.init(MEDALLIA_API_KEY_ANDROID);
}
