import ToggleSwitch from "../../components/ToggleSwitch"
import { useState } from "react"

export type SettingsType = {
    acceptingResponses: boolean,
    captchaEnabled: boolean,
    uniqueTwitterResponses: boolean,
    uniquieWalletResponses: boolean,
    accessGateNft?: {
        address: string,
        tokenId: string
    },
    accessGateTwitter?: {
        username: string
    }
}

export const DefaultSettings = {
        acceptingResponses: true,
        captchaEnabled: false,
        uniqueTwitterResponses: false,
        uniquieWalletResponses: false,
        accessGateNft: {
            address: '',
            tokenId: ''
        },
        accessGateTwitter: {
            username: ''
        }
}

function Settings() {
    const [settings, setSettings] = useState<SettingsType>(DefaultSettings);

    const handleChangeSettings = (key: string, value: any) => {
        const updatedSettings = {...settings, [key]: value}
        console.log(key, value)
        console.log(updatedSettings)

        setSettings(updatedSettings)
    }

  return (
    <>
        <div className="flex flex-col items-center rounded-lg p-10 min-h-[80%] gap-2 m-auto border-[1px] border-black lg:w-1/2 w-5/6 bg-white">
            <div className="flex justify-between items-center w-full">
                <h2 className="font-medium text-3xl my-4">Settings</h2>
                <button className="bg-black hover:bg-gray-900 text-white font-bold h-fit py-2 px-4 rounded-md">
                    Save
                </button>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col w-full gap-20 py-6">
                <GeneralSettings settings={settings} onChange={handleChangeSettings} />
                <SpamSettings settings={settings} onChange={handleChangeSettings} />
                <AccessGates settings={settings} onChange={handleChangeSettings} />
            </div>
        </div>
    </>
  )
}

type SubSettingsType = {
    settings: SettingsType,
    onChange: (key: string, value: any) => void
}

function GeneralSettings ({settings, onChange}: SubSettingsType) {
    const handleChangeSettings = (key: keyof SettingsType) => {
        onChange(key, !settings[key])
    }

    return (
        <>
            <div className="flex flex-col justify-start gap-8">
                <h4 className="font-medium text-xl self-start">General</h4>
                <div className="flex justify-between">
                    <p>Accepting Responses</p>
                    <ToggleSwitch id="acceptingResponses" label={null} checked={settings.acceptingResponses} onChange={() => handleChangeSettings("acceptingResponses")}/>
                </div>
                <div className="flex justify-between">
                    <p>Re-Captcha</p>
                    <ToggleSwitch id="captchaEnabled" label={null} checked={settings.captchaEnabled} onChange={() => onChange("captchaEnabled", !settings.captchaEnabled)}/>
                </div>
            </div>
        </>
    )
}

function SpamSettings({ settings, onChange }: SubSettingsType) {
    const handleChangeSettings = (key: string, value: any) => {
      onChange(key, value);
    };
  
    return (
      <>
        <div className="flex flex-col justify-start gap-8">
          <h4 className="font-medium text-xl self-start">
            Prevent spam submissions
            <span className="text-xs font-light"> (Requires sign-in)</span>
          </h4>
          <div className="flex justify-between">
            <p>Unique Twitter handle</p>
            <ToggleSwitch
              id={"uniqueTwitterResponses"}
              label={null}
              checked={settings.uniqueTwitterResponses}
              onChange={() =>
                onChange(
                  "uniqueTwitterResponses",
                  !settings.uniqueTwitterResponses
                )
              }
            />
          </div>
          <div className="flex justify-between">
            <p>Unique Wallet Address</p>
            <ToggleSwitch
                id={"uniquieWalletResponses"}
              label={null}
              checked={settings.uniquieWalletResponses} // Update the prop name here
              onChange={() =>
                handleChangeSettings(
                  "uniquieWalletResponses", // Update the key name here
                  !settings.uniquieWalletResponses
                )
              }
            />
          </div>
        </div>
      </>
    );
  }
  
  

function AccessGates({settings, onChange}: SubSettingsType) {
    return (
        <>
            <div className="flex flex-col justify-start gap-8">
                <h4 className="font-medium text-xl self-start">Access Gates<span className="text-xs font-light"> (Requires sign-in)</span></h4>
                <div className="flex justify-between">
                    <p>NFT Ownership</p>
                    <ToggleSwitch id="accessGateNFt" label={null} checked={!!settings.accessGateNft} onChange={() => onChange("accessGateNft", !settings.accessGateNft)}/>
                </div>
                <div className="flex justify-between">
                    <p>Follow twitter account</p>
                    <ToggleSwitch id="AccessGateTwitter" label={null} checked={true} onChange={() => {}}/>
                </div>
            </div>
        </>
    )
}

export default Settings