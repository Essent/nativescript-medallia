import { Common } from './medallia.common';
import { android as androidApp } from 'tns-core-modules/application';
import { Observable} from 'rxjs';

import MedalliaDigital = com.medallia.digital.mobilesdk.MedalliaDigital;
import MDResultCallback = com.medallia.digital.mobilesdk.MDResultCallback;

export class Medallia extends Common {

  public static init(apiKey: string): void {
    const self = this;
    MedalliaDigital.init(androidApp.nativeApp, apiKey, new MDResultCallback({
        onError(error: com.medallia.digital.mobilesdk.MDExternalError): void {
          console.log("Brane INIT ERROR");
          self.onApiInitError(error.getMessage());
        },
        onSuccess(): void {
          console.log("Brane INIT SUCESS");
          self.onApiInitSuccess();
        }
      }
    ));
  }

  public static showForm(formId: string): Observable<boolean> {
    return Observable.create(observer => {
      if (false === this.medalliaState$.getValue()) {
        observer.next(false);
        observer.complete();
      }
      MedalliaDigital.showForm(formId, new MDResultCallback({
        onSuccess(): void {
          observer.next(true);
          observer.complete();
        },
        onError(error: com.medallia.digital.mobilesdk.MDExternalError): void {
          console.error("Medallia error: " + JSON.stringify(error));
          observer.error(error.getErrorCode);
        }
      }));
    });
  }
}
