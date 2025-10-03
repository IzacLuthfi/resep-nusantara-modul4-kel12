// src/pages/ProfilePage.jsx
import { useState } from "react";
import { User, Mail, Phone, Settings, Calendar } from "lucide-react";

// Import foto profil lokal
import FotoProfil from "../assets/FotoProfil.png";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="p-4 md:p-8 pb-20 md:pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 md:p-10 shadow-xl text-white">
          <img
            src={FotoProfil}
            alt="Profile"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <div className="mt-4 md:mt-0 md:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold">Raka Setiawan</h1>
            <p className="text-white/80">UI/UX Designer • Frontend Enthusiast</p>
            <div className="flex gap-6 mt-4">
              <div className="text-center">
                <p className="text-xl font-bold">120</p>
                <p className="text-sm text-white/80">Postingan</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">3.5K</p>
                <p className="text-sm text-white/80">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">980</p>
                <p className="text-sm text-white/80">Following</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex border-b border-gray-200">
          {["info", "aktivitas", "pengaturan"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium capitalize transition ${
                activeTab === tab
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Konten */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          {activeTab === "info" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <User className="text-indigo-500" />
                <p className="text-gray-700">
                  Nama: <span className="font-medium">Raka Setiawan</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-indigo-500" />
                <p className="text-gray-700">
                  Email: <span className="font-medium">raka@mail.com</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-indigo-500" />
                <p className="text-gray-700">
                  Telepon: <span className="font-medium">+62 812 3456 7890</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-indigo-500" />
                <p className="text-gray-700">
                  Bergabung: <span className="font-medium">Jan 2023</span>
                </p>
              </div>
            </div>
          )}

          {activeTab === "aktivitas" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Aktivitas Terbaru</h2>
              <ul className="space-y-3 text-gray-700">
                <li>✅ Mengupdate foto profil</li>
                <li>💬 Membuat postingan baru: "Tips desain responsif"</li>
                <li>👍 Memberi like pada postingan "Belajar React Hooks"</li>
              </ul>
            </div>
          )}

          {activeTab === "pengaturan" && (
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Settings className="text-indigo-500" /> Pengaturan Akun
              </h2>
              <p className="text-gray-600">
                Fitur pengaturan akun akan ditambahkan di sini...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
