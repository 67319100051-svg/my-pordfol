export default function Home() {
    const name = "หัสสโชติ พลับนิ่ม";

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 to-teal-600">
            <div className="text-center text-white">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbQDsJSDM6pJE42oKSt3AJoHx99a55fnVOw&s"
                    alt="Profile"
                    className="mx-auto mb-6 h-40 w-40 rounded-full border-4 border-white object-cover"
                />
                <h1 className="text-6xl font-bold mb-4">
                    สวัสดี ผมชื่อ {name}
                </h1>
                <p className="text-xl">Web Developer · Bangkok</p>

                {/* 2 ปุ่ม */}
                <div className="mt-8 flex justify-center gap-4">
                    {/* ปุ่ม Projects และ Contact */}
                    <button className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-indigo-100 transition">
                        Projects
                    </button>
                    <button className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white/20 transition">
                        Contact
                    </button>
                </div>
            </div>
        </main>
    );
}
