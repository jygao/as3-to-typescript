class AoqiH5PreHandle {

    public constructor(){
    }
    public handle(content:string):string{
        content = content.replace("/\r\n/g","\n");
        content = content.replace(/trace\s*\(/g, "console.log(");
        content = content.replace(/\bNewDialogWithCallback\b/g, "NewDialog");
        content = content.replace(/\bProgressFullSprite\b/g, "Loading");
        content = content.replace(/\bLocalStore\b/g, "LocalCache");
        content = content.replace(/\bISceneCommand\b/g, "ICommand");
        content = content.replace(/\bSceneCommandEvent\b/g, "CommandEvent");
        content = content.replace(/\bSceneSimpleCommand\b/g, "SimpleCommand");
        content = content.replace(/\bSceneMacroCommand\b/g, "MacroCommand");
        content = content.replace(/\bCommonDialogBase\b/g, "DialogBase");
        content = content.replace(/\bCommonPanelBase\b/g, "DialogBase");
        content = content.replace(/\bInteractDialogBase\b/g, "DialogBase");
        content = content.replace(/ModalDialogManager.getInstance\(\)/g, "DialogManager.instance");
        content = content.replace(/ModalDialog/g, "Dialog");
        content = content.replace(/NewActivity/g, "Activity");
        content = content.replace(/clearFiltersWithTips/g, "clearFilters");
        content = content.replace(/applyGrayWithTips/g, "applyGray");
        return content;
    }
}

export = AoqiH5PreHandle;