import Hero from "./components/Hero";
export default function Home() {
    const name = "หัสสโชติ พลับนิ่ม";

    return (
        <main className="space-y-12 pt-0">
            <Hero />

            <div className="flex items-start justify-center bg-gradient-to-br from-green-300 to-teal-600 pt-6">
                <div className="text-center text-white px-6">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbQDsJSDM6pJE42oKSt3AJoHx99a55fnVOw&s"
                        alt="Profile"
                        className="mx-auto mb-6 h-40 w-40 rounded-full border-4 border-white object-cover"
                    />
                    <h1 className="text-6xl font-bold mb-4">สวัสดี ผมชื่อ {name}</h1>
                    <p className="text-xl">Web Developer · Bangkok</p>

                    <div className="mt-8 flex justify-center gap-4">
                        <button className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-indigo-100 transition">Projects</button>
                        <button className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white/20 transition">Contact</button>
                    </div>
                </div>
            </div>

            <section className="px-8 py-10">
                <h2 className="text-3xl font-semibold mb-3">ทักษะ</h2>
                <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Tailwind'].map((s) => (
                        <span key={s} className="px-3 py-1 bg-slate-100 rounded text-sm">{s}</span>
                    ))}
                </div>
            </section>

            <section className="px-8 py-10">
                <h2 className="text-3xl font-semibold mb-3">เกี่ยวกับฉัน</h2>
                <p>นักศึกษาวิทยาลัยพิชยการธนบุรี</p>
            </section>

            <section className="px-8 py-10">
                <h2 className="text-3xl font-semibold mb-3">ผลงาน</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <article className="p-4 border rounded-md">
                        <h3 className="font-semibold">Portfolio</h3>
                        <p className="text-sm text-slate-600">เว็บไซต์แสดงผลงานส่วนตัว</p>
                    </article>
                </div>
            </section>
        </main>
    )
}
