import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { Medallia } from 'nativescript-medallia';
import { TextField } from "tns-core-modules/ui/text-field";
import { alert, AlertOptions } from "tns-core-modules/ui/dialogs";

// Event handler for Page 'loaded' event attached in main-page.xml
let firstTimeLoad: boolean = true;
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    const page = <pages.Page>args.object;
    const button = page.getViewById('buttonShowSurvey');
    if (firstTimeLoad) {
        firstTimeLoad = false;
        button.addEventListener("tap", function() {
            Medallia.medalliaState$.subscribe(
                (success: boolean) => {
                    if (true === success) {
                        showForm(page);
                    }
                },
                (error: number) => {
                    const options: AlertOptions = {
                        title: "Medallia initialization error",
                        message: "" + error,
                        okButtonText: "Close"
                    };
                    alert(options).then(() => {
                        console.error("An error occured when tried to initialize medallia: " + error );
                    });
                }
            );
        });
    }
}

export function showForm(page: pages.Page) {
    const inputSurveyId = <TextField> page.getViewById("inputSurveyId");
    console.log("Brane show form");
    Medallia.showForm(inputSurveyId.text).subscribe(
        (success: boolean) => {
            console.info("Medallia for sucessfuly shown? " + success);
        },
        (error: string) => {
            let options = {
                title: "Medallia error",
                message: error,
                okButtonText: "Close"
            };
            alert(options).then(() => {
                console.error("An error occured when tried to show medallia survey: " + error );
            });
        }
    );
}
