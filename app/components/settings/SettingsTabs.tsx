"use client";

import { useState } from 'react';
import PrivacySettings from './tabs/PrivacySettings';
import NotificationSettings from './tabs/NotificationSettings';
import SecuritySettings from './tabs/SecuritySettings';
import ChatSafetyTips from './tabs/ChatSafetyTips';

const tabs = [
  { id: 'privacy', label: 'Privacy' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'security', label: 'Security' },
  { id: 'safety', label: 'Chat Safety' }
];

export default function SettingsTabs() {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        {activeTab === 'privacy' && <PrivacySettings />}
        {activeTab === 'notifications' && <NotificationSettings />}
        {activeTab === 'security' && <SecuritySettings />}
        {activeTab === 'safety' && <ChatSafetyTips />}
      </div>
    </div>
  );
}