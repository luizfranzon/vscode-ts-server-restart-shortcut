import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand(
		'vscode-ts-server-restart-shortcut.restartTsServer',
		() => vscode.commands.executeCommand('typescript.restartTsServer')
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}
