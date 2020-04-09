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
          console.error("An error occured when trying to initialise medallia: " + error.getMessage());
          self.onApiInitError(error.getMessage());
        },
        onSuccess(): void {
          self.onApiInitSuccess();
        }
      }
    ));
  }

  public static showForm(formId: string): Observable<boolean> {
    return Observable.create(observer => {
      if (false === this.getMedalliaState().getValue()) {
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

  public static setCustomParameter(name: string, value: any): void {
    if (false === this.getMedalliaState().getValue()) {
      throw new Error("Medallia was not properly initialized!");
    }
    MedalliaDigital.setCustomParameter(name, value);
  }
}
