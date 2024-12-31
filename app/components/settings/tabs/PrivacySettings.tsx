"use client";

export default function PrivacySettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">Privacy Settings</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Profile Visibility</h3>
            <p className="text-sm text-gray-500">Control who can see your profile</p>
          </div>
          <select className="rounded-md border border-gray-300 px-3 py-2">
            <option>Everyone</option>
            <option>Registered Users</option>
            <option>Only Me</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Contact Information</h3>
            <p className="text-sm text-gray-500">Show contact info to other users</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}