import ToggleSwitch from "../../components/ToggleSwitch"
import { useCallback, useEffect, useState } from "react"
import { Form } from "../../types/Form"
import { useRecoilState } from "recoil"
import { adminFormAtom } from "."
import classNames from "classnames"
import { omit } from "lodash"

export type SettingsType = "acceptingResponses" | "accessGateNft" | "accessGateContract" | "accessGateTwitter" | "accessGateFind" | "uniqueTwitterResponses" | "uniqueWalletResponses"

function Settings() {
  const [form, setForm] = useRecoilState(adminFormAtom);

  const settings = form && form?.metadata && form?.metadata["settings"] ? form?.metadata["settings"] : {};

  const handleChangeSettings = useCallback((key: SettingsType | "remove", value: string) => {
    const metadata = form?.metadata ?? {}
    let settingsPageMetadata = metadata["settings"] ? metadata["settings"] : {}
    if (key == "remove") {
      settingsPageMetadata = omit(settingsPageMetadata, value)
    } else {
      settingsPageMetadata = {...settingsPageMetadata, [key]: value}
    }

    const updatedMetadata = {...metadata, "settings": {...settingsPageMetadata}}
    console.log(updatedMetadata)
    setForm((o) => ({ ...o, metadata: updatedMetadata, id: o!.id }))
  }, [form])
  console.log(form)
  return (
    <>
      <div className="flex flex-col font-mono items-center rounded-lg p-10 min-h-[80%] gap-2 m-auto border-[1px] border-black lg:w-1/2 w-5/6 bg-white">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-medium text-3xl my-4">Settings</h2>
          {/* <button className="bg-black hover:bg-gray-900 text-white font-bold h-fit py-2 px-4 rounded-md">
            Save
          </button> */}
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
  settings: Record<SettingsType, string>,
  onChange: (key: SettingsType | "remove", value: any) => void
}

function GeneralSettings({ settings, onChange }: SubSettingsType) {
  const handleChangeSettings = (key: SettingsType) => {
    if (settings[key] == "false" || settings[key] == undefined) {
      onChange(key, "true")
    } else {
      onChange("remove", key)
    }
  }
  console.log(settings)
  console.log(settings && settings["acceptingResponses"] == "true")
  return (
    <>
      <div className="flex flex-col justify-start gap-8">
        <h4 className="font-medium text-xl self-start">General</h4>
        <div className="flex justify-between">
          <p>Accepting Responses</p>
          <ToggleSwitch id="acceptingResponses" label={null} checked={settings && settings?.acceptingResponses === "true"} onChange={() => handleChangeSettings("acceptingResponses")} />
        </div>
        {/* <div className="flex justify-between">
          <p>Re-Captcha</p>
          <ToggleSwitch id="captchaEnabled" label={null} checked={settings.captchaEnabled} onChange={() => onChange("captchaEnabled", !settings.captchaEnabled)} />
        </div> */}
      </div>
    </>
  )
}

function SpamSettings({ settings, onChange }: SubSettingsType) {
  const handleChangeSettings = (key: SettingsType) => {
    if (settings[key] == "false" || settings[key] == undefined) {
      onChange(key, "true")
    } else {
      onChange("remove", key)
    }
  }

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
            checked={settings.uniqueTwitterResponses == "true"}
            onChange={() =>
              handleChangeSettings(
                "uniqueTwitterResponses"
              )
            }
          />
        </div>
        <div className="flex justify-between">
          <p>Unique Wallet Address</p>
          <ToggleSwitch
            id={"uniquieWalletResponses"}
            label={null}
            checked={settings.uniqueWalletResponses == "true"} // Update the prop name here
            onChange={() =>
              handleChangeSettings(
                "uniqueWalletResponses" // Update the key name here
              )
            }
          />
        </div>
      </div>
    </>
  );
}



function AccessGates({ settings, onChange }: SubSettingsType) {
  const [checkedNFT, setCheckedNft] = useState(settings && !!settings["accessGateNft"])
  const [nftAddress, setNftAddress] = useState(settings && settings["accessGateNft"])

  const handleChange = useCallback((key: SettingsType) => {
    let value = settings[key];
    if (value) {
      onChange("remove", key)
    }
  }, [settings])

  const handleChangeSettings = (key: SettingsType) => {
    if (settings[key] == "false" || settings[key] == undefined) {
      onChange(key, "true")
    } else {
      handleChange(key)
    }
  }

  return (
    <>
      <div className="flex flex-col justify-start gap-8">
        <h4 className="font-medium text-xl self-start">Access Gates<span className="text-xs font-light"> (Requires sign-in)</span></h4>
        <div className="flex justify-between">
          <p>NFT Ownership</p>
          <ToggleSwitch id="accessGateNFt" label={null} checked={checkedNFT} onChange={() => {setCheckedNft(!checkedNFT); handleChange("accessGateNft")}} />
        </div>
        {
          checkedNFT && 
          <div className="flex justify-between">
            <input required type="text" placeholder="NFT Collection Public Path" value={nftAddress ?? ""} onChange={(e) => setNftAddress(e.target.value)} className="border-[1px] border-black focus:outline-none rounded-md p-2 w-2/3" />
            <button disabled={nftAddress == undefined || nftAddress == ""} onClick={() => onChange("accessGateNft", nftAddress)} className={classNames("bg-black hover:bg-gray-900 text-white font-bold h-fit py-2 px-4 rounded-md", {"cursor-not-allowed bg-slate-700": (nftAddress == undefined || nftAddress == "")})}>
              Save
            </button>
          </div>
        }
        <div className="flex justify-between">
          <p>Deployed Contract</p>
          <ToggleSwitch id="accessGateContract" label={null} checked={settings.accessGateContract == "true"} onChange={() => {handleChangeSettings("accessGateContract")}} />
        </div>
        <div className="flex justify-between">
          <p><b>.find</b> Profile Ownership</p>
          <ToggleSwitch id="accessGateFind" label={null} checked={settings.accessGateFind == "true"} onChange={() => {handleChangeSettings("accessGateFind")}} />
        </div>
        <div className="flex justify-between">
          <p>Follow Twitter Account</p>
          <ToggleSwitch id="accessGateTwitter" label={null} checked={!!settings.accessGateTwitter} onChange={() => handleChange("accessGateTwitter")} />
        </div>
        {
          !!settings.accessGateTwitter && <div className="flex justify-between">
            <input type="text" placeholder="Twitter username" className="border-[1px] border-black rounded-md p-2 w-[200px]" />
            <button className="bg-black hover:bg-gray-900 text-white font-bold h-fit py-2 px-4 rounded-md">
              Save
            </button>
          </div>
        }
      </div>
    </>
  )
}

export default Settings