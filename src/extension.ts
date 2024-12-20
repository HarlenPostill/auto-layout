import * as vscode from 'vscode';
import { exec } from 'child_process';


export function activate(context: vscode.ExtensionContext) {
  const provider = new GuideDogSidebarProvider(context.extensionUri);
  context.subscriptions.push(vscode.window.registerWebviewViewProvider('autolayoutView', provider));
}

class GuideDogSidebarProvider implements vscode.WebviewViewProvider {
  private _view?: vscode.WebviewView;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;

    webviewView.webview.options = {
      enableScripts: true,
    };

    webviewView.webview.html = this.getHtmlForWebview(webviewView.webview);

    webviewView.webview.onDidReceiveMessage(async message => {
      switch (message.command) {
        case 'buttonClick':
          vscode.window.showInformationMessage('Running git branch in the background...');
          runInstallCommand();
          break;
        default:
          console.error(`Unknown command: ${message.command}`);
      }
    });
  }

  private getHtmlForWebview(webview: vscode.Webview): string {
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'dist', 'webview.js')
    );

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>GuideDog Sidebar</title>
      </head>
      <body>
          <div id="root"></div>
          <script src="${scriptUri}"></script>
      </body>
      </html>
    `;
  }
}

function runInstallCommand() {
  exec('npm install guidedog', (error, stdout, stderr) => {
    if (error) {
      vscode.window.showErrorMessage(`Error installing GuideDog you need NPM: ${error.message}`);
      return;
    }
    if (stderr) {
      vscode.window.showErrorMessage(`Install stderr: ${stderr}`);
      return;
    }
    vscode.window.showInformationMessage(`Installed Successfully:\n${stdout}`);
  });
}

export function deactivate() {}
