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
    const buttonShowSurvey = page.getViewById('buttonShowSurvey');
    const buttonSetParameter = page.getViewById('buttonSetParameter');
    if (firstTimeLoad) {
        firstTimeLoad = false;
        buttonShowSurvey.addEventListener("tap", function() {
            Medallia.getMedalliaState().subscribe(
                (success: boolean) => {
                    if (true === success) {
                        showForm(page);
                    }
                },
                (error: number) => {
                    showError(error);
                }
            );
        });

        buttonSetParameter.addEventListener("tap", function() {
            Medallia.getMedalliaState().subscribe(
                (success: boolean) => {
                    if (true === success) {
                        setCustomParameter(page);
                    }
                },
                (error: number) => {
                    showError(error);
                }
            );
        });

    }
}

export function showForm(page: pages.Page) {
    const inputSurveyId = <TextField> page.getViewById("inputSurveyId");
    Medallia.showForm(inputSurveyId.text).subscribe(
        (success: boolean) => {
            console.info("Medallia form sucessfuly shown? " + success);
        },
        (error: string) => {
            showError(error);
        }
    );
}

export function setCustomParameter(page: pages.Page) {
    const inputParameterName = <TextField> page.getViewById("inputParameterName");
    const inputParameterValue = <TextField> page.getViewById("inputParameterValue");
    Medallia.setCustomParameter(inputParameterName.text, inputParameterValue.text);
}

export function showError(error: number | string) {
    const options: AlertOptions = {
        title: "Medallia error",
        message: "" + error,
        okButtonText: "Close"
    };
    alert(options).then(() => {
        console.error("Medallia error occured: " + error);
    });
}
