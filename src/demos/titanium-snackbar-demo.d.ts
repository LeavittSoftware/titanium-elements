import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@material/web/dialog/dialog';
import '@material/web/button/filled-tonal-button';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import { LitElement } from 'lit';
import { SnackbarStack } from '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import { MdDialog } from '@material/web/dialog/dialog';
export declare class TitaniumSnackbarDemo extends LitElement {
    #private;
    dialog: MdDialog;
    snackbar: SnackbarStack;
    static styles: import("lit").CSSResult[][];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=titanium-snackbar-demo.d.ts.map