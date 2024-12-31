import Header from '../components/Header';
import Footer from '../components/Footer';
import SignupForm from '../components/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Join PetOnx as a buyer or seller
            </p>
          </div>
          <SignupForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}