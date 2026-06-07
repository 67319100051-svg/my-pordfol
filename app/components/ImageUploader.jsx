"use client";

import { useState } from "react";

export default function ImageUploader({ avatar = false }) {
    const [preview, setPreview] = useState(null);

    const onChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) {
            setPreview(null);
            return;
        }
        const reader = new FileReader();
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(file);
    };

    const labelText = avatar ? "เปลี่ยนรูป" : "เลือกรูปภาพ";

    return (
        <div className={"mt-4 flex flex-col items-center " + (avatar ? "text-white" : "text-black")}>
            {avatar ? (
                preview ? (
                    <img
                        src={preview}
                        alt="avatar-preview"
                        className="mb-4 w-24 h-24 object-cover rounded-full shadow"
                    />
                ) : (
                    <div className="mb-4 w-24 h-24 rounded-full bg-white/80 flex items-center justify-center text-4xl text-black">
                        🧑
                    </div>
                )
            ) : (
                preview && (
                    <img
                        src={preview}
                        alt="preview"
                        className="mb-4 w-64 h-64 object-cover rounded shadow"
                    />
                )
            )}
            <label className={"bg-white/90 text-black text-lg px-4 py-2 rounded cursor-pointer"}>
                {labelText}
                <input type="file" accept="image/*" onChange={onChange} className="hidden" />
            </label>
        </div>
    );
}
