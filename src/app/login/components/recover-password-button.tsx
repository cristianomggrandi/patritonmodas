"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { IoWarningOutline } from "react-icons/io5"
import { MdOutlineErrorOutline } from "react-icons/md"
import { InfoType } from "../page"

const InfoIcon = (prosp: { info: InfoType }) => {
    if (prosp.info.status === "success")
        return <IoMdInformationCircleOutline className="inline left text-4xl color-primary p-1" />
    if (prosp.info.status === "warning")
        return <IoWarningOutline className="inline left text-4xl color-primary p-1" />
    if (prosp.info.status === "error")
        return <MdOutlineErrorOutline className="inline left text-4xl color-primary p-1" />
}

export default function RecoverPassword(props: {
    recoverPassword: (email: string) => Promise<InfoType>
}) {
    const [disabled, setDisabled] = useState(false)
    const [info, setInfo] = useState<InfoType>({
        message: "",
        status: undefined,
    })

    const infoBgColor = info.status
        ? info.status === "success"
            ? "bg-success"
            : info.status === "warning"
              ? "bg-warning"
              : "bg-error"
        : ""

    const handleRecoverPassword = async () => {
        setDisabled(true)

        const email = (document.getElementById("login-email") as HTMLInputElement).value

        const newInfo = await props.recoverPassword(email)

        setInfo(newInfo)
        setDisabled(false)
    }

    return (
        <div className="text-right -mt-2">
            <button
                type="button"
                onClick={handleRecoverPassword}
                className="text-xs text-primary underline decoration-primary"
                disabled={disabled}
            >
                Recuperar senha
            </button>
            {info.message ? (
                <div
                    className={`flex mt-2 justify-between items-center rounded outline outline-1 ${infoBgColor}`}
                >
                    <InfoIcon info={info} />
                    <span className="flex-1 text-center text-sm">{info.message}</span>
                </div>
            ) : null}
        </div>
    )
}
