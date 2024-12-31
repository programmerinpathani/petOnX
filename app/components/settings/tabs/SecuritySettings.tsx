"use client";

export default function SecuritySettings() {
  const handleLogoutAllDevices = () => {
    // Implement logout from all devices
    console.log('Logging out from all devices');
  };

  const handleDeleteAccount = () => {
    // Implement account deletion
    console.log('Deleting account');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Change Password</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Current Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-gray-700">New Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Confirm New Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Update Password
            </button>
          </form>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Session Management</h3>
          <button
            onClick={handleLogoutAllDevices}
            className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
          >
            Logout from all devices
          </button>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Delete Account</h3>
          <p className="text-sm text-gray-500 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button
            onClick={handleDeleteAccount}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}