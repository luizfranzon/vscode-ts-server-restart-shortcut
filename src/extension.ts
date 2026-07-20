import * as vscode from "vscode";

const RESTART_TIMEOUT_MS = 5000;

export function activate(context: vscode.ExtensionContext) {
  const outputChannel = vscode.window.createOutputChannel("TS Server Restart Shortcut", {
    log: true,
  });

  const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.command = "vscode-ts-server-restart-shortcut.restartTsServer";
  statusBarItem.tooltip = "Restart TS Server";
  statusBarItem.text = "$(refresh) TS Server";
  statusBarItem.show();

  let restarting = false;

  const disposable = vscode.commands.registerCommand(
    "vscode-ts-server-restart-shortcut.restartTsServer",
    async () => {
      if (restarting) {
        outputChannel.warn("Restart already in progress, ignoring click.");
        return;
      }

      restarting = true;
      statusBarItem.text = "$(sync~spin) Restarting TS Server...";
      outputChannel.info("Restarting TS Server...");

      try {
        const timedOut = await Promise.race([
          vscode.commands.executeCommand("typescript.restartTsServer").then(() => false),
          new Promise((resolve) => setTimeout(() => resolve(true), RESTART_TIMEOUT_MS)),
        ]);

        if (timedOut) {
          outputChannel.warn(`TS Server restart did not confirm completion within ${RESTART_TIMEOUT_MS}ms.`);
        } else {
          outputChannel.info("TS Server restarted successfully.");
        }
      } catch (error) {
        outputChannel.error(`Failed to restart TS Server: ${error}`);
      } finally {
        restarting = false;
        statusBarItem.text = "$(refresh) TS Server";
      }
    },
  );

  context.subscriptions.push(disposable, statusBarItem, outputChannel);
}

export function deactivate() {}
