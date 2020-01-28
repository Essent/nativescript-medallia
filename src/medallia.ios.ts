import { Common } from './medallia.common';
import { Observable} from 'rxjs';

export class Medallia extends Common {

  public static init(apiKey: string): void {
    const self = this;
    MedalliaDigital.sdkInitWithTokenSuccessFailure(apiKey,
      function onSuccess(): void {
        self.onApiInitSuccess();
      },
      function onFailure(error: MDExternalError): void {
        self.onApiInitError(error.message);
      });
  }

  public static showForm(formId: string): Observable<boolean> {
    return Observable.create(observer => {
      if (false === this.medalliaState$.getValue()) {
        observer.next(false);
      }
      MedalliaDigital.showFormSuccessFailure(formId,
        function onSucess() {
          observer.next(true);
          observer.complete();
        },
        function onFailure(error: MDExternalError) {
          console.error("Medallia error: " + JSON.stringify(error));
          observer.error(error.statusCode);
        }
      );
    });
  }
}
