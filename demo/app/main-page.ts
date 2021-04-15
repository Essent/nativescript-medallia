import { EventData, Page, TextField, AlertOptions, alert } from '@nativescript/core';
import { Medallia } from 'nativescript-medallia';

// Event handler for Page 'loaded' event attached in main-page.xml
let firstTimeLoad: boolean = true;
export function pageLoaded(args: EventData) {
    // Get the event sender
    const page = <Page>args.object;
    const buttonShowSurvey = page.getViewById('buttonShowSurvey');
    const buttonSetParameter = page.getViewById('buttonSetParameter');
    if (firstTimeLoad) {
        firstTimeLoad = false;
        buttonShowSurvey.addEventListener("tap", function() {
            Medallia.getMedalliaState().subscribe(
                (success: boolean) => {
                    if (success) {
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
                    if (success) {
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

export function showForm(page: Page) {
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

export function setCustomParameter(page: Page) {
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
