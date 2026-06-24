import { TextInputPanel } from "@/features/dashboard/components/text-input-panel";

export const TextToSpeechView = () => {
  return (
    <div className="flex min-h-0 overflow-hidden">
      <div className="flex min-h-0 flex-col">
        <TextInputPanel />
        {/* <VoicePreviewPlaceholder/> */}
      </div>
      {/* <SettingsPanel/> */}
    </div>
  );
};
