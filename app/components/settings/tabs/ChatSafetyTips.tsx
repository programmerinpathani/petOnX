export default function ChatSafetyTips() {
  const safetyTips = [
    {
      title: "Keep Personal Information Private",
      description: "Never share sensitive personal information like your address, financial details, or identification numbers."
    },
    {
      title: "Meet in Safe Places",
      description: "When meeting someone, choose public locations and bring a friend. Consider meeting at a local police station or pet clinic."
    },
    {
      title: "Verify Identity",
      description: "Ask for proper documentation and verify the seller's identity before making any transactions."
    },
    {
      title: "Use Secure Payment Methods",
      description: "Avoid cash transactions when possible. Use secure, traceable payment methods provided by the platform."
    },
    {
      title: "Trust Your Instincts",
      description: "If something feels wrong or too good to be true, it probably is. Don't hesitate to report suspicious behavior."
    },
    {
      title: "Keep Communication on Platform",
      description: "Use our built-in messaging system. This helps us protect you and maintain a record of communications."
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">Chat Safety Tips</h2>
      
      <div className="grid gap-6">
        {safetyTips.map((tip, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-2">{tip.title}</h3>
            <p className="text-sm text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-sm font-medium text-blue-800 mb-2">Need Help?</h3>
        <p className="text-sm text-blue-600">
          If you encounter any issues or suspicious behavior, please contact our support team immediately.
        </p>
      </div>
    </div>
  );
}